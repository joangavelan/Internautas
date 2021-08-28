import React from 'react'
import styled from 'styled-components/macro'
import Heading from '../components/Heading'
import media from '../styles/media'
import theme from '../styles/theme'
const { colors } = theme;

const Container = styled.section`
  position: relative;
  padding: 10rem 3rem;
  background: url('images/montañas.jpg') no-repeat bottom;
  background-size: cover;
  height: 145.4rem;
`

const Cards = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
`

const Card = styled.div`
  max-width: 45rem;
  background-color: ${colors.white};
  padding: 2.5rem 4rem;  
  border-radius: 2.5rem;
  margin: 2rem;

  & h3 {
    font-size: 4rem;
    font-weight: 500;
    line-height: 1;
    color: ${props => colors[props.titleColor]};

    ${media.tablet`
      font-size: 3.5rem;
    `}
  }

  p { 
    font-size: 1.7rem;
    color: ${colors.black};
    line-height: 1.75;
    margin: 1rem 0;

    ${media.tablet`
      margin-top: 1rem;
    `}
  }

  a {
    font-size: 2.1rem;
    color: ${colors.red};
    background: transparent;
  }
`

const Curricula = () => {
  return (
    <Container id="curricula">
        <Heading 
          title="Currícula"
          tagline="Talleres y expediciones"
          description="Llevar a nuestra provincia de ser dependiente de la agricultura de subsistencia y la pesca industrial, a una cultura más productiva orientada al turismo, significa comprender su historia, su patrimonio y territorio."
          colors={{title: 'black', text: 'black'}}
          width="95rem"
        />
        <Cards>
          <Card titleColor="green">
            <h3>Expediciones</h3>
            <p>Viajes a los miradores naturales de nuestra provincia, como el ancestral Monte de Chimbote, el histórico Cerro de la Juventud, la gran península El Ferrol y el inspirador mirador de Quillcay.</p>
            <a href="/pdfs/Internautas (expediciones).pdf" target="_blank" rel="noreferrer">Ver expediciones +</a>
          </Card>
          <Card titleColor="blue">
            <h3>Talleres</h3>
            <p>Capacitaciones en desarrollo web, branding y diseño, gestión cultural, gestión turística y gestión de proyectos. Integrando toda la información en una plataforma única, sostenible y escalable.</p>
            <a href="/pdfs/Internautas (talleres).pdf" target="_blank" rel="noreferrer">Ver talleres +</a>
          </Card>
        </Cards>
    </Container>
  )
}

export default Curricula