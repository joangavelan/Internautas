import React from 'react'
import styled from 'styled-components/macro'
import theme from '../styles/theme';
const { colors, fontSizes } = theme ; 

const Container = styled.div`
  width: 100%; 
  height: 100vh;
  background: url('images/Practicando Kayak en Chimbote.jpg') no-repeat center;
  background-size: cover;
`

const Heading = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 72rem;
  margin: 0 auto;
  color: ${colors.black};
  text-align: center;
`

const Title = styled.h1`
  font-size: ${fontSizes.xxl};
  line-height: 1;
`

const TagLine = styled.em`
  font-size: ${fontSizes.xl};
`

const Description = styled.p`
  font-size: ${fontSizes.md};
  font-weight: 600;
  margin: 2.5rem 0;
  line-height: 1.5;
`

const DownloadButton = styled.button`
  color: ${colors.rose};
  font-size: ${fontSizes.md};
  background: transparent;
  font-weight: 600;
`

const Header = () => {
  return (
    <Container>
      <Heading>
        <Title>Internautas</Title>
        <TagLine>Tecnología Cultural</TagLine>
        <Description>Nuevos tiempos de cambio empiezan a correr y nos inspiran a forjar un mundo vibrante de cultura, producción y turismo sostenible.</Description>
        <DownloadButton>Manifiesto +</DownloadButton>
      </Heading>
    </Container>
  )
}

export default Header