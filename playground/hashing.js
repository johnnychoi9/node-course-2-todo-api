//blockchain!!!!!!!
const {SHA256} = require('crpto-js');
const jwt = require('jsonwebtoken');

let data = {
  id: 10
};
let token = jwt.sign(data, '123abc');
console.log(token);

let decoded = jwt.verify(data, '123abc');
console.log('decoded', decoded);

let message = 'I am user number 3';
let hash = SHA256(message).toString();

cnosole.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);

let data = {
  id: 4
}
let token = {
  data,
  hash: SHA256(JSON.stringify(data) + 'some secret').toString();
}

let resultHash = SHA256(JSON.stringify(token.data) + 'some secret').toString();

if (resultHash === token.hash) {
  console.log(' Data was not changed! ');
} else {
  console.log(' o dang byebye bitcoins');
}
