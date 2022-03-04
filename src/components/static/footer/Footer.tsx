import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Grid, Box, Typography } from "@material-ui/core";
import './Footer.css'
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";

function Footer() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if(token != ""){

        footerComponent =
        <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>

                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h6" align="center" gutterBottom className="textos"> Siga-nos nas redes sociais</Typography>
                        </Box>

                        <Box  display="flex" alignItems="center" justifyContent="center">
                            <a className= "hover" href="https://www.linkedin.com/in/dnldev/" target="_blank" >
                                < LinkedInIcon className="redes1"/>
                            </a>

                            <a className= "hover" href="https://www.facebook.com/daniel.pinheiro.92102" target="_blank" >
                                < FacebookIcon className="redes1" />
                            </a>

                            <a className= "hover" href="https://www.instagram.com/daniel_pinheiro5291/" target="_blank" >
                                < InstagramIcon className="redes2" />
                            </a>

                            <a className= "hover" href="https://github.com/danielpramos" target="_blank" >
                                < GitHubIcon className="redes3" />
                            </a>
                        </Box>

                        <Box className="box2">
                            <Box paddingTop={1}>
                                <Typography variant="subtitle2" align="center" gutterBottom className="textos">© 2022 Copyright </Typography>
                            </Box>

                           <Box>
                                <a target="_blank" href="https://brasil.generation.org">
                                    <Typography variant="subtitle2" align="center" gutterBottom className="textos">brasil.generation.org</Typography>
                                </a>
                            </Box>
                        </Box>


                    </Box>
                </Grid>
            </Grid>

    }


    return (
        <>
        {footerComponent}
            
        </>
    )

}

export default Footer;