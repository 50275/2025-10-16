const sculptureList = require('./data.js'); // import data.js
let sculptureListLengths = sculptureList.map(i => { 
    return Object.entries(i).map(([key, val]) => ({key: key, length: val.length})); 
});
// console.log(sculptureListLengths);
