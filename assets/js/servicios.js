const url = 'https://ndim.com.mx/contenido-web/get-servicio/195/';
const root = document.querySelector('#root');

fetch(url)
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card', 'col-6', 'mx-2', 'my-3');
      card.innerHTML = `
        <img src="https://ndim.com.mx${item.imagen}" class="card-img-top img-fluid my-4" alt="">
        <div class="card-body">
          <h6 class="card-title text-truncate mb-0">${item.titulo}</h6>
          <a href="https://ndim.com.mx${item.imagen}" class="btn btn-success btn my-3 active" role="button" aria-pressed="true" target="_blank">Ver Servicio</a>
        </div>
      `;
      root.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
  });



