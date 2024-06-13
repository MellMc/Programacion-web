
$(document).ready(function() {
    
  // variables globales del archivo
  let valueNombre = "";
  let valueProvincia = "";
  let valueCiudad = "";
  let valueSector = "";
  let valueCalle = "";
  let valueCarrera = "";
  let cambioCarrera = false;

 if(window.location.pathname.includes('confirmacion.html')){
  LlenarLista();
  LlenarTabla();
 }

  //eventos

  $('#carrera').on('change', function(){
    cambioCarrera = true;
  })


  $("#btn-limpiar").on("click", function () {
    const confirmacion = confirm("¿Estás seguro de que deseas limpiar los campos?");
    if(confirmacion) Clear();
  });
  

  $("#btn-registrar").on("click", function () {
    GuardarForm1();
    eleccionCarrera();
  });


  $("#btn-atras").on("click", function() {
    window.history.back();
  });


  $("#btn-atras-co").on("click", function() {
    $('#confirmacion').hide();
    $('#seleccion').show();
  });


  $('#btn-enviar').on('click', function(){
    $('#seleccion').hide();
    $('#confirmacion').show(); // Mostrar el contenedor de confirmación

    const materiasSeleccionadas = [];
    $('input[type="radio"]:checked').each(function() {
        const materia = $(this).data('materia');
        const dia = $(this).data('dia');
        const hora = $(this).data('hora');

        materiasSeleccionadas.push({ materia, dia, hora });
    });

    LlenarLista();
    LlenarTabla(materiasSeleccionadas);
  });

  
  $('#btn-finalizar').on('click', function(){
    const confirmacion = confirm("¿Estás seguro de que deseas finalizar la seleccion?");
    if (confirmacion) {
      localStorage.clear();
     window.location.href = "/Html/index.html";
    }
  
  })



 //funciones


 
 function LlenarLista(){
  $('.datos-personales').empty();
  const nombre = localStorage.getItem('nombre');
  const provincia = localStorage.getItem('provincia');
  const ciudad = localStorage.getItem('ciudad');
  const sector = localStorage.getItem('sector');
  const calle = localStorage.getItem('calle');
  const carrera = localStorage.getItem('carrera');

  const lista = [
    {label:'Nombre:', valor: nombre},
    {label:'Provincia:', valor: provincia},
    {label:'Ciudad:', valor: ciudad},
    {label:'Sector:', valor: sector},
    {label:'Calle:', valor: calle},
    {label:'Carrera:', valor: carrera},
  ];
  
  const elementos = $('<ul>', {class: 'list-group list-group-flush'});
  lista.forEach(item => {
    const li = $('<li>', {class: 'list-group-item mt-3'}).text(`${item.label} ${item.valor}`);
    elementos.append(li);
  })

  $('.datos-personales').append(elementos);

 }


function LlenarTabla(materias) {
  const tablaBody = $('.tabla-materias');
  tablaBody.empty(); // Limpiar tabla antes de llenarla de nuevo

  // Crear la estructura completa de la tabla
  const tabla = `
    <table class="table table-dark">
      <thead>
        <tr>
          <th>Materia</th>
          <th>Lun</th>
          <th>Mar</th>
          <th>Mie</th>
          <th>Jue</th>
          <th>Vie</th>
          <th>Sab</th>
          <th>Dom</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  `;

  tablaBody.append(tabla); // Agregar la tabla al contenedor

  const tbody = tablaBody.find('tbody');

  materias.forEach(item => {
    const { materia, dia, hora } = item;
    const fila = `
      <tr>
        <td>${materia}</td>
        <td>${dia === 'Lun' ? hora : '-'}</td>
        <td>${dia === 'Mar' ? hora : '-'}</td>
        <td>${dia === 'Mie' ? hora : '-'}</td>
        <td>${dia === 'Jue' ? hora : '-'}</td>
        <td>${dia === 'Vie' ? hora : '-'}</td>
        <td>${dia === 'Sab' ? hora : '-'}</td>
        <td>${dia === 'Dom' ? hora : '-'}</td>
      </tr>
    `;
    tbody.append(fila); // Agregar la fila al cuerpo de la tabla
  });
 }


  function Validate() {
    valueNombre = $("#nombre").val();
    valueProvincia = $("#provincia").val();
    valueCiudad = $("#ciudad").val();
    valueSector = $("#sector").val();
    valueCalle = $("#calle").val();
    valueCarrera = $("#carrera").val();
    let isValid = true;
  
    if (valueNombre == "" || valueNombre == undefined || valueNombre == null) {
      isValid = false;
      $("#nombre").addClass("input-error");
    } else {
      console.log('llegue aqui')
      $("#nombre").removeClass("input-error");
    }

    if (valueProvincia == "" || valueProvincia == undefined || valueProvincia == null) {
      isValid = false;
      $("#provincia").addClass("input-error");
    } else {
      $("#provincia").removeClass("input-error");
    }

    if (valueCiudad == "" || valueCiudad== undefined || valueCiudad == null) {
        isValid = false;
        $("#ciudad").addClass("input-error");
      } else {
        $("#ciudad").removeClass("input-error");
    }

    if (valueCalle == "" || valueCalle == undefined || valueCalle == null) {
        isValid = false;
        $("#calle").addClass("input-error");
      } else {
        $("#calle").removeClass("input-error");
    }

    if (valueSector == "" || valueSector == undefined || valueSector == null) {
        isValid = false;
        $("#sector").addClass("input-error");
      } else {
        $("#sector").removeClass("input-error");
    }

    if (valueCarrera == "" || valueCarrera == undefined || valueCarrera== null) {
        isValid = false;
        $("#carrera").addClass("input-error");
      } else {
        $("#carrera").removeClass("input-error");
    }

    return isValid;
  }


  function Clear() {
      $("#nombre").val("").removeClass("input-error").focus();
      $("#provincia").val("").removeClass("input-error");
      $("#ciudad").val("").removeClass("input-error");
      $("#sector").val("").removeClass("input-error");
      $("#calle").val("").removeClass("input-error");
      $("#carrera").val("").removeClass("input-error");
  
      valueNombre = "";
      valueProvincia = "";
      valueCiudad = "";
      valueSector = "";
      valueCalle = "";
      valueCarrera = "";
  }


  function eleccionCarrera(){
      if (!Validate()) {
      alert('all information is required');
    } else {
        const carrera = $('#carrera').val();

        switch (carrera) {
            case 'Desarrollo de Software':
                window.location.href = '/Html/seleccionProg.html';
                break;
            case 'Inteligencia Artificial':
                window.location.href = '/Html/seleccionIA.html';
                break;
            case 'Mecatrónica':
                window.location.href = '/Html/seleccionMeca.html';
                break;
            case 'Telecomunicaciones':
                window.location.href = '/Html/seleccionTelecom.html';
                break;
            case 'Sonido':
                window.location.href = '/Html/seleccionSonido.html';
                break;
            default:
                break;
        }
     }
  }

  function GuardarForm1() {
    localStorage.setItem('nombre', $('#nombre').val());
    localStorage.setItem('provincia', $('#provincia').val());
    localStorage.setItem('ciudad', $('#ciudad').val());
    localStorage.setItem('sector', $('#sector').val());
    localStorage.setItem('calle', $('#calle').val());
    localStorage.setItem('carrera', $('#carrera').val());
  }

  function CargarForm1() {
    if (localStorage.getItem('nombre')) $('#nombre').val(localStorage.getItem('nombre'));
    if (localStorage.getItem('provincia')) $('#provincia').val(localStorage.getItem('provincia'));
    if (localStorage.getItem('ciudad')) $('#ciudad').val(localStorage.getItem('ciudad'));
    if (localStorage.getItem('sector')) $('#sector').val(localStorage.getItem('sector'));
    if (localStorage.getItem('calle')) $('#calle').val(localStorage.getItem('calle'));
    if (localStorage.getItem('carrera')) $('#carrera').val(localStorage.getItem('carrera'));
  }

});

