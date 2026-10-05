import { adicionarDespesa, despesasDaCategoria, maiorDespesa, totalGasto,    } from "./despesas"
import { Categoria } from "./tipos";

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


