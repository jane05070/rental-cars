import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { BsFillCarFrontFill } from 'react-icons/bs';


export const Nav = styled.nav`
   display: flex;
   justify-content: center;
   align-items: center;
  gap: 20px;
   paddimg-top: 40px;
   paddimg-bottom: 40px;
   
  
`;

export const NavList = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
`;

export const NavBlock = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (min-width: 768px) {
    gap: 30px;
  }
 
`;

export const NavListItem = styled.li`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;




export const Link = styled(NavLink)`
  display: flex;
  font-family: 'Montserrat', sans-serif;

  font-size: 20px;
  line-height: 1.2;
  font-weight: 600;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  

  svg {
    fill: black;
     
  }

  &.active,
  &:hover,
  &:focus {
    color: black;

    svg {
      fill: black;
      // border: 2px solid black;
     
     
    }
  }
`;

export const HomeIcon = styled(BsFillCarFrontFill)`
  width: 25px;
  height: 25px;
  margin: 0;
  // padding: 10px;

  color: black;
  // border-radius: 50%;
  // border: 2px solid #7b9ed9;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
`;






