import React from 'react';
import cx from 'classnames';

import Button from '../Button';
import Icon from '../Icon';
import { useClearButton, FieldInputProps } from './utils';

import './styles.css';

type LabelProps = React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;

type Props = LabelProps & FieldInputProps;

const FieldInput = React.forwardRef<HTMLLabelElement, Props>(
  ({ icon, clearButton, size = 'm', tone, inputRef, children, className, ...props }, ref) => {
    const [usedInputRef, onClearClick] = useClearButton(inputRef);

    const classes = cx('fx-field-input', `fx-field-input--${size}`, tone && `fx-field-input--${tone}`, className);

    const renderIcon = icon && (
      <span className="fx-field-icon">{React.isValidElement(icon) ? icon : <Icon icon={icon} />}</span>
    );

    return (
      <label className={classes} {...props} ref={ref}>
        {renderIcon}
        {React.cloneElement(React.Children.only(children), { ref: usedInputRef })}
        {clearButton && (
          <span className={cx('fx-field-clear', `fx-field-clear--${clearButton}`)}>
            <Button onClick={onClearClick} size="xs" tone="transparent">
              <Icon icon="clear" />
            </Button>
          </span>
        )}
      </label>
    );
  }
);

if (__DEV__) {
  FieldInput.displayName = 'FxFieldInput';
}

export default FieldInput;
