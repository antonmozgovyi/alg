const fs = require('fs')

function readIntegerFile(name) {
  const data = fs.readFileSync(name, { encoding: 'utf-8'})

  return data.split('\n').filter(item => item).map((item) => (+item))
}

module.exports = {
  readIntegerFile
}
