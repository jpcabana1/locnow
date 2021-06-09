export const ADICIONARCARRINHO = "ADICIONARCARRINHO";
export const REMOVERCARRINHO = "REMOVERCARRINHO";
export const AJUSTARDATA = "AJUSTARDATA";

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
