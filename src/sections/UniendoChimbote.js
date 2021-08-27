import React from 'react'
import styled from 'styled-components/macro'
import Heading from '../components/Heading';
import media from '../styles/media'

const Container = styled.section`
  position: relative;
  background-color: #000;
  padding: 10rem 3rem 0;

  ${media.tablet`
    padding: 5rem 2rem 0;
  `}
`

const ContentWrapper = styled.div`
  max-width: 125rem;
  margin: 0 auto;
` 

const Img = styled.img`
  width: 85rem;
  max-width: 100%;
  display: block;
  margin: 5rem auto 0;
`

const UniendoChimbote = () => {
  return (
    <Container id="presentacion">
      <ContentWrapper>
        <Heading
          title="Uniendo Chimbote"
          tagline="Hacia una red de cultura, producción y turismo"
          description="Chimboteros convoca a jóvenes desarrolladores para culminar juntos una red digital que eduque en el autodescubrimiento de sus riquezas, la creación de cultura y el desarrollo del turismo."
          colors={{title: 'gold', text: 'white'}}
          width="84rem"/>
      </ContentWrapper>
      <Img src="images/Plataforma web Culturalismo.jpg" alt="Plataforma web culturalismo"/>
    </Container>
  )
}

export default UniendoChimbote