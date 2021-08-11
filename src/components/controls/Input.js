import React from 'react';
import { TextField } from '@material-ui/core';

export default function Input(props) {
  const { name, label, values, error = null, onChange, ...other } = props;
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={values}
      onChange={onChange}
      {...other}
      {...(error && { error: true, helperText: error })}
    />
  );
}
