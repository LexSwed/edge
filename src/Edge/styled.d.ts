import 'styled-components/macro';
import type theme from './theme';

declare module 'styled-components' {
  type Theme = typeof theme;

  export interface DefaultTheme extends Theme {}
}
