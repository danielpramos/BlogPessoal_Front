import React from "react";
import { Grid, Box, Typography, Button } from "@material-ui/core";
import './Home.css';

function Home() {
    return (
        <>
            <Grid className= "homevh" container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#3F51B5" }}>
                <Grid alignItems="center" item xs={6}>

                    <Box paddingX={15}>
                        <Typography className= "fire" variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold", padding: "0px 5px" }}>Seja Bem Vindo</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Expresse aqui seus pensamentos e opiniões</Typography>
                    </Box>

                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button className= "hoverButton"variant="outlined" style={{ borderColor: "white", backgroundColor: "#3F51B5", color: "white" }}>Ver Postagens</Button>
                    </Box>

                </Grid>

                <Grid item xs={6}>
                
                <img src="https://media3.giphy.com/media/dyjrpqaUVqCELGuQVr/giphy.gif" alt="" width="500px" height="400px" />
                    {/* <img src="https://i.imgur.com/H88yIo2.png" alt="" width="450px" height="450px" /> */}
                </Grid>

                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>

            </Grid>

        </>
    );
};

export default Home;