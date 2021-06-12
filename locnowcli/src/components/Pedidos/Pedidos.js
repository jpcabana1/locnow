import { React, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ItensPedido from "../ItensPedido/ItensPedido";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "./Pedidos.css";

function Pedidos() {
  const [pedidos, setPedidos] = useState([]);
  const [show, setShow] = useState(false);
  const [selecionado, setSelecionado] = useState({});

  const handleClick = (e) => {
    let index = parseInt(e.target.value);
    setSelecionado(pedidos.filter((pedido) => pedido.id === index));
    setShow(!show);
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:3001/pedidos")
        .then((res) => res.json())
        .then((result) => {
          setPedidos(result);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, 500);
  }, []);

  return (
    <div className="pedidosMain">
      <h1>Pedidos</h1>
      {ItensPedido({
        show: show,
        onHide: handleClick,
        info: selecionado,
      })}
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Id do pedido</th>
            <th>Status</th>
            <th>Detalhes</th>
            <th>Encerrar</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((pedido) => {
            return (
              <tr key={pedido.id}>
                <td>{pedido.id}</td>
                <td>
                  <b>{pedido.status}</b>
                </td>
                <td>
                  <Button
                    value={pedido.id}
                    onClick={handleClick}
                    variant="warning"
                  >
                    Detalhes
                  </Button>
                </td>
                <td>
                  <Button variant="danger">Encerrar</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Pedidos;
