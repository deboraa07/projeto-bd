# Exemplo Mapa
Exemplo de uso da API do Google Maps, em conjunto com ExpressJS e Fetch API feito como apoio para o desenvolvimento do mini projeto da semana.

## Inicialização
Para inicializar a API vocês deverão:
1. Clonar o repositório
2. Criar na pasta raiz um arquivo .env, que apresenta os parâmetros de configuração do banco

Exemplo do arquivo .env (trocar os valores das chaves pelos dados do seu banco):
```
PG_HOST = localhost
PG_PORT = 5432
PG_USERNAME = postgres
PG_PASSWORD = postgres
PG_DATABASE = teste
API_PORT = 3000
```

3. ```npm i```
4. ```npm start```

## Alterar parâmetros
Você pode alerar os dados da conexão do banco e da porta da API no arquivo .env

## Uso
Todos os comandos do uso do banco estão no arquivo index.js. É necessário realizar refatoração do código, pois foi feito de forma simples para facilitar na didática do exemplo.
