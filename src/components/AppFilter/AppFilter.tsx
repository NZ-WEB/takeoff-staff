import { TextField } from '@mui/material';
import { TextFieldProps } from 'material-ui';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export const AppFilter = () => {
  return (
    <TextField
      id="outlined-basic"
      label="Find your contact"
      variant="outlined"
      fullWidth
    />
  );
};
