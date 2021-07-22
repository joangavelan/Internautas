import React from 'react'
import styled from 'styled-components/macro'
import media from '../styles/media'
import theme from '../styles/theme'
const { colors, fontSizes } = theme;

const Container = styled.div`
  max-width: ${props => props.width};
  margin: 0 auto;
  text-align: center;
`

const Title = styled.h2`
  font-size: ${fontSizes.xxl};
  font-weight: 600;
  color: ${props => colors[props.color]};
  text-transform: capitalize;
  line-height: 1.2;

  ${media.tablet`
    font-size: 4.5rem;
    line-height: normal;
  `}
`

const TagLine = styled.i`
  display: inline-block;
  font-size: ${fontSizes.xl};
  color: ${props => colors[props.color]}; 

  ${media.tablet`
    font-size: 2.1rem;
    line-height: 1.3;
  `}
`

const Description = styled.p`
  font-size: 2.1rem;
  line-height: 1.75;
  color: ${props => colors[props.color]}; 
  margin: 3rem 0;

  ${media.tablet`
    font-size: 1.8rem;
    line-height: 1.45;
  `}
`

const Heading = ({title, tagline, description, width, colors}) => {
  return (
    <Container width={width}>
      <Title color={colors.title}>{title}</Title>
      <TagLine color={colors.text}>{tagline}</TagLine>
      <Description color={colors.text}>{description}</Description>
    </Container>
  )
}

export default Heading