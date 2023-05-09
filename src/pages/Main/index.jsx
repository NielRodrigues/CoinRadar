import React from 'react';
import { Container } from "./style";
import Header from '../../components/Header';
import Options from '../../components/Options';
import Convert from '../../components/Convert';

function Main(){

  return (

    <Container>
      <Header />
      <Options />
      <Convert />
    </Container>

  );
};

export default Main;
