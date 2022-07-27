import {Modal, Grid, Card, Box, CardActions, Container, Button, CardContent, CardActionArea, CardMedia, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import {useState} from 'react'
import Note from './img/note.png'
import Dad from './img/dad.png'
import Team from './img/team.png'
import Devise from './img/devise.png'
import Restaurant from './img/restaurant.png'
import Social from './img/social.png'


export default function Portfolio() {

    const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [modalImage, setModalImage] = useState('')

    function openModal(image) {
        setOpen(true);
        setModalImage(image)
    }

   const cardContent = [
       {
           title: 'Devise',
           description: 'Full stack web application designed for developers to interact and share project ideas.',
           image: Devise,
           languages: 'React, GraphQL, MongoDB, Mongoose, Material UI, Apollo, CSS, Node.js',
           deployed: null,
           repo: 'https://github.com/Brainybrian316/DEVise'
       },
       {
           title: 'Dad Joke Generator',
           description: 'This full stack application allows users to create an account. Once signed in the user can generate dad joke meme templates and view them in their gallery. Data stored in a SQL database. Passwords are encrypted',
           image: Dad,
           languages: 'Express.js, SQL, Sequelize, Node.js, Javascript, Bootstrap, bycrypt',
           deployed: 'https://secret-reef-53642.herokuapp.com',
           repo: 'https://github.com/ethancahill/Best-Site-No-Joke'
       },
       {
           title: 'Social Media API',
           description: 'This is a backend server used for creating users who can post thoughts and react to those thoughts. All data is stored in a MongoDB database',
           image: Social,
           languages: 'Express.js, MongoDB, Mongoose, Node.js',
           deployed: null,
           repo: 'https://github.com/ethancahill/social-media-api'
       },
       {
          title: 'Note Taker',
          description: 'This project creates an online note-taker which allows the user to take notes, save them, and delete them.',
          image: Note,
          languages: 'Node.js, Express.js, CSS, HTML',
          deployed: 'https://stormy-springs-09334.herokuapp.com/',
          repo: 'https://github.com/ethancahill/note-taker'
       },
       {
           title: 'Team Profile Generator',
           description: 'This is a simple command line input Team Profile Generator that outputs an HTML document with all your team members information displayed in an organized format. If you look in the dist folder there is an example of what the output looks like.',
           image: Team,
           languages: 'Node.js, Express.js, Inquierer',
           deployed: null,
           repo: 'https://github.com/ethancahill/team-profile-generator'
       },
        {
            title: 'Restaurant Generator',
            description: 'A front end site for generating highly rated restaurants in the area pulled from Google Places API.',
            image: Restaurant,
            languages: 'Javascript, jQuery, tailwind, HTML, CSS',
            deployed: 'https://ethancahill.github.io/Interactive_Front_End_Project/',
            repo: 'https://github.com/ethancahill/Interactive_Front_End_Project'
        }
    ]

 const StyledButton = styled(Button)({
     background: '#407e81',


     '&:hover': {
         background: '#407e95'
     }
 });

function openSite(url) {
    window.open(url, '_blank')
}


    return(
        <>
         <Typography className="neon" sx={{
            textAlign: 'center',
            fontSize: '5vw',
        }}>
            My Portfolio
        </Typography>
<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component='img' sx={{
            position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60vw',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
        }} src={modalImage}>
          
        </Box>
      </Modal>

        <Container sx={{
            mt: '4vh',
            height: 'auto',
            width: '90vw'
        }}>
        <Grid
            container
            spacing={3}
            alignItems="top"
            justifyContent="space-between"
            width="100%"
          >

{cardContent.map((project) => (
    <Grid item xs="auto">
<Card key={project.repo} sx={{ 
    maxWidth: '300px',
    maxHeight: '550px',
    background: '#5b6467',
backgroundImage: 'linear-gradient(315deg, #5b6467 0%, #8b939a 74%)',
boxShadow: '4px 4px rgba(64,126,129, 0.75)'

     }}>
      <CardActionArea onClick={() => openModal(project.image)}>
        <CardMedia
          component="img"
          maxHeight="100px"
          image={project.image}
          alt={project.description}
          sx={{
              borderRadius: '5%',
              opacity: '0.65',
              '&:hover':{
                  opacity: '1'
              }
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{
              fontFamily: 'Grubbo',
          }}>
            {project.title}
          </Typography>
          <Box sx={{
              borderTop: 'solid 2px #407e95',
              borderBottom: 'solid 2px #407e95',
              padding: '5px',
          }}>
          <Typography variant="body2" color="text.secondary" sx={{
              fontFamily: 'Grubbo',
              fontSize: '15px'
          }}>
            {project.description}
          </Typography>
          </Box>
          <Typography variant="body" color="text.secondary" sx={{
              fontSize: '12px',
              mt: '5px'
          }}>
          Tools Used: {project.languages}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{
          display: 'flex',
          justifyContent: 'flex-end'
      }}>
      {project.deployed ? <StyledButton variant="contained" onClick={() => openSite(project.deployed)}>Deployed Site</StyledButton> : null}
     <StyledButton variant="contained" onClick={() => openSite(project.repo)}>Repository</StyledButton>
      </CardActions>
    </Card>
    </Grid>
    ))}
    </Grid>
    </Container>
       </>
    )
}