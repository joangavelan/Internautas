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

const Link = styled.a`
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
      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf8K65MQeEDn7ZZ1GfEhGSBC_elTcaFlBWAU6NRtVfNL7SRkA/viewform?fbclid=IwAR30JWRJr3UohfKCpYK25YhNW-gpCiQDeW6P6fqQaEr16J1bJRfwlRWE3qs" target="_blank">
        Postula
      </Link>
    </Container>
  )
}

export default Convocatoria