const root = document.querySelector('#root');

fetch('https://ndim.com.mx/dif/get-noticia/195/')
  .then(response => response.json())
  .then(data => {
    const row = document.createElement('div');
    row.classList.add('row');
    root.appendChild(row);
    data.reverse();
    data.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card', 'col-3', 'mx-2', 'my-4');
      card.innerHTML = `
      <img src="${"https://ndim.com.mx"+item.imagen}" class="card-img-top img-fluid my-4" alt="">
        <div class="card-body">
          <h5 class="card-title">${item.titulo}</h5>
          <h5 class="card-title">${item.fecha}</h5>
          <p class="card-text">${item.descripcion}</p>
          <a href="/dif-detalle-noticia.html?id=${item.id}">Ir a la Noticia</a>
        </div>
      `;
      row.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
  });