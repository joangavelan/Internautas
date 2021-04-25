import React from 'react'
import styled from 'styled-components/macro'
import Heading from '../components/Heading'
import theme from '../styles/theme'
const { colors } = theme;

const Container = styled.section`
  padding: 15rem 3rem;
  background: url('images/Noche en Huaraz.jpg') no-repeat bottom;
  background-size: cover;
  height: 140rem;
`

const Cards = styled.div`
  max-width: 110rem;
  margin: 5rem auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: center;
`

const Card = styled.div`
  max-width: 51rem;
  background-color: ${colors.white};
  padding: 3rem 5rem;  
  border-radius: 2.5rem;

  & h3 {
    font-size: 5.8rem;
    font-weight: 500;
    color: ${props => colors[props.titleColor]}; 
  }

  p { 
    font-size: 2rem;
    color: ${colors.black};
    line-height: 1.75;
    margin: 2rem 0;
  }

  button {
    font-size: 2rem;
    font-weight: 600;
    color: ${colors.red};
    background: transparent;
  }
`

const Curricula = () => {
  return (
    <Container id="curricula">
      <Heading 
        title="Currícula"
        tagline="Expediciones y talleres"
        description="Llevar a Chimbote de ser una sociedad dependiente de la industria pesquera, del comercio incipiente y de la agricultura de subsistencia; a una cultura más productiva orientada al turismo, significa comprender su historia, su patrimonio y su territorio."
        colors={{title: 'white', text: 'white'}}
        width="110rem"
      />
      <Cards>
        <Card titleColor="green">
          <h3>Talleres</h3>
          <p>Capacitaciones en desarrollo de aplicaciones, branding y diseño, gestión cultural, gestión turística y gestión de proyectos. Integrando toda la información en una plataforma única, sostenible y escalable.</p>
          <button>+ Ver currícula</button>
        </Card>
        <Card titleColor="blue">
          <h3>Expediciones</h3>
          <p>Viajes vivenciales y campamentos en los miradores naturales de nuestra provincia, como el ancestral Monte de Chimbote, el histórico Cerro de la Juventud, la gran península El Ferrol y el inspirador mirador de Quillcay.</p>
          <button>+ Ver rutas</button>
        </Card>
      </Cards>
    </Container>
  )
}

export default Curricula