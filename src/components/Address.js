import React from 'react'
import styled from 'styled-components/macro'
import { media } from '../styles/media'

const Container = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 2rem;
  font-size: 1.7rem;
  text-align: center;
  background-color: #000;
  color: #fff;
  letter-spacing: .2px;
  font-weight 300;

  ${media.tablet`
    font-size: 1rem;
    padding: 1.5rem;
  `}
`

const Address = () => {
  return (
    <Container>Jr. Ladislao Espinar 625. Ofic. 26. Chimbote, Perú</Container>
  )
}

export default Address