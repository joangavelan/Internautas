import React from 'react'
import styled from 'styled-components/macro'
import media from '../styles/media'
import theme from '../styles/theme'
const { colors, fontSizes, fonts } = theme;

const Container = styled.section`
  position: relative;
  padding: 10rem 3rem;
  color: ${colors.white};
  background: url('images/oficina chimboteros.jpg') no-repeat bottom;
  background-size: cover;
  height: 85rem;

  ${media.phone`
    height: 100vh;
    background: url('images/mobile/muelle chimbote.jpg') no-repeat bottom;
    height: 77.5rem;
  `}
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 55rem;
`

const Heading = styled.div`
  margin: 0 auto 4rem;
  text-align: center;

  ${media.phone`
    margin-bottom: 2.5rem;
  `}
`

const Title = styled.h2`
  font-size: 8rem;
  font-weight: 600;
  color: ${colors.dark};

  ${media.phone`
    font-size: 4.5rem;
    margin-bottom: .5rem;
    color: white;
  `}
`

const Description = styled.em`
  font-size: 3.5rem;
  color: ${colors.dark};

  ${media.phone`
    font-size: 2.5rem;
    color: white;
  `}
`

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  width: 100%;
  font-size: ${fontSizes.lg};

  ${media.phone`
    width: 30rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    grid-row-gap: 0;
  `}
`

const Entry = styled.div`
  grid-area: ${props => props.gridArea};

  ${media.phone`
    margin: 1rem 0;
  `}
`

const Label = styled.label`
  display: block;
  margin-left: 1.5rem;
  margin-bottom: 1rem;
  font-size: 2rem;
  color: ${colors.dark};

  ${media.phone`
    font-size: 1.8rem;
    color: white;
    margin-left: 0;
  `}
`

const Input = styled.input`
  width: 100%;
  font-size: 1.8rem;
  border: none;
  outline: none;
  border-radius: 3rem;
  padding: 1rem 2rem;
  color: ${colors.black};
  background: rgba(255,255,255, 0.6);
  border: 1px solid #999;

  ${media.phone`
    font-size: 1.8rem;
    padding: 1.2rem 2rem;
  `}
`

const Textarea = styled.textarea`
  width: 100%;
  height: 8rem;
  font-family: ${fonts.primary};
  font-size: 1.8rem;
  border: none;
  outline: none;
  border-radius: 3rem;
  padding: 1.3rem 2rem;
  color: ${colors.black};
  background: rgba(255,255,255,0.6);
  border: 1px solid #999;
`

const Submit = styled.button`
  width: 11rem;
  display: block;
  font-size: 1.8rem;
  color: ${colors.white};
  background-color: ${colors.blue};
  padding: 7px;
  border-radius: 3.5rem;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 2rem auto 0;
  transition: .3s ease;
  border: 1px solid ${colors.blue};

  ${media.phone`
    font-size: 1.5rem;
    padding: 5px;
    background-color: #111;
    border: 1px solid #fff;
    margin 1rem auto 0;
  `}

  &:hover {
    color: ${colors.blue};
    background-color: #fff;
    border: 1px solid ${colors.blue};
  }
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
        <Form name="contact-form" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact-form"/>
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