import React from 'react';
import cx from 'classnames';

type Props = {
  padding?: 'xs' | 's' | 'm' | 'l';
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Card = React.forwardRef<HTMLDivElement, Props>(({ padding, className, children, ...props }, ref) => {
  return (
    <div className={cx('fx-card', `fx-card--${padding}`, className)} {...props} ref={ref}>
      {children}
    </div>
  );
});

Card.displayName = 'fx-card';

Card.defaultProps = {
  padding: 'm',
};

export default Card;
