import React from 'react'
import styled from 'styled-components/macro'
import Heading from '../components/Heading'
import media from '../styles/media'

const Container = styled.section`
  padding: 10rem 3rem;
  background: url('images/montañas.jpg') no-repeat bottom;
  background-size: cover;
  height: 100vh;

  ${media.tablet`
    padding: 5rem 3rem;
  `}
`

const Rutas = () => {
  return (
    <Container id="rutas">
      <Heading
        title="Rutas"
        tagline="Uniendo los valores de la gente y sus riquezas"
        description="En cada rincón de nuestra provincia conviven misteriosamente riquezas por promover, revalorar y articular mediante rutas culturales con proyección turística, para transmitir sus potencialidades y unir a su gente de la manera más sencilla e inspiradora."
        colors={{title: 'gold', text: 'black'}}
        width="80rem"
      />
    </Container>
  )
}

export default Rutas