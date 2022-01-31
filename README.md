
## ListaDeInvestimentos

<h4 align="center">
  ListaDeInvestimentos é um App criado que lista investimentos e você pode entrar e fazer resgate de ações que você possua.
</h4>

<div>
<p align="center">
<img src=".github/telaListagem.PNG" alt="Print da tela que lista investimentos">
<img src=".github/telaOverview.PNG" alt="Print da tela de overview">
</p>
<p align="center">
<img src=".github/telaOverview2.PNG" alt="Print da tela de overview com o botão">
</p>
<p align="center">
<img src=".github/modalSucesso.PNG" alt="Print da tela com o modal de sucesso">
<img src=".github/modalErro.PNG" alt="Print da tela com o modal de erro">
</p>
</div>

## Tecnologias

- [React-Native](https://reactnative.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/docs/intro)
- [ReactNavigation](https://reactnavigation.org/)
- [Styled-Components](https://styled-components.com/)

## 💻 Começando

### Requisitos

- Você precisa instalar [Node.js](https://nodejs.org/en/download/) e [Yarn](https://yarnpkg.com/) e ter um ambiente android configurado na sua maquina para rodar este projeto.

**Clone o projeto e acesse a pasta:**

```bash
$ git clone https://github.com/MiDrAjX/ListaDeInvestimentos.git && cd ListaDeInvestimentos
```

**Siga os passos a seguir:**

```bash
# Instale as dependencias
$ yarn || npm install

# Inicie o Metro
$ yarn start || npm start

# Com o emulador ou celular conectado use o comando para instalar o aplicativo no dispositvo:
$ npx react-native run-android
```

O aplicativo vai estar disponível na tela do seu dispositivo.

## 💻 Funcionalidades

### 💻 Listagem de investimentos onde só se pode navegar para o investimento que tem o indicador de carencia ===N

<div>
<h3 align="center">Card de investimento que não possui a carencia necessaria fica disabled</h3>
<p align="center">
<img src=".github/telaListagem.PNG" alt="Print da tela que lista investimentos">
</p>
</div>

### 💻 Lista ações disponiveis em cada investimento podendo resgatar algum valor, com validações de erros de valores

<div>
<p align="center">
<img src=".github/telaOverview.PNG" alt="Print da tela de overview">
<img src=".github/telaOverview2.PNG" alt="Print da tela de overview">
</p>
</div>
<div>
<p align="center">
<img src=".github/listaOverviewErro.PNG" alt="Print da tela de overview com erros">
<img src=".github/listaOverviewErro2.PNG" alt="Print da tela de overview com erro">
</p>
</div>

### 💻 modals de sucesso e erro ao resgatar ações

<div>
<p align="center">
<img src=".github/modalSucesso.PNG" alt="Print da tela de overview com erros">
<img src=".github/modalErro.PNG" alt="Print da tela de overview com erro">
</p>
</div>

Feito com 💜 por Jeison Marques 👋 [Dá uma olhada no meu linkedin](https://www.linkedin.com/in/jeison-marques/)