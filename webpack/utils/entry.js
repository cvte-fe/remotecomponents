const fs = require('fs');
const path = require('path');
const packageDir = './src/packages'

const main = () => {
   const dirs = fs.readdirSync(packageDir)
   const result = {}
   const arr = []
   dirs.forEach(dirName => {
      const name = dirName
      // const name = require(path.join(packageDir, dirName, 'const.tsx')).name
      result[name] = './' + path.join(packageDir, dirName, 'index.tsx')
   })
   console.log('entry check! ', result)
   return result
}

module.exports = main()

// componentDemo: './src/packages/componentDemo/index.tsx',
