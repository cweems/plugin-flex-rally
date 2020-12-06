const TokenValidator = require('twilio-flex-token-validator').functionValidator;

exports.handler = TokenValidator(function(context, event, callback) {
    const accountSid = context.ACCOUNT_SID;
    const authToken = context.AUTH_TOKEN;
    const client = require('twilio')(accountSid, authToken);

    const response = new Twilio.Response();
    response.appendHeader('Access-Control-Allow-Origin', '*');
    response.appendHeader('Access-Control-Allow-Methods', 'OPTIONS POST GET');
    response.appendHeader('Access-Control-Allow-Headers', 'Content-Type');


    function createChannel() {
        return new Promise((resolve, reject) => {
            client.flexApi.channel
                .create({
                    target: event.to,
                    taskAttributes: JSON.stringify({
                        to: event.to,
                        direction: 'outbound',
                        name: event.to,
                        from: context.FLEX_OUTBOUND_NUMBER,
                        targetWorker: event.contact_uri,
                        autoAnswer: 'true'
                    }),
                    identity: `sms_${event.to}`,
                    chatFriendlyName: `Outbound Chat with ${event.to}`,
                    flexFlowSid: context.FLEX_FLOW_SID,
                    chatUserFriendlyName: event.to
                })
                .then(channel => {
                    console.log(`Created channel: ${channel.sid}`);
                    resolve(channel.sid);
                }).catch((error) => {
                    console.log(error);
                    reject(error);
                }) 
        });
    }

    function randomAlphaNum() {
        const chars = '0123456789abcdefghijklmnopqrstuvwxyz';
        let result = '';

        for(let i = 10; i > 0; i--) {
            result += chars[Math.floor(Math.random() * chars.length)];
        }

        return result;
    }

    function createProxySession(channelSid) {
        return new Promise((resolve, reject) => {
            const tenDigitRandom = randomAlphaNum();
            console.log(randomAlphaNum);
            client.proxy.services(context.PROXY_SERVICE_SID)
                .sessions
                .create({
                    uniqueName: `${channelSid}.${tenDigitRandom}`,
                    mode: 'message-only',
                    participants: [{'Identifier': event.to, 'ProxyIdentifier': context.FLEX_OUTBOUND_NUMBER}]
                })
                .then(session => {
                    console.log(`Created proxy session: ${session.sid}`)
                    resolve({sessionSid: session.sid, channelSid: channelSid})
                })
                .catch(error => {
                    console.log(error);
                    reject(error)
                })
        });
    }

    function addAgentToProxySession(proxy) {
        return new Promise((resolve, reject) => {

            client.proxy.services(context.PROXY_SERVICE_SID)
                .sessions(proxy.sessionSid)
                .participants
                .create({
                    proxyIdentifier: context.FLEX_OUTBOUND_NUMBER,
                    identifier: proxy.channelSid
                })
                .then(participant => {
                    console.log(`Created participant: ${participant.sid}`)
                    resolve(participant.sid)
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                });
        });
    }

    createChannel()
        .then(channelSid => createProxySession(channelSid))
        .then(proxy => addAgentToProxySession(proxy))
        .then(participant => {
            response.body = participant.sid;
            callback(null, response)
        })
        .catch((error) => {
            console.log(error);
            response.body = error;
            callback(error)
        })
    
});
