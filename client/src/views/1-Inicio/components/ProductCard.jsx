import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../../redux/actions/cartActions";
import { verificarDigitos } from "../../../utilidades/formatearNumero";
import {
  DivCardContainer,
  NavbarLink,
  TrashButton,
  DivFlexCol,
  DivCardBottomAlert,
} from "../../styled/Componentes";
export const ProductCard = ({ producto }) => {
  useEffect(() => {
    // console.log(producto) ;
  }, []);
  const dispatch = useDispatch();
  return (
    <DivCardContainer>
      <TrashButton onClick={() => dispatch(addItem(producto))}>
        <span className="material-icons">shopping_bag</span>
      </TrashButton>
      <NavbarLink to={`/${producto._id}`}>
        <DivFlexCol className="header">
          <img src={producto.image} height="150px" width="150px" alt="" />
        </DivFlexCol>
        <DivFlexCol className="body">
          <h5 style={{ margin: "0", textAlign: "center" }}>{producto.name}</h5>
          <p style={{ margin: "5px" }}>{producto["units_in_pack"]} pack</p>
          <p style={{ margin: "5px" }}>${verificarDigitos.formateaNumero( producto.price)}</p>
        </DivFlexCol>
        <div className="footer">
          {producto["fast_shipping"] ? (
            <DivCardBottomAlert>Envio Rapido</DivCardBottomAlert>
          ) : null}
        </div>
      </NavbarLink>
    </DivCardContainer>
  );
};
export default ProductCard;
