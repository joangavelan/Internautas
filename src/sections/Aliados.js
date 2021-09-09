import React from "react";
import styled from "styled-components/macro";
import theme from "../styles//theme";
import media from "../styles/media";
import { aliados } from "../data/aliados";
import Heading from "../components/Heading";
const { colors } = theme;

const Container = styled.section`
  background: url("images/pesca en el mar de chimbote.jpg") no-repeat bottom;
  background-size: cover;
  padding: 10rem 3rem;
  height: 120.8rem;

  ${media.phone`
    background: url('images/mobile/pesca en el mar de chimbote.jpg') no-repeat bottom;
    background-size: contain;
    height: 170rem;
  `}
`;

const List = styled.ul`
  max-width: 82rem;
  height: 28.4rem;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  list-style: none;
  padding: 2rem 0;
  border-top: 1px solid ${colors.black};
  border-bottom: 1px solid ${colors.black};

  & > li {
    font-size: 1.5rem;
  }

  ${media.tablet`
    height: auto;
    text-align: center;
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
  `}
`;

const Link = styled.a`
  display: block;
  margin: 0 auto;
  text-align: center;
  width: 11rem;
  padding: 7px;
  font-size: 1.8rem;
  color: #fff;
  background-color: ${colors.blue};
  border-radius: 50rem;
  transition: 0.3s ease;
  border: 1px solid ${colors.blue};
  outline: none;

  ${media.phone`
    font-size: 1.5rem;
    padding: 5px;
  `}

  &:hover {
    color: ${colors.blue};
    background-color: #fff;
    border: 1px solid ${colors.blue};
  }
`;

const Aliados = () => {
  return (
    <Container id="aliados">
      <Heading
        title="Aliados"
        tagline="Juntos por el bien común"
        description="Articulamos esfuerzos, conectando emprendimientos. Producimos valor cultural, compartiendo creatividad. Generando oportunidades, para el bien común."
        colors={{ title: "black", text: "black" }}
        width="82rem"
      />

      <List>
        {aliados.map((aliado, index) => (
          <li key={index}>{aliado}</li>
        ))}
      </List>

      <Link
        href="https://docs.google.com/forms/d/e/1FAIpQLSfkVzm8qDEU6sPQzhaXerne76RjraIhMAA4ILaQhWXEbeHmlQ/viewform"
        target="_blank"
        rel="noreferrer"
      >
        Unirme
      </Link>
    </Container>
  );
};

export default Aliados;