$(function(){
    $.ajax({
        type: "GET",
        url: "https://www.ndim.com.mx/inai/get-fraccion/195/",
        success: function(data) {
          if(data.hasOwnProperty('error')){
            alert(data['error']);
            return
          }
        const anios = Object.keys(data)
        let content = ''
        anios.forEach(function(anio){
          content += `<h1>${anio}</h1>`
          content += data[anio].map(function(fraccion){
            return `<p> 
                        <a href="${fraccion['archivo']}" class="link-dark">
                        <h3> <span>
                                  <i class="fa fa-book" aria-hidden="true">
                                  </i>
                             </span>
                        ${fraccion['fraccion']['fraccion']}-${fraccion['fraccion']['descripcion_2']}-${fraccion['descripcion']}
                        </h3>
                        </a>
                    </p>
                    `
          }).join('');
        });
        const id_fracciones = $('#id_fracciones');
        id_fracciones.html(content);
        }
    });
    
});