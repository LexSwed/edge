export default {
  title: 'Edge',
  themesDir: 'src/.docs',
  public: 'src/.docs/static',
  dest: '/docs',
  base: '/edge',
  typescript: true,
  port: 4000,
  hashRouter: true,
  propsParser: process.env.NODE_ENV === 'production',
  themeConfig: {
    showPlaygroundEditor: false,
  },
};
