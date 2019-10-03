const rp = require('request-promise');
const config = require("../../config/config.json")
const token = require('../service/token');
const weixin = require('../service/weixin');
const { user } = require('../base/baseModel');


module.exports = {
    'POST /auth/loginByWeixin': async (ctx, next) => {
        const code = ctx.get('code');
        const fullUserInfo = ctx.get('userInfo');
        const userInfo = fullUserInfo.userInfo;
        const clientIp = ''; // 暂时不记录 ip

        // 获取openid
        const options = {
            method: 'GET',
            url: 'https://api.weixin.qq.com/sns/jscode2session',
            qs: {
                grant_type: 'authorization_code',
                js_code: code,
                secret: config.wechat.secret,
                appid: config.wechat.appid
            }
        };

        let sessionData = await rp(options);
        sessionData = JSON.parse(sessionData);
        if (!sessionData.openid) {
            return ctx.fail('登录失败');
        }

        // 验证用户信息完整性
        const crypto = require('crypto');
        const sha1 = crypto.createHash('sha1').update(fullUserInfo.rawData + sessionData.session_key).digest('hex');
        if (fullUserInfo.signature !== sha1) {
            return ctx.fail('登录失败');
        }

        // 解释用户数据
        const weixinUserInfo = await weixin.decryptUserInfoData(sessionData.session_key, fullUserInfo.encryptedData, fullUserInfo.iv);
        if (!weixinUserInfo) {
            return ctx.fail('登录失败');
        }

        // 根据openid查找用户是否已经注册
        let curUser = await user.findOne({ where: { weixin_openid: sessionData.openid } });
        if (!curUser) {
            // 注册
            curUser = await user.create({
                username: '微信用户',
                password: sessionData.openid,
                register_time: parseInt(new Date().getTime() / 1000),
                register_ip: clientIp,
                last_login_time: parseInt(new Date().getTime() / 1000),
                last_login_ip: clientIp,
                mobile: '',
                weixin_openid: sessionData.openid,
                avatar: userInfo.avatarUrl || '',
                gender: userInfo.gender || 1, // 性别 0：未知、1：男、2：女
                nickname: userInfo.nickName
            });
        }

        sessionData.user_id = curUser.id;

        // 查询用户信息
        const newUserInfo = await user.findOne({ where: { id: curUser.id }, attributes: ['id', 'username', 'nickname', 'gender', 'avatar', 'birthday'] });

        // 更新登录信息
        userId = await user.update(
            {
                last_login_time: parseInt(new Date().getTime() / 1000),
                last_login_ip: clientIp
            },
            { where: { id: curUser.id } })
        const sessionKey = await token.create(sessionData);

        if (!newUserInfo || !sessionKey) {
            return ctx.fail('登录失败');
        }

        return ctx.success({ token: sessionKey, userInfo: newUserInfo });
    },

    'GET /auth/logout': async (ctx, next) => {
        return ctx.success();
    }
};
