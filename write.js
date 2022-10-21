const fs = require ('fs');
const write = function () {
fs.writeFileSync('note.txt', "Hi");
}
module.exports = write ;