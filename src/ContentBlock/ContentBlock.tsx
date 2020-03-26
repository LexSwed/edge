import React from 'react';
import cx from 'classnames';

import './styles.css';

type Props = { wide?: boolean } & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const ContentBlock = React.forwardRef<HTMLDivElement, Props>(({ wide, className, children, ...props }, ref) => {
  return (
    <div className={cx('fx-contentblock', wide && 'fx-contentblock--wide', className)} {...props} ref={ref}>
      {children}
    </div>
  );
});

export default ContentBlock;
