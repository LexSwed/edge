import React from 'react';
import cx from 'classnames';

import { Size } from '../@utils';

import './styles.css';

type Props = {
  /**
   * Size of the spinner
   * @default 'm'
   */
  size?: Size;
  /**
   * Color of the spinner
   * @default 'dark'
   */
  tone?: 'dark' | 'light' | 'brand';
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Spinner = React.forwardRef<HTMLDivElement, Props>(({ size = 'm', tone = 'dark', className, ...props }, ref) => {
  return (
    <div className={cx('fx-spinner', `fx-spinner--${size}`, `fx-spinner--${tone}`, className)} {...props} ref={ref}>
      <div className="fx-spin" />
      <div className="fx-spin" />
      <div className="fx-spin" />
      <div className="fx-spin" />
    </div>
  );
});

if (__DEV__) {
  Spinner.displayName = 'FxSpinner';
}

export default Spinner;
