import React from 'react'
import styled from 'styled-components/macro'
import media from '../styles/media'
import theme from '../styles/theme'
const { colors, fontSizes, fonts } = theme;

const Container = styled.section`
  position: relative;
  padding: 15rem 3rem;
  color: ${colors.white};
  background: url('images/oficina chimboteros.jpg') no-repeat bottom;
  background-size: cover;
  height: 100vh;

  ${media.tablet`
    height: 100vh;
  `}
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 70rem;
`

const Heading = styled.div`
  margin: 0 auto 4rem;
  text-align: center;

  ${media.tablet`
    margin-bottom: 2.5rem;
  `}
`

const Title = styled.h2`
  font-size: 8rem;
  font-weight: 500;
  color: ${colors.dark};

  ${media.tablet`
    font-size: 4.5rem;
    margin-bottom: .5rem;
  `}
`

const Description = styled.em`
  font-size: 3.5rem;
  color: ${colors.dark};

  ${media.tablet`
    font-size: 2.5rem;
  `}
`

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 3rem;
  width: 100%;
  font-size: ${fontSizes.lg};

  ${media.tablet`
    grid-column-gap: 2rem;
  `}
`

const Entry = styled.div`
  grid-area: ${props => props.gridArea};
  margin: 2rem 0;

  ${media.tablet`
    margin: 1rem 0;
  `}
`

const Label = styled.label`
  display: block;
  margin-left: 1.5rem;
  margin-bottom: 1rem;
  font-size: 2rem;
  color: ${colors.dark};

  ${media.tablet`
    font-size: 1.8rem;
  `}
`

const Input = styled.input`
  width: 100%;
  font-size: 2rem;
  border: none;
  outline: none;
  border-radius: 3rem;
  padding: 1.3rem 2rem;
  color: ${colors.black};
  background: rgba(255,255,255, 0.8);
  border: 1px solid #999;

  ${media.tablet`
    font-size: 1.8rem;
  `}
`

const Textarea = styled.textarea`
  width: 100%;
  height: 15rem;
  font-family: ${fonts.primary};
  font-size: 2rem;
  border: none;
  outline: none;
  border-radius: 3rem;
  padding: 1.3rem 2rem;
  color: ${colors.white};
  background: rgba(255,255,255,0.8);
  border: 1px solid #999;
`

const Submit = styled.input`
  display: block;
  font-size: 1.8rem;
  color: ${colors.white};
  background-color: ${colors.blue};
  padding: .8rem 4.5rem;
  border-radius: 3.5rem;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 0 auto;

  ${media.tablet`
    font-size: 1.8rem;
    padding: 1.3rem 4.2rem;
  `}
`

const Contacto = () => {
  return (
    <Container id="contacto">
      <Content>
        {/* heading */}
        <Heading>
          <Title>Contacto</Title>
          <Description>Consultas y sugerencias</Description>
        </Heading>
        {/* form */}
        <Form name="contact" netlify>
          {/* name */}
          <Entry gridArea="1 / 1 / 2 / 2">
            <Label htmlFor="name">Nombres: </Label>
            <Input id="name" type="text" name="name" required/>
          </Entry>
          {/* email */}
          <Entry gridArea="1 / 2 / 2 / 3">
            <Label htmlFor="email">Correo: </Label>
            <Input id="email" type="email" name="email" required/>
          </Entry>
          {/* textarea */}
          <Entry gridArea="2 / 1 / 3 / 3">
            <Label htmlFor="message">Mensaje: </Label>
            <Textarea id="message" name="message" row="10" cols="50" required></Textarea>
          </Entry>
          {/* submit */}
          <Entry gridArea="3 / 1 / 4 / 3">
            <Submit type="submit" value="Enviar"/>
          </Entry>
        </Form>
      </Content>
    </Container>
  )
}

export default Contacto