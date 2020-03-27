import React from 'react';

import './styles.css';

type LabelAttrs = React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;

type Props = LabelAttrs & {
  htmlFor: LabelAttrs['htmlFor'];
};

const Label = React.forwardRef<HTMLLabelElement, Props>(({ children, ...props }, ref) => {
  return (
    <label className="fx-label" {...props} ref={ref}>
      {children}
    </label>
  );
});

if (__DEV__) {
  Label.displayName = 'FxLabel';
}

export default Label;
