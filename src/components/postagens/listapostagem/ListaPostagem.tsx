import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Box, Card, CardActions, CardContent, Button, Typography, Grid, Avatar } from '@material-ui/core';
import './ListaPostagem.css';
import Postagem from '../../../models/Postagem';
// import User from '../../../models/User'
import { busca, buscaId } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/user/userReducer';
import { toast } from 'react-toastify';

function ListaPostagem() {
    let history = useHistory();
    const [postagens, setPostagens] = useState<Postagem[]>([]);
    // const [users, setUsers] = useState<User[]>([]);
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == '') {
            toast.error('Você precisa estar logado!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            history.push('/login')
        }
    }, [token])

    async function getPostagem() {
        await busca("/postagens", setPostagens, {
            headers: {
                'Authorization': token
            }
        })
    }
    // async function getUser() {
    //     await buscaId(`/usuarios/${id}`, setUsers, {
    //         headers: {
    //             'Authorization': token
    //         }
    //     })
    // }

    // useEffect(() => {
    //     getPostagem();
    // }, [users.length])

    useEffect(() => {
        getPostagem();
    }, [postagens.length])


    return (
        <>
            {
                postagens.map(postagem => (
                    <Box m={2}>
                        <Card variant='outlined'>
                            <CardContent className='avatar'>
                                <Grid className='conteudo'>
                                    <Typography color='textSecondary' gutterBottom>
                                        Postagens
                                    </Typography>

                                    <Typography variant='h5' component='h2' gutterBottom>
                                        {postagem.titulo} 
                                    </Typography>

                                    <Typography variant='body2' component='p'>
                                        {postagem.data}
                                    </Typography>
                                    <Typography variant='body2' component='p' gutterBottom>
                                        {postagem.texto}
                                    </Typography>
                                    <Typography variant='body2' component='p'>
                                        Tema: {postagem.tema?.descricao}
                                    </Typography>
                                </Grid>
                                <Grid className='usuario'>
                                    <Box className='usuarioNome'>
                                        <Typography variant='body2' component='p'>
                                            {postagem.usuario?.nome}
                                        </Typography>
                                        <Typography variant='body2' component='p'>
                                            {postagem.usuario?.usuario}
                                        </Typography>
                                    </Box>

                                    <Box >
                                        <Avatar alt="Remy Sharp" src={postagem.usuario?.foto} />
                                    </Box>
                                </Grid>

                            </CardContent>
                            <CardActions className='botaoEsquerda'>
                                <Box  display='flex' justifyContent='center' mb={1.5}>
                                    <Link to={`/formularioPostagem/${postagem.id}`} className='text-decorator-none'>
                                        <Box mx={1}>
                                            <Button variant='contained' className='marginLeft' size='small' color='primary'>
                                                Atualizar
                                            </Button>
                                        </Box>
                                    </Link>

                                    <Link to={`/deletarPostagem/${postagem.id}`} className='text-decorator-none'>
                                        <Box mx={1}>
                                            <Button variant='contained' size='small' color='secondary'>
                                                Deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>

                ))
            }
        </>
    );
}

export default ListaPostagem;