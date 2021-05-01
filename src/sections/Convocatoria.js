import React from 'react'
import styled from 'styled-components/macro'
import Heading from '../components/Heading'
import theme from '../styles/theme'
const { colors, fontSizes } = theme;

const Container = styled.section`
  padding: 15rem 3rem;
  background: url('images/Plataforma web Culturalismo en celulares.jpg') no-repeat bottom;
  background-size: cover;
  height: 150rem;
  text-align: center;
`

const Button = styled.button`
  font-size: ${fontSizes.lg};
  background-color: #0242BE;
  color: ${colors.white};
  padding: 1.3rem 5.5rem;
  border-radius: 3.5rem;
`

const Convocatoria = () => {
  return (
    <Container id="postulacion">
      <Heading 
        title="Convocatoria"
        tagline="beneficios de postulación"
        description="Jóvenes creativos inspirados en el desarrollo de aplicaciones tecnológicas y con disponibilidad para participar en talleres gratuitos, cobertura integral de expediciones y la posibilidad de ser miembro asociado de una red escalable a nivel nacional."
        colors={{title: 'black', text: 'black'}}
        width="80rem"
      />
      <Button>Postula</Button>
    </Container>
  )
}

export default Convocatoria