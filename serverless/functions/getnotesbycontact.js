const TokenValidator = require('twilio-flex-token-validator').functionValidator;
const Airtable = require('airtable');


exports.handler = TokenValidator(function(context, event, callback) {
    const client = context.getTwilioClient();

    const response = new Twilio.Response();
    response.appendHeader('Access-Control-Allow-Origin', '*');
    response.appendHeader('Access-Control-Allow-Methods', 'OPTIONS POST GET');
    response.appendHeader('Access-Control-Allow-Headers', 'Content-Type');

    var base = new Airtable({apiKey: context.AIRTABLE_KEY}).base(context.AIRTABLE_BASE);

    try {        
        base('Notes').find(event.note, function(err, record) {
            if (err) { console.error(err); return; }
            response.body = record;
            console.log(record);
            callback(null, response);
        });
    } catch (error) {
        response.body = error;
        callback(response);
    }

});