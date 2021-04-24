import styled from 'styled-components/macro'
import Header from './components/Header'
import Nav from './components/Nav'
import UniendoChimbote from './sections/UniendoChimbote'
import GlobalStyle from './styles/GlobalStyle'
import './global-styles.css'
import Rutas from './sections/Rutas'
import Curricula from './sections/Curricula'
import Convocatoria from './sections/Convocatoria'
import Equipo from './sections/Equipo'
import Contacto from './sections/Contacto'
import Footer from './sections/Footer'

const AppContainer = styled.div`
  position: relative;
`

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      
      <Nav />
      <Header />
      <UniendoChimbote />
      <Rutas />
      <Curricula />
      <Convocatoria />
      <Equipo />
      <Contacto />
      <Footer />

    </AppContainer>
  );
}

export default App;