import React from 'react'
import styled from 'styled-components/macro'
import theme from '../styles/theme'
const { colors, fontSizes } = theme;

const Container = styled.section`
  position: relative;
  padding: 3rem;
  color: ${colors.white};
  background: url('images/Bosque San Antonio Chimbote.jpg') no-repeat center;
  background-size: cover;
  height: 100vh;
`

const Heading = styled.div`
  position: absolute;
  max-width: 82rem;
  margin: 0 auto;
  text-align: center;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Title = styled.h2`
  font-size: ${fontSizes.xxl};
  font-weight: 500;
`

const Description = styled.p`
  font-size: ${fontSizes.md};
  line-height: 1.5;
` 

const Equipo = () => {
  return (
    <Container id="equipo">
      <Heading>
        <Title>Equipo Creativo</Title>
        <Description>Un buen trabajo es posible gracias al talento especializado, al compromiso apasionado y a los valores compartidos de amigos chimboteros con una visión común: el cambio cultural.</Description>
      </Heading>
    </Container>
  )
}

export default Equipo