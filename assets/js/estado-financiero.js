$(function(){
    $.ajax({
        type: "GET",
        url: "https://www.ndim.com.mx/marco-normativo/get-estado-financiero/195/",
        success: function(data) {
          if(data.hasOwnProperty('error')){
            alert(data['error']);
            return
          }
        const anios = Object.keys(data)
        let content = ''
        anios.forEach(function(anio){
          content += `<h1>${anio}</h1>`
          content += data[anio].map(function(estado){
            return `<p> 
                        <a href="${estado['archivo']}" class="link-dark">
                        <h3> <span>
                              <i class="fa fa-book" aria-hidden="true"></i>
                             </span>
                        ${estado['reactivo']['reactiv']}-${estado['titulo']['nombre']}-${estado['descripcion']}</h3>
                        </a>
                    </p>
                    `
          }).join('');
        });
        const id_estados = $('#id_estados_financieros');
        id_estados.html(content);
        }
    });
    
});