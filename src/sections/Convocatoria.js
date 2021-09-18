import React from 'react'
import styled from 'styled-components/macro'
import Heading from '../components/Heading'
import media from '../styles/media'
import theme from '../styles/theme'
const { colors } = theme;

const Container = styled.section`
  padding: 10rem 3rem;
  background: url('images/Plataforma web Culturalismo en celulares.jpg') no-repeat bottom;
  background-size: 100%;
  text-align: center;
  height: 169.7rem;

  ${media.phone`
    background: url('images/mobile/celulares.jpg') no-repeat bottom;
    height: 143rem;
    background-size: contain;
  `}
`

const Link = styled.a`
  width: 11rem;
  display: inline-block;
  font-size: 1.8rem;
  background-color: #0242BE;
  color: ${colors.white};
  padding: 7px;
  border-radius: 3.5rem;
  border: 1px solid #0242BE;
  transition .3s ease;

  ${media.phone`
    font-size: 1.5rem;
    padding: 5px;
  `}

  &:hover {
    border: 1px solid ${colors.blue};
    color: ${colors.blue};
    background-color: #fff;
  }
`

const Cronograma = styled.div`
  width: 65rem;
  max-width: 100%;
  margin: 5rem auto 3rem;

  & > h3 {
    font-size: 3.5rem;
    font-weight: 600;

    ${media.phone`
      font-size: 2.3rem;
    `}
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

      ${media.phone`
        flex-direction: column;
        align-items: center;
      `}

      & > strong {
        width: 45%;
        display: flex;
        justify-content: space-between;
        font-weight: 500;

        & > span {
          ${media.phone`
            display: none;
          `}
        }

        ${media.phone`
          width: auto;
          line-height: 1.5;
        `}
      }

      & > p, 
      & > div {
        width: 55%;
        text-align: left;
        padding-left: 4.5rem;

        ${media.phone`
          padding-left: 0;
          width: auto;
          line-height: 1.5;
          text-align: center;
        `}
      }
    }
  }
`

const Convocatoria = () => {
  return (
    <Container id="postulacion">
      <Heading 
        title="Convocatoria"
        tagline="Beneficios de postulación"
        description="Convocamos a jóvenes desarrolladores con disponibilidad para participar en expediciones y talleres gratuitos, y compartir la oportunidad de ser miembro de una plataforma digital escalable a nivel nacional."
        colors={{title: 'blue', text: 'black'}}
        width="95rem"
      />
    
     <Cronograma>
      <h3>Cronograma</h3>
      <div>
        <div>
          <strong>Inicio de convocatoria<span>:</span></strong>
          <p>18 de septiembre, a las 00:00 hrs.</p>
        </div>
        <div>
          <strong>Cierre de convocatoria<span>:</span></strong>
          <p>10 de octubre, a las 23:59 hrs.</p>
        </div>
        <div>
          <strong>Publicación de pre-seleccionados<span>:</span></strong>
          <p>12 de octubre</p>
        </div>
        <div>
          <strong>Entrevistas individuales<span>:</span></strong>
          <p>15 de octubre</p>
        </div>
        <div>
          <strong>Publicación de seleccionados<span>:</span></strong>
          <div>
            <p>18 de octubre</p>
            <p>internautas.pe/equipo</p>
            <p>facebook.com/internautasperu</p>
          </div>
        </div>
        <div>
          <strong>Taller de inducción<span>:</span></strong>
          <div>
            <p>21 de octubre a las 16:00 hrs.</p>
          </div>
        </div>
      </div>
     </Cronograma>

      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf8K65MQeEDn7ZZ1GfEhGSBC_elTcaFlBWAU6NRtVfNL7SRkA/viewform?fbclid=IwAR30JWRJr3UohfKCpYK25YhNW-gpCiQDeW6P6fqQaEr16J1bJRfwlRWE3qs" target="_blank">
        Postular
      </Link>
    </Container>
  )
}

export default Convocatoria
