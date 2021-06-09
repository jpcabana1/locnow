import { React } from "react";
import { useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { adcionarCarrinho } from "../../reducers/carrinho/carrinhoActions";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CartaoFilme.css";

function CartaoFilme(props) {
  const dispatch = useDispatch();

  const criarItem = () => {
    const item = {
      idFilme: props.id,
      diasAlocacao: 0,
      nome: props.name,
      srcImage: props.srcImage,
    };
    console.log(item);
    dispatch(adcionarCarrinho(item));
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
            <b>{props.name}</b>
          </Card.Text>
          <Button variant="outline-secondary" className="botaoCartao">
            Adicionar
            <FontAwesomeIcon
              className="botaoIcone"
              size="2x"
              icon={faPlusSquare}
              onClick={criarItem}
            />
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CartaoFilme;
