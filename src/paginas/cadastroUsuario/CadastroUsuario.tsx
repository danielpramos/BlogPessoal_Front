import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import React, { ChangeEvent, useEffect, useState } from 'react';
import User from '../../models/User';
import './CadastroUsuario.css';
import { cadastroUsuario } from '../../services/Service';
import CarouselComponent from '../../components/carousel/CarouselComponent';
import { toast } from 'react-toastify';

function CadastroUsuario() {

    let history = useHistory();
    const[confirmarSenha, setConfirmarSenha] = useState<String>("");
    const[user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            foto: '',
            senha: ''
        });

    const[userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            foto: '',
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
            toast.success('Usuário cadastrado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }else{
            toast.error('Dados Inconsistentes. Favor verificar as informações de cadastro!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
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
                        <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth placeholder='Nome completo' required />
                        <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth placeholder='email@email.com' required/>
                        <TextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='foto' label='Imagem' variant='outlined' name='foto' margin='normal' fullWidth placeholder='Insira uma Url'/>
                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth placeholder='Senha de 8 digitos' required/>
                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='Confirmar Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth   placeholder='Confirmar senha de 8 digitos' required/>

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
                    </form>
                </Box>

            </Grid>

        </Grid>
    );
}

export default CadastroUsuario;