import React from 'react';
import cx from 'classnames';

import './styles.css';

type Props = {
  /**
   * Text tone
   */
  tone?: 'secondary';
  /**
   * Text alignment
   */
  align?: 'left' | 'center' | 'right';
  /**
   * Truncate text after maximum lines reached
   */
  maxLines?: number;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Text = React.forwardRef<HTMLDivElement, Props>(({ tone, align, children, className, ...props }, ref) => {
  const newProps = useTruncate(props);
  const classes = cx(
    'fx-text',
    tone && `fx-text--${tone}`,
    align && `fx-text--${align}`,
    props.maxLines && `fx-text--truncate`,
    className
  );

  return (
    <div className={classes} {...newProps} ref={ref}>
      {children}
    </div>
  );
});

if (__DEV__) {
  Text.displayName = 'FxText';
}

export default Text;

// this way we don't propagate [maxLines] as DOM property
// and don't override styles object if unnecessary
function useTruncate(props: Partial<Props>) {
  const { maxLines, ...newProps } = props;

  if (maxLines) {
    newProps.style = { ...newProps.style, ['--line-camp' as string]: maxLines };
  }

  return newProps;
}
