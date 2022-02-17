import React from 'react';
import Navbar from './components/static/navbar/Navbar';
import Footer from './components/static/footer/Footer';
import './App.css';
import Home from './paginas/home/Home';
import { Grid } from '@material-ui/core'



function App() {
  return (
    <Grid className="telavh">
      <Navbar />
      <Home />
      <Footer />
    </Grid>
  );
};

export default App;
