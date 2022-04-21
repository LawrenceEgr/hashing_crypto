const { createHmac } = require('crypto');

const secret = 'abcdefg';

const hash = createHmac('sha256' , secret)
               .update('I love Pancakes')
               .digest('hex');

console.log(hash);