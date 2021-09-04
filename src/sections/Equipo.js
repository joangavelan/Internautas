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
  width: 130rem;
  max-width: 95%;
  margin: 0 auto;
  margin-top: 7rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2rem;

  ${media.tablet`
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 3rem;
  `}
`

const Equipo = () => {
  return (
    <Container id="equipo">
      <Heading
        title="Equipo Creativo"
        description="Un buen trabajo es posible gracias al talento y compromiso de amigos chimboteros con una visión común: el cambio cultural."
        tagline="Valores compartidos, una visión común"
        colors={{title: 'gold', text: 'white'}}
        width="70rem"
      />

      <Grid>
        {equipo.map(member => (
          <TeamMember
            key={member.id}
            imgPath={member.imgPath}          
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