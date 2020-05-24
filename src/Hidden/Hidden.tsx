import styled from 'styled-components/macro';

type Breakpoints = 'mobile' | 'tablet' | 'desktop' | 'wide';

type Props = {
  below?: Breakpoints;
  above?: Breakpoints;
};

const Hidden = styled.div<NonNullable<Props>>`
  ${({ theme, below, above }) => {
    return {
      // ok to be undefined - wll be filtered by styled-components
      [theme.mediaQueries.below[below as Breakpoints]]: {
        display: 'none',
      },
      [theme.mediaQueries.above[above as Breakpoints]]: {
        display: 'none',
      },
    };
  }}
`;

export default Hidden;
