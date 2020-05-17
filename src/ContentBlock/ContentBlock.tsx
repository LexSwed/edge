import styled from 'styled-components/macro';

type Props = { wide?: boolean };

const ContentBlock = styled.div<Props>`
  width: 100%;
  margin: 0 auto;
  padding: 16px;
  max-width: ${(props) => (props.wide ? '1280px' : '940px')};
`;

export default ContentBlock;
