import React from 'react'
import styled from 'styled-components/macro'
import theme from '../styles/theme'
const { colors } = theme;

const Container = styled.footer`
  position: relative;
  padding: 7rem 3rem;
  height: 100vh;
  background: url('images/bahia de chimbote de noche.jpg') no-repeat bottom;
  background-size: cover;
`

const Content = styled.div`
  max-width: 130rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`

const LogoWrapper = styled.div`
  position: absolute;
  top: 18%;
  left: 50%;
  transform: translateX(-50%);
  width: 60rem;
  text-align: center;
`

const Address = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 2rem;
  font-size: 1.7rem;
  text-align: center;
  background-color: #000;
  color: #fff;
`

const Aliados = styled.div`
  width: 30rem;
  color: ${colors.white};
  font-size: 1.7rem;
  text-align: center;

  & > p {
    text-transform: uppercase;
    vertical-align: middle;
    line-height: 1.45;
  }

  & > p:first-child {
    margin-bottom: 4rem;
  }
  
  & > p:not(:first-child) {
    display: inline-block;
    width: 50%;
  }
`

const Small = styled.small`
  display: inline-block;
  font-size: 2.7rem;
  color: white;
  margin-bottom: 3rem;
`

const Logo = styled.img`
  display: block;
  width: 100%;
`

const Footer = () => {
  return (
    <Container>
      <LogoWrapper>
        <Small>Produce:</Small>
        <Logo src="images/Chimboteros logo.png" alt="chimboteros logo"/>
      </LogoWrapper>
      <Address>La Gran Vía. Jr. Ladislao Espinar 625. Ofic. 26. Chimbote, Perú</Address>
    </Container>
)
}

export default Footer