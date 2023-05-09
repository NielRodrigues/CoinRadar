import React, {useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Currency, CurrencyAndPct, CurrencyValue, LastUpdate, Pct, PctAndInfo, PrefixCurrency, Text, Value, DateUpdate } from "./style";

import { ReactComponent as ClockIcon} from "../../assets/images/clock.svg";

function Convert({ data }){

  const date = new Date();
  const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
  const [value, setValue] = useState(1);


  return (
    <Container>
      <LastUpdate>
        <ClockIcon />
        <DateUpdate>Última Atualização: {date.getDate(data.create_date)} de {months[date.getMonth(data.create_date)]} | {date.getHours(data.create_date)}:{date.getMinutes(data.create_date)}</DateUpdate>
      </LastUpdate>
      <CurrencyAndPct>
        <Currency>
          <PrefixCurrency>{data.code}</PrefixCurrency>
          <CurrencyValue value={value} type='number' min={1} onChange={(event) => setValue(event.target.value)} />
        </Currency>
      </CurrencyAndPct>

      {
        data.pctChange >= 0 ?
        (
          <PctAndInfo>
            <Pct className='earn'>+{data.pctChange}%</Pct>
            <Pct className='earn'>+{data.varBid} Hoje</Pct>
          </PctAndInfo>
        )
        :
        (
          <PctAndInfo>
            <Pct className='loss'>{data.pctChange}%</Pct>
            <Pct className='loss'>{data.varBid} Hoje</Pct>
          </PctAndInfo>
        )
      }

      <Text>{data.name.split("/")[0]} equivale a:</Text>

      <Value>BRL {(Number(data.bid) * value).toFixed(2)}</Value>

      <Button type='button'>Converter</Button>
    </Container>
  );
};

Convert.propTypes = {
  data: PropTypes.shape({
    code: PropTypes.string.isRequired,
    pctChange: PropTypes.string.isRequired,
    varBid: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bid: PropTypes.string.isRequired,
    create_date: PropTypes.string.isRequired,
  }).isRequired,
};

export default Convert;
