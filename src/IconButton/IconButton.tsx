import React from 'react';
import { Button } from './IconButton.styled';
import Icon from '../Icon';
import { Size } from '../@utils';

// Do not make it larger then 'm'
const sizeToIcon: Record<Size, Size> = {
  xs: 's',
  s: 's',
  m: 'm',
  l: 'l',
  xl: 'l',
};

type Props = {
  icon: string;
  size: Size;
} & Omit<React.ComponentProps<typeof Button>, 'tone'>;

const IconButton: React.FC<Props> = ({ icon, size = 'm', ...props }) => {
  return (
    <Button size={size} {...props}>
      <Icon size={sizeToIcon[size]} icon={icon} />
    </Button>
  );
};

export default IconButton;
