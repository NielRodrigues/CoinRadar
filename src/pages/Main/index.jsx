import React, {useState, useEffect} from 'react';
import { Container } from "./style";
import Header from '../../components/Header';
import Options from '../../components/Options';
import Convert from '../../components/Convert';

import { getConverter } from '../../services/api';

function Main(){

  const [data, setData] = useState()

  useEffect(() => {
    async function getData() {
      const response = await getConverter("USD-BRL");
      setData(response);
    }
    getData();
    console.log("\n\n\n =============================== \n\n\n")
    console.log(data.USDBRL.code)
    console.log("\n\n\n =============================== \n\n\n")
  }, [])



  return (

    <Container>
      <Header />
      <Options />
      <Convert data={data} />
    </Container>

  );
};

export default Main;
