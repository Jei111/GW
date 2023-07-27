$(document).ready(function() {

// Fetching Tasks
  function fetchTasks() {
    $.ajax({
      url: 'usuarios.php?id=13',
      type: 'GET',
      success: function(response)  {
       // const tasks = JSON.parse(response);
       console.log(response)
       //console.log(response.nombre)
       
        let template = '';
        response.forEach(users => {
          template += `
                  <tr>
                  <td>${users.nombre}</td>
                  <td>
               
                    ${users.apellido} 
                 
                  </td>
                  <td>${users.fechaNac}</td>
                  <td>
                    <button>
                     Delete 
                    </button>
                  </td>
                  </tr>
                `
        });
        $('#tabla').html(template);
      }
    });
  }
  fetchTasks()
});
