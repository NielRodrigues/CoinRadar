import React from 'react';
import { Container, SectionSelection, SelectCurrency, Title, OptionCurrency } from "./style";

function Options(){

  return (
    <Container>
      <SectionSelection>
        <Title>Converter</Title>
        <SelectCurrency>
          <OptionCurrency value="BRL" selected>Real Brasileiro</OptionCurrency>
          <OptionCurrency value="USD">Dólar Americano</OptionCurrency>
        </SelectCurrency>
      </SectionSelection>

      <SectionSelection>
        <Title>Para</Title>
        <SelectCurrency>
          <OptionCurrency value="BRL">Real Brasileiro</OptionCurrency>
          <OptionCurrency value="USD" selected>Dólar Americano</OptionCurrency>
        </SelectCurrency>
      </SectionSelection>
    </Container>
  );
};

export default Options;
