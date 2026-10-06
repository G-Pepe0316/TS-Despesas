# TS-DESPESAS
## CONTROLE DE DESPESAS EM TYPESCRIPT
Módulo em Typescript voltado a controle de despesas mensais utilizando typescript

## INSTALAÇÃO 
### Pré requisitos
- Node.js
- git
### ETAPAS
1- Abra o seu terminal na pasta onde deseja criar o projeto e execute:

 - npm init -y: Cria o arquivo package.json de forma automática com as configurações padrão, permitindo que o Node.js gerencie as dependências do seu projeto.

2- Instale as ferramentas para compilar e testar o typescript:

```bash
npm install -D typescript @types/node tsx vitest
```

 - typescript: O compilador oficial do TypeScript, responsável por checar os tipos e transpirar o código para JavaScript.

 - @types/node: Fornece as tipagens globais do Node.js para o TypeScript reconhecer funções nativas do ambiente.

 - tsx: Um executor moderno que permite rodar arquivos .ts diretamente no terminal sem precisar compilá-los manualmente para JavaScript antes.

 - vitest: O framework de testes unitários super rápido e compatível com o ecossistema moderno.

3- Gere o arquivo de configuração od compilador:

```bash
npx tsc --init
```

Abra o arquivo tsconfig.json gerado e certifique-se de que a diretiva strict: true está ativada (exigência do projeto para checagem estrita de tipos). Ao final do arquivo, adicione também a exclusão da pasta de testes se necessário ("exclude": ["test"]).

4- Configurar os Scripts no package.json

Abra o seu arquivo package.json e adicione/ajuste a seção "scripts" para automatizar a execução do projeto:

```bash
"scripts": {
  "test": "vitest run",
  "dev": "tsx src/index.ts"}
```

 - npm test: Executa os testes unitários com o Vitest uma única vez (sem ficar rodando em modo interativo/watch).

 - npm run dev: Executa o arquivo principal src/index.ts usando o tsx.

### Arquivos de Configuração
 - package.json: Gerencia os metadados, dependências de desenvolvimento e os scripts personalizados de execução (test e dev).

 - tsconfig.json: Configura o compilador TypeScript com diretivas rígidas (strict: true) para garantir segurança de tipos e contém a regra "exclude": ["test"] ao término.

 - .gitignore: Define os arquivos e pastas que devem ser ignorados pelo controle de versão do Git, como node_modules/ e dist/.

### Registro de uso de IA
| Função | Status / Ajuste |
| :--- | :--- |
| `adicionarDespesa` | Sucesso na implementação inicial baseada rigorosamente no teste de borda e valor/mês. |
| `removerDespesa` | Requeriu pequeno retrabalho para alinhar a tipagem do ID e garantir a pureza da função sem mutação. |
| `despesasDaCategoria` | Sucesso fluido ao aplicar o filtro de categoria tipada por Union Type. |
| `totalGasto` | Sucesso utilizando o acumulador `.reduce()` com tratamento correto para lista vazia. |
| `maiorDespesa` | Sucesso na verificação de array vazio retornando `undefined` conforme esperado. |


### REFLEXÃO SOBRE O USO DE IA

Durante o desenvolvimento, a IA obteve pleno sucesso na criação direta das funções adicionarDespesa, despesasDaCategoria, totalGasto e maiorDespesa, respondendo perfeitamente aos critérios de imutabilidade e tipagem estrita exigidos pelos testes. Houve apenas um pequeno retrabalho na função removerDespesa, onde foi necessário ajustar a tipagem do identificador para manter a consistência com o restante do código principal sem alterar o array original. Portanto, aplicando o modo de IA Par, é possível automatiza partes que levariam grande tempo para desenvolver sozinhas, aplicando do modo utilizado nesse projeto, você cria os resultados antes de modelar a função, deixando muito mais rápido e diminuindo retrabalhos dentro do código, ainda que devam ser revisados e interpretados corretamente, visto que as IA's dependem de instruções claras do que fazer.