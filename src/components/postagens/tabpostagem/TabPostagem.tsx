import React, { useState} from 'react';
import { Box, AppBar, Tab, Tabs, Typography } from "@material-ui/core";
import { TabContext, TabPanel } from "@material-ui/lab";
import ListaPostagem from "../listapostagem/ListaPostagem";
import './TabPostagem.css';

function TabPostagem() {
    const[value, setValue]= useState('1');
    function HandleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue); 

    }

    return (
        <>
            <TabContext value={value}>
                <AppBar position="static">
                    <Tabs centered indicatorColor="secondary" onChange={HandleChange}>
                        <Tab label="Todas as postagens" value="1" />
                        <Tab label="Sobre nós" value="2" />
                    </Tabs>
                </AppBar>

                <TabPanel value="1">
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaPostagem />
                    </Box>
                </TabPanel>

                <TabPanel value="2">
                    <Typography variant="h5" gutterBottom color="textPrimary" component="h5"
                        align="center" className="tituloTab">Sobre-nós</Typography>
                    <Typography variant="body1" gutterBottom color="textPrimary" align="justify"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro exercitationem consequatur corrupti pariatur amet, quod excepturi officiis sunt. Quo recusandae fugit eius, corrupti totam porro velit ipsa nostrum assumenda! Blanditiis!</Typography>
                </TabPanel>

            </TabContext>
        </>
    );
}

export default TabPostagem;