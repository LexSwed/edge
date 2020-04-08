import React from 'react';

import FieldInput from '../Field/FieldInput';
import type { FieldInputProps } from '../Field/utils';

type Props = Omit<FieldInputProps, 'onClear'> & {
  allowClear?: boolean;
};

const TextField = React.forwardRef<HTMLDivElement, Props>(({ allowClear, ...props }, ref) => {
  return <FieldInput onClear={allowClear ? onClear : undefined} {...props} ref={ref} />;
});

if (__DEV__) {
  TextField.displayName = 'FxTextField';
}

export default TextField;

function onClear() {}
