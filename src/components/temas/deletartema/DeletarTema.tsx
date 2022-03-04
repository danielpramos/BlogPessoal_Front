import React, { useEffect, useState } from 'react'
import {Box, Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import './DeletarTema.css';
import { useHistory, useParams } from 'react-router-dom';
import { buscaId, deleteId } from '../../../services/Service';
import Tema from '../../../models/Tema';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';


function DeletarTema() {

  let history = useHistory();
    const {id} = useParams<{id: string}>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
  );

    const[tema, setTema] = useState<Tema>();

    useEffect(()=>{
        if(token === ""){
            alert("Você precisa estar logado!");
            history.push("/login");
        }
    }, [token]) 

    useEffect(() => { 
        if(id !== undefined){
            findById(id)
        }
    },[ id ])



    async function findById(id: string  ){
        buscaId(`/temas/${id}`, setTema, {
            headers: {
                'Authorization': token
            }
        })
    }

        function sim(){
          history.push('/temas')
          deleteId(`/temas/${id}`, {
            headers: {
              'Authorization': token
            }
          })
          alert('Tema excluido com sucesso!')
        }

        function nao(){
          history.push('/temas')

        }

          
  return (
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar o Tema:
              </Typography>
              <Typography color="textSecondary">
                {tema?.descricao}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
                <Button variant="contained" className="marginLeft" size='large' color="primary" onClick={sim}>
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Button variant="contained" size='large' color="secondary" onClick={nao}>
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarTema;