import * as jose from 'jose';

const jwt = process.argv[3];
const secret = jose.base64url.decode(process.argv[2]);

async function decryptJwt() {
  try {
    const { payload, protectedHeader } = await jose.jwtDecrypt(jwt, secret);
    console.log('protectedHeader: ', protectedHeader);
    console.log('payload: ',payload);
  } catch(e) {
    console.error(e)
  }
}

decryptJwt();

// node index.js 'secret' 'JWT'
// https://github.com/panva/jose/blob/main/docs/functions/jwt_decrypt.jwtDecrypt.md