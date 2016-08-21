const fs = require('fs')

function readIntegerFile(name) {
  const data = fs.readFileSync(name, { encoding: 'utf-8'})

  return data.split('\n').filter(item => item).map((item) => (+item))
}

function readGraphFromFile(name) {
  return (
    fs.readFileSync(name, { encoding: 'utf-8'})
      .split('\n')
      .filter(item => item)
      .map(item => item.split('\t').filter(i => i).map(edge => (+edge)).slice(1))
  )
}

module.exports = {
  readIntegerFile
, readGraphFromFile
}
