import React from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { objProperties } from './ItemPropList';

const DialogBoxItem = ({ onClose, item, open }) => {
  return (
    <Dialog fullWidth onClose={() => onClose()} open={open} px={0}>
      <DialogTitle align='center'>{item && item.a}</DialogTitle>
      <DialogContent sx={{ padding: 0 }}>{objProperties(item)}</DialogContent>
      <DialogActions>
        <Button
          size='small'
          variant='contained'
          color='warning'
          onClick={() => onClose()}
        >
          Quit Dialog
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogBoxItem;
