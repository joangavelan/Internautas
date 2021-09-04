import React from 'react'
import styled from 'styled-components/macro'
import Heading from '../components/Heading';

const Container = styled.section`
  position: relative;
  background-color: #fff;
  padding: 10rem 3rem 0;
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
          description="Chimboteros investiga la provincia del Santa con el propósito de desarrollar una red digital que nos eduque en el descubimiento de nuestras riquezas, la creación de cultura y el desarrollo del turismo."
          colors={{title: 'black', text: 'black'}}
          width="84rem"/>
      </ContentWrapper>
      <Img src="images/Plataforma web Culturalismo.png" alt="Plataforma web culturalismo"/>
    </Container>
  )
}

export default UniendoChimbote