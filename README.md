# Flex Rally

Flex Rally is built to help organizers communicate 1:1 with constituents. Flex Rally empowers users with ad-hoc communication abilities as well as a lightweight Airtable contact database. Features:

-   Inbound and Outbound SMS conversations
-   Inbound and Outbound Voice calls
-   Lightweight contact and notes database powered by Airtable
-   Inbound calls routed by Airtable record ownership
-   New Contact form for unknown first-time inbounds
-   Screen-pop to existing record from Airtable with note-taking

_Contact List:_
![Screen Shot 2021-01-11 at 10 12 51 PM](https://user-images.githubusercontent.com/1418949/104277686-20443f00-545c-11eb-82a0-08abd2c8701a.png)

_New Contact Form:_
![Screen Shot 2021-01-11 at 10 16 36 PM](https://user-images.githubusercontent.com/1418949/104277536-dce9d080-545b-11eb-97da-b3d22834d5e5.png)

_Note Taking Form:_
![Screen Shot 2021-01-11 at 10 21 03 PM](https://user-images.githubusercontent.com/1418949/104277593-f8ed7200-545b-11eb-848c-c293bbc9f555.png)

## Setup

Make sure you have [Node.js](https://nodejs.org) as well as [`npm`](https://npmjs.com) installed.

Afterwards, install the dependencies by running `npm install`:

```bash
npm install
twilio flex:plugins:start
```

Then, start the Twilio Serverless back-end:

```bash
cd serverless
npm install

cp .env.example .env
# Add the credentials from your Twilio Account

twilio serverless:start --live -p 3001
```

## Deploy

When you are ready to deploy your plugin, in your terminal run:

```bash
npm run deploy
```

This will publish your plugin as a Private Asset that is accessible by the Functions & Assets API. If you want to deploy your plugin as a Public Asset, you may pass --public to your deploy command:

```bash
npm run deploy --public
```

For more details on deploying your plugin, refer to the [deploying your plugin guide](https://www.twilio.com/docs/flex/plugins#deploying-your-plugin).

Note: Common packages like `React`, `ReactDOM`, `Redux` and `ReactRedux` are not bundled with the build because they are treated as external dependencies so the plugin will depend on Flex to provide them globally.
