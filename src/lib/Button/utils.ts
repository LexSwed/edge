import theme from 'utils/theme';
import { styled } from 'linaria/react';
import { spacer } from 'utils';
import { css } from 'linaria';

export type Props = {
  size: 'xs' | 's' | 'm' | 'l';
  variant: 'default' | 'flat' | 'transparent' | 'primary' | 'warning' | 'danger';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const sizes: Record<Props['size'], string> = {
  xs: css`
    font-size: 10px;
    height: 20px;
    padding: ${spacer(0, 1)};
  `,
  s: css`
    padding: ${spacer(0, 1.25)};
  `,
  m: css`
    padding: ${spacer(0, 2)};
  `,
  l: css`
    padding: ${spacer(0, 2)};
  `,
};

const commonLight = css`
  &:disabled {
    color: ${theme.colors.gray[600]};
  }
`;

const commonDark = css`
  color: #fff;
  border-color: transparent;
  &:disabled {
    color: ${theme.colors.gray[200]};
  }
`;

const variants: Record<Props['variant'], string> = {
  default: css`
    ${commonLight}
    background-color: #fff;
    &:hover {
      background-color: ${theme.colors.gray[200]};
    }
    &:active {
      background-color: ${theme.colors.gray[300]};
    }
    &:active,
    &:hover {
      border-color: ${theme.border.colors.hover};
    }
  `,
  flat: css`
    ${commonLight}
    border-color: transparent;
    background-color: ${theme.colors.gray[200]};
    &:hover {
      background-color: ${theme.colors.gray[300]};
    }
    &:active {
      background-color: ${theme.colors.gray[200]};
    }
  `,
  transparent: css`
    ${commonLight}
    border-color: transparent;
    background-color: transparent;
    &:hover {
      background-color: ${theme.colors.gray[200]};
    }
    &:active {
      background-color: ${theme.colors.gray[100]};
    }
  `,
  primary: css`
    ${commonDark}
    background-color: ${theme.colors.brand[600]};
    &:hover {
      background-color: ${theme.colors.brand[700]};
    }
    &:active {
      background-color: ${theme.colors.brand[600]};
    }
  `,
  warning: css`
    ${commonDark}
    background-color: ${theme.colors.yellow[600]};
    &:hover {
      background-color: ${theme.colors.yellow[700]};
    }
    &:active {
      background-color: ${theme.colors.yellow[600]};
    }
  `,
  danger: css`
    ${commonDark}
    background-color: ${theme.colors.red[600]};
    &:hover {
      background-color: ${theme.colors.red[700]};
    }
    &:active {
      background-color: ${theme.colors.red[600]};
    }
  `,
};

export const ButtonStyled = styled.button<Props>`
  background-color: transparent;
  border: 1px solid ${theme.border.colors.main};
  color: var(--text-color);
  transition: background-color 0.1s, border-color 0.1s;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  flex-flow: row nowrap;
  flex-shrink: 0;
  box-sizing: border-box;
  border-radius: ${theme.border.radius};
  ${(props) => sizes[props.size]}
  ${(props) => variants[props.variant]}
  &:focus {
    border-color: ${theme.border.colors.focus};
    outline: none;
  }
  &:disabled {
    position: relative;
    border-color: transparent;
    opacity: 0.8;
    pointer-events: none;
    cursor: not-allowed;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      cursor: not-allowed;
      pointer-events: all;
    }
  }
`;
