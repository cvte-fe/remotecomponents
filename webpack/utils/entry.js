const fs = require('fs');
const packageDir = 'src/packages'

const dir = fs.readdirSync(packageDir)
console.error(dir)
