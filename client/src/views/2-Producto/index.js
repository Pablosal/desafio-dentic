import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import data from "../../data.json";
import Loading from "../shared/Loading";
import { MemoizedProductFile } from "./components/ProductFile";
let memoizedItem;
const Producto = () => {
  const { product_id } = useParams();
  const [masterData, setMasterData] = useState({});
  const productos = useSelector((state) => state.products);
  useEffect(() => {
    console.log({ productos });
    console.log({ masterData });
  }, []);
  useEffect(() => {
    fetch(`https://api-beer-thang.herokuapp.com/api/${product_id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())

      .then((res) => setMasterData(res));
  }, []);

  if (!masterData) return <Loading />;
  return <MemoizedProductFile product={masterData} />;
};

export default Producto;
