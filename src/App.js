import styled from 'styled-components/macro'
import Header from './components/Header'
import Nav from './components/Nav'
import RedChimboteros from './sections/UniendoChimbote'
import GlobalStyle from './styles/GlobalStyle'
import './global-styles.css'
import Rutas from './sections/Rutas'
import Curricula from './sections/Curricula'
import Convocatoria from './sections/Convocatoria'
import Equipo from './sections/Equipo'
import Contacto from './sections/Contacto'
import Footer from './sections/Footer'
import Aliados from './sections/Aliados'
import Address from './components/Address'

const AppContainer = styled.div`
  position: relative;
`

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      
      <Nav />
      <Header />
      <RedChimboteros />
      <Rutas />
      <Curricula />
      <Equipo />
      <Convocatoria />
      <Aliados />
      <Contacto />
      <Footer /> 
      <Address />

    </AppContainer>
  )
}

export default App;