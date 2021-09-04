import React from 'react'
import styled from 'styled-components/macro'
import Heading from '../components/Heading'
import { media } from '../styles/media'

const Container = styled.section`
  padding: 10rem 3rem;

  ${media.phone`
    padding: 10rem 3rem 0;
  `}
`

const Img = styled.img`
  display: block;
  width: 130rem;
  max-width: 100%;
  margin: 0 auto;

  ${media.phone`
    margin-top: 5rem;
  `}
`

const Rutas = () => {
  return (
    <Container id="rutas">
      <Heading
        title="Las Rutas de Chimbote"
        tagline="Uniendo los valores de la gente y sus riquezas"
        description="En nuestra provincia existen recursos por revalorar mediante rutas turísticas, que brindarán oportunidades y unirán a nuestra gente de la manera más sencilla e inspiradora."
        colors={{title: 'black', text: 'black'}}
        width="90rem"
      />

      <Img src="images/culturalismo app en tablet.png" alt="tablet"/>
    </Container>
  )
}

export default Rutas