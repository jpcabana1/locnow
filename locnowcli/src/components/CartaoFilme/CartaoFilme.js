import { React, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import PainelAdicionarCarrinho from "../PainelAdicionarCarrinho/PainelAdicionarCarrinho";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CartaoFilme.css";

function CartaoFilme(props) {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div key={props.id.toString()}>
      <Card className="cartaoFilme">
        <Card.Img
          className="cartaoImagem"
          variant="bottom"
          src={props.srcImage}
        />
        <Card.Body>
          <Card.Text className="textCartao">
            {" "}
            <b>{props.name}</b>
          </Card.Text>
          <Button
            onClick={handleClick}
            variant="outline-secondary"
            className="botaoCartao"
          >
            Adicionar
            <FontAwesomeIcon
              className="botaoIcone"
              size="2x"
              icon={faPlusSquare}
            />
          </Button>
        </Card.Body>
      </Card>
      {PainelAdicionarCarrinho({
        show: show,
        onHide: handleClick,
        info: props,
      })}
    </div>
  );
}

export default CartaoFilme;
