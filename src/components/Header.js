import React from 'react'
import styled from 'styled-components/macro'
import media from '../styles/media'
import theme from '../styles/theme'
const { colors, fonts } = theme

const Container = styled.header`
  position: relative;
  width: 100%; 
  height: 100vh;
  background: url('images/internautas web.jpg') no-repeat bottom;
  background-size: cover;

  ${media.tablet`
    height: 100vh;
  `}
`

const Heading = styled.div`
  max-width: 65rem;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  color: ${colors.black};
  text-align: center;
`

const Description = styled.p`
  font-size: 2.2rem;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  line-height: 1.7;

  ${media.netbook`
    font-size: 2rem;
  `}
`

const DownloadButton = styled.button`
  color: ${colors.red};
  font-size: 2.3rem;
  background: transparent;
  letter-spacing: -1px;
  cursor: pointer;

  ${media.netbook`
    font-size: 2rem;
  `}
`

const Logo = styled.img`
  width: 75%;
`

const Header = () => {
  return (
    <Container id="header">
      <Heading>
        <Logo src="/images/internautas logo.png"/>
        <Description>Nuevos tiempos de cambio empiezan a correr y nos inspiran a forjar un mundo vibrante de cultura, producción y turismo sostenible.</Description>
        <DownloadButton>Ver más +</DownloadButton>
      </Heading>
    </Container>
  )
}

export default Header