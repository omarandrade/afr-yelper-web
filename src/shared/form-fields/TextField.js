import React from 'react';
import MuiTextField from '@material-ui/core/TextField';

const TextField = (props) => {
  const {
    input,
    label,
    meta: { touched, error, warning },
    name,
    ...custom
  } = props;

  const hasError = touched && (error || warning);
  return (
    <MuiTextField
      error={hasError}
      id={`${name}-select`}
      label={label}
      margin="normal"
      onChange={(event) => input.onChange(event.target.value)}
      value={input.value}
      {...custom}
    />
  );
};

export default TextField;
