import React from "react";
import { AppBar, Toolbar, Box, Typography } from "@material-ui/core"
import { Link, useHistory } from "react-router-dom";
import './Navbar.css'
import { useDispatch, useSelector } from "react-redux";
import { UserState } from "../../../store/user/userReducer";
import { addToken } from "../../../store/user/action";
import { toast } from 'react-toastify';

function Navbar() {
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );
    let history = useHistory();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''))
        toast.info('Usuário foi deslogado com sucesso!!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        history.push("/login");
    }

    var navBarComponent;

    if (token != "") {

        navBarComponent =
            <AppBar position="static" className="backgroundNavmar">
                <Toolbar className="container" variant="dense">

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} className='cursor logoImg'>

                            {/* <Typography variant="h5" color="inherit">
                                OtakuGeek
                            </Typography> */}
                        </Box>
                    </Box>


                    <Link to='/home' className='text-decorator-none navSpaceLeft navPadding'>
                        <Box display="flex" justifyContent="center">
                            <Box className="navPadding:hover cursor" mx={1} >
                                <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Box>
                        </Box>
                    </Link>

                    <Link to='/postagens' className='text-decorator-none'>
                        <Box className="navPadding navPadding:hover" display="flex" justifyContent="start">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Postagens
                                </Typography>
                            </Box>
                        </Box>
                    </Link>

                    <Link to='/temas' className='text-decorator-none'>
                        <Box className="navPadding navPadding:hover" display="flex" justifyContent="start">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Temas
                                </Typography>
                            </Box>
                        </Box>
                    </Link>

                    <Link to='/formularioTema' className='text-decorator-none'>
                        <Box className="navPadding navPadding:hover navSpaceRight" marginRight='auto' display="flex" justifyContent="start">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Criar Tema
                                </Typography>
                            </Box>
                        </Box>
                    </Link>

                    <Link to='/perfil' className='text-decorator-none'>
                        <Box className="navPadding navPadding:hover navSpaceRight" marginRight='auto' display="flex" justifyContent="start">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Perfil
                                </Typography>
                            </Box>
                        </Box>
                    </Link>


                    <Box className="navPaddingCanto navSpaceLeft" display="flex" justifyContent="start" onClick={goLogout}>
                        <Box className="navPaddingCanto:hover " mx={1} paddingLeft='auto'>
                            <Typography className="navPaddingCanto:hover" variant="h6" color="inherit">
                                Logout
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>

    }



    return (
        <>
            {navBarComponent}

        </>
    )

}

export default Navbar;