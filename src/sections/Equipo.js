import React from 'react'
import styled from 'styled-components/macro'
import media from '../styles/media'
import theme from '../styles/theme'
import Heading from '../components/Heading'
import TeamMember from '../components/TeamMember'
import { equipo } from '../data/equipo'
const { colors, fontSizes } = theme;

const Container = styled.section`
  position: relative;
  padding: 10rem 3rem;
  color: ${colors.white};
  height: 100vh;
`

const Grid = styled.div`
  width: 130rem;
  max-width: 95%;
  margin: 0 auto;
  margin-top: 7rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2rem;
`

const Equipo = () => {
  return (
    <Container id="equipo">
      <Heading
        title="Equipo Creativo"
        description="Un buen trabajo es posible gracias al talento especializado, al compromiso apasionado y a los valores compartidos de amigos chimboteros con una visión común: el cambio cultural."
        tagline="Valores compartidos por un sentido común"
        colors={{title: 'black', text: 'black'}}
        width="80rem"
      />

      <Grid>
        {equipo.map(member => (
          <TeamMember 
            path={member.imgPath}          
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