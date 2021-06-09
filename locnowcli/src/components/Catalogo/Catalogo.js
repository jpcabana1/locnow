import { React } from "react";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { carregarFilmes } from "../../reducers/filmes/filmesActions";
import CartaoFilme from "../CartaoFilme/CartaoFilme";
import "./Catalogo.css";

function Catalogo() {
  const filmes = useSelector((state) => state.filmes);

  return (
    <div className="catalogo">
      {filmes.map((filme) => {
        return <div key={filme.id.toString()}> {CartaoFilme(filme)}</div>;
      })}
    </div>
  );
}

export default Catalogo;
