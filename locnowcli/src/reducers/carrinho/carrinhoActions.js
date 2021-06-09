export const ADICIONARCARRINHO = "ADICIONARCARRINHO";
export const REMOVERCARRINHO = "REMOVERCARRINHO";
export const LIMPARCARRINHO = "LIMPARCARRINHO";

export function adcionarCarrinho(item) {
  return {
    type: ADICIONARCARRINHO,
    payload: item,
  };
}

export function removerCarrinho(id) {
  return {
    type: REMOVERCARRINHO,
    payload: id,
  };
}

export function limparCarrinho() {
  return {
    type: LIMPARCARRINHO,
    payload: null,
  };
}
