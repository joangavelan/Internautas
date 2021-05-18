import React from 'react'
import styled from 'styled-components/macro'
import media from '../styles/media'
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

  ${media.tablet`
    width: 100%;
    position: relative;
    top: 17%;
  `}
`

const Title = styled.h2`
  font-size: ${fontSizes.xxl};
  font-weight: 500;

  ${media.tablet`
    font-size: 4.5rem;
    margin-bottom: 1.5rem;
  `}
`

const Description = styled.p`
  font-size: ${fontSizes.md};
  line-height: 1.5;

  ${media.tablet`
    font-size: 2rem;
  `}
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