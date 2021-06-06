import React from "react";
import {
  DivFlexCol,
  DivGridCol,
  AddToCartButton,
  DivBadget,
} from "../../styled/Componentes";
import { useDispatch } from "react-redux";
import { addItem } from "../../../redux/actions/cartActions";
import { verificarDigitos } from "../../../utilidades/formatearNumero";
export const ProductFile = ({ product, AddToCart }) => {
  const dispatch = useDispatch();
  return (
    <DivFlexCol>
      <DivGridCol className="upper">
        <img src={product.image} height="350" width="350" alt={product.name} />
        <DivFlexCol style={{ justifyContent: "space-between" }}>
          <div style={{ marginBottom: "15px" }}>
            <h2 style={{ width: "365px" }}>{product.name}</h2>
            <DivBadget>{product.store}</DivBadget>
            <span style={{ margin: "15px" }}>
              {product["units_in_pack"]} pack
            </span>
          </div>
          <div style={{ alignSelf: "flex-start", marginBottom: "90px" }}>
            <p style={{ margin: "15px" }}>
              ${verificarDigitos.formateaNumero(product.price)}
            </p>
            <AddToCartButton onClick={() => dispatch(addItem(product))}>
              Agregar al carrito
            </AddToCartButton>
          </div>
        </DivFlexCol>
      </DivGridCol>
      <DivGridCol className="lower" style={{ width: "800px" }}>
        <h3 style={{ textAlign: "center" }}>Descripcion</h3>
        <small style={{ textAlign: "left" }}>{product.description}</small>
      </DivGridCol>
    </DivFlexCol>
  );
};

export const MemoizedProductFile = React.memo(ProductFile);
