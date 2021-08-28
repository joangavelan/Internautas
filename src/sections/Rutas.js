import React from 'react'
import styled from 'styled-components/macro'
import Heading from '../components/Heading'

const Container = styled.section`
  padding: 10rem 3rem;
`

const Img = styled.img`
  display: block;
  width: 130rem;
  max-width: 100%;
  margin: 0 auto;
`

const Rutas = () => {
  return (
    <Container id="rutas">
      <Heading
        title="Las Rutas de Chimbote"
        tagline="Uniendo los valores de la gente y sus riquezas"
        description="En nuestra provincia conviven misteriosamente riquezas por revalorar, mediante rutas con proyección turística, para compartir sus oportunidades y unir a su gente de la manera más sencilla e inspiradora."
        colors={{title: 'black', text: 'black'}}
        width="90rem"
      />

      <Img src="images/culturalismo app en tablet.png" alt="tablet"/>
    </Container>
  )
}

export default Rutas