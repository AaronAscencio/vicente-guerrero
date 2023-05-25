fetch('https://www.ndim.com.mx/marco-normativo/get-estado-financiero/195/')
  .then(response => response.json())
  .then(data => {
    // Obtener el contenedor de resultados
    const resultadosContainer = document.getElementById('id_estados_financieros');

    // Iterar sobre los años
    for (const anio in data) {
      // Crear el título con el año
      const tituloAnio = document.createElement('h2');
      tituloAnio.textContent = anio;
      resultadosContainer.appendChild(tituloAnio);

      // Obtener los periodos para el año actual
      const periodos = data[anio];

      // Iterar sobre los periodos
      for (const periodo in periodos) {
        // Crear el subtítulo con el periodo
        const subtituloPeriodo = document.createElement('h3');
        subtituloPeriodo.textContent = periodo;
        resultadosContainer.appendChild(subtituloPeriodo);

        // Obtener las fracciones para el periodo actual
        const estados = periodos[periodo];

        // Iterar sobre las fracciones
        for (const estado of estados) {
          // Crear el párrafo con la descripción y el ID de la fracción
          const parrafoEstado = document.createElement('h5');
          parrafoEstado.innerHTML = `<i class="fa fa-book mr-1" aria-hidden="true"></i> <a href="${estado.archivo}" class="link-dark bg-transparent">${estado.titulo.nombre}-${estado.reactivo.titulo.nombre}-${estado.descripcion}<a>`;
          resultadosContainer.appendChild(parrafoEstado);
        }
      }
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });