import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import React, { ChangeEvent, useEffect, useState } from 'react';
import User from '../../models/User';
import './CadastroUsuario.css';
import { cadastroUsuario } from '../../services/Service';
import CarouselComponent from '../../components/carousel/CarouselComponent';

function CadastroUsuario() {

    let history = useHistory();
    const[confirmarSenha, setConfirmarSenha] = useState<String>("");
    const[user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        });

    const[userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '' 
        });  
        
     useEffect(() => {
         if(userResult.id !== 0){
             history.push('/login')
             console.log(userResult)
         }
     }, [userResult]);
     
    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(e.target.value)
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>){
        
        setUser({
            ...user,
            [e.target.name]: e.target.value

        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        if(confirmarSenha === user.senha && user.senha.length >= 8){
            cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            alert('Usuário cadastrado com sucesso')
        }else{
            alert('Dados Inconsistentes. Favor verificar as informações de cadastro')
        }
        
    }

    return (

        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} > {/* className='imagem2' */}
                <CarouselComponent/>
            </Grid>
            <Grid item xs={6} className=''>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2' >Cadastrar</Typography>
                        <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth required placeholder='Nome completo' />
                        <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth required placeholder='email@email.com'/>
                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth required placeholder='Senha de 8 digitos'/>
                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth  required placeholder='Confirmar senha de 8 digitos'/>

                    </form>
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login'className='text-decorator-none'>
                                <Button variant='contained' color='secondary'className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>

                            <Button type='submit' variant='contained' color='primary'>
                                Cadastrar
                            </Button>
                        </Box>
                </Box>

            </Grid>

        </Grid>
    );
}

export default CadastroUsuario;