import React from 'react'
import styled from 'styled-components/macro'
import theme from '../styles/theme'
const { colors } = theme;

const Container = styled.footer`
  background: ${colors.black};
  padding: 7rem 3rem;
`

const Content = styled.div`
  max-width: 130rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`

const LogoWrapper = styled.div`
  width: 30rem;
  text-align: center;
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
  font-size: 1.7rem;
  color: white;
  margin-bottom: 2rem;
`

const Logo = styled.img`
  display: block;
  width: 100%;
`

const Footer = () => {
  return (
    <Container>
        <Content>
          <Aliados>
            <p>Aliados:</p>
            <p>Adagio</p>
            <p>Universidad Tecnológica del Perú</p>
          </Aliados>
          <LogoWrapper>
            <Small>Produce:</Small>
            <Logo src="images/Chimboteros logo.png" alt="chimboteros logo"/>
          </LogoWrapper>
          <Aliados>
            <p>Aliados:</p>
            <p>Ministerio de Cultura Chimbote</p>
            <p>Dirscetur Subregión Pacífico</p>
          </Aliados>
        </Content>
    </Container>
  )
}

export default Footer