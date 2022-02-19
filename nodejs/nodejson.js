const {readFileSync, read, readFile} = require('fs')
var loadjson = ()=>JSON.parse(readFileSync('feed.json'))
var data = readFileSync('feed.json')
console.log(JSON.parse(data)['roaster'][0])
module.exports = {loadjson};