import React from 'react';
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList } from '@reach/combobox';
import cx from 'classnames';

import FieldWrapper from '../TextField/FieldWrapper';
import { Props as FieldWrapperProps } from '../TextField/utils';

import '@reach/combobox/styles.css';
import './styles.css';

type Props = Omit<FieldWrapperProps, 'value' | 'inputProps' | 'children'> & React.ComponentProps<typeof Combobox>;

const Dropdown = React.forwardRef<HTMLDivElement, Props>(({ onSelect, children, className, ...props }, ref) => {
  return (
    <Combobox openOnFocus onSelect={onSelect} ref={ref}>
      <FieldWrapper className={className} {...props} icon="expand_more">
        {({ className, ...props }, ref) => (
          <>
            <ComboboxInput
              className={cx('fx-textfield-input', className)}
              {...(props as Omit<typeof props, 'value'>)}
              ref={ref}
            />

            <ComboboxPopover>
              <ComboboxList aria-labelledby={props['aria-labelledby']}>{children}</ComboboxList>
            </ComboboxPopover>
          </>
        )}
      </FieldWrapper>
    </Combobox>
  );
});

if (__DEV__) {
  Dropdown.displayName = 'FxDropdown';
}

export default Dropdown;
