import React from 'react'
import styled from 'styled-components/macro'
import theme from '../styles//theme'
import { aliados } from '../data/aliados'
import media from '../styles//media'
import Heading from '../components/Heading'
const { colors } = theme

const Container = styled.section`
  min-height: 100vh;
  background: url('images/pesca en el mar de chimbote.jpg') no-repeat bottom;
  background-size: cover;
  padding: 10rem 3rem;
`

const List = styled.ul`
  max-width: 82rem;
  height: 31.5rem;
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
`

const Button = styled.button`
  display: block;
  width: 12rem;
  padding: 1rem;
  margin: 0 auto;
  font-size: 1.6rem;
  font-weight: 600;
  color: #fff;
  background-color: #FE0066;
  border: none;
  outline: none;
  border-radius: 50rem;
`

const Aliados = () => {
  return (
    <Container id="aliados">
      <Heading
        title="Aliados"
        description="Articulamos esfuerzos, conectando emprendimientos. Producimos valor cultural, compartiendo creatividad. Generando oportunidades para el bien común."
        colors={{title: 'black', text: 'black'}}
        width="82rem"
      />

      <List>
        {aliados.map((aliado, index) => <li key={index}>{aliado}</li>)}
      </List>

      <Button>Unirme</Button>
    </Container>
  )
}

export default Aliados