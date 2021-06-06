import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { computeTotal } from "../../../redux/actions/cartActions";
import { verificarDigitos } from "../../../utilidades/formatearNumero";
import TiendaIndividual from "./TiendaIndividual";
const TiendasCheck = ({ tienda }) => {
  const [productos, setProductos] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const stateProductData = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const colorPicker = () => {
    if (tienda === "Tamango") {
      return "#F514E2";
    } else if (tienda === "Hasta Pronto") {
      return "#17C0F4";
    } else {
      return "#" + (((1 << 24) * Math.random()) | 0).toString(16);
    }
  };
  useEffect(() => {
    setProductos(stateProductData.filter((item) => item.store === tienda));
    dispatch(computeTotal());
  }, [stateProductData]);

  useEffect(() => {
    setSubtotal(
      productos.reduce((acc, item) => parseInt(item.subtotal) + acc, 0)
    );
  }, [productos]);

  if (productos.length === 0) return <h1>Loading</h1>;
  return (
    <div className="align_column">
      <h4
        className="center_text store_cookie"
        style={{ backgroundColor: colorPicker(tienda) }}
      >
        {tienda}
      </h4>
      <table style={{ width: "800px", fontWeight:"600" }}>
        <tbody>
          {productos.map((i) => (
            <TiendaIndividual
              key={i._id}
              producto={i}
              cantidad={i.amount}
              subtotal={i.subtotal}
            />
          ))}
          <tr className="galleton ">
            <td> </td>
            <td className="galleton_center"> Total en esta tienda</td>
            <td>
              <span> ${verificarDigitos.formateaNumero(subtotal)}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TiendasCheck;
