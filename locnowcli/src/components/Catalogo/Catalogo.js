import { React } from "react";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { carregarFilmes } from "../../reducers/filmes/filmesActions";
import CartaoFilme from "../CartaoFilme/CartaoFilme";
import "./Catalogo.css";

function Catalogo() {
  // const [filmes, setFilmes] = useState([]);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true);

  // if (error) {
  //   return (
  //     <div className="catalogo">
  //       <h1>Ocorreu um erro!</h1>
  //     </div>
  //   );
  // } else if (loading) {
  //   return (
  //     <div>
  //       <h1>Carregando...</h1>
  //     </div>
  //   );
  // } else {
  const filmes = useSelector((state) => state.filmes);
  return (
    <div className="catalogo">
      {filmes.map((filme) => {
        return <div> {CartaoFilme(filme)}</div>;
      })}
    </div>
  );
  //}
}

export default Catalogo;
