import React from 'react'
import styled from 'styled-components/macro'
import Heading from '../components/Heading'
import media from '../styles/media'
import theme from '../styles/theme'
const { colors } = theme;

const Container = styled.section`
  padding: 10rem 3rem;
  background: url('images/noche en huaraz.jpg') no-repeat bottom;
  background-size: cover;
  height: 100vh;

  ${media.desktop`
    height: 150rem;
  `}
`

const Cards = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  margin-top: 7.5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;

  ${media.tablet`
    margin-top: 0;
  `}
`

const Card = styled.div`
  max-width: 51rem;
  background-color: ${colors.white};
  padding: 5rem 5.5rem;  
  border-radius: 2.5rem;
  margin: 2rem;

  & h3 {
    font-size: 5rem;
    font-weight: 500;
    color: ${props => colors[props.titleColor]};

    ${media.tablet`
      font-size: 3.5rem;
    `}
  }

  p { 
    font-size: 1.7rem;
    color: ${colors.black};
    line-height: 1.75;
    margin: 2rem 0;

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
        description="Llevar a Chimbote de ser una sociedad dependiente de la pesca industrial a una cultura más productiva orientada al turismo, significa comprender su historia, su patrimonio y su territorio."
        colors={{title: 'white', text: 'white'}}
        width="85rem"
      />
      <Cards>
        <Card titleColor="green">
          <h3>Expediciones</h3>
          <p>Viajes vivenciales y campamentos en los miradores naturales de nuestra provincia, como el ancestral Monte de Chimbote, el histórico Cerro de la Juventud, la gran península El Ferrol y el inspirador mirador de Quillcay.</p>
          <a href="/pdfs/Internautas (expediciones).pdf" target="_blank" rel="noreferrer">Ver expediciones +</a>
        </Card>
        <Card titleColor="blue">
          <h3>Talleres</h3>
          <p>Capacitaciones en desarrollo de aplicaciones, branding y diseño, gestión cultural, gestión turística y gestión de proyectos. Integrando toda la información en una plataforma única, sostenible y escalable.</p>
          <a href="/pdfs/Internautas (talleres).pdf" target="_blank" rel="noreferrer">Ver talleres +</a>
        </Card>
      </Cards>
    </Container>
  )
}

export default Curricula