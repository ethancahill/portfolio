import { useState, useEffect } from "react";
import { Button, Typography, Grid, Box } from "@mui/material";
import { capitalizeFirstLetter } from "../../utils/helpers";
import { styled } from "@mui/material/styles";
import WebFont from "webfontloader";
import Logo from "./img/eec.png";
import "./css/style.css"

export default function NavBar(props) {
  const { setPage, page } = props;

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Gruppo"],
      },
    });
    document.title = capitalizeFirstLetter(page);
  }, [page]);

  const StyledButton = styled(Button)({
    fontFamily: "Gruppo",
    fontStyle: "bold",
    color: "white",
    padding: "0.25vw",
    minWidth: "1vw",
    border: 0,
    "&:hover": {
      background: "rgba(64,126,129, 0.25)",
      border: 0,
    },
    "&:active": {
      fontSize: "1.20vw",
      border: 0,
    },
    "&:focus": {
      border: 0,
    },
  });

  return (
    <>
      <Box className = 'navbar'
        sx={{
          background:
            "linear-gradient(#0f182b 0%,#2a3b53 33%,#2a3b53 66%,#0f182b 100%)",
        }}
      >
        <Grid className='navbar-grid'
          container
          spacing={0}  
        >
          <Grid item xs="auto">
            <Box
              component="img"
              sx={{
                "&:hover": {
                  opacity: "0.75",
                  cursor: "pointer",
                },
              }}
              alt="Cahill Portfolio Logo"
              src={Logo}
              onClick={() => setPage("about")}
            />
          </Grid>
          <Grid
            item
            xs="auto"
           
          >
            <StyledButton
              variant="outlined"
              onClick={() => setPage("portfolio")}
            >
              Portfolio
            </StyledButton>
          </Grid>
          <Grid
            item
            xs="auto"
        
          >
            <StyledButton variant="outlined" onClick={() => setPage("about")}>
              About Me
            </StyledButton>
          </Grid>
          <Grid
            item
            xs="auto"
            
          >
            <StyledButton variant="outlined" onClick={() => setPage("resume")}>
              Resume
            </StyledButton>
          </Grid>
          <Grid
            item
            xs="auto"
           
          >
            <StyledButton variant="outlined" onClick={() => setPage("contact")}>
              Contact
            </StyledButton>
          </Grid>
          <Grid
            item
            xs="auto"
            
          >
              By: Ethan Edward Cahill
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
