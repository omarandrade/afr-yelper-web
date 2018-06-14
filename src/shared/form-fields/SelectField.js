import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

const SelectField = (props) => {
  const {
    children,
    input,
    label,
    meta: { touched, error, warning },
    name,
    style = {},
    ...custom
  } = props;

  const hasError = touched && (error || warning);
  return (
    <FormControl style={{ ...styles.container, ...style }}>
      <InputLabel htmlFor={`${name}-select`}>{label}</InputLabel>
      <Select
        inputProps={{
          id: `${name}-select`,
          name
        }}
        onChange={(event) => input.onChange(event.target.value)}
        value={input.value}
        {...custom}
      >
        {children}
      </Select>
      {hasError && <FormHelperText>{hasError}</FormHelperText>}
    </FormControl>
  );
};

const styles = {
  container: {
    marginBottom: 8,
    marginTop: 16
  }
};

export default SelectField;
