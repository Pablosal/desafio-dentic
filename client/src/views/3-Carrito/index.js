import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStores } from "../../redux/actions/cartActions";
import { verificarDigitos } from "../../utilidades/formatearNumero";
import { PayButton, DivFlexCol } from "../styled/Componentes";
import TiendasCheck from "./components/TiendasCheck";
import Shrek from "../../images/arreglar.jpg";
const Carrito = () => {
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const tiendas = useSelector((state) => state.stores);
  const valor = useSelector((state) => state.total);

  useEffect(() => {
    dispatch(updateStores());
    setTotal(valor);
  }, [valor]);
  if (tiendas.length > 0)
    return (
      <DivFlexCol>
        <h2>Tu Carrito</h2>
        {tiendas.map((datosTienda, idx) => (
          <TiendasCheck key={idx} tienda={datosTienda} />
        ))}
        <div className="pago">
          <h2>Total a Pagar</h2>
          <h2> ${verificarDigitos.formateaNumero(total)}</h2>
        </div>
        <PayButton>Pagar</PayButton>
      </DivFlexCol>
    );
  return (
    <DivFlexCol>
      <h3>😨No tienes nada en tu carro!!😨</h3>
      <img src={Shrek} height="300px" alt="Arreglemos esto con una cervecita" />
      <div className="pago">
        <h2>Total a Pagar</h2>
        <h2> ${verificarDigitos.formateaNumero(total)}</h2>
      </div>
      <PayButton>Pagar</PayButton>
    </DivFlexCol>
  );
};

export default Carrito;
