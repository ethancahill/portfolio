
import {Container, Typography, Box, Card, Grid } from '@mui/material'
import photo from './img/ethan_wedding.jpg'
export default function AboutMe() {


    return(
        <>
        <Typography className="neon" sx={{
            textAlign: 'center',
            fontSize: '90px',
        }}>
            About Me
        </Typography>
        <Grid 
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        width="100%"
        >
        <Grid item xs='auto'>
        <Container sx={{
            height: 'auto',
            width: '90vw',
            margin: '10px'
        }}>
            <Grid 
        container
        spacing={2}
        alignItems="top"
        justifyContent="space-around"
        width="100%"
        >
            <Grid item xs='auto'>
            <Box
            component='img'
            src={photo} 
            sx={{
            height: '60vh',
            width: 'auto',
            borderRadius: '15%'
        }}>

            </Box>
            </Grid>
            <Grid item xs='auto'>
             <Card sx={{
                 width:'45vw',
                 padding: '18px',
                 background: 'linear-gradient(grey, lightgrey)',
                 borderRadius: '10%',
             }}>
                 <Typography sx={{
                     fontSize: '20px'
                 }}>
                     Hi! I'm so glad you visited my page. I am a former Teacher turned Software Engineer. 
                     I learned a lot during my days as an educator. I developed a strong growth mindset, a 
                     passion for learning, and a high level of patience (from working with parents). As I began transitioning into the 
                     software space, I realized it was an industry that, while I had not known much about it, I was facinated to learn more. 
                     I applied my growth mind set, passion, and patience towards this new endeavour and I have been growing as a developer every day since. 
                 </Typography>
                 <Typography sx={{
                     fontSize: '20px'
                 }}>
                     My wife and I currently live in the Orlando area with our greyhound Flynn. We love going to Disney and cheering on UCF at every home game. 
                     We are season ticket holders!
                 </Typography>
                 <Typography sx={{
                     fontSize: '20px'
                 }}>
                     Please enjoy the site, and don't hesitate to reach out to me via my contact page.
                 </Typography>

            </Card>   
            </Grid>
        </Grid>
        </Container>
        </Grid>
        </Grid>
        </>
    

    )
}