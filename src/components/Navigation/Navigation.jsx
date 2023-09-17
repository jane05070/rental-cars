import {
  Nav,
  NavList,
  Link,
  HomeIcon,
  NavListItem,
  NavBlock,
  
} from './Navigation.styled';




const Navigation = () => {

 
  return (
    
    <Nav>
      <NavList>
        <NavBlock>
          <NavListItem>
            <Link to="/">
              <HomeIcon />
            </Link>
          </NavListItem>
          <NavListItem>
            <Link to="/">Home</Link>
          </NavListItem>
          <NavListItem>
            <Link to="/catalog">Catalogue</Link>
          </NavListItem>
          <NavListItem>
            <Link to="/favorites">Favorites</Link>
          </NavListItem>
        </NavBlock>
      

      </NavList>
      </Nav>
    
  );
};

export default Navigation;
