import {Button, Box, Container, Grid, Typography, FormControl, InputLabel, Input, Card, TextField} from '@mui/material'
import { minHeight } from '@mui/system'
import './styling/style.css'
import {useState} from 'react'


export default function Contact() {


  function handleChange(e) {
    
      if (!e.target.value.length) {
        alert(`${e.target.name} is required`);
      } else {
        return;
      }
    }


    return(
        <>
           <div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div>
<Container sx={{
    width: '100vw',
    height: 'auto'
}}>

        <Grid
            container
            spacing={0}
            alignItems="center"
            justifyContent="center"
            width="100%"
            >
                <Grid item xs='auto'>
        <Card sx={{
            mt: '40px',
            padding: '25px',
            background: 'grey',
            borderRadius: '5%',
            minHeight: '40vh'
        }}>
             <Typography className='poptext' sx={{
                fontSize: '80px',
                alignText: 'center',
            }}>
                Contact Me
            </Typography>
              <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
        display: 'flex',
        alignItems: 'center',
        mt: '25px'
      }}
      noValidate
      autoComplete="off"
    >
           
        <FormControl variant='standard'>
            <InputLabel required='true' htmlFor='name'>Name</InputLabel>
            <Input id='name' name='Name' onBlur={(e) => handleChange(e)}></Input>
            </FormControl>
            <FormControl variant='standard' >
            <InputLabel required='true' htmlFor='email' onBlur={handleChange}>Email</InputLabel>
            <Input name='Email' id='email'>Email</Input>
            </FormControl>
            <FormControl variant='standard' >
            <InputLabel  htmlFor='message'></InputLabel>
            <TextField name='Message' multiline required='true' label='Message' variant='standard' onBlur={handleChange}></TextField>
            </FormControl>
            <Typography sx={{
                fontSize: '20px',
                color: 'red'
            }}>
            </Typography>
            <Button>Submit</Button>
            </Box>
        </Card>
        </Grid>
        </Grid>
        </Container>
        </>
    )
}