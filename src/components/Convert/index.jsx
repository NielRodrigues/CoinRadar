import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Currency, CurrencyAndPct, CurrencyValue, LastUpdate, Pct, PctAndInfo, PrefixCurrency, Text, Value, DateUpdate } from "./style";

import { ReactComponent as ClockIcon} from "../../assets/images/clock.svg";

function Convert({ data }){

  console.log('Testando... ')
  console.log(data)
  return (
    <Container>
      <LastUpdate>
        <ClockIcon />
        <DateUpdate>Última Atualização: 9 de Maio | 15:36</DateUpdate>
      </LastUpdate>
      <CurrencyAndPct>
        <Currency>
          <PrefixCurrency>{data.USDBRL.code}</PrefixCurrency>
          <CurrencyValue type='number' min={1} />
        </Currency>
      </CurrencyAndPct>

      <PctAndInfo>
        <Pct className='loss'>{data.USDBRL.pctChange}%</Pct>
        <Pct className='loss'>{data.USDBRL.varBid} Hoje</Pct>
      </PctAndInfo>

      <Text>{data.USDBRL.name.split("/")[0]} equivale a:</Text>

      <Value>BRL 4.98</Value>

      <Button type='button'>Converter</Button>
    </Container>
  );
};

Convert.propTypes = {
  data: PropTypes.shape({
    USDBRL: PropTypes.shape({
      code: PropTypes.string.isRequired,
      pctChange: PropTypes.string.isRequired,
      varBid: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Convert;
