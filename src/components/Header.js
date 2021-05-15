import React from 'react'
import styled from 'styled-components/macro'
import media from '../styles/media'
import theme from '../styles/theme'
const { colors, fonts } = theme

const Container = styled.header`
  position: relative;
  width: 100%; 
  height: 130rem;
  background: url('images/Practicando Kayak en Chimbote.jpg') no-repeat top;
  background-size: cover;
`

const Heading = styled.div`
  max-width: 80rem;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  color: ${colors.black};
  text-align: center;
`

const Title = styled.h1`
  font-family: ${fonts.primary};
  font-size: 12rem;
  font-weight: 500;
  line-height: 1;

  ${media.netbook`
    font-size: 8rem;
  `}
`

const TagLine = styled.em`
  font-size: 5.2rem;

  ${media.netbook`
    font-size: 4rem;
  `}
`

const Description = styled.p`
  font-size: 2.6rem;
  font-weight: 500;
  margin: 2.5rem 0;
  line-height: 1.5;

  ${media.netbook`
    font-size: 2rem;
  `}
`

const DownloadButton = styled.button`
  color: ${colors.red};
  font-size: 2.6rem;
  background: transparent;
  font-weight: 600;
  letter-spacing: -1px;

  ${media.netbook`
    font-size: 2rem;
  `}
`

const Header = () => {
  return (
    <Container>
      <Heading>
        <Title>Internautas</Title>
        <TagLine>Tecnología Cultural</TagLine>
        <Description>Nuevos tiempos de cambio empiezan a correr y nos inspiran a forjar un mundo vibrante de cultura, producción y turismo sostenible.</Description>
        <DownloadButton>Ver más +</DownloadButton>
      </Heading>
    </Container>
  )
}

export default Header