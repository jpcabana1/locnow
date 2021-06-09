export const CARREGARFILMES = "CARREGARFILMES";

export function carregarFilmes(filmes) {
  return {
    type: CARREGARFILMES,
    payload: filmes,
  };
}
