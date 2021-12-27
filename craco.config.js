const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@images': path.resolve(__dirname, 'src/assets/images/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@themes': path.resolve(__dirname, 'src/themes/'),
      '@views': path.resolve(__dirname, 'src/views/'),
      '@utilities': path.resolve(__dirname, 'src/utilities/')
    }
  }
}
