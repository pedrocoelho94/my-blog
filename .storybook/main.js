module.exports = {
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-essentials', 'storybook-addon-next-router'],
  babel: async (options) => ({
    ...options,
    plugins: [
      ...options.plugins,
      require.resolve('@babel/plugin-transform-react-jsx')
    ]
  }),
  //define o caminho absoluto como /src das importações
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`) // cwd pega a raiz do projeto
    return config
  }
}
