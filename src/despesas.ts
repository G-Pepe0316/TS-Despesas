import { Despesa } from "./tipos";

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
export function despesasDaCategoria(despesas: Despesa[], categoria: Despesa): Despesa[]{
    throw new Error ("não implementado")
}
export function totalGasto(despesas: Despesa[]): number{
    throw new Error ("não implementado")
}
export function maiorDespesa(despesas: Despesa[]): Despesa | undefined{
    throw new Error ("não identificado")
}

