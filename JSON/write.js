const fs = require('node:fs');
binary_data = [ //from stringify.js
  { name: "kevin", age: 56 },
  { name: "kay", age: 59 }
];

freeze_dried = JSON.stringify(binary_data,undefined, 4); //from stringify.js
fs.writeFile('output.json', "demo", undefined, e=>console.log(e));