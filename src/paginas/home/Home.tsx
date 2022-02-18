import React from "react";
import { Grid, Box, Typography, Button } from "@material-ui/core";
import './Home.css';

function Home() {
    return (
        <>
            <Grid className="homevh caixa" container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={6}>

                    <Box paddingX={15}>
                        <Typography className="fire titulo" variant="h3" gutterBottom color="textPrimary" component="h3" align="center">Seja Bem Vindo</Typography>
                        <Typography className='titulo' variant="h5" gutterBottom color="textPrimary" component="h3" align="center" >Expresse aqui seus pensamentos e opiniões</Typography>
                    </Box>

                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button className="hoverButton button" variant="outlined" >Ver Postagens</Button>
                    </Box>

                </Grid>

                <Grid item xs={6}>
                    <img src="https://media3.giphy.com/media/dyjrpqaUVqCELGuQVr/giphy.gif" alt="" width="500px" height="400px" />
                    {/* <img src="https://i.imgur.com/H88yIo2.png" alt="" width="450px" height="450px" /> */}
                </Grid>

                <Grid xs={12} className='postagens'>
                </Grid>

            </Grid>

        </>
    );
};

export default Home;