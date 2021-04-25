import React from 'react'
import styled from 'styled-components/macro'
import theme from '../styles/theme'
const { colors, fontSizes, fonts } = theme;

const Container = styled.section`
  position: relative;
  padding: 3rem;
  color: ${colors.black};
  background: url('images/Gaviota en vuelo.jpg') no-repeat bottom;
  background-size: cover;
  height: 100vh;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 85%;
  max-width: 82rem;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Heading = styled.div`
  margin: 0 auto;
  text-align: center;
`

const Title = styled.h2`
  font-size: ${fontSizes.xxl};
  font-weight: 500;
`

const Description = styled.p`
  font-size: ${fontSizes.md};
  line-height: 1.5;
`

const Form = styled.form`
  max-width: 50rem;
  font-size: ${fontSizes.lg};
  margin: 0 auto;
`

const Entry = styled.div`
  margin: 2rem 0;
`

const Label = styled.label`
  display: block;
  margin-left: 1.5rem;
  margin-bottom: 1rem;
`

const Input = styled.input`
  width: 100%;
  font-size: ${fontSizes.md};
  border: 2px solid #857F87;
  outline: none;
  border-radius: 3rem;
  padding: 1.5rem 2rem;
`

const Textarea = styled.textarea`
  width: 100%;
  height: 15rem;
  font-family: ${fonts.primary};
  font-size: ${fontSizes.md};
  border: 2px solid #857F87;
  outline: none;
  border-radius: 3rem;
  padding: 1.5rem 2rem;
`

const Submit = styled.input`
  display: block;
  font-size: 2rem;
  color: ${colors.white};
  background-color: ${colors.blue};
  padding: 1.5rem 4.5rem;
  border-radius: 3.5rem;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 0 auto;
`

const Contacto = () => {
  return (
    <Container>
      <Content>
        {/* heading */}
        <Heading>
          <Title>Contacto</Title>
          <Description>Un buen trabajo es posible gracias al talento especializado, al compromiso apasionado y a los valores compartidos de amigos chimboteros con una visión común: el cambio cultural.</Description>
        </Heading>
        {/* form */}
        <Form>
          {/* name */}
          <Entry>
            <Label for="name">Nombres: </Label>
            <Input id="name" type="text" name="name" required/>
          </Entry>
          {/* email */}
          <Entry>
            <Label for="email">Correo: </Label>
            <Input id="email" type="email" name="email" required/>
          </Entry>
          {/* textarea */}
          <Entry>
            <Label for="message">Mensaje: </Label>
            <Textarea id="message" name="message" row="10" cols="50" required></Textarea>
          </Entry>
          {/* submit */}
          <Submit type="submit" value="Enviar"/>
        </Form>
      </Content>
    </Container>
  )
}

export default Contacto