import React from 'react'
import styled from 'styled-components/macro'
import Heading from '../components/Heading';
import theme from '../styles/theme'
const { colors } = theme;

const Container = styled.section`
  position: relative;
  background-color: ${colors.black};
  padding: 15rem 3rem;
  height: 140rem;
`

const Img = styled.img`
  display: block;
  width: 135rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`

const UniendoChimbote = () => {
  return (
    <Container id="presentacion">
      <Heading
        title="Uniendo Chimbote"
        tagline="Hacia una red global de cultura, producción y turismo"
        description="Luego de una completa investigación de la provincia del Santa, Chimboteros convoca a jóvenes desarrolladores para culminar juntos una plataforma que eduque a la ciudadanía en el autodescubrimiento de sus riquezas, la creación de cultura y el desarrollo del turismo."
        colors={{title: 'gold', text: 'white'}}
        width="80rem"/>
      <Img src="images/Plataforma web Culturalismo.jpg" alt="Plataforma web culturalismo"/>
    </Container>
  )
}

export default UniendoChimbote