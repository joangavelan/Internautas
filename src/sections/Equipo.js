import React from 'react'
import styled from 'styled-components/macro'
import media from '../styles/media'
import Heading from '../components/Heading'
import TeamMember from '../components/TeamMember'
import { equipo } from '../data/equipo'

const Container = styled.section`
  position: relative;
  padding: 10rem 3rem;
  height: 194rem;
  background: url('images/equipo internautas.jpg') no-repeat bottom;
  background-size: cover;

  ${media.tablet`
    height: auto;
    background: #000;
  `}
`

const Grid = styled.div`
  width: 140rem;
  max-width: 95%;
  margin: 0 auto;
  margin-top: 7rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 2rem;

  ${media.tablet`
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 3rem;
  `}
`

//remove accents and lowercase a string
const formatStr = str => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

const Equipo = () => {
  return (
    <Container id="equipo">
      <Heading
        title="Equipo Creativo"
        description="Unimos talentos multidisciplinarios en cultura, producción y turismo sostenible, comprometidos con una visión común: el cambio cultural."
        tagline="Valores compartidos, una visión común"
        colors={{title: 'gold', text: 'white'}}
        width="70rem"
      />

      <Grid>
        {equipo.map(member => (
          <TeamMember
            key={member.id}
            imgPath={formatStr(member.name)}          
            name={member.name}
            position={member.position}
            description={member.description}
          />
        ))}
      </Grid>

    </Container>
  )
}

export default Equipo