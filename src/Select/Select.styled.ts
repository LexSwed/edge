import styled from 'styled-components/macro';
import FieldInput from '../Field/FieldInput';
import Icon from '../Icon';

export const Field = styled(FieldInput)`
  cursor: default;
`;

export const ArrowIcon = styled(Icon)<{ expanded: boolean }>`
  transition: transform 0.2s ease-in-out;
  transform: ${(props) => props.expanded && 'rotate(180deg)'};
`;
