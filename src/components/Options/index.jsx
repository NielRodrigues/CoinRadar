import React, {useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, SectionSelection, SelectCurrency, Title, OptionCurrency } from "./style";

function Options(){
  const navigate = useNavigate();
  const currencyToConverter = useRef();
  const currencySelected = useRef();

  const paramsConverter = (event) => {
    console.log(event.target.value)
    navigate(`?${event.target.value}-BRL`);
  }

  return (
    <Container>
      <SectionSelection>
        <Title>Converter</Title>
        <SelectCurrency ref={currencyToConverter} onChange={paramsConverter}>
          <OptionCurrency value="USD" selected>Dólar Americano</OptionCurrency>
          <OptionCurrency value="EUR" selected>Euro</OptionCurrency>
          <OptionCurrency value="BTC" selected>Bitcoin</OptionCurrency>
        </SelectCurrency>
      </SectionSelection>

      <SectionSelection>
        <Title>Para</Title>
        <SelectCurrency ref={currencySelected}>
          <OptionCurrency value="BRL" selected>Real Brasileiro</OptionCurrency>
        </SelectCurrency>
      </SectionSelection>
    </Container>
  );
};



export default Options;
