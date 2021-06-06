import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/actions/cartActions";
import Loading from "../shared/Loading";
import { DivFlexRow } from "../styled/Componentes";
import ProductCard from "./components/ProductCard";
const Home = () => {
  const productos = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  if (!productos.items) return <Loading />;
  return (
    <DivFlexRow style={{ padding: "40px" }}>
      {productos.items.map((product) => {
        return <ProductCard key={product._id} producto={product} />;
      })}
    </DivFlexRow>
  );
};

export default Home;
