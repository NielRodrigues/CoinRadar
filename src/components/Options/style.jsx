import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;

export const SectionSelection = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  margin-left: 16px;
  color: #1c1f28;
`;

export const SelectCurrency = styled.select`
  width: 100%;
  padding-left: 8px;
  height: 48px;
  border: none;
  border-radius: 24px;
  font-size: 16px;
  background-color: #F0F0F0;
  color: #1c1f28;
  font-family: 'Sora', sans-serif;
`;

export const OptionCurrency = styled.option``;
