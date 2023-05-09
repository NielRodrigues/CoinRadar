import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 8px;
`;

export const Logo = styled.img`
  position: absolute;
  left: 8px;
  height: 32px;
  width: 32px;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: #1c1f28;
`;
