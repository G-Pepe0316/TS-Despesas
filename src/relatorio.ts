import { adicionarDespesa, despesasDaCategoria, maiorDespesa, totalGasto,    } from "./despesas"
import { Categoria, Despesa, CATEGORIAS } from "./tipos";

export function descricaoCategoria(categoria: Categoria): string
{   switch (categoria){
        case "alimentação":
            return "alimentação"
        case "transporte":
            return "transporte"
        case "lazer":
            return"lazer"
        case "moradia":
            return "moradia"
    }
}

export function matrizCategoriaMes(despesas: Despesa[]): number[][] {
  const matriz: number[][] = [];
  for (let c = 0; c < CATEGORIAS.length; c++) {
    const linha: number[] = [];
    for (let m = 0; m < 12; m++) {
      linha.push(0);
    }
    matriz.push(linha);
  }

  // 2) Soma cada despesa na célula [categoria][mês]
  for (let i = 0; i < despesas.length; i++) {
    const despesa = despesas[i];
    if (despesa === undefined) continue;

    for (let c = 0; c < CATEGORIAS.length; c++) {
      if (CATEGORIAS[c] === despesa.categoria) {
        const linha = matriz[c];
        if (linha !== undefined) {
          // mês 1 está na coluna 0, mês 12 na coluna 11
          linha[despesa.mes - 1] = (linha[despesa.mes - 1] ?? 0) + despesa.valor;
        }
      }
    }
  }

  return matriz;
}

