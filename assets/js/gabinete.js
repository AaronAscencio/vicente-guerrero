const root = document.querySelector('#root');

fetch('https://ndim.com.mx/contenido-web/get-gabinete/195/')
  .then(response => response.json())
  .then(data => {
    const row = document.createElement('div');
    row.classList.add('row');
    root.appendChild(row);

    data.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card', 'col-3', 'mx-2', 'my-4');
      card.innerHTML = `
      <img src="${"https://ndim.com.mx"+item.imagen}" class="card-img-top img-fluid" alt="">
        <div class="card-body">
          <h5 class="card-title">${item.nombre}</h5>
          <p class="card-text">${item.descripcion}</p>
        </div>
      `;
      row.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
  });