import React from 'react';

import './styles.css';

type FieldLabelAttrs = React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;

type Props = FieldLabelAttrs & {
  htmlFor: FieldLabelAttrs['htmlFor'];
};

const FieldLabel = React.forwardRef<HTMLLabelElement, Props>(({ children, ...props }, ref) => {
  return (
    <label className="fx-fieldlabel" {...props} ref={ref}>
      {children}
    </label>
  );
});

if (__DEV__) {
  FieldLabel.displayName = 'FxFieldLabel';
}

export default FieldLabel;
