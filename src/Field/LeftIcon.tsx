import React from 'react';

import Icon from '../Icon';
import type { FieldInputProps } from './utils';
import { FieldIcon } from './Field.styled';

type Props = { icon: FieldInputProps['icon']; size?: FieldInputProps['size'] };

const LeftIcon: React.FC<Props> = ({ icon, size }) => {
  if (!icon) {
    return null;
  }
  return <FieldIcon>{React.isValidElement(icon) ? icon : <Icon icon={icon} size={size} />}</FieldIcon>;
};

export default LeftIcon;
