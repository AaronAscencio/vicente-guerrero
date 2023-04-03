const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const root = document.querySelector('#root');

fetch(`https://ndim.com.mx/contenido-web/get-noticia-by-id/${id}/`)
  .then(response => response.json())
  .then(data => {
    let content = `<div class="container my-5">
                        <div class="row">
                        <div class="col-sm-6">
                            <img src="${'https://ndim.com.mx'+data.imagen}" class="img-fluid" alt="Imagen del evento">
                        </div>
                        <div class="col-sm-6">
                            <h2> ${data.titulo}</h2>
                            <p class="lead">${data.descripcion}</p>
                            <p><strong>Fecha:</strong>   ${data.fecha}</p>

                            <p><strong>Municipio:</strong>${data.municipio.mcpio}</p>
                        </div>
                        </div>
                    </div>`;
    
    root.innerHTML = content;
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
  });

