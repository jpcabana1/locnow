import { React } from "react";
import { useSelector, useDispatch } from "react-redux";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faCheckCircle,
  // faSearch,
} from "@fortawesome/free-solid-svg-icons";
import {
  removerCarrinho,
  limparCarrinho,
} from "../../reducers/carrinho/carrinhoActions";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carrinho.css";

function Carrinho() {
  const carrinho = useSelector((state) => state.carrinho);
  const dispatch = useDispatch();

  const inserirPedido = (pedido) => {
    fetch(" http://localhost:3001/pedidos", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pedido),
    });
  };

  const remover = (e) => {
    dispatch(removerCarrinho(e.target.value));
  };

  const criarPedido = () => {
    let pedido = {
      idcliente: 1,
      idusuario: 1,
      status: "ATIVO",
      itens: carrinho,
    };
    console.log(pedido);
    inserirPedido(pedido);
    dispatch(limparCarrinho());
  };

  return (
    <div className="catalogo">
      <Container fluid="md">
        <Row>
          <Col>
            <Button
              onClick={criarPedido}
              variant="success"
              style={{
                width: "20rem",
                marginTop: "3rem",
                float: "right",
                textAlign: "left",
                fontSize: "2rem",
                color: "",
              }}
            >
              Finalizar pedido
              <FontAwesomeIcon
                style={{ float: "right" }}
                size="2x"
                icon={faCheckCircle}
              />
            </Button>
          </Col>
        </Row>
      </Container>
      {carrinho.map((item) => {
        return (
          <div key={item.idFilme}>
            <Row>
              <Col>
                <Figure.Image width={100} height={100} src={item.srcImage} />
              </Col>
              <Col
                style={{ width: "30rem", paddingTop: "3rem", color: "white" }}
              >
                <h5>{item.nome}</h5>
              </Col>
              <Col
                style={{ width: "30rem", paddingTop: "3rem", color: "white" }}
              >
                <h5>
                  Tempo de alocação: <b>{item.diasAlocacao}</b> dias
                </h5>
              </Col>
              <Col
                style={{
                  width: "30rem",
                  paddingTop: "3rem",
                  color: "rgb(255, 200, 0)",
                }}
              >
                <h5>Valor do aluguel: R${item.valoraluguel}</h5>
              </Col>
              <Col>
                <Button
                  key={item.idFilme}
                  value={item.idFilme}
                  variant="danger"
                  style={{
                    width: "8rem",
                    marginTop: "3rem",
                    marginRight: "4rem",
                    fontSize: "1rem",
                  }}
                  onClick={remover}
                >
                  <FontAwesomeIcon size="2x" icon={faTrash} />
                </Button>
              </Col>
            </Row>
          </div>
        );
      })}
    </div>
  );
}

export default Carrinho;
