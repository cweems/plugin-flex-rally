const TokenValidator = require('twilio-flex-token-validator').functionValidator;
const Airtable = require('airtable');


exports.handler = TokenValidator(function(context, event, callback) {

  const response = new Twilio.Response();
  response.appendHeader('Access-Control-Allow-Origin', '*');
  response.appendHeader('Access-Control-Allow-Methods', 'OPTIONS POST GET');
  response.appendHeader('Access-Control-Allow-Headers', 'Content-Type');

  var base = new Airtable({apiKey: context.AIRTABLE_KEY}).base(context.AIRTABLE_BASE);

    base('Notes').create([
            {
                "fields": {
                    "Note": event.noteText,
                    "Title": event.noteTitle,
                    "Contact": [
                        event.contactId
                    ]
                }
            }
        ], function(err, records) {
            if (err) {
                console.error(err);
                return;
            }
            records.forEach(function (record) {
                console.log(record.getId());
                callback(null, record);
            });
        }
    );
});
