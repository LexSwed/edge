import React from 'react';

import Icon from '../Icon';
import type { FieldInputProps } from './utils';
import { FieldIcon } from './Field.styled';
import { Size } from '../@utils';

const sizeMap: Record<NonNullable<FieldInputProps['size']>, Size> = {
  s: 'xs',
  m: 's',
  l: 'm',
};

type Props = { icon: FieldInputProps['icon']; size?: FieldInputProps['size'] };

const LeftIcon: React.FC<Props> = ({ icon, size }) => {
  if (!icon) {
    return null;
  }
  return <FieldIcon>{React.isValidElement(icon) ? icon : <Icon icon={icon} size={size && sizeMap[size]} />}</FieldIcon>;
};

export default LeftIcon;
