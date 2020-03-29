import React from 'react';
import cx from 'classnames';

import Stack from '../Stack';
import FieldLabel from '../FieldLabel';
import FieldMessage from '../FieldMessage';
import Button from '../Button';
import Icon from '../Icon';

import { Props, useMergedInputProps, useClearButton } from './utils';

import './styles.css';

const FieldWrapper = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const inputProps = useMergedInputProps(props);
  const [inputRef, onClearClick] = useClearButton(inputProps.ref);

  const { size, tone, className, label, message, icon, allowClear, children, ...wrapperProps } = props;
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
        {children(inputProps, inputRef)}
        {allowClear && (
          <span className={cx('fx-textfield-clear', inputProps.value && 'fx-textfield-clear--shown')}>
            <Button onClick={onClearClick} size="xs" tone="transparent">
              <Icon icon="clear" />
            </Button>
          </span>
        )}
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
  FieldWrapper.displayName = 'FxFieldWrapper';
}

FieldWrapper.defaultProps = {
  type: 'text',
  size: 'm',
  inputProps: {},
};

export default FieldWrapper;
