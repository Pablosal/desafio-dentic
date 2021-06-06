import React from "react";
import { ContainerNavbar, NavbarUl,NavbarLi ,NavbarLink} from "../styled/Componentes";
import * as ROUTES from "../../utilidades/routes";
import Logo from '../../images/CBS_Logo_340x.png'
const Navbar = () => {
  return (
    <ContainerNavbar>
      <NavbarUl>
        <NavbarLi>
          <NavbarLink to={ROUTES.HOME}>Tienda</NavbarLink>
        </NavbarLi>
        <NavbarLi>
          <NavbarLink to={ROUTES.HOME}>
            <img src={Logo} height="200px" alt="" />
          </NavbarLink>
        </NavbarLi>
        <NavbarLi>
          <NavbarLink to={ROUTES.CHECKOUT}>
          <span className="material-icons">shopping_bag</span>
          </NavbarLink>
        </NavbarLi>
      </NavbarUl>
    </ContainerNavbar>
  );
};

export default Navbar;
