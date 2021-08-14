import React from 'react'
import styled from 'styled-components/macro'
import theme from '../styles//theme'
import media from '../styles//media'
const { colors } = theme

const Container = styled.div`
  color: ${colors.dark};
`

const ProfileImage = styled.img`
  width: 100%;
  margin-bottom: 1.5rem;
`

const Name = styled.h3`
  color: ${colors.green};
  font-size: 2.1rem;
  font-weight: 500;
  margin-bottom: 3px;

  ${media.tablet`
    font-size: 1.9rem;
  `}
`

const Position = styled.i`
  font-size: 1.8rem;
  color: #777;

  ${media.tablet`
    font-size: 1.7rem;
  `}
`

const Description = styled.p`
  font-size: 1.7rem;
  line-height: 1.5;
  margin: 1rem 0;

  ${media.tablet`
    font-size: 1.6rem;
  `}
`

const TeamMember = ({path, name, position, description}) => {
  return (
    <Container>
      <ProfileImage src={`images/equipo/${path}.png`}/>
      <Name>{name}</Name>
      <Position>{position}</Position>
      <Description>{description}</Description>
    </Container>
  )
}

export default TeamMember