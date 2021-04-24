import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.footer`
  position: relative;
  height: 120rem;
  background: url('images/Bahía de Chimbote.jpg') no-repeat center;
  background-size: cover;
`

const LogoWrapper = styled.div`
  width: 80rem;
  position: absolute;
  top: 33%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`

const Small = styled.small`
  display: inline-block;
  font-size: 3.2rem;
  color: white;
  margin-bottom: 7rem;
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
        <Logo src="images/Chimboteros logo.png" alt="Chimboteros logo"/>
      </LogoWrapper>
    </Container>
  )
}

export default Footer
