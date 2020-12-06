const TokenValidator = require('twilio-flex-token-validator').functionValidator;
const Airtable = require('airtable');


exports.handler = TokenValidator(function(context, event, callback) {

  const response = new Twilio.Response();
  response.appendHeader('Access-Control-Allow-Origin', '*');
  response.appendHeader('Access-Control-Allow-Methods', 'OPTIONS POST GET');
  response.appendHeader('Access-Control-Allow-Headers', 'Content-Type');

  var base = new Airtable({apiKey: context.AIRTABLE_KEY}).base(context.AIRTABLE_BASE);
  var contacts = [];

  base('Contacts').select({
      maxRecords: 3,
      view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {
      records.forEach(function(record) {
          contacts.push(record);
      });

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
