$(document).ready(function () {
  // variables globales del archivo
  let valueName = "";
  let valuePhone = "";
  let valueContactType = "";

  //Eventos

  $("#content-container").on("click", "#btn-clear", function () {
    Clear();
  });

  $("#content-container").on("click", "#btn-save", function () {
    CreateContactType();
  });

  $("#content-container").on("click", "#btn-back", function () {
    GenerateHtmlForm();
  });

  $("#content-container").on("click", "#btn-end", function () {
    $.confirm({
      title: "Estas seguro que deseas crear este contacto?",
      content: "",
      buttons: {
        cancel: {
          text: "Cancelar",
          btnClass: "btn btn-danger",
          action: function () {},
        },
        confirm: {
          text: "Aceptar",
          btnClass: "btn btn-success",
          action: function () {
            GenerateHtmlContact();
            GenerateHtmlForm();
            Clear();

            toastr.success("Se ha creado con exito", "Notificacion", {
              TimeOut: 1500,
              positionClass: "toast-top-center",
            });
          },
        },
      },
    });
  });

  $("#contact-container").on("click", ".btn-delete", function () {
    const mainContainer = $(this).parent().parent().parent();

    $.confirm({
      title: "Estas seguro que deseas eliminar este contacto?",
      content: "",
      buttons: {
        cancel: {
          text: "Cancelar",
          btnClass: "btn btn-danger",
          action: function () {},
        },
        confirm: {
          text: "Aceptar",
          btnClass: "btn btn-success",
          action: function () {
            mainContainer.remove();
          },
        },
      },
    });
  });

  //Funciones
  function Clear() {
    $("#name").val("").removeClass("input-error").focus();
    $("#phone").val("").removeClass("input-error");

    $("#radio-container input[type='radio']:checked").prop("checked", false);

    valueName = "";
    valuePhone = "";
    valueContactType = "";
  }

  function CreateContactType() {
    valueName = $("#name").val();
    valuePhone = $("#phone").val();
    valueContactType = $("#radio-container input[type='radio']:checked").val();

    if (Validate()) {
      GenerateHtmlConfirmation();
    } else {
      toastr.error("Debe completa toda la info", "Oops ha ocurrido un error", {
        TimeOut: 1500,
        positionClass: "toast-top-center",
      });
    }
  }

  function GenerateHtmlContact() {
    const htmlcontact = ` <div class="col-md-4">
          <div class="card">
            <div class="card-header bg-success text-white">
              <h5 class="card-title">Contacto - ${valueContactType}</h5>
            </div>

            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Nombre: ${valueName}</li>
                <li class="list-group-item">Telefono: ${valuePhone}</li>
              </ul>
              <button class="btn btn-danger float-end btn-delete">Eliminar</button>
            </div>
          </div>
        </div>
    `;

    $("#contact-container").append(htmlcontact);
  }

  function GenerateHtmlConfirmation() {
    const htmlConfirmation = `<div class="card">
          <div class="card-header bg-success text-white">
            <h5 class="card-title">Confirmacion</h5>
          </div>

          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Tipo de contacto: ${valueContactType}</li>
              <li class="list-group-item">Nombre: ${valueName}</li>
              <li class="list-group-item">Telefono: ${valuePhone}</li>
            </ul>
            <div>
              
               <button id="btn-end" class="btn btn-success float-end">Finalizar</button>
               <button id="btn-back" class="btn btn-warning float-end mr-1">Atras</button>
            </div>
          </div>
        </div>
    `;

    $("#content-container").html(htmlConfirmation);
  }

  function GenerateHtmlForm() {
    const htmlForm = `
  <div class="card">
            <div class="card-header text-white bg-dark">
              <h4 class="text-center">Registre su contactos</h4>
            </div>
            <div class="card-body">
              <div class="card-title">
                <h4 class="text-center">Complete toda la informacion</h4>
              </div>

              <div class="mb-3">
                <label for="name" class="form-label">Nombre:</label>
                <input type="text" class="form-control" id="name" />
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label">Telefono:</label>
                <input type="text" class="form-control" id="phone" />
              </div>
              <div id="radio-container" class="mb-3">
                <label for="contact-type" class="form-label"
                  >Tipo de contacto:</label
                >

                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="ContactType"
                    id="radio-academico"
                    value="academico"
                  />
                  <label class="form-check-label" for="radio-academico"
                    >Academico</label
                  >
                </div>

                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="ContactType"
                    id="radio-personal"
                    value="personal"
                  />
                  <label class="form-check-label" for="radio-personal"
                    >Personal</label
                  >
                </div>

                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="ContactType"
                    id="radio-laboral"
                    value="laboral"
                  />
                  <label class="form-check-label" for="radio-laboral"
                    >Laboral</label
                  >
                </div>
              </div>
              <button
                type="button"
                class="btn btn-outline-primary float-end"
                id="btn-save"
              >
                Guardar
              </button>
              <button
                type="button"
                class="btn btn-outline-warning float-end mr-1"
                id="btn-clear"
              >
                Limpiar
              </button>
            </div>
          </div>

`;

    $("#content-container").html(htmlForm);

    $("#name").val(valueName);
    $("#phone").val(valuePhone);
    $(`#radio-container input[type='radio'][value=${valueContactType}]`).prop(
      "checked",
      true
    );
  }

  function Validate() {
    let isValid = true;

    if (valueName == "" || valueName == undefined || valueName == null) {
      isValid = false;
      $("#name").addClass("input-error");
    } else {
      $("#name").removeClass("input-error");
    }

    if (valuePhone == "" || valuePhone == undefined || valuePhone == null) {
      isValid = false;
      $("#phone").addClass("input-error");
    } else {
      $("#phone").removeClass("input-error");
    }

    const checkedRadio = $("#radio-container input[type='radio']:checked");

    if (checkedRadio.length <= 0) {
      isValid = false;

      $("#radio-container").addClass("input-error");
    } else {
      $("#radio-container").removeClass("input-error");
    }

    return isValid;
  }
});
