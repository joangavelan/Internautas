import React, { useState } from 'react'
import { navItems } from '../data/navItems'
import { GiHamburgerMenu } from 'react-icons/gi'
import styled from 'styled-components/macro'
import media from '../styles/media'
import theme from '../styles/theme'
const { colors, fontSizes } = theme;

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  color: ${colors.black};
  background-color: rgba(255,255,255,0.9);
  padding: 2.3rem;
  z-index: 99;

  ${media.tablet`
    justify-content: flex-end;
  `} 
`

const Hamburger = styled(GiHamburgerMenu)`
  font-size: 2rem;
  cursor: pointer;
`

const Icon = styled.img`
  display: block;
  width: 2rem;
  height: 2rem;
  margin: 0 2rem;

  ${media.tablet`
    display: none; 
  `}
`

const NavItems = styled.nav`
  ${media.tablet`
    width: 100%;
    position: absolute;
    top: 6.5rem;
    left: 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    max-height: ${props => props.active ? 'auto' : '0'};
    overflow: hidden;
    background: ${colors.white};
    /* transition: 0.3s all ease; */
    padding-bottom: ${props => props.active ? '1.5rem' : '0'};
  `}
`

const Item = styled.a`
  font-size: ${fontSizes.sm};
  font-weight: 500;
  margin: 0 2rem;

  ${media.tablet`
    margin: 1.2rem;
  `}
`

const Nav = () => {

  const [active, setActive] = useState(false);

  return (
    <Container>
      <Icon src="/images/icon-on.png" alt="icon on"/>
      <NavItems active={active}>
        {navItems.map((item) => (
          <Item 
            key={item.id}
            href={`#${item.url}`}>
              {item.name}
          </Item>
        ))}
        <Icon src="images/icon-whatsapp.png" alt="whatsapp icon"/>
      </NavItems>
      <Hamburger onClick={() => setActive(active => !active)}/>
    </Container>
  )
}

export default Nav