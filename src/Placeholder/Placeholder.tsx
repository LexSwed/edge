import React from 'react';
import cx from 'classnames';

import './styles.css';

type Props = {
  /**
   * Width of the box
   * @default 'auto''
   */
  width?: number | 'auto';
  /**
   * Height of the box
   * @default 'auto'
   */
  height?: number | 'auto';
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Placeholder = React.forwardRef<HTMLDivElement, Props>(
  ({ height = 'auto', width = 'auto', className, ...props }, ref) => {
    const classes = cx('fx-placeholder', className);
    const style = {
      ...props.style,
      height,
      width
    };

    return (
      <div className={classes} style={style} {...props} ref={ref}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="0" x2="100%" y2="100%"></line>
          <line x1="100%" y1="0" x2="0" y2="100%"></line>
        </svg>
      </div>
    );
  }
);

if (__DEV__) {
  Placeholder.displayName = 'FxPlaceholder';
}

export default Placeholder;
