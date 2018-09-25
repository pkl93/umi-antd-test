
// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: true,
      dynamicImport: true,
      title: 'umi-antd-test',
      dll: true,
      pwa: false,
      polyfills: ['ie9', 'ie10', 'ie11'],
      routes: {
        exclude: [],
      },
      hardSource: false,
    }],
  ],
}
