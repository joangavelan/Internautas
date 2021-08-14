import React from 'react'
import styled from 'styled-components/macro'
import Heading from '../components/Heading'

const Container = styled.section`
  padding: 10rem 3rem;
  background: url('images/montañas.jpg') no-repeat bottom;
  background-size: cover;
  height: 100vh;
`

const Rutas = () => {
  return (
    <Container id="rutas">
      <Heading
        title="Rutas Culturales"
        tagline="Uniendo los valores de la gente y sus riquezas"
        description="En nuestra provincia conviven misteriosamente riquezas por revalorar, mediante rutas con proyección turística, para compartir sus oportunidades y unir a su gente de la manera más sencilla e inspiradora."
        colors={{title: 'gold', text: 'black'}}
        width="90rem"
      />
    </Container>
  )
}

export default Rutas