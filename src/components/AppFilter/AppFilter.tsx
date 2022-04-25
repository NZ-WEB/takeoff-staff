import { TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { AppFilterProps } from './AppFilter.props';

export const AppFilter = ({ filterContacts }: AppFilterProps) => {
  const [filter, setFilter] = useState<string>('');

  const handleFilter = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFilter(e.target.value);
    filterContacts(e.target.value);
  };
  return (
    <TextField
      id="outlined-basic"
      label="Find your contact"
      variant="outlined"
      value={filter}
      onChange={(e) => handleFilter(e)}
      fullWidth
    />
  );
};
