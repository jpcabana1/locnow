import { ADICIONARCARRINHO, REMOVERCARRINHO } from "./carrinhoActions";

export const carrinhoReducer = (state = [], action) => {
  switch (action.type) {
    case ADICIONARCARRINHO: {
      const novoItem = action.payload;
      let filtro = state.filter((item) => item.idFilme === novoItem.idFilme);
      if (filtro.length === 0) {
        return [...state, action.payload];
      } else {
        return state;
      }
    }
    case REMOVERCARRINHO: {
      const id = action.payload;
      let filtro = state.filter((item) => item.idFilme !== parseInt(id));
      console.log(id);
      state = filtro;
      return state;
    }
    default:
      return state;
  }
};
