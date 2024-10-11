A função fetch() é uma ferramenta indispensável em JavaScript que permite realizar requisições HTTP de forma assíncrona, facilitando a comunicação entre o frontend e os servidores remotos. Ela torna possível que os desenvolvedores acessem dados externos, como arquivos JSON, APIs e outros recursos, diretamente na aplicação, sem a necessidade de recarregar a página. Fetch() torna possível buscar, processar e integrar dados de forma eficiente, aperfeiçoando a experiência do usuário e tornando o carregamento de dados mais dinâmico e rápido em diferentes plataformas, como computadores, tablets e smartphones.

Essa abordagem torna o desenvolvimento de aplicações web mais interativo e responsivo, permitindo que os usuários tenham acesso às últimas atualizações em tempo real. O fetch() torna a manipulação de dados mais simplificada, permitindo o uso de Promises para lidar com respostas e erros de forma mais clara e organizada. Isso torna a construção de aplicações dinâmicas mais acessível e eficiente, refletindo as diversas formas de interação entre usuários e sistemas modernos.

A seguir, vamos contextualizar as funcionalidades fundamentais que estão presentes na prova conteceitual deste repositório.

O botão com ID photobutton é utilizado para acionar a função que faz a requisição à API.
A div com ID result é onde os dados recebidos serão exibidos.

1° Tópico - Requisição à API:

A função getAPI() solicita uma solicitação à API pública https://jsonplaceholder.typicode.com/photos através do método fetch(). 
A resposta à API é convertida para o formato JSON, usando o método .then(response => response.json()).

2° Tópico - Manipulação dos Dados:

Os dados retornados são exibidos no console e uma amostra dos primeiros 5 itens é exibida na página.
Para cada imagem, é criado um div com o título e a imagem em miniatura (thumbnailUrl)
Esses elementos são adicionados ao div através do ID Result.

3° Tópico - Tratamento de Erros:

Se a requisição falhar, o erro será registrado e exibido no console.

O layout foi criado para ser responsivo, usando o CSS Grid para organizar as imagens de forma dinamizada em colunas de acordo com o tamanho da tela.

Este projeto apresenta uma integração básica com a função fetch(), solicitando a utilização de uma API externa para buscar e exibir dados de forma dinâmica em uma página web. A adição de um layout responsivo torna o conteúdo acessível de forma adequada em diferentes dispositivos, o que torna a experiência do usuário mais agradável em computadores e dispositivos móveis.

Este repositório está a sua disposição para clonar e realizar modificações, e experimentar outras APIs para melhor compreender como o fetch() pode ser utilizado em seus projetos. 




