import {useState, useEffect} from 'react';
import { Button, Typography, Grid, Box} from '@mui/material'
import {capitalizeFirstLetter} from '../../utils/helpers'
import { styled } from '@mui/material/styles'
import WebFont from 'webfontloader'
import Logo from './img/eec.png'


export default function NavBar(props){
    const {setPage, page} = props

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Gruppo'] 
            }
        });
        document.title = capitalizeFirstLetter(page);
      }, [page]);

      const StyledButton = styled(Button)({
          border: 'solid 0.25vw #407e81',
          height: '3vw',
                    width: '10vw',
                    fontSize: '1.25vw',
                    fontFamily: 'Gruppo',
                    fontStyle: 'bold',
                    color: 'white',
          '&:hover': {
              background: 'rgba(64,126,129, 0.25)',
              border: 'solid 0.25vw #56a6aa',
          },
          '&:active': {
              border: 'solid 0.25vw #56a6aa',

          },
          '&:focus': {
              border: 'solid 0.40vw #56a6aa',
          }
      });

    return(
        <>
        <Box sx={{
            display: 'fixed',
            height: '5vw',
            width: '100vw',
            background: 'linear-gradient(#0f182b 0%,#2a3b53 33%,#2a3b53 66%,#0f182b 100%)'
        }}>
            <Grid
            container
            spacing={0}
            alignItems="center"
            justifyContent='flex-start'
            width='100vw'
            height='5vw'
            >
                <Grid item xs='auto'>
                    <Box 
                    component='img'
                    sx={{
                        height:'5vw',
                        '&:hover': {
                            opacity: '0.75',
                            cursor: 'pointer',
                        }
                    }}
                    alt='Cahill Portfolio Logo'
                    src={Logo}
                    onClick={() => setPage('portfolio')}/>
                </Grid>
                <Grid item xs='auto' sx={{
                    ml: '6vw'
                }}>
                <StyledButton  variant='outlined' onClick={() => setPage('portfolio')}>
                    Portfolio
                </StyledButton>
                </Grid>
                <Grid item xs='auto' sx={{
                    ml: '4vw'
                }}>
                <StyledButton variant='outlined' onClick={() => setPage('about')}>
                    About Me
                </StyledButton>
                </Grid>
                <Grid item xs='auto' sx={{
                    ml: '4vw'
                }}>
                <StyledButton variant='outlined' onClick={() => setPage('resume')}>
                    Resume
                </StyledButton>
                </Grid>
                <Grid item xs='auto' sx={{
                    ml: '4vw'
                }}>
                <StyledButton variant='outlined' onClick={() => setPage('contact')}>
                    Contact
                </StyledButton>
                </Grid>
                <Grid item xs='auto' sx={{
                    ml: '15vw'
                }}>
                <Typography sx={{
                    fontSize:'1.5vw',
                    color: 'white',
                    fontFamily: 'Gruppo'
                }}>
                By: Ethan Edward Cahill</Typography>
                </Grid>
            </Grid>
        </Box>
        </>
    )
}