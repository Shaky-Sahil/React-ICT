import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function Addemp() {
    const {register,handleSubmit} = useForm();
    let getVal=(val)=>{
        console.log(val)
        axios.post('https://reqres.in/api/users/',val).then(
            (response)=>{
                console.log(response)
                alert(`The data is posted with id ${response.data.id}`)
            }
        )
    }
  return (
    <Stack
      component="form"
      sx={{
        marginTop:'150px',
        marginLeft:'42%',
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
      name='empname'
      {...register('empname')}
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Employee Name"
        variant="outlined"
      />
      <TextField
        hiddenLabel
        name='emplocation'
      {...register('emplocation')}
        id="filled-hidden-label-normal"
        defaultValue="Employee Location"
        variant="outlined"
      />
      <TextField
        hiddenLabel
        name='empdesignation'
      {...register('empdesignation')}
        id="filled-hidden-label-normal"
        defaultValue="Employee Designation"
        variant="outlined"
      />
      <Button variant='contained' onClick={handleSubmit(getVal)}>SUBMIT</Button>

    </Stack>
  );
}
