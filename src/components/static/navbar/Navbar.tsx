import React from "react";
import { AppBar, Toolbar, Box, Typography } from "@material-ui/core"
import './Navbar.css'

function Navbar() {
    return (
        <>

            <AppBar position="static">
                <Toolbar className="container" variant="dense">

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} style={{ cursor: "pointer" }} >
                            <Typography variant="h5" color="inherit">
                                BlogPessoal
                            </Typography>
                        </Box>
                    </Box>

                    

                    <Box className="navSpace navPadding " display="flex" justifyContent="start">
                        <Box className="navPadding:hover" mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                    </Box>

                    <Box className="navPadding navPadding:hover" display="flex" justifyContent="start">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                    </Box>

                    <Box className="navPadding navPadding:hover" display="flex" justifyContent="start">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                    </Box>

                    <Box className="navPadding navPadding:hover" display="flex" justifyContent="start">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Cadastrar Tema
                            </Typography>
                        </Box>
                    </Box>

                    <Box className="navPaddingCanto navSpace " display="flex" justifyContent="start">
                        <Box className= "navPaddingCanto:hover" mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Login
                            </Typography>
                        </Box>
                    </Box>

                    <Box  className="navPaddingCanto" display="flex" justifyContent="start">
                        <Box className= "navPaddingCanto:hover" mx={1} style={{ cursor: "pointer" }}>
                            <Typography className="navPaddingCanto:hover" variant="h6" color="inherit">
                                Logout
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )

}

export default Navbar;