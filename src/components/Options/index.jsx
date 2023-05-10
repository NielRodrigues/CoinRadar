import React, {useRef, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, SectionSelection, SelectCurrency, Title, OptionCurrency } from "./style";

function Options(){
  const navigate = useNavigate();
  const currencyToConverter = useRef();
  const currencySelected = useRef();

  const paramsConverter = () => {
    navigate(`?${currencyToConverter.current.value}-${currencySelected.current.value}`);
  }

  useEffect(() => {
    paramsConverter();
  }, [navigate])

  return (
    <Container>
      <SectionSelection>
        <Title>Converter</Title>
        <SelectCurrency ref={currencyToConverter} onChange={paramsConverter}>
          <OptionCurrency value="BRL">Real Brasileiro</OptionCurrency>
          <OptionCurrency value="USD" selected>Dólar Americano</OptionCurrency>
          <OptionCurrency value="EUR">Euro</OptionCurrency>
          <OptionCurrency value="BTC">Bitcoin</OptionCurrency>
          <OptionCurrency value="ETH">Ethereum</OptionCurrency>
          <OptionCurrency value="DOGE">Dogecoin</OptionCurrency>
          <OptionCurrency value="CAD">Dolár Canadense</OptionCurrency>
          <OptionCurrency value="GBP">Libra Esterlina</OptionCurrency>
          <OptionCurrency value="ARS">Peso Argentino</OptionCurrency>
          <OptionCurrency value="JPY">Iene Japonês</OptionCurrency>
          <OptionCurrency value="CHF">Franco Suíço</OptionCurrency>
          <OptionCurrency value="AUD">Dólar Australiano</OptionCurrency>
          <OptionCurrency value="CNY">Yuan Chinês</OptionCurrency>
          <OptionCurrency value="AED">Dirham dos Emirados</OptionCurrency>
          <OptionCurrency value="HKD">Dólar de Hong Kong</OptionCurrency>
          <OptionCurrency value="MXN">Peso Mexicano</OptionCurrency>
          <OptionCurrency value="CLP">Peso Chileno</OptionCurrency>
          <OptionCurrency value="PYG">Guarani Paraguaio</OptionCurrency>
          <OptionCurrency value="UYU">Peso Uruguaio</OptionCurrency>
        </SelectCurrency>
      </SectionSelection>

      <SectionSelection>
        <Title>Para</Title>
        <SelectCurrency ref={currencySelected} onChange={paramsConverter}>
          <OptionCurrency value="BRL" selected>Real Brasileiro</OptionCurrency>
          <OptionCurrency value="USD">Dólar Americano</OptionCurrency>
          <OptionCurrency value="EUR">Euro</OptionCurrency>
          <OptionCurrency value="CAD">Dolár Canadense</OptionCurrency>
          <OptionCurrency value="GBP">Libra Esterlina</OptionCurrency>
          <OptionCurrency value="ARS">Peso Argentino</OptionCurrency>
          <OptionCurrency value="JPY">Iene Japonês</OptionCurrency>
          <OptionCurrency value="CHF">Franco Suíço</OptionCurrency>
          <OptionCurrency value="AUD">Dólar Australiano</OptionCurrency>
          <OptionCurrency value="CNY">Yuan Chinês</OptionCurrency>
          <OptionCurrency value="AED">Dirham dos Emirados</OptionCurrency>
          <OptionCurrency value="HKD">Dólar de Hong Kong</OptionCurrency>
          <OptionCurrency value="MXN">Peso Mexicano</OptionCurrency>
          <OptionCurrency value="CLP">Peso Chileno</OptionCurrency>
          <OptionCurrency value="PYG">Guarani Paraguaio</OptionCurrency>
          <OptionCurrency value="UYU">Peso Uruguaio</OptionCurrency>
        </SelectCurrency>
      </SectionSelection>
    </Container>
  );
};



export default Options;
