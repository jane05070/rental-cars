import Navigation from 'components/Navigation/Navigation'
import { AppBar } from './Header.styled'
import Container from "../Container/Container"



const Header = () => {
  return (
    <Container>
    <AppBar>
     
        <Navigation/>
      
      </AppBar>
    </Container>
  )
}

export default Header
