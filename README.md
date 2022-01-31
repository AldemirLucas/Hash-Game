# Desafio da Base dos Dados: Jogo da Velha

Nesse desafio temos um tabuleiro 3x3 funcional de Jogo da Velha. Ganha o jogador que conseguir 4 vitórias primeiro totalizando até no máximo 7 rounds, implementado também 2 temas (light, dark) localizado na parte superior direita.

O projeto já está disponivel online https://tiktoktoee.herokuapp.com

## Scripts disponiveis

No diretório do projeto, você pode executar:

### `npm start`

Executa o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo em seu navegador.

### `npm run build`

Compila o aplicativo para produção na pasta `build`.\
Ele agrupa corretamente o React no modo de produção e otimiza a compilação para o melhor desempenho.

### Dependências

#### Canvas Confetti

Biblioteca utilizada para a criação de animação de confeti para representar a vitória de um jogador.

#### Classnames:

Biblioteca utilizada para a manipulação de estados de classnames no código para alterar aparência de componentes dinamicamente.

### Deploy

O projeto está sendo hospedado no heroku. O deploy é realizado através do hook do git em conjunto com o heroku cli.