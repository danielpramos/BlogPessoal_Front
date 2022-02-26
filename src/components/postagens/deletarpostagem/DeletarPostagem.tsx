import React, { useEffect, useState } from 'react'
import { Typography, Button, Box, Card, CardActions, CardContent } from "@material-ui/core"
import './DeletarPostagem.css';
import Postagem from '../../../models/Postagem';
import { useHistory, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { buscaId, deleteId } from '../../../services/Service';

function DeletarPostagem() {

  let history = useHistory();
  const { id } = useParams<{ id: string }>();
  const [token, setToken] = useLocalStorage('token');

  const [postagem, setPostagem] = useState<Postagem>();

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado!");
      history.push("/login");
    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      findById(id)
    }
  }, [id])



  async function findById(id: string) {
    buscaId(`/postagens/${id}`, setPostagem, {
      headers: {
        'Authorization': token
      }
    })
  }

  function sim() {
    history.push('/postagens')
    deleteId(`/postagens/${id}`, {
      headers: {
        'Authorization': token
      }
    })
    alert('Postagem excluida com sucesso!')
  }

  function nao() {
    history.push('/postagens')

  }

  return (
    <>
      <Box m={2}>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar a Postagem:
              </Typography>
              <Typography color="textSecondary" >
                {postagem?.titulo}
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
              <Box>
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
export default DeletarPostagem;