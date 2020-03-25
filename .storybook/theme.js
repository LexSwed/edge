import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: '#e15756',
  colorSecondary: '#e15756',

  // UI
  appBg: 'white',
  appContentBg: 'rgb(247, 247, 247)',
  //   appBorderColor: 'grey',
  //   appBorderRadius: 4,

  // Typography
  fontBase: '"system-ui",sans-serif;',
  fontCode: 'monospace',

  // Text colors
  textColor: '#1a202c',
  //   textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#1a202c',
  //   barSelectedColor: 'black',
  //   barBg: 'hotpink',

  // Form colors
  //   inputBg: 'white',
  //   inputBorder: 'silver',
  //   inputTextColor: 'black',
  //   inputBorderRadius: 4,

  brandTitle: '@foxtrot/edge'
  //   brandUrl: 'https://example.com',
  //   brandImage: 'https://placehold.it/350x150'
});
