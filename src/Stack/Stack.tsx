import React from 'react';
import cx from 'classnames';

import { renderValidChild } from '../@utils';

import './styles.css';

type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

type Props = {
  /**
   * Space between elements
   * @default 'm'
   */
  space?: 'xs' | 's' | 'm' | 'l' | 'xl';
  /**
   * Children alignment
   * @default 'left'
   */
  align?: 'left' | 'right' | 'center';
} & DivProps;

const Stack = React.forwardRef<HTMLDivElement, Props>(
  ({ space = 'm', align = 'left', className, children, ...props }, ref) => {
    const classes = cx('fx-stack', `fx-stack--${space}`, `fx-stack--${align}`, className);

    return (
      <div className={classes} {...props} ref={ref}>
        {renderValidChild(children, (child) => child && <div className="fx-stack__child">{child}</div>)}
      </div>
    );
  }
);

if (__DEV__) {
  Stack.displayName = 'FxStack';
}

export default Stack;
