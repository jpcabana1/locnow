import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Figure from "react-bootstrap/Figure";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PainelAdicionarCarrinho.css";
// import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { adcionarCarrinho } from "../../reducers/carrinho/carrinhoActions";

function PainelAdicionarCarrinho(props) {
  const dispatch = useDispatch();

  const criarItem = (e) => {
    const item = {
      idFilme: props.info.id,
      diasAlocacao: e.target.value,
      nome: props.info.name,
      statusdevolucao: false,
      valoraluguel: props.info.valoraluguel,
      srcImage: props.info.srcImage,
    };
    console.log(item);
    dispatch(adcionarCarrinho(item));
  };

  return (
    <div>
      <Modal
        show={props.show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="modalBordas">
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="modalBordas"
          >
            Informação
          </Modal.Title>
          <Button variant="link" onClick={props.onHide}>
            <FontAwesomeIcon size="2x" icon={faWindowClose} />
          </Button>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <h4>{props.info.name}</h4>
          <Figure>
            <Figure.Image
              alt="171x180"
              className="modelImagem"
              src={props.info.srcImage}
            />
            <Figure.Caption className="modalCaption">
              Preço do aluguel: <b>R${props.info.valoraluguel}</b>
            </Figure.Caption>
          </Figure>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <div className="botoesAluguelModal">
            <Button
              value="1"
              className="botaoAluguel"
              variant="primary"
              onClick={criarItem}
            >
              Alugar para 1 dia
            </Button>
            <Button
              value="3"
              className="botaoAluguel"
              variant="primary"
              onClick={criarItem}
            >
              Alugar para 3 dias
            </Button>
            <Button
              value="5"
              className="botaoAluguel"
              variant="primary"
              onClick={criarItem}
            >
              Alugar para 5 dias
            </Button>
            <Button
              value="7"
              className="botaoAluguel"
              variant="primary"
              onClick={criarItem}
            >
              Alugar para 7 dias
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer className="modalBordas"></Modal.Footer>
      </Modal>
    </div>
  );
}

export default PainelAdicionarCarrinho;
