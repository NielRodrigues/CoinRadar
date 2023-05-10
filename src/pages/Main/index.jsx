/* eslint-disable no-unused-expressions */
import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Title } from "./style";


import Header from '../../components/Header';
import Options from '../../components/Options';
import Convert from '../../components/Convert';

import { getConverter } from '../../services/api';

function Main(){

  const location = useLocation();

  const [data, setData] = useState()
  const [load, setLoad] = useState(false)
  const [errorCode, setErrorCode] = useState(false)

  useEffect(() => {
    async function getData() {

      console.log('URL >>> ', window.location.href.split("?"))
      const URL = window.location.href.split("?")
      console.log(">>> Aqui", URL[1])



      const response = await getConverter(URL[1]);
      setData(response);

      response.code === "CoinNotExists" ? setErrorCode(true) : setErrorCode(false)

      setLoad(true)
    }
    getData();
  }, [location])

  if(!load){
    return(
      <Container>
        <Header />
        <Options />
        Carregando...
      </Container>
    )
  }

  if(errorCode){
    return(
      <Container>
        <Header />
        <Options />
        <Title>Não foi possível fazer a conversão dessas moedas.</Title>
      </Container>
    )
  }

  return (

    <Container>
      <Header />
      <Options />
      <Convert data={data} />
    </Container>

  );
};

export default Main;
