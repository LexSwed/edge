import React from 'react';

import Icon from '../Icon';
import type { FieldInputProps } from './utils';

const LeftIcon: React.FC<{ icon: FieldInputProps['icon'] }> = ({ icon }) => {
  if (!icon) {
    return null;
  }
  return <span className="fx-field-icon">{React.isValidElement(icon) ? icon : <Icon icon={icon} />}</span>;
};

export default LeftIcon;
