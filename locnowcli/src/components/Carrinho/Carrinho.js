import { React } from "react";
import { useSelector, useDispatch } from "react-redux";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { removerCarrinho } from "../../reducers/carrinho/carrinhoActions";
import "bootstrap/dist/css/bootstrap.min.css";
function Carrinho() {
  const carrinho = useSelector((state) => state.carrinho);
  const dispatch = useDispatch();

  const remover = (e) => {
    console.log(e.target.value);
    dispatch(removerCarrinho(e.target.value));
  };

  return (
    <div className="catalogo">
      {carrinho.map((item) => {
        return (
          <Row>
            <Col>
              <Figure.Image width={100} height={100} src={item.srcImage} />
            </Col>
            <Col style={{ width: "30rem", paddingTop: "3rem" }}>
              <h5>{item.nome}</h5>
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
        );
      })}
    </div>
  );
}

export default Carrinho;
