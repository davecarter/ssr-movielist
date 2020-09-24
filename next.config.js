const withStyles = require('@webdeb/next-styles')
const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = withStyles({
  sass: true,
  modules: true, // style.(m|module).css & style.(m|module).scss for module files
})

