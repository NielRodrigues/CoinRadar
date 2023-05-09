import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  height: 100%;
`;

export const LastUpdate = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 64px;
  margin: 0;

  svg{
    width: 16px;
    height: 16px;
    margin-right: 4px;

    path{stroke: #1c1f28;}
  }
`;

export const DateUpdate = styled.h4`
  font-size: 16px;
  font-weight: 400;
  color: #1c1f28;
  margin: 0;
`;

export const CurrencyAndPct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
`;

export const Currency = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const PrefixCurrency = styled.h1`
  font-size: 28px;
  font-weight: 600;
  color: #1c1f28;
  margin: 0;
  margin-right: 8px;
  padding: 0;
`;

export const CurrencyValue = styled.input`
  height: 28px;
  width: 128px;
  border: none;
  outline: none;
  font-size: 28px;
  font-weight: 600;
  color: #1c1f28;
  background-color: transparent;
  margin: 0;
  padding: 0;
  font-family: 'Sora', sans-serif;
`;

export const PctAndInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const Pct = styled.h2`
  font-size: 12px;
  color: #FFF;
  padding: 4px;
  padding-right: 8px;
  padding-left: 8px;
  border-radius: 8px;
  margin: 4px;

  &.earn{background-color: #29c262;}
  &.loss{background-color: #f1564d;}
`;

export const Text = styled.h3`
  color: #1c1f28;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  margin: 0;
`;

export const Value = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: #FFF;
  margin: 0;
  margin-top: 16px;
  padding: 8px;
  padding-right: 20px;
  padding-left: 20px;
  border-radius: 20px;
  background-color: #236bfe;
`;

export const Button = styled.button`
  font-size: 16px;
  font-weight: 600;
  color: #FFF;
  width: 100%;
  height: 48px;
  border-radius: 20px;
  background-color: #232631;
  font-family: 'Sora', sans-serif;
  border: none;
  outline: none;
  margin-top: 24px;
  transition: all .4s;
  cursor: pointer;
  position: absolute;
  bottom: 8px;

  &:hover{background-color: #232631f0;}
  &:active{background-color: #232631;}

`;
