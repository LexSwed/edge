import React from 'react';
import cx from 'classnames';

import Input from './Input';
import Stack from '../Stack';
import FieldLabel from '../FieldLabel';
import FieldMessage from '../FieldMessage';

import './styles.css';
import { Props, useMergedInputProps } from './utils';

const TextField = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const inputProps = useMergedInputProps(props);

  const { size, tone, className, label, message, iconLeft, onClear, ...wrapperProps } = props;
  delete wrapperProps.inputProps;

  const classes = cx('fx-textfield', `fx--textfield--${size}`, className);

  return (
    <Stack space="xs" className={classes} {...wrapperProps} ref={ref}>
      {label && (
        <FieldLabel id={inputProps['aria-labelledby']} htmlFor={inputProps.id}>
          {label}
        </FieldLabel>
      )}
      <label className={cx('fx-textfield-wrapper')}>
        {iconLeft}
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
