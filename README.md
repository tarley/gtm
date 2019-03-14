
# Gtm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.

## Boas práticas de comentário do Git:

Seguir os padrões definidos em [https://udacity.github.io/git-styleguide/]

## Configurar ambiente

- Download Node.js.
- Após a instalação do Node.js, instalar Angular CLI: $ `npm install -g @angular/cli`
- Clonar o repositório
- No diretório do repositório, executar: $ `npm install` para instalar as dependências.(Necessário somente após clonar o repositório, ou adicionar uma nova dependência)
- O backend está disponível no repositório: https://github.com/tarley/gtm-server.git

## Subir o Front

- Pelo CMD executar o comando `ng serve` np diretório do projeto. A aplicação ficará disponível no endereço `http://localhost:4200/`.
- As alterações no código serão compilados automaticamente e atualizado no navegador.

## Gerar código pelo Angular/CLI

- Executar `ng generate component component-name` para gerar um novo componente. 
- Existem as opções: `ng generate directive|pipe|service|class|guard|interface|enum|module`.
- Iremos usar mais normalmente as opções `component | service | module`.

## Comandos úteis GIT

- `git clone url-projeto-git`: Clonar repositório
- `git status`: Verificar arquivos alterados localmente
- `git add caminho-arquivo`: Adicionar arquivos para commit
- `git commit -m "mensagem-commit"`: Comitar arquivos adicionados anteriormente
- `git pull`: Puxar alterações do repositório remoto para o repositório local
- `git push`: Enviar commits feito para o repositório remoto

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
