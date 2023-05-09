import React from 'react';
import { Button, Container, Currency, CurrencyAndPct, CurrencyValue, LastUpdate, Pct, PctAndInfo, PrefixCurrency, Text, Value, DateUpdate } from "./style";

import { ReactComponent as ClockIcon} from "../../assets/images/clock.svg";

function Convert(){

  return (
    <Container>
      <LastUpdate>
        <ClockIcon />
        <DateUpdate>Última Atualização: 9 de Maio | 15:36</DateUpdate>
      </LastUpdate>
      <CurrencyAndPct>
        <Currency>
          <PrefixCurrency>USD</PrefixCurrency>
          <CurrencyValue type='number' min={1} />
        </Currency>
      </CurrencyAndPct>

      <PctAndInfo>
        <Pct className='loss'>-0.52%</Pct>
        <Pct className='loss'>-0.00290 Hoje</Pct>
      </PctAndInfo>

      <Text>Dolár Americano equivale a:</Text>

      <Value>BRL 4.98</Value>

      <Button type='button'>Converter</Button>
    </Container>
  );
};

export default Convert;
