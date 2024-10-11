function getAPI() {
  fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json()) // Converte a resposta para JSON
    .then(json => {
      console.log(json); // Exibe os dados no console
      
      // Exibe uma amostra dos dados na página
      const resultDiv = document.getElementById('result');
      resultDiv.innerHTML = ''; // Limpa resultados anteriores
      json.slice(0, 5).forEach(photo => { // Exibe os primeiros 5 itens
        const photoElement = document.createElement('div');
        photoElement.innerHTML = `
          <h3>${photo.title}</h3>
          <img src="${photo.thumbnailUrl}" alt="${photo.title}" />
        `;
        resultDiv.appendChild(photoElement);
      });
    })
    .catch(error => {
      console.error('Erro ao buscar dados:', error);
    });
}

document.getElementById('photobutton').addEventListener('click', getAPI);
