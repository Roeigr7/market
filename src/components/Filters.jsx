import React from 'react';
import {
  Checkbox,
  FormGroup,
  FormControlLabel,
  FormControl,
  Grid,
} from '@mui/material';
import { Typography } from '@mui/material';

const filters = [
  'Market change',
  'Change Percent',
  'Market Price',
  'Previous Close',
];
const Filters = ({ checked, setChecked }) => {
  const handleChecked = (idx) => {
    setChecked(checked.map((v, i) => (i === idx ? !v : v)));
  };

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography
        mb={1}
        align='center'
        variant={'h4'}
        sx={{ fontWeight: '200' }}
      >
        Market List Data
      </Typography>
      <Grid container justifyContent={'center'}>
        {filters.map((filter, idx) => (
          <Grid
            key={idx}
            item
            sx={{
              paddingLeft: { xs: '4%', sm: '0' },
              width: { sm: 'auto', xs: '50%' },
            }}
          >
            <FormControlLabel
              value={idx}
              control={
                <Checkbox
                  onChange={() => handleChecked(idx)}
                  checked={checked[idx]}
                />
              }
              label={filter}
              labelPlacement='end'
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Filters;
