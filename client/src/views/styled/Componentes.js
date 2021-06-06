import styled from "styled-components";
import { Link } from "react-router-dom";

export const BaseButton = styled.button`
  background-color: #cb463a;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const QuantityButtons = styled(BaseButton)`
  background-color: #c9c9c9;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  color: grey;
  font-size: 1.5em;
  :hover {
    border: 0.5px solid black;
    color: black;
  }
  :active {
    background-color: #edf7f6;
  }
`;
export const TrashButton = styled(BaseButton)`
  background-color: #cb463a;
  height: 40px;
  width: 40px;
  position: absolute;
  top: 0;
  right: 0;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  :hover {
    background-color: #3a7d44;
  }
  :active {
    border: 2px solid black;
  }
`;
export const AddToCartButton = styled(BaseButton)`
  background-color: #cb463a;
  padding: 10px;
  border-radius: 25px;

  font-weight: 600;
  font-family: "Inter";
  font-size: 1.2em;
  :hover {
    background-color: #3a7d44;
  }
  :active {
    background-color: #AAF683;
  }
`;
export const PayButton = styled(BaseButton)`
  background-color: #38c1ca;
  padding: 5px;
  border-radius: 25px;
  font-weight: 700;
  width: 120px;
  margin: 5px;
  :hover {
    background-color: blue;
  }
`;
export const DivBadget = styled.div`
  background-color: #38c1ca;
  padding: 5px;
  border-radius: 25px;
  font-weight: 700;
  color: white;
  width: 120px;
  text-align: center;
`;

export const ContainerNavbar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const NavbarUl = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  list-style: none;
`;
export const NavbarLi = styled.li`
  text-decoration: none;
`;
export const NavbarLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
// Componentes INICIO
export const DivFlexRow = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
export const DivFlexCol = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const DivGridCol = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr;
`;
//Componentes Carta de Productos
export const DivCardContainer = styled.div`
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  height: 300px;
  width: 250px;
  margin: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  position: relative;
`;
export const DivCardBottomAlert = styled.div`
  background-color: #38c1ca;
  height: 30px;
  color: white;
  text-align: center;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
