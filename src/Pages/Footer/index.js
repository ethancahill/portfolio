import {Container, Button} from '@mui/material'



export default function Footer() {

function sendWebsite(url){
        window.open(url, '_blank')
}

    return(
        <>
            <Container sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                width: '100%', 
                       
                }}>
                    <Button size='large' sx={{
                        width: '100%',
                        height: '7vh',
                        fontSize: '6vh',
                        color: '#407e81',
                        mt: '5vh'
                    }}
                    onClick={() => sendWebsite('https://www.github.com/ethancahill')}>Github</Button>
                    <Button size='large' sx={{
                        width: '100%',
                        height: '7vh',
                        fontSize: '6vh',
                        color: '#407e81',
                        mt:'5vh'
                    }}
                    onClick={() => sendWebsite('https://www.linkedin.com/in/ethan-cahill-49b485231')}>LinkedIn</Button>
                    

</Container>
        </>
    )
}