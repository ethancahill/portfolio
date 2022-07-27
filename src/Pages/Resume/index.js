import { Container, Box, Card, Button, Grid, Typography } from "@mui/material";

export default function Resume() {
  const url =
    "https://docs.google.com/document/d/17SHnOYJvQ8A2AmoXKbVGVVZIAh5cdvwnu66DpSbtGRk/edit?usp=sharing";

  function openSite(url) {
    window.open(url, "_blank");
  }

  return (
    <>
      <Typography
        className="neon"
        sx={{
          textAlign: "center",
          fontSize: "4vw",
          padding: "10px",
        }}
      >
        My Resume
      </Typography>
      <Container
        sx={{
          maxWidth: "100%",
          mt: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: 'center'
        }}
      >
        <Card sx={{
            display: 'flex',
            flexDirection: 'column',
            alignText: 'center',
            alignItems: 'center',
            justifyContent: 'flex-start',
            maxWidth: '70%',
            borderRadius: '30%',
            backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)',
            opacity: '0.75'
        }}>
            <Box sx={{
                padding: '0.5vw',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent:'flex-start'
            }}>
              <Typography
                sx={{
                  fontSize: "30px",
                  borderTop: 'ridge 5px rgba(64,126,129, 1)',
                  alignText: 'center',
                }}
              >
                Languages: Javascript, HTML, CSS, SQL
              </Typography>
              <Typography
                sx={{
                  fontSize: "40px",
                  borderTop: 'ridge 5px rgba(64,126,129, 1)',
                  alignText: 'center'
                }}
              >
                Frameworks: React
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  borderTop: 'ridge 5px rgba(64,126,129, 1)',
                  alignText: 'center'
                }}
              >
                Other Tools: Mongoose, Sequelize, Node.js, Express.js, jQuery,
                Bootstrap, MongoDB
              </Typography>
              </Box>
        <Button
          size="large"
          variant="contained"
          onClick={() => openSite()}
          sx={{
            background: "rgba(64,126,129, 1)",
            mt: "25px",
            width: '100%',
            borderRadius: "5%",
            "&:hover": {
              background: "rgba(64,126,129, 0.5)",
            },
          }}
        >
          View Resume
        </Button>
        </Card>
       
      </Container>
    </>
  );
}
