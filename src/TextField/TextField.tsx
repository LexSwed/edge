import React from 'react';

import Field from 'Field';
import FieldInput from 'Field/FieldInput';
import type { FieldInputProps } from 'Field/utils';

type Props = Omit<FieldInputProps, 'onClear'> & {
  allowClear?: boolean;
};

const TextField: React.FC<Props> = ({ allowClear, ...props }) => {
  return (
    <Field>
      <FieldInput {...props} onClear={allowClear ? onClear : undefined} />
    </Field>
  );
};

if (__DEV__) {
  TextField.displayName = 'FxTextField';
}

export default TextField;

function onClear() {}
