import {
  ADICIONARCARRINHO,
  REMOVERCARRINHO,
  LIMPARCARRINHO,
} from "./carrinhoActions";

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
      console.log(id);
      let filtro = state.filter((item) => item.idFilme !== parseInt(id));
      state = filtro;
      return state;
    }
    case LIMPARCARRINHO: {
      state = [];
      return state;
    }
    default:
      return state;
  }
};
