fetch('https://www.ndim.com.mx/marco-normativo/get-normatividad-vigente/195/')
  .then(response => response.json())
  .then(data => {
    // Obtener el contenedor de resultados
    const resultadosContainer = document.getElementById('id_normas');

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
        const normas = periodos[periodo];

        // Iterar sobre las fracciones
        for (const norma of normas) {
          // Crear el párrafo con la descripción y el ID de la fracción
          const parrafoNorma = document.createElement('h5');
          parrafoNorma.innerHTML = `<i class="fa fa-book mr-1" aria-hidden="true"></i> <a href="${norma.archivo}" class="link-dark bg-transparent">${norma.norma.descripcion}-${norma.descripcion}<a>`;
          resultadosContainer.appendChild(parrafoNorma);
        }
      }
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });