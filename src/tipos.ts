export type Categoria = 'alimentação' | 'transporte' | 'lazer' | 'moradia'; 
export const CATEGORIAS = [
  'alimentação',
  'transporte',
  'lazer',
  'moradia',
] as const;
export type Mes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface Despesa {
  readonly id: string;//O "readonly"  faz com que o id não mude depois de gerar uma despesa.
  descricao: string;//campo obrigatório.
  valor: number;//campo obrigatório.
  categoria: Categoria;//campo obrigatório.
  mes: Mes;//campo obrigatório.
  observacao?: string; //O sinal ? é usado pra mostrar que é um campo opcional.
}

