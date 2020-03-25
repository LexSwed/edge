import { styled } from 'linaria/react';
import theme from 'utils/theme';

export type Props = { active?: boolean } & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const LinkStyled = styled.a<Props>`
  --color: ${(props) => (props.active ? theme.colors.text.brand : theme.colors.text.main)};
  color: var(--color);
  text-decoration: none;
  box-sizing: border-box;
  &:after {
    content: '';
    display: block;
    bottom: -1px;
    width: 90%;
    margin: 0 auto;
    height: 2px;
    background-color: var(--color);
    transition: transform 0.12s ease-in-out;
  }
  &:hover:after {
    transform: translateY(-1px);
  }
`;
