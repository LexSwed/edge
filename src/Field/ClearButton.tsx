import React from 'react';

import IconButton from '../IconButton';
import { FieldClearButton } from './Field.styled';

type Props = {
  shown: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
};

const ClearButton: React.FC<Props> = ({ shown, disabled, onClick }) => {
  return (
    <FieldClearButton shown={shown && !disabled}>
      <IconButton icon="clear" onClick={onClick} size="s" aria-label="Clear input" />
    </FieldClearButton>
  );
};

export default ClearButton;
