import styled from 'styled-components/macro'
import Header from './components/Header'
import GlobalStyle from './styles/GlobalStyle'

const AppContainer = styled.div`
  position: relative;
`

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      
      <Header />
    </AppContainer>
  );
}

export default App;