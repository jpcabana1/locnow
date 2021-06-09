import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBarLocadora() {
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

          <Link to="/carrinho">
            <Button className="navegacaoLink" variant="dark">
              Carrinho
            </Button>
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBarLocadora;
