const sculptureList = require('./data.js'); // import data.js
let out = sculptureList.map(i => { 
    return Object.entries(i).map(([key, val]) => ({key: key, length: val.length})); 
});
console.log(out);

// console.log(require('./data.js').map(i => { return Object.entries(i).map(([key, val]) => ({key: key, length: val.length}));}));
