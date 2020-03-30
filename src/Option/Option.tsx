import React from 'react';
import cx from 'classnames';
import { MenuItem } from '@reach/menu-button';
import { ComboboxOption } from '@reach/combobox';

import Inline from '../Inline';

import './styles.css';

const componentMatch: Record<Props['type'], typeof MenuItem | typeof ComboboxOption> = {
  menu: MenuItem,
  combobox: ComboboxOption,
};

type Props = {
  disabled?: boolean;
  selected?: boolean;
  bordered?: boolean;
  type: 'menu' | 'combobox';
} & React.ComponentProps<typeof MenuItem | typeof ComboboxOption>;

const Option = React.forwardRef<HTMLElement, Props>(
  ({ disabled, selected, bordered, type, children, className, ...props }, ref) => {
    const classes = cx(
      'fx-option',
      disabled && 'fx-option--disabled',
      selected && 'fx-option--selected',
      bordered && 'fx-option--bordered',
      className
    );

    const Option = componentMatch[type];

    return (
      <Option className={classes} {...props} ref={ref as any}>
        <Inline alignY="center" nowrap>
          {children}
        </Inline>
      </Option>
    );
  }
);

if (__DEV__) {
  Option.displayName = 'FxOption';
}

export default Option;
