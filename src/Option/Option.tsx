import React from 'react';
import cx from 'classnames';

import './styles.css';
import Inline from '../Inline';

type Props<T = any> = {
  value?: T;
  disabled?: boolean;
  selected?: boolean;
  bordered?: boolean;
} & React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;

const Option = React.forwardRef<HTMLLIElement, Props>(
  ({ disabled, selected, bordered, children, className, ...props }, ref) => {
    const classes = cx(
      'fx-option',
      disabled && 'fx-option--disabled',
      selected && 'fx-option--selected',
      bordered && 'fx-option--bordered',
      className
    );

    return (
      <li {...props} className={classes} ref={ref}>
        <Inline space="s" alignY="center" nowrap>
          {children}
        </Inline>
      </li>
    );
  }
);

if (__DEV__) {
  Option.displayName = 'FxOption';
}

export default Option;
