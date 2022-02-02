const Crypto = require('crypto');

// crypto module
const algorithm = 'aes-256-cbc';

// generate 16 bytes of random data
const initVector = Crypto.randomBytes(16);

// protected data
const message = 'This is a secret message';

// secret key generate 32 bytes of random data
const Securitykey = Crypto.randomBytes(32);

// the cipher function
const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);

// encrypt the message
// input encoding
// output encoding
let encryptedData = cipher.update(message, 'utf-8', 'hex');

encryptedData += cipher.final('hex');

console.log('Encrypted message: ' + encryptedData);

/////////////////////
const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);

let decryptedData = decipher.update(encryptedData, 'hex', 'utf-8');

decryptedData += decipher.final('utf8');

console.log('Decrypted message: ' + decryptedData);
