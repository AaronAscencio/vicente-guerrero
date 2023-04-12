const root = document.querySelector('#root');

fetch('https://ndim.com.mx/dif/get-presidenta/195/')
  .then(response => response.json())
  .then(data => {
    // Iteramos sobre la lista de objetos en "data" y creamos una diapositiva para cada uno
    console.log(data);
    let content = '';
    content += `<div class="text-center">
                <h1>${data['presidenta']['nombre']}</h1>
                <img src="${"https://ndim.com.mx"+data['presidenta']['imagen']}"> 
                <p>
                <h1>Mensaje</h1>
                  ${data['presidenta']['descripcion']}
                </p>
                <p>
                  <h1>Semblanza</h1>
                  ${data['presidenta']['semblanza']}
                </p>
                </div>`
    // Agregamos las diapositivas al carrusel
    root.innerHTML = content;
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
  });