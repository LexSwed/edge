import { HeadingStyled } from './Heading.styled';

const Heading = HeadingStyled;

if (__DEV__) {
  Heading.displayName = 'FxHeading';
}

Heading.defaultProps = {
  as: 'h1',
};

export default Heading;
