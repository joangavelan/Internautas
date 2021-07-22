import React from 'react'
import styled from 'styled-components/macro'
import Heading from '../components/Heading';
import media from '../styles/media'
import theme from '../styles/theme'
const { colors } = theme;

const Container = styled.section`
  position: relative;
  background-color: ${colors.black};
  padding: 10rem 3rem;
  height: 100vh;

  ${media.tablet`
    height: 100vh;
  `}
`

const ContentWrapper = styled.div`
  max-width: 125rem;
  margin: 0 auto;
` 

const Img = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 90rem;
  display: block;
  margin: 0 auto;

  ${media.netbook`
    width: 90%;
    bottom: 20%;
  `}
`

const UniendoChimbote = () => {
  return (
    <Container id="presentacion">
      <ContentWrapper>
        <Heading
          title="Uniendo Chimbote"
          tagline="Hacia una red de cultura, producción y turismo"
          description="Chimboteros convoca a jóvenes desarrolladores para culminar juntos una red que eduque a la ciudadanía en el autodescubrimiento de sus riquezas, la creación de cultura y el desarrollo del turismo."
          colors={{title: 'gold', text: 'white'}}
          width="90rem"/>
      </ContentWrapper>
      <Img src="images/Plataforma web Culturalismo.jpg" alt="Plataforma web culturalismo"/>
    </Container>
  )
}

export default UniendoChimbote