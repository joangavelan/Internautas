import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.footer`
  position: relative;
  padding: 7rem 3rem;
  height: 100vh;
  background: url('images/bahia de chimbote de noche.jpg') no-repeat bottom;
  background-size: cover;
`

const LogoWrapper = styled.div`
  position: absolute;
  top: 18%;
  left: 50%;
  transform: translateX(-50%);
  width: 60rem;
  max-width: 100%;
  text-align: center;
  padding: 0 3rem;
`

const Small = styled.small`
  display: inline-block;
  font-size: 2.7rem;
  color: white;
  margin-bottom: 3rem;
`

const Logo = styled.img`
  display: block;
  max-width: 100%;
`

const Address = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 2rem;
  font-size: 1.7rem;
  text-align: center;
  background-color: #000;
  color: #fff;
  letter-spacing: .2px;
  font-weight 300;
`

const Footer = () => {
  return (
    <Container>
      <LogoWrapper>
        <Small>Produce:</Small>
        <Logo src="images/Chimboteros logo.png" alt="chimboteros logo"/>
      </LogoWrapper>
      <Address>Jr. Ladislao Espinar 625. Ofic. 26. Chimbote, Perú</Address>
    </Container>
)
}

export default Footer