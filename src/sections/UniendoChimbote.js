import React from 'react'
import styled from 'styled-components/macro'
import Heading from '../components/Heading';
import theme from '../styles/theme'
const { colors } = theme;

const Container = styled.div`
  background-color: ${colors.black};
  padding: 10rem 3rem;
`

const Img = styled.img`
  display: block;
  width: 100rem;
  margin: 0 auto;
`

const UniendoChimbote = () => {
  return (
    <Container>
      <Heading
        title={{name: 'Uniendo Chimbote', color: 'gold'}}
        tagline="Hacia una red global de cultura, producción y turismo"
        description="Luego de una completa investigación de la provincia del Santa, Chimboteros convoca a jóvenes desarrolladores para culminar juntos una plataforma que eduque a la ciudadanía en el autodescubrimiento de sus riquezas, la creación de cultura y el desarrollo del turismo.
        "/>
      <Img src="images/Plataforma web Culturalismo.jpg" alt="Plataforma web culturalismo"/>
    </Container>
  )
}

export default UniendoChimbote