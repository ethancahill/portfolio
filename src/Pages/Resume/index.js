import {Container, Box, Card, Button, Grid, Typography} from '@mui/material'



export default function Resume() {

    const url = 'https://docs.google.com/document/d/17SHnOYJvQ8A2AmoXKbVGVVZIAh5cdvwnu66DpSbtGRk/edit?usp=sharing'

    function openSite(url) {
        window.open(url, '_blank')
    }

    return(
        <>
        <Typography className="neon" sx={{
            textAlign: 'center',
            fontSize: '50px',
            padding: '10px'
        }}>
            My Resume
        </Typography>
        <Container sx={{
            width: '50%',
            mt:'50px',
            display: 'flex',
            flexDirection: 'column'
        }}>
           
            <Box >
             
             <Grid
            container
            spacing={3}
            alignItems="top"
            justifyContent="center"
            width="100%"
            sx={{
                mt: '20px',
            }}
            >
                <Grid item xs='auto'>
                    <Card sx={{
                        padding: '25px',
                        borderRadius: '50%',
                        backgroundColor: 'grey'
                    }}>
                <Typography sx={{
                    fontSize:'20px'
                }}>
                    Languages: Javascript, HTML, CSS, SQL
                </Typography>
                </Card>
                </Grid>
                <Grid item xs='auto'>
                <Card sx={{
                        padding: '25px',
                        borderRadius: '50%',
                        backgroundColor: 'grey'
                    }}>
                <Typography sx={{
                    fontSize:'20px'
                }}>
                        Frameworks: React
                        </Typography>
                    </Card>
                    
                </Grid>
                <Grid item xs='auto'>
                <Card sx={{
                        padding: '25px',
                        borderRadius: '50%',
                        backgroundColor: 'grey'
                    }}>
                <Typography sx={{
                    fontSize:'20px'
                }}>
                        Other Tools: Mongoose, Sequelize, Node.js, Express.js, jQuery, Bootstrap, MongoDB
                        </Typography>
                    </Card>
                   
                </Grid>
                </Grid>     
            </Box>
            <Button size='large' variant='contained' onClick={() => openSite()} sx={{
                background: 'rgba(64,126,129, 1)',
                mt: '25px',
                borderRadius: '50%',
                '&:hover': {
                    background: 'rgba(64,126,129, 0.5)'
                }
            }}>
                View Resume
            </Button>

    
        </Container>
        </>
    )
}