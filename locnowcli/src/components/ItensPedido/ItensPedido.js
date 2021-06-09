import { React } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Figure from "react-bootstrap/Figure";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import "./ItensPedido.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ItensPedido(props) {
  console.log(props.info);
  return (
    <Modal
      show={props.show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="modalBordas">
        <Modal.Title id="contained-modal-title-vcenter">
          Pedido: {props.info.id}
        </Modal.Title>
        <Button variant="link" onClick={props.onHide}>
          <FontAwesomeIcon size="2x" icon={faWindowClose} />
        </Button>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Status</th>
              <th>Detalhes</th>
              <th>Encerrar</th>
            </tr>
          </thead>
          <tbody>
            {/* {props.itens.map((item) => {
              return (
                <tr>
                  <td>
                    <Figure.Image
                      width={100}
                      height={100}
                      src={item.srcImage}
                    />
                  </td>
                </tr>
              );
            })} */}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer className="modalBordas">
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ItensPedido;
