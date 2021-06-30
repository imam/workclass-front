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
  backgrounds: {
    default: 'default',
    values: [
      {
        name: 'default',
        value: '#3c40c6',
      },
      {
        name: 'white',
        value: '#FFFFFF',
      },
    ],
  },
}