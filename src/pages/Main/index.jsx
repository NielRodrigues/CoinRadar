import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from "./style";

import Header from '../../components/Header';
import Options from '../../components/Options';
import Convert from '../../components/Convert';

import { getConverterUSDBRL, getConverterEURBRL, getConverterBTCBRL } from '../../services/api';

function Main(){

  const location = useLocation();

  const [data, setData] = useState()
  const [load, setLoad] = useState(false)

  useEffect(() => {
    async function getData() {

      console.log('URL >>> ', window.location.href.split("?"))
      const URL = window.location.href.split("?")
      console.log(">>> Aqui", URL[1])

      if (URL[1] === "USD-BRL"){
        console.log('Chamou USD')
        const response = await getConverterUSDBRL();
        setData(response);
        setLoad(true)
      }

      if (URL[1] === "EUR-BRL"){
        console.log("É euro")
        const response = await getConverterEURBRL();
        setData(response);
        setLoad(true)
      }

      if (URL[1] === "BTC-BRL"){
        console.log("Bitcoin")
        const response = await getConverterBTCBRL();
        setData(response);
        setLoad(true)
      }
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

  return (

    <Container>
      <Header />
      <Options />
      <Convert data={data} />
    </Container>

  );
};

export default Main;
