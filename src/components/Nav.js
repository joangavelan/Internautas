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
  backdrop-filter: saturate(100%) blur(5px);

  ${media.tablet`
    justify-content: space-between;
  `} 
`

const Hamburger = styled(GiHamburgerMenu)`
  display: none;
  font-size: 2rem;
  cursor: pointer;
  order: -1;

  ${media.tablet`
    display: block;
    font-size: 2.3rem;
  `}
`

const Icon = styled.img`
  display: block;
  width: ${props => props.width};
  height: ${props => props.height};
  margin: 0 2rem;

  ${media.tablet`
    width: auto;
    margin: 0;
    height: 2.3rem;
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
    padding: ${props => props.active ? '1.5rem 0' : '0'};
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
      <a href="#header"><Icon src="/images/icon-on.png" alt="icon on" width='2rem' height='2rem'/></a>
      <NavItems active={active}>
        {navItems.map((item) => (
          <Item 
            key={item.id}
            href={`#${item.url}`}>
              {item.name}
          </Item>
        ))}
      </NavItems>
      <a href="https://www.facebook.com/Internautasperu/" target="_blank">
        <Icon src="images/icon-fb.png" alt="whatsapp icon" width="2.2rem" height="2.2rem"/>
      </a>
      <Hamburger onClick={() => setActive(active => !active)}/>
    </Container>
  )
}

export default Nav