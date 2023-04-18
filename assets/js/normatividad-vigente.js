$(function(){
    $.ajax({
        type: "GET",
        url: "https://www.ndim.com.mx/marco-normativo/get-normatividad-vigente/195/",
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
                        <a href="${marco['archivo']}" class="link-dark">
                        <h3> <span>
                              <i class="fa fa-book" aria-hidden="true"></i>
                             </span>
                        ${marco['norma']['descripcion']}-${marco['descripcion']}
                        </h3>
                        </a>
                    </p>
                    `
          }).join('');
        });
        const id_normas = $('#id_normas');
        id_normas.html(content);
        
        }
    });
    
});