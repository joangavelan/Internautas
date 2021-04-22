import React from 'react'
import styled from 'styled-components/macro'
import theme from '../styles/theme'
const { colors, fontSizes } = theme;

const Container = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  text-align: center;
`

const Title = styled.h2`
  font-size: ${fontSizes.xxl};
  font-weight: 500;
  color: ${props => colors[props.color]};
  text-transform: capitalize;
  line-height: 1.2;
`

const TagLine = styled.em`
  font-size: ${fontSizes.xl};
  color: ${colors.white}; 
`

const Description = styled.p`
  font-size: 3rem;
  line-height: 1.75;
  color: ${colors.white};
  margin: 3rem 0;
`

const Heading = ({title: {name, color}, tagline, description}) => {
  return (
    <Container>
      <Title color={color}>{name}</Title>
      <TagLine>{tagline}</TagLine>
      <Description>{description}</Description>
    </Container>
  )
}

export default Heading