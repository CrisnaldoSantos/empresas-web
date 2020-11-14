<h1 align="center">
  <br/>
    Empresas Web
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/CrisnaldoSantos/empresas-web?color=blue">

  <a href="https://www.crisnaldocarvalho.com.br">
    <img alt="Made by Crisnaldo" src="https://img.shields.io/badge/made%20by-Crisnaldo Carvalho-blue">
  </a>
</p>

<p>Aplicação criada para o teste prático proposto pela Empresa Ioasys para vaga de front-end ReactJS.</p>

## Demo:
<a href="https://crisnaldo-empresas-web.web.app/" target="_blanck">https://crisnaldo-empresas-web.web.app/</a>

## Descrição:

<p> A aplicação consiste em uma plataforma de consulta de empresas a partir de uma Api fornecida. A consulta deve ser feita após a inserção do nome de uma empresa, retornando-a caso a mesma exita na base de dados. Para esse tipo de busca foi adotado uma estratégia de debounce utilizando a lib loadsh com <i>time</i> de 1200ms.
</p>

## Tenologias:
- React JS
- Redux
- Material UI
- Styled Components
- Loadsh

## Executando Localmente:
Realize o clone ou download do repositório.

Caso não exista deverá ser criado um arquivo .env na raiz do projeto e o mesmo deve conter a variável 'REACT_APP_BASE_URL' com a url do api.

Pro fim, acesse o diretório pelo seu terminal e utilize os comandos para instalar as dependências e iniciar o servidor, respectivamente:</p>
```js
yarn install  
yarn start
```