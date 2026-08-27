# backend-full-exemple-project

[Backend publicado no Render](https://backend-full-exemple-project.onrender.com)

Este repositorio contem a parte **backend** de um projeto exemplo inicial e educacional. Ele foi criado para consolidar, na pratica, os conhecimentos envolvidos na construcao de uma API e na integracao entre backend e uma aplicacao frontend desenvolvida com um framework moderno.

A proposta e apresentar uma API pequena, funcional e facil de entender. Ela fornece a data e a hora atuais do servidor, alem de uma mensagem de status que pode ser consumida pelo frontend. O projeto serve como base para estudar conceitos fundamentais antes de avancar para aplicacoes maiores.

## Objetivos de aprendizagem

- Entender o papel do backend em uma aplicacao web.
- Criar uma API HTTP com Node.js e Express.
- Criar rotas e retornar dados no formato JSON.
- Permitir o acesso da aplicacao frontend usando CORS.
- Configurar a porta do servidor por variavel de ambiente.
- Integrar uma API publicada no Render com um frontend hospedado no Vercel.
- Conhecer um fluxo basico de desenvolvimento local e deploy.

## Tecnologias

- Node.js
- Express
- CORS
- JavaScript com suporte a ES Modules
- Render para hospedagem da API

## Como a API funciona

A API possui uma rota principal:

```http
GET /
```

Ela retorna um objeto JSON semelhante a este:

```json
{
	"date": "27/08/2026, 13:00:00",
	"status": "API no Render funcionando!"
}
```

O frontend consulta essa rota para exibir o horario atual e verificar se a API esta online. Como o CORS esta habilitado, a API pode receber requisicoes de uma aplicacao frontend hospedada em outro dominio.

## Executando localmente

Na pasta do backend, instale as dependencias:

```bash
npm install
```

Inicie o servidor:

```bash
node api.js
```

Por padrao, a API sera executada em:

```text
http://localhost:3000
```

Para testar a rota principal, acesse `http://localhost:3000/` no navegador ou use uma ferramenta como curl, Insomnia ou Postman.

## Variavel de ambiente

O servidor utiliza a variavel `PORT` quando ela esta definida. Caso contrario, usa a porta `3000`:

```env
PORT=3000
```

Em plataformas como o Render, a porta e fornecida automaticamente pela plataforma. Por isso, o codigo utiliza `process.env.PORT` antes de recorrer ao valor local.

## Estrutura principal

```text
api.js          # servidor Express e rota principal da API
package.json    # dependencias do backend
package-lock.json
```

## Integracao com o frontend

O frontend deve utilizar a URL da API por meio da variavel `VITE_API_URL`:

```env
VITE_API_URL=https://backend-full-exemple-project.onrender.com
```

Durante o desenvolvimento local, essa variavel pode apontar para `http://localhost:3000`. Em producao, o frontend hospedado no Vercel deve apontar para o endereco publicado no Render.

## Proximos passos

Este projeto pode evoluir com novas rotas, validacao de dados, controllers, persistencia em banco de dados, autenticacao e testes automatizados. Cada melhoria pode ser usada para praticar uma etapa diferente da construcao de APIs e da comunicacao com o frontend.
