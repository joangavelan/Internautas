import styled from 'styled-components/macro'
import Header from './components/Header'
import Nav from './components/Nav'
import UniendoChimbote from './sections/UniendoChimbote'
import GlobalStyle from './styles/GlobalStyle'
import './global-styles.css'
import Rutas from './sections/Rutas'

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
    </AppContainer>
  );
}

export default App;