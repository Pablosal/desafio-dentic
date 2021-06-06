import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./utilidades/routes";
import Navbar from "./views/shared/Navbar";
import Home from "./views/1-Inicio";
import Producto from "./views/2-Producto";
import Carrito from "./views/3-Carrito";
import { fetchData } from "./redux/actions/cartActions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route exact path={ROUTES.CHECKOUT} component={Carrito} />
        <Route exact path={ROUTES.PRODUCTO} component={Producto} />
      </Switch>
    </Router>
  );
}

export default App;
