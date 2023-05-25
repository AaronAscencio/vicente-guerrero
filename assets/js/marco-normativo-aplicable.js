fetch('https://www.ndim.com.mx/marco-normativo/get-marco-normativo-aplicable/195/')
  .then(response => response.json())
  .then(data => {
    // Obtener el contenedor de resultados
    const resultadosContainer = document.getElementById('id_marcos');

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
        const marcos = periodos[periodo];

        // Iterar sobre las fracciones
        for (const marco of marcos) {
          // Crear el párrafo con la descripción y el ID de la fracción
          const parrafoMarco = document.createElement('h5');
          parrafoMarco.innerHTML = `<i class="fa fa-book mr-1" aria-hidden="true"></i> <a href="${marco.archivo}" class="link-dark bg-transparent">${marco.documento.grupo}-${marco.documento.nombre}- ${marco.descripcion}<a>`;
          resultadosContainer.appendChild(parrafoMarco);
        }
      }
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });