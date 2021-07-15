import React from 'react'
import styled from 'styled-components/macro'
import Heading from '../components/Heading'
import media from '../styles/media'
import theme from '../styles/theme'
const { colors } = theme;

const Container = styled.section`
  padding: 0 3rem;
  background: url('images/Plataforma web Culturalismo en celulares.jpg') no-repeat bottom;
  background-size: 100%;
  text-align: center;
  height: 175rem;

  ${media.tablet`
    padding: 5rem 3rem;
    height: 120rem;
  `}
`

const Link = styled.a`
  display: inline-block;
  font-size: 1.8rem;
  background-color: #0242BE;
  color: ${colors.white};
  padding: .8rem 4.5rem;
  border-radius: 3.5rem;

  ${media.tablet`
    font-size: 2rem;
    padding: 1.1rem 4.7rem;
  `}
`

const Cronograma = styled.div`
  width: 60rem;
  margin: 5rem auto 3rem;

  & > h3 {
    font-size: 3.5rem;
    font-weight: 600
  }

  & > div {
    border-top: 1px solid #262626;
    border-bottom: 1px solid #262626;
    padding: 2rem 2.5rem;
    margin: 3rem 0;

    & > div {
      display: flex;
      font-size: 1.7rem;
      justify-content: space-between;
      margin: 5px 0;
      line-height: 1.75;

      & > strong {
        width: 45%;
        display: flex;
        justify-content: space-between;
        font-weight: 500;
      }

      & > p, 
      & > div {
        width: 55%;
        text-align: left;
        padding-left: 4.5rem;
      }
    }
  }
`

const Convocatoria = () => {
  return (
    <Container id="postulacion">
      <Heading 
        title="Convocatoria"
        tagline="beneficios de postulación"
        description="Jóvenes desarrolladores con disponibilidad para participar en talleres gratuitos, cobertura integral de expediciones y la posibilidad de ser miembro asociado de una plataforma digital escalable a nivel nacional."
        colors={{title: 'blue', text: 'black'}}
        width="95rem"
      />
    
     <Cronograma>
      <h3>Cronograma</h3>
      <div>
        <div>
          <strong>Inicio de convocatoria<span>:</span></strong>
          <p>01 de mayo, a las 00:00 hrs.</p>
        </div>
        <div>
          <strong>Cierre de convocatoria<span>:</span></strong>
          <p>20 de mayo, a las 23:59 hrs.</p>
        </div>
        <div>
          <strong>Entrevistas individuales<span>:</span></strong>
          <p>24 de junio, a las 16:00 hrs.</p>
        </div>
        <div>
          <strong>Publicación de seleccionados<span>:</span></strong>
          <div>
            <p>25 de junio</p>
            <p>internautas.pe/equipo</p>
            <p>facebook.com/internautasperu</p>
          </div>
        </div>
        <div>
          <strong>Taller de inducción<span>:</span></strong>
          <div>
            <p>01 de junio a las 16:00 hrs.</p>
            <p>Centro Cultural Centenario</p>
          </div>
        </div>
      </div>
     </Cronograma>

      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf8K65MQeEDn7ZZ1GfEhGSBC_elTcaFlBWAU6NRtVfNL7SRkA/viewform?fbclid=IwAR30JWRJr3UohfKCpYK25YhNW-gpCiQDeW6P6fqQaEr16J1bJRfwlRWE3qs" target="_blank">
        Postula
      </Link>
    </Container>
  )
}

export default Convocatoria