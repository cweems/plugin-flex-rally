const TokenValidator = require('twilio-flex-token-validator').functionValidator;
const Airtable = require('airtable');


exports.handler = TokenValidator(function(context, event, callback) {
  const client = context.getTwilioClient();

  const response = new Twilio.Response();
  response.appendHeader('Access-Control-Allow-Origin', '*');
  response.appendHeader('Access-Control-Allow-Methods', 'OPTIONS POST GET');
  response.appendHeader('Access-Control-Allow-Headers', 'Content-Type');

  var base = new Airtable({apiKey: context.AIRTABLE_KEY}).base(context.AIRTABLE_BASE);
  var contacts = [];

  base('Contacts').select({
      // Selecting the first 3 records in Grid view:
      maxRecords: 3,
      view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.

      records.forEach(function(record) {
          console.log('Retrieved', record.get('Phone'));
          contacts.push(record);
      });

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();

  }, function done(err) {
        if (err) {
            response.body = err;
            console.error(err);
            callback(response);
        }

        response.body = contacts;
        callback(null, response);
  });

});
