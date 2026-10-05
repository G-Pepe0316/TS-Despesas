import { Despesa, Categoria } from "./tipos";

export function adicionarDespesa(despesas: Despesa[], nova: Despesa): Despesa[] {
  if (nova.valor <= 0) {
    throw new Error("Erro: o valor da despesa não pode ser negativo");
  }

  if (nova.mes < 1 || nova.mes > 12) {
    throw new Error(`Erro: o mês ${nova.mes} não existe`);
  }

  // Retorna um novo array contendo os elementos antigos mais o novo (garante imutabilidade)
  return [...despesas, nova];
}

export function removerDespesa(despesas: Despesa[], id: Despesa['id']): Despesa[] {
    
    return despesas.filter(despesa => despesa.id !== id);// .filter cria um novo array, preservando o array original
}
export function despesasDaCategoria(despesas: Despesa[], categoria: Categoria): Despesa[] {
    return despesas.filter(despesa => despesa.categoria === categoria);//utiliza o .filter para filtrar a categoria especifica
}
export function totalGasto(despesas: Despesa[]): number {
    return despesas.reduce((soma, despesa) => soma + despesa.valor, 0);// Utiliza o método .reduce() para acumular a soma dos valores.
    //o valor sendo 0 incialmente, serve para as listas vazias, onde o retorno será sempre 0.
}
export function maiorDespesa(despesas: Despesa[]): Despesa | undefined{
    throw new Error ("não identificado")
}

