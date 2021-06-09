import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilm,
  faShoppingCart,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBarLocadora() {
  const carrinho = useSelector((state) => state.carrinho);

  return (
    <div>
      <Navbar sticky="top" bg="dark" variant="dark">
        <Link to="/">
          <Navbar.Brand className="navegacaoBrand">
            <FontAwesomeIcon size="1x" icon={faFilm} />
            LocNow
          </Navbar.Brand>
        </Link>

        <Nav className="navegacao">
          <Link to="/catalogo">
            <Button className="navegacaoLink" variant="dark">
              Catálogo
            </Button>
          </Link>

          <Link to="/pedidos">
            <Button className="navegacaoLink" variant="dark">
              Pedidos
            </Button>
          </Link>

          <Link className="navegacaoCarrinho" to="/carrinho">
            <Button style={{ fontSize: "1.5rem" }} variant="warning">
              <FontAwesomeIcon size="1x" icon={faShoppingCart} />
              Carrinho: {carrinho.length}
            </Button>
          </Link>
          <Button className="logoffBotao" variant="outline-danger">
            <FontAwesomeIcon size="1x" icon={faSignOutAlt} />
            Logoff
          </Button>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBarLocadora;
