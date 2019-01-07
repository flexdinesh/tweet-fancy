const path = require('path')

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src', 'components'),
        '@styles': path.resolve(__dirname, 'src', 'styles'),
      },
    },
  })
}
