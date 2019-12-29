const path = require('path');

const mainPath = path.resolve(process.cwd());

module.exports = {
  wayTo: dirName => `${mainPath}/${dirName}`
}