# Alura Feira

Alura Feira é uma aplicação web de feira online desenvolvida com React.js e estilizada com Material-UI, proporcionando uma experiência de compra virtual completa e intuitiva. Os usuários podem navegar por uma variedade de produtos, adicionar itens ao carrinho e realizar o checkout, tudo dentro de uma interface moderna e responsiva.

## Estrutura do Projeto

A estrutura do projeto é a seguinte:
```plaintext
alura-feira/
├── public/
│   ├── assets/
│   │   ├── abobora.png
│   │   ├── batata.png
│   │   ├── brocolis.png
│   │   ├── pepino.png
│   │   └── tomate.png
│   └── index.html
├── src/
│   ├── assets/
│   │   └── logo.svg
│   ├── common/
│   │   ├── context/
│   │   │   ├── Carrinho.js
│   │   │   └── Usuario.js
│   ├── components/
│   │   ├── Produto/
│   │   │   ├── index.js
│   │   │   └── styles.js
│   ├── pages/
│   │   ├── Carrinho/
│   │   │   ├── index.js
│   │   │   └── styles.js
│   │   ├── Feira/
│   │   │   ├── index.js
│   │   │   └── styles.js
│   │   ├── Login/
│   │   │   ├── index.js
│   │   │   └── styles.js
│   ├── index.css
│   ├── index.js
│   └── routes.js
├── .env
├── .gitignore
├── jsconfig.json
├── LICENSE
├── package.json
├── README.md
└── yarn.lock
```

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `yarn start`

Executa a aplicação em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

### `yarn test`

Inicia o executor de testes no modo interativo.\
Veja a seção sobre [executando testes](https://facebook.github.io/create-react-app/docs/running-tests) para mais informações.

### `yarn build`

Compila a aplicação para produção na pasta `build`.\
Ele agrupa corretamente o React no modo de produção e otimiza a compilação para o melhor desempenho.

### `yarn eject`

**Nota: esta é uma operação sem retorno. Uma vez que você `eject`, você não pode voltar!**

Se você não estiver satisfeito com a ferramenta de compilação e as escolhas de configuração, você pode `eject` a qualquer momento. Este comando removerá a dependência única de compilação do seu projeto.

## Estrutura de Componentes

### `src/components/Produto`

Contém os componentes relacionados ao produto, incluindo o estilo.

### `src/pages/Carrinho`

Contém a página do carrinho de compras e seus estilos.

### `src/pages/Feira`

Contém a página principal da feira, incluindo a lista de produtos e a barra de navegação.

### `src/pages/Login`

Contém a página de login e seus estilos.

## Configuração de Rotas

As rotas da aplicação são configuradas no arquivo `src/routes.js`. As principais rotas são:

- `/`: Página de Login
- `/feira`: Página da Feira
- `/carrinho`: Página do Carrinho
- `/login`: Página de Login

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
