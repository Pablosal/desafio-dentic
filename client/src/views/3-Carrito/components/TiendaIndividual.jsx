import React from "react";
import { useDispatch } from "react-redux";
import {
  decrease,
  increase,
  removerDelCarro,
} from "../../../redux/actions/cartActions";
import { verificarDigitos } from "../../../utilidades/formatearNumero";
import { QuantityButtons, DivFlexCol } from "../../styled/Componentes";
const TiendaIndividual = ({ producto, cantidad, subtotal }) => {
  const dispatch = useDispatch();

  return (
    <tr>
      <td className="fixed_width">{producto.name}</td>
      <td className="galleton_center">
        <QuantityButtons
          onClick={() => {
            if (cantidad <= 1) {
              dispatch(removerDelCarro(producto));
            } else {
              dispatch(decrease(producto));
            }
          }}
        >
          -
        </QuantityButtons>
        <h5 className="no-margin mx">{cantidad}</h5>

        <QuantityButtons onClick={() => dispatch(increase(producto))}>
          +
        </QuantityButtons>
        <span
          className="material-icons erase"
          onClick={() => dispatch(removerDelCarro(producto))}
        >
          delete
        </span>
      </td>
      <td>
        {" "}
        <span>${verificarDigitos.formateaNumero(subtotal)}</span>
      </td>
    </tr>
  );
};

export default TiendaIndividual;
