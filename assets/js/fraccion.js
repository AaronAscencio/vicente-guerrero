fetch('https://www.ndim.com.mx/inai/get-fraccion/195/')
  .then(response => response.json())
  .then(data => {
    // Obtener el contenedor de resultados
    const resultadosContainer = document.getElementById('id_fracciones');

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
        const fracciones = periodos[periodo];

        // Iterar sobre las fracciones
        for (const fraccion of fracciones) {
          // Crear el párrafo con la descripción y el ID de la fracción
          const parrafoFraccion = document.createElement('h5');
          parrafoFraccion.innerHTML = `<i class="fa fa-book mr-1" aria-hidden="true"></i> <a href="${fraccion.archivo}" class="link-dark bg-transparent">${fraccion.fraccion.fraccion}-${fraccion.fraccion.descripcion_2}<a>`;
          resultadosContainer.appendChild(parrafoFraccion);
        }
      }
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });