import React, { useContext } from 'react';
import cx from 'classnames';

import { dropdownStaticContext } from '../Dropdown/utils';

import './styles.css';
import InlineGrid from '../Inline/InlineGrid';

type Props<T = any> = {
  value?: T;
  disabled?: boolean;
  bordered?: boolean;
} & React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;

const Option = React.forwardRef<HTMLLIElement, Props>(({ disabled, bordered, children, className, ...props }, ref) => {
  const classes = cx(
    'fx-option',
    disabled && 'fx-option--disabled',
    // selected && 'fx-option--selected',
    bordered && 'fx-option--bordered',
    className
  );
  const { dispatch } = useContext(dropdownStaticContext);

  const onLiClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    dispatch({ type: 'optionClick' });
    props.onClick?.(e);
  };

  return (
    <li {...props} className={classes} role="option" aria-selected="false" onClick={onLiClick} ref={ref}>
      <InlineGrid>{children}</InlineGrid>
    </li>
  );
});

if (__DEV__) {
  Option.displayName = 'FxOption';
}

export default Option;
