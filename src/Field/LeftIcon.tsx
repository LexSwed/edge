import React from 'react';

import Icon from '../Icon';
import type { FieldInputProps } from './utils';
import { FieldIcon } from './Field.styled';

type Props = { icon: FieldInputProps['icon'] };

const LeftIcon: React.FC<Props> = ({ icon, ...props }) => {
  if (!icon) {
    return null;
  }
  return <FieldIcon {...props}>{React.isValidElement(icon) ? icon : <Icon icon={icon} size="m" />}</FieldIcon>;
};

export default LeftIcon;
