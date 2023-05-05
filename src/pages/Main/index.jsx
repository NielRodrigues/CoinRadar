import React from "react";
import { Container, Logo, Title, Subtitle, Link} from "./style";
import logo from "../../assets/images/logo.png";

function Main(){
  return (

    <Container>
      <Logo src={logo} alt="logo" />
      <Title>Olá Mundo, esse é o Template da RocketStack<span>.</span></Title>
      <Subtitle>FEITO POR CARLOS RODRIGUES</Subtitle>
      <Link
        href="https://carlosdanieldev.netlify.app/"
        target="_blank"
        className="portfolio-link"
        rel="noreferrer"
      >
        &copy; PORTIFÓLIO
      </Link>
    </Container>

  );
};

export default Main;
