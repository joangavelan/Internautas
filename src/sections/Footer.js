import React from 'react'
import styled from 'styled-components/macro'
import { media } from '../styles/media'

const Container = styled.footer`
  position: relative;
  padding: 7rem 3rem;
  height: 100vh;
  background: url('images/bahia de chimbote de noche.jpg') no-repeat bottom;
  background-size: cover;

  ${media.tablet`
    display: none;
  `}
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

const Footer = () => {
  return (
    <Container>
      <LogoWrapper>
        <Small>Produce:</Small>
        <Logo src="images/Chimboteros logo.png" alt="chimboteros logo"/>
      </LogoWrapper>
    </Container>
)
}

export default Footer