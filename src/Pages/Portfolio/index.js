import { Card, CardActions, Container, Button, CardContent, CardActionArea, CardMedia, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'



export default function Portfolio() {

   const cardContent = [
       {
           
       }
        {
            title: 'Restaurant Generator',
            description: 'A front end site for generating highly rated restaurants in the area pulled from Google Places API.',
            image: '',
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
 })






    return(
        <Container sx={{
            display: 'flex',
            mt: '2vh'
        }}>
<Card sx={{ 
    maxWidth: '300px',
    maxHeight: '500px',
    background: '#5b6467',
backgroundImage: 'linear-gradient(315deg, #5b6467 0%, #8b939a 74%)',
boxShadow: '4px 4px rgba(64,126,129, 0.75)'

     }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200px"
          image=""
          alt="project"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Project Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{
          display: 'flex',
          justifyContent: 'flex-end'
      }}>
     <StyledButton variant="contained">Repository</StyledButton>
     <StyledButton variant="contained">Deployed Site</StyledButton>
      </CardActions>
    </Card>
    </Container>
       
    )
}