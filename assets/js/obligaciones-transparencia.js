fetch('https://www.ndim.com.mx/obligaciones-transparencia/get-obligaciones-transparencia/195/')
  .then(response => response.json())
  .then(data => {
    // Obtener el contenedor de resultados
    const resultadosContainer = document.getElementById('id_obligaciones');

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
        const obligaciones = periodos[periodo];

        // Iterar sobre las fracciones
        for (const registro of obligaciones) {
          // Crear el párrafo con la descripción y el ID de la fracción
          const parrafoRegistro = document.createElement('h5');
          parrafoRegistro.innerHTML = `<i class="fa fa-book mr-1" aria-hidden="true"></i> <a href="${registro.archivo}" class="link-dark bg-transparent">${registro.documento}-${registro.descripcion}<a>`;
          resultadosContainer.appendChild(parrafoRegistro);
        }
      }
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });