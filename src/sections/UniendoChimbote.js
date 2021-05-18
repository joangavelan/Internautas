import React from 'react'
import styled from 'styled-components/macro'
import Heading from '../components/Heading';
import media from '../styles/media'
import theme from '../styles/theme'
const { colors } = theme;

const Container = styled.section`
  position: relative;
  background-color: ${colors.black};
  padding: 15rem 3rem;
  height: 140rem;

  ${media.tablet`
    padding: 5rem 3rem;
    height: 100vh;
  `}
`

const ContentWrapper = styled.div`
  max-width: 125rem;
  margin: 0 auto;
` 

const Img = styled.img`
  width: 100%;
  display: block;
  margin-top: 7rem;
`

const UniendoChimbote = () => {
  return (
    <Container id="presentacion">
      <ContentWrapper>
        <Heading
          title="Uniendo Chimbote"
          tagline="Hacia una red global de cultura, producción y turismo"
          description="Luego de una completa investigación de la provincia del Santa, Chimboteros convoca a jóvenes desarrolladores para culminar juntos una plataforma que eduque a la ciudadanía en el autodescubrimiento de sus riquezas, la creación de cultura y el desarrollo del turismo."
          colors={{title: 'gold', text: 'white'}}
          width="80rem"/>
        <Img src="images/Plataforma web Culturalismo.jpg" alt="Plataforma web culturalismo"/>
      </ContentWrapper>
    </Container>
  )
}

export default UniendoChimbote