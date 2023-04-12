const carouselInner = document.querySelector('.carousel-inner');

fetch('https://ndim.com.mx/dif/get-img-carrousel/195/')
  .then(response => response.json())
  .then(data => {
    // Iteramos sobre la lista de objetos en "data" y creamos una diapositiva para cada uno
    const slides = data.map((item, index) => {
      const activeClass = index === 0 ? 'active' : '';
      return `
        <div class="carousel-item ${activeClass}">
          <img class="d-block w-100" src="${'https://ndim.com.mx'+item.imagen}" alt="${item.titulo}">
          <div class="carousel-caption d-none d-md-block">
            <h5>${item.titulo}</h5>
            <p>${item.descripcion}</p>
          </div>
        </div>
      `;
    }).join('');

    // Agregamos las diapositivas al carrusel
    carouselInner.innerHTML = slides;
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
  });