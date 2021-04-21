import styled from 'styled-components/macro'
import Header from './components/Header'
import Nav from './components/Nav'
import GlobalStyle from './styles/GlobalStyle'

const AppContainer = styled.div`
  position: relative;
`

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      
      <Nav />
      <Header />
    </AppContainer>
  );
}

export default App;