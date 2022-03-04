import React, { ChangeEvent, useEffect, useState } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom';
import { login } from '../../services/Service';
import './Login.css';
import UserLogin from '../../models/UserLogin';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';
import CarouselComponent from '../../components/carousel/CarouselComponent';


function Login() {
    let history = useHistory();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');

    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

        useEffect(() => {
            if (token !== '') {
                dispatch(addToken(token))
                history.push('/home')
            }
        }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            await login(`/usuarios/logar`, userLogin, setToken )

            alert('Usuário logado com sucesso!')
        } catch (error) {
            alert('Dados do usuário inconsistentes.Erro ao logar!')

        }

        console.log('userLogin:' + Object.values(userLogin));

    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1' >Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth  placeholder='email@email.com' />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth placeholder='Senha de 8 dígitos' />

                        <Box marginTop={2} textAlign='center'>

                            <Button type='submit' variant='contained' color='primary'>
                                Logar
                            </Button>

                        </Box>
                    </form>

                    <Box display='flex' alignItems='center' marginTop={2}>
                        <Box marginLeft={3}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>

                        <Link to='/cadastrousuario' >
                            <Typography variant='subtitle1' gutterBottom align='center' className="textos1" >Cadastre-se</Typography>
                        </Link>

                    </Box>

                </Box>
            </Grid>
            <Grid xs={6} >  {/*className='imagem'*/}
                <CarouselComponent/>
            </Grid>
        </Grid>
    );

}

export default Login;