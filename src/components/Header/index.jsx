import React from 'react';
import { Container, Logo, Title } from "./style";

import logo from "../../assets/images/logo.png";

function Header(){

  return (
    <Container>
      <Logo src={logo} alt='Logo' />
      <Title>Coin Radar</Title>
    </Container>
  );
};

export default Header;
