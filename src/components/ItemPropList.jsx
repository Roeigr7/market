import React from 'react';
import DialogContentText from '@mui/material/DialogContentText';

let flatObject = [];

//check if propery is object
const isObject = (val) => {
  if (val === null) {
    return false;
  }
  return typeof val === 'object';
};

export const objProperties = (obj) => {
  for (let val in obj) {
    if (isObject(obj[val])) {
      objProperties(obj[val]);
    } else {
      flatObject.push({ key: val, value: obj[val] });
    }
  }
  console.log('cc', flatObject);
  return flatObject.map((property, idx) => (
    <DialogContentText
      sx={{
        padding: '10px',
        backgroundColor: idx % 2 === 0 ? '#f4f4f4' : '#ffffff',
      }}
    >
      <span style={{ fontWeight: '800' }}>{property.key}:</span>{' '}
      {property.value}
    </DialogContentText>
  ));
};
