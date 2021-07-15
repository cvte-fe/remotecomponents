const fs = require('fs');
const path = require('path');
const result = {}

const main = () => {
   const packageDir = './src/packages'
   const addonDir = './src/addons'

   entryByDir(packageDir, '')
   entryByDir(addonDir, 'addon-')

   console.log('entry check! ', result)
   return result
}

const entryByDir = (packageDir, namePre = '') => {
   const dirs = fs.readdirSync(packageDir)
   dirs.forEach(dirName => {
      const name = namePre + dirName
      // const name = require(path.join(packageDir, dirName, 'const.tsx')).name
      result[name] = './' + path.join(packageDir, dirName, 'index.tsx')
   })
}

module.exports = main()

// componentDemo: './src/packages/componentDemo/index.tsx',
