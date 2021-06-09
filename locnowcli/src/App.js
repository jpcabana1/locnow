import { React, useEffect } from "react";
import Catalogo from "./components/Catalogo/Catalogo";
import Pedidos from "./components/Pedidos/Pedidos";
import Carrinho from "./components/Carrinho/Carrinho";
import NavBarLocadora from "./components/NavBar/NavBarLocadora";
import Erro from "./components/Erro/Erro";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { carregarFilmes } from "./reducers/filmes/filmesActions";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3001/filmes")
      .then((res) => res.json())
      .then((result) => {
        dispatch(carregarFilmes(result));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="App">
      <main>
        <NavBarLocadora />
        <Switch>
          <Route path="/" component={Pedidos} exact />
          <Route path="/catalogo" component={Catalogo} exact />
          <Route path="/pedidos" component={Pedidos} />
          <Route path="/carrinho" component={Carrinho} />
          <Route component={Erro} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
