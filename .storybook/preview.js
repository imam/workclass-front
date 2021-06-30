import 'antd/dist/antd.css';
import '../static/css/global.css';
import '../src/styles/tailwind.css';
import 'suitcss-base/index.js'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}