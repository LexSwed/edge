import React from 'react';
import cx from 'classnames';

import Button from '../Button';
import Icon from '../Icon';

import './styles.css';

type Props = { shown: boolean; onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void };

const ClearButton: React.FC<Props> = ({ shown, onClick }) => {
  return (
    <span className={cx('fx-field-clear', shown && 'fx-field-clear--shown')}>
      <Button onClick={onClick} size="xs" tone="transparent">
        <Icon icon="clear" />
      </Button>
    </span>
  );
};

export default ClearButton;
