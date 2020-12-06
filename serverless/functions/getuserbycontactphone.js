const Airtable = require('airtable');

exports.handler = function(context, event, callback) {

  console.log('Running function');

  const response = new Twilio.Response();
  response.appendHeader('Access-Control-Allow-Origin', '*');
  response.appendHeader('Access-Control-Allow-Methods', 'OPTIONS POST GET');
  response.appendHeader('Access-Control-Allow-Headers', 'Content-Type');
  response.appendHeader('Content-Type', 'application/json')
  response.body = null;

  var base = new Airtable({apiKey: context.AIRTABLE_KEY}).base(context.AIRTABLE_BASE);
  var contacts = [];

  // Strip whitespace and 1 that results
  // from e.164 formatted phone number
  let phone = event.phone;
  const cleanedPhone = phone.replace(/^\+1/g, "");

  console.log(event.phone, cleanedPhone);

  base('Contacts').select({
      maxRecords: 1,
      view: "Grid view",
      fields: ["Username (from Agent)"],
      filterByFormula: `FIND(${cleanedPhone}, {ID})`
  }).eachPage(function page(records, fetchNextPage) {
      records.forEach(function(record) {
          contacts.push(record);
      });

      fetchNextPage();

  }, function done(err) {
        if (err) {
            response.body = err;
            console.log(err);
            callback(response);
        }

        if(contacts.length > 0) {
            let agentUsername = contacts[0]['_rawJson']['fields']['Username (from Agent)'][0];
            let recordId = contacts[0]['id'];

            response.body = {
                agentUsername: agentUsername,
                recordId: recordId
            }
            callback(null, response);
        } else {
            console.log('no result: ', response);
            callback(null, response);
        }

    });
};
