$(function(){
    $.ajax({
        type: "GET",
        url: "https://www.ndim.com.mx/marco-normativo/get-marco-normativo-aplicable/195/",
        success: function(data) {
          if(data.hasOwnProperty('error')){
            alert(data['error']);
            return
          }
        const anios = Object.keys(data)
        let content = ''
        anios.forEach(function(anio){
          content += `<h1>${anio}</h1>`
          content += data[anio].map(function(marco){
            return `<p> 
                        <a href="${window.location.origin+marco['archivo']}" class="link-dark">
                        <h3> <span>
                              <i class="fa fa-book" aria-hidden="true"></i>
                             </span>
                        ${marco['documento']['grupo']}-${marco['documento']['nombre']}-${marco['descripcion']}
                        </h3>
                        </a>
                    </p>
                    `
          }).join('');
        });
        const id_marcos = $('#id_marcos');
        id_marcos.html(content);
        
        }
    });
    
});