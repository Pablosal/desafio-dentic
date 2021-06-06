import React from "react";
import Logo from "../../images/CBS_Logo_340x.png";

const Loading = () => {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "space-around",
        height: "100vh",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "30px",
      }}
    >
      <img className="loading" src={Logo} alt="loading logo" />;
      <h2>Cargando las mejores cervezas que probaras alguna vez...</h2>
    </div>
  );
};

export default Loading;
