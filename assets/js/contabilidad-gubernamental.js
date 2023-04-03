$(function(){
    $.ajax({
        type: "GET",
        url: "https://www.ndim.com.mx/contabilidad-gubernamental/get-contabilidad-gubernamental/195/",
        success: function(data) {
          if(data.hasOwnProperty('error')){
            alert(data['error']);
            return
          }
        const anios = Object.keys(data)
        let content = ''
        anios.forEach(function(anio){
          content += `<h1>${anio}</h1>`
          content += data[anio].map(function(contabilidad){
            return `<p> 
                        <a href="${window.location.origin+contabilidad['archivo']}" class="link-dark">
                        <h3> <span>
                              <i class="fa fa-book" aria-hidden="true"></i>
                             </span>
                        ${contabilidad['documento']}-${contabilidad['descripcion']}
                        </h3>
                        </a>
                    </p>
                    `
          }).join('');
        });
        const id_contabilidad = $('#id_contabilidad');
        id_contabilidad.html(content);
         
      }
        
    });
    
});