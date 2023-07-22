module.exports = require('./dist/index.js')
const test = require('./dist/index.js')
for (let i = 1; i <= test.getVerseCount(1); i++) {
    const verse = test.getVerse(1,i);
    console.log(verse)
}
