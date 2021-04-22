import React from 'react'
import { navItems } from '../data/navItems'
import styled from 'styled-components/macro'
import theme from '../styles/theme'
const { colors, fontSizes } = theme;

const Container = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  color: ${colors.black};
  background-color: ${colors.white};
  padding: 4rem 3rem 1.5rem;
  z-index: 99;
`

const Icon = styled.img`
  display: block;
  width: 2rem;
  height: 2rem;
  margin: 0 2rem;
`

const Item = styled.a`
  font-size: ${fontSizes.base};
  font-weight: 500;
  margin: 0 2rem;
`

const Nav = () => {

  return (
    <Container>
      <Icon src="/images/icon-on.png" alt="icon on"/>
      {navItems.map((item) => (
        <Item 
          key={item.id}
          href={`#${item.url}`}>
            {item.name}
        </Item>
      ))}
      <Icon src="images/icon-whatsapp.png" alt="whatsapp icon"/>
    </Container>
  )
}

export default Nav