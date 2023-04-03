$(function(){
    $.ajax({
        type: "GET",
        url: "https://www.ndim.com.mx/contraloria/get-contraloria/195/",
        success: function(data) {
          if(data.hasOwnProperty('error')){
            alert(data['error']);
            return
          }
        const anios = Object.keys(data)
        let content = ''
        anios.forEach(function(anio){
          content += `<h1>${anio}</h1>`
          content += data[anio].map(function(contraloria){
            return `<p> 
                        <a href="${window.location.origin+contraloria['archivo']}" class="link-dark">
                        <h3> <span>
                              <i class="fa fa-book" aria-hidden="true"></i>
                             </span>
                        ${contraloria['documento']}-${contraloria['descripcion']}
                        </h3>
                        </a>
                    </p>
                    `
          }).join('');
        });
        const id_contraloria = $('#id_contraloria');
        id_contraloria.html(content);
         
      }
        
    });
    
});