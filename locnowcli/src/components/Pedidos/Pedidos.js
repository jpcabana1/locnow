import { React, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "./Pedidos.css";

function Pedidos() {
  const [pedidos, setPedidos] = useState([]);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:3001/pedidos")
        .then((res) => res.json())
        .then((result) => {
          setPedidos(result);
          console.log(result);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, 500);
  }, []);

  return (
    <div className="pedidosMain">
      <h1>Pedidos</h1>
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
              <tr>
                <td>{pedido.id}</td>
                <td>
                  <b>{pedido.status}</b>
                </td>
                <td>
                  <Button variant="warning">Detalhes</Button>
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
