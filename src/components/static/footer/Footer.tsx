import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Grid, Box, Typography } from "@material-ui/core";
import './Footer.css'

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#3F51B5", height: "120px" }}>

                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}> Siga-nos nas redes sociais</Typography>
                        </Box>

                        <Box  display="flex" alignItems="center" justifyContent="center">
                            <a className= "hover" href="https://www.linkedin.com/in/dnldev/" target="_blank" >
                                < LinkedInIcon style={{ fontSize: 50, color: "white" }} />
                            </a>

                            <a className= "hover" href="https://www.facebook.com/daniel.pinheiro.92102" target="_blank" >
                                < FacebookIcon style={{ fontSize: 50, color: "white" }} />
                            </a>

                            <a className= "hover" href="https://www.instagram.com/daniel_pinheiro5291/" target="_blank" >
                                < InstagramIcon style={{ fontSize: 50, color: "white", padding: "0px 2px" }} />
                            </a>

                            <a className= "hover" href="https://github.com/danielpramos" target="_blank" >
                                < GitHubIcon style={{ fontSize: 40, color: "white", paddingLeft: "5px"  }} />
                            </a>
                        </Box>

                        <Box style={{ backgroundColor: "#303F9F", height: "60px" }}>
                            <Box paddingTop={1}>
                                <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }}>© 2022 Copyright </Typography>
                            </Box>

                            <Box>
                                <a target="_blank" href="https://brasil.generation.org">
                                    <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }}>brasil.generation.org</Typography>
                                </a>
                            </Box>
                        </Box>


                    </Box>
                </Grid>
            </Grid>
        </>
    )

}

export default Footer;