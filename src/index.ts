import { despesasDaCategoria, maiorDespesa, removerDespesa, adicionarDespesa, totalGasto } from "./despesas";
import { Despesa, Categoria, CATEGORIAS } from "./tipos";
import { descricaoCategoria, matrizCategoriaMes, formatarRelatorio } from "./relatorio";

const despesasMeses: Despesa[]=[
        {id:"1",descricao:"Uber",valor:20,categoria:"transporte",mes:1},
        {id:"2",descricao:"Água",valor:400,categoria:"moradia",mes:4},
        {id:"3",descricao:"Pesca",valor:50,categoria:"lazer",mes:5},
        {id:"4",descricao:"Onibus",valor:6,categoria:"transporte",mes:2},
        {id:"5",descricao:"Festa",valor:299,categoria:"lazer",mes:10},
        {id:"6",descricao:"Ceia",valor:300,categoria:"alimentação",mes:12},
        {id:"7",descricao:"Mercado",valor:500,categoria:"alimentação",mes:3},
        {id:"8",descricao:"IPVA",valor:1400,categoria:"transporte",mes:1},
]

console.log(formatarRelatorio(despesasMeses))

