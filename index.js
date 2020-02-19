const jwt = require("jsonwebtoken");
exports.parseIdentityToken = function(identityToken, appleTokens = {}) {
  try {
    if (dataIsValid(appleTokens) === true) {
      let key = appleTokens.authKey.toString();
      const jwtToken = jwt.sign({}, key, {
        algorithm: "ES256",
        expiresIn: "180d",
        issuer: appleTokens.team_id,
        header: {
          alg: "ES256",
          kid: appleTokens.key_identifier
        }
      });
      const appleData = jwt.decode(identityToken, jwtToken, 'HS256');
      return appleData;
    } else {
      throw dataIsValid(appleTokens);
    }
  } catch (err) {
    console.log(err);
    return err;
  }
}
const dataIsValid = (data) => {
  let result = true;
  let keys = ['team_id', 'key_identifier', 'authKey'];
  keys.forEach(k => { !data[k] ? result = { ...result, [k]: "Not found" } : "" })
  return result;
}
