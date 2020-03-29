import React from 'react';
import cx from 'classnames';

import Input from './Input';
import Stack from '../Stack';
import FieldLabel from '../FieldLabel';
import FieldMessage from '../FieldMessage';
import Icon from '../Icon';

import { Props, useMergedInputProps } from './utils';

import './styles.css';

const TextField = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const inputProps = useMergedInputProps(props);

  const { size, tone, className, label, message, icon, onClear, ...wrapperProps } = props;
  delete wrapperProps.inputProps;

  const classes = cx('fx-textfield', `fx-textfield--${size}`, tone && `fx-textfield--${tone}`, className);

  return (
    <Stack space="xs" className={classes} {...wrapperProps} ref={ref}>
      {label && (
        <FieldLabel id={inputProps['aria-labelledby']} htmlFor={inputProps.id}>
          {label}
        </FieldLabel>
      )}
      <label className={cx('fx-textfield-wrapper')}>
        {icon && (
          <span className="fx-textfield-icon">
            <Icon icon={icon} size={size} />
          </span>
        )}
        <Input {...inputProps} size={size} onClear={onClear} />
      </label>
      {message && (
        <FieldMessage
          tone={tone}
          disabled={props.disabled}
          id={inputProps['aria-describedby']}
          className={cx('fx-textfield-message')}
        >
          {message}
        </FieldMessage>
      )}
    </Stack>
  );
});

if (__DEV__) {
  TextField.displayName = 'FxTextField';
}

TextField.defaultProps = {
  type: 'text',
  size: 'm',
  inputProps: {},
};

export default TextField;
