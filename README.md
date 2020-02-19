# auth-with-apple
NPM module for easy use "sign in with apple" using the NodeJS server.

## Install
```bash
$ npm i auth-with-apple
```

## Usage
```javascript
const appleAuth = require('auth-with-apple');

const key = fs.readFileSync("./AuthKey.p8").toString();
const swpParams = {
  authKey: key,
  team_id: 'team_id',
  key_identifier: 'key_identifier'
};

// Apple identity token you can get by your application
const appleData = appleAuth(apple_itentity_token, swpParams);
```

### Response example
```javascript
{ iss: 'https://appleid.apple.com',
  aud: 'com.application.app',
  exp: 1582100022,
  iat: 1582099422,
  sub: 'sub',
  c_hash: 'c_hash',
  email: 'useremail@somemail.com',
  email_verified: 'true',
  auth_time: 1582099422,
  nonce_supported: true }
```
