import React from "react";
import { Grid, Box, Typography, Button } from "@material-ui/core";
import './Home.css';
import TabPostagem from "../../components/postagens/tabpostagem/TabPostagem";
import CarouselComponent from "../../components/carousel/CarouselComponent";

function Home() {
    return (
        <>
            <Grid className="homevh caixa" container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={6}>

                    <Box paddingX={15} className=''>
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
                    {/* <img src="https://media3.giphy.com/media/dyjrpqaUVqCELGuQVr/giphy.gif" alt="" width="500px" height="400px" /> */}
                    {/* <img src="https://i.imgur.com/H88yIo2.png" alt="" width="450px" height="450px" /> */}
                </Grid>




            </Grid>
            <Grid xs={12} direction='column' justifyContent="center" alignItems="center">
                <Grid xs={12} className="fire titulo2" alignItems='center' justifyContent="center">
                    <Typography  variant="h3">
                        Comente e contribua com a Comunidade!
                    </Typography>
                    <Typography  className='titulo3' variant="h5">
                        Diversos temas como: Animes, Filmes, Seriados!
                    </Typography>
                </Grid>
                <Grid>
                <CarouselComponent />

                </Grid>

            </Grid>
            <Grid xs={12} className='postagens'>
                <TabPostagem />
            </Grid>



        </>
    );
};

export default Home;