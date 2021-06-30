module.exports = {
  "stories": [
    "../src/stories/*.stories.mdx",
    "../src/stories/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-postcss',
    '@storybook/addon-backgrounds'
  ],
  typescript: { reactDocgen: 'react-docgen' }
}