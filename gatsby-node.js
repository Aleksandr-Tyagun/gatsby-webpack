const { RelativeCiAgentWebpackPlugin } = require('@relative-ci/agent');

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      plugins: [
        new RelativeCiAgentWebpackPlugin()
      ]
    })
  }
}