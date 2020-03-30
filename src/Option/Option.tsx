import React, { useContext } from 'react';
import cx from 'classnames';

import { dropdownStaticContext } from '../Dropdown/utils';

import './styles.css';
import InlineGrid from '../Inline/InlineGrid';

type Props = {
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
    const { dispatch } = useContext(dropdownStaticContext);

    const onLiClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      dispatch({ type: 'optionClick' });
      props.onClick?.(e);
    };

    return (
      <li className={classes} {...props} onClick={onLiClick} ref={ref}>
        <InlineGrid>{children}</InlineGrid>
      </li>
    );
  }
);

if (__DEV__) {
  Option.displayName = 'FxOption';
}

export default Option;
