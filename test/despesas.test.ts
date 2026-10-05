import { describe, expect, it } from "vitest";
import { Despesa, Categoria, Mes } from "../src/tipos";
import {adicionarDespesa, removerDespesa} from "../src/despesas";
describe (adicionarDespesa, ()=>{
    it ("retorna um array com despesa adicionada,", () => {
        expect(adicionarDespesa([
            {id: "1" , descricao:"Uber", valor:20, categoria:"transporte", mes:1 }],
            {id: "2", descricao:"Ceia", valor:200, categoria:"alimentação", mes:12 })).toEqual([
                {id:"1",descricao:"Uber",valor:20,categoria:"transporte",mes:1},
                {id:"2", descricao:"Ceia",valor:200,categoria:"alimentação",mes:12}
            ])
    })
    it ("caso mes não exist, valor negativo", ()=> {
        expect(()=>adicionarDespesa([], {id:"4", descricao:"Piquenique", valor:50, categoria:"lazer",mes:0 })).toThrow("Erro: o mês 0 não existe")
    })
    it ("caso valor seja negativo, resulta em erro", ()=>{
        expect(()=>adicionarDespesa([], {id:"2", descricao:"Onibus", valor:-6, categoria:"transporte",mes:3})).toThrow("Erro: o valor da despesa não pode ser negativo")
    })
})

describe (removerDespesa, ()=>{
    it ("retorna outro array sem uma despesa previamente adicionada,", () => {
        expect(removerDespesa([
            { id: "1", descricao: "Uber", valor: 20, categoria: "transporte", mes: 1 },
            { id: "2", descricao: "Ceia", valor: 200, categoria: "alimentação", mes: 12 }
        ], "2")).toEqual([
            { id: "1", descricao: "Uber", valor: 20, categoria: "transporte", mes: 1 }
        ])
    })

    it("caso o id não exista, retorna uma cópia igual ao array original", () => {
        expect(removerDespesa([
            { id: "1", descricao: "Uber", valor: 20, categoria: "transporte", mes: 1 }
        ], "99")).toEqual([
            { id: "1", descricao: "Uber", valor: 20, categoria: "transporte", mes: 1 }
        ])
    })
})
