import React from 'react';
import { Label } from './FieldLabel.styled';
import { Size } from '../@utils';

type FieldLabelAttrs = React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;

type Props = FieldLabelAttrs & {
  fontSize?: Size;
  htmlFor: FieldLabelAttrs['htmlFor'];
};

const FieldLabel = React.forwardRef<HTMLLabelElement, Props>(({ children, fontSize = 's', ...props }, ref) => {
  return (
    <Label fontSize={fontSize} color="text.default" {...props} ref={ref}>
      {children}
    </Label>
  );
});

if (__DEV__) {
  FieldLabel.displayName = 'FxFieldLabel';
}

export default FieldLabel;
