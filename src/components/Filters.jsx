import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const filters=['name','gil','age','price']
const Filters=({checked,setChecked})=> {

    const handleChecked = (idx) => {
        setChecked(checked.map((v, i) => (i === idx ? !v : v)));
    }
    console.log(checked)
  return (
    <FormControl component="fieldset">

    <FormGroup aria-label="position" row sx={{alignItems:'center'}}>

{filters.map((filter,idx)=>(
 <FormControlLabel key={idx}
 value={idx}
 control={<Checkbox
    onChange={()=>handleChecked(idx)}
    checked={checked[idx]}
    
    />}
 label={filter}
 labelPlacement="bottom"
/>   
))}
     
    </FormGroup>
  </FormControl>
  );
}

export default Filters;