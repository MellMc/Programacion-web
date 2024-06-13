// formulario
const cvForm = document.getElementById('cv-form');
const nameInput = document.getElementById('name');
const titleInput = document.getElementById('title');
const emailInput = document.getElementById('email');
const telInput = document.getElementById('tel');
const dateInput = document.getElementById('date');
const enlaceInput = document.getElementById('enlace');

//habilidad
const habilidad = document.getElementById('skills');
const valorHabilidad = document.getElementById('valor-habilidad');

//idioma
const idioma = document.getElementById('idioma');
const valorIdioma = document.getElementById('valor-idioma');

//software
const software = document.getElementById('software');
const valorSoftware = document.getElementById('valor-software');

// experiencia
const nameEmpInput = document.getElementById('name-emp');
const dateStartExpInput = document.getElementById('date-start-exp');
const dateEndExpInput = document.getElementById('date-end-exp');

// educacion
const nameInstInput = document.getElementById('name-inst');
const dateStartInstInput = document.getElementById('date-start-inst');
const dateEndInstInput = document.getElementById('date-end-inst');

//certificaciones
const nameCertInput = document.getElementById('name-cert');
const dateStartCertInput = document.getElementById('date-start-cert');
const dateEndCertInput = document.getElementById('date-end-cert');

// Boton generar
const btnGenerar = document.getElementById('btnGenerar');

let habilidadCounter = 1;
let softwareCounter = 1;
let idiomaCounter = 1;
let experienciaCounter = 1;
let educacionCounter = 1;
let certificacionCounter = 1;

// habilidad
function AgregarHabilidad() {
  const habilidadContainer = document.getElementById('habilidad-container');

  const divHabilidadRow = document.createElement('div');
  divHabilidadRow.className = 'row mt-3'; 

  const divHabilidad = document.createElement('div');
  divHabilidad.className = 'col-6 input position-relative';

  const inputHabilidad = document.createElement('input');
  inputHabilidad.setAttribute('type', 'text');
  inputHabilidad.setAttribute('class', 'form-control');
  inputHabilidad.setAttribute('placeholder', 'Habilidad');
  inputHabilidad.setAttribute('id', 'skills' + habilidadCounter);
  inputHabilidad.setAttribute('name', 'skills' + habilidadCounter);
  inputHabilidad.setAttribute('required', 'true'); 
  divHabilidad.appendChild(inputHabilidad);

  const validacionHabilidadDiv = document.createElement('div');
  validacionHabilidadDiv.setAttribute('class', 'valid-tooltip');
  validacionHabilidadDiv.textContent = 'Okey';
  divHabilidad.appendChild(validacionHabilidadDiv);

  const invalidacionHabilidadDiv = document.createElement('div');
  invalidacionHabilidadDiv.setAttribute('class', 'invalid-tooltip');
  invalidacionHabilidadDiv.textContent = 'Se requiere llenar este campo.';
  divHabilidad.appendChild(invalidacionHabilidadDiv);

  const divValor = document.createElement('div');
  divValor.className = 'col-6 input position-relative';

  const inputValor = document.createElement('input');
  inputValor.setAttribute('type', 'number');
  inputValor.setAttribute('class', 'form-control');
  inputValor.setAttribute('placeholder', 'Valoracion');
  inputValor.setAttribute('name', 'valor-habilidad' + habilidadCounter); 
  inputValor.setAttribute('id', 'valor-habilidad' + habilidadCounter); 
  inputValor.setAttribute('min', '1');
  inputValor.setAttribute('max', '5');
  inputValor.setAttribute('required', 'true');
  divValor.appendChild(inputValor);

  const validacionValorDiv = document.createElement('div');
  validacionValorDiv.setAttribute('class', 'valid-tooltip');
  validacionValorDiv.textContent = 'Okey';
  divValor.appendChild(validacionValorDiv);

  const invalidacionValorDiv = document.createElement('div');
  invalidacionValorDiv.setAttribute('class', 'invalid-tooltip');
  invalidacionValorDiv.textContent = 'Se requiere llenar este campo.';
  divValor.appendChild(invalidacionValorDiv);

  const btnDiv = document.createElement("div");

  const btnDelete = document.createElement("button");
  btnDelete.setAttribute("class", "btn btn-outline-danger mt-2 float-end");
  btnDelete.innerText = "Delete";
  btnDelete.type = "button";
  btnDelete.addEventListener("click", function () {
      if (confirm("¿Estás seguro de que deseas eliminar esta habilidad?")) {
         habilidadContainer.removeChild(divHabilidadRow);
      }
  });

  habilidadCounter++;
  btnDiv.appendChild(btnDelete);

  divHabilidadRow.appendChild(divHabilidad);
  divHabilidadRow.appendChild(divValor);
  divHabilidadRow.appendChild(btnDiv); 

  habilidadContainer.appendChild(divHabilidadRow);
}

function AgregarSoftware() {
  const softwareContainer = document.getElementById('software-container');

  const divSoftwareRow = document.createElement('div');
  divSoftwareRow.className = 'row mt-3'; 

  const divSoftware = document.createElement('div');
  divSoftware.className = 'col-6 input position-relative';

  const inputSoftware = document.createElement('input');
  inputSoftware.setAttribute('type', 'text');
  inputSoftware.setAttribute('class', 'form-control');
  inputSoftware.setAttribute('placeholder', 'Software');
  inputSoftware.setAttribute('name', "software" + softwareCounter );
  inputSoftware.setAttribute('id', "software" + softwareCounter);
  inputSoftware.setAttribute('required', 'true'); 
  divSoftware.appendChild(inputSoftware);

  const validacionSoftwareDiv = document.createElement('div');
  validacionSoftwareDiv.setAttribute('class', 'valid-tooltip');
  validacionSoftwareDiv.textContent = 'Okey';
  divSoftware.appendChild(validacionSoftwareDiv);

  const invalidacionSoftwareDiv = document.createElement('div');
  invalidacionSoftwareDiv.setAttribute('class', 'invalid-tooltip');
  invalidacionSoftwareDiv.textContent = 'Se requiere llenar este campo.';
  divSoftware.appendChild(invalidacionSoftwareDiv);

  const divValorSoftware = document.createElement('div');
  divValorSoftware.className = 'col-6 input position-relative';

  const inputValorSoftware = document.createElement('input');
  inputValorSoftware.setAttribute('type', 'number');
  inputValorSoftware.setAttribute('class', 'form-control');
  inputValorSoftware.setAttribute('placeholder', 'Valoracion');
  inputValorSoftware.setAttribute('name', 'valor-software' + softwareCounter); 
  inputValorSoftware.setAttribute('id', 'valor-software' + softwareCounter); 
  inputValorSoftware.setAttribute('min', '1');
  inputValorSoftware.setAttribute('max', '5');
  inputValorSoftware.setAttribute('required', 'true');
  divValorSoftware.appendChild(inputValorSoftware);

  const validacionValorSoftwareDiv = document.createElement('div');
  validacionValorSoftwareDiv.setAttribute('class', 'valid-tooltip');
  validacionValorSoftwareDiv.textContent = 'Okey';
  divValorSoftware.appendChild(validacionValorSoftwareDiv);

  const invalidacionValorSoftwareDiv = document.createElement('div');
  invalidacionValorSoftwareDiv.setAttribute('class', 'invalid-tooltip');
  invalidacionValorSoftwareDiv.textContent = 'Se requiere llenar este campo.';
  divValorSoftware.appendChild(invalidacionValorSoftwareDiv);

  const btnDiv = document.createElement("div");

  const btnDelete = document.createElement("button");
  btnDelete.setAttribute("class", "btn btn-outline-danger mt-2 float-end");
  btnDelete.innerText = "Delete";
  btnDelete.type = "button";
  btnDelete.addEventListener("click", function () {
      if (confirm("¿Estás seguro de que deseas eliminar este software?")) {
          softwareContainer.removeChild(divSoftwareRow);
      }
  });

  softwareCounter++;

  btnDiv.appendChild(btnDelete);

  divSoftwareRow.appendChild(divSoftware);
  divSoftwareRow.appendChild(divValorSoftware);
  divSoftwareRow.appendChild(btnDiv); 

  softwareContainer.appendChild(divSoftwareRow);
}

function AgregarIdioma() {
  const idiomaContainer = document.getElementById('idiomas-container');

  const divIdiomaRow = document.createElement('div');
  divIdiomaRow.className = 'row mt-3'; 

  const divIdioma = document.createElement('div');
  divIdioma.className = 'col-6 input position-relative';

  const inputIdioma = document.createElement('input');
  inputIdioma.setAttribute('type', 'text');
  inputIdioma.setAttribute('class', 'form-control');
  inputIdioma.setAttribute('placeholder', 'Idioma');
  inputIdioma.setAttribute('name', 'idioma' + idiomaCounter);
  inputIdioma.setAttribute('id', 'idioma' + idiomaCounter);
  inputIdioma.setAttribute('required', 'true'); 
  divIdioma.appendChild(inputIdioma);

  const validacionIdiomaDiv = document.createElement('div');
  validacionIdiomaDiv.setAttribute('class', 'valid-tooltip');
  validacionIdiomaDiv.textContent = 'Okey';
  divIdioma.appendChild(validacionIdiomaDiv);

  const invalidacionIdiomaDiv = document.createElement('div');
  invalidacionIdiomaDiv.setAttribute('class', 'invalid-tooltip');
  invalidacionIdiomaDiv.textContent = 'Se requiere llenar este campo.';
  divIdioma.appendChild(invalidacionIdiomaDiv);

  const divValorIdioma = document.createElement('div');
  divValorIdioma.className = 'col-6 input position-relative';

  const inputValorIdioma = document.createElement('input');
  inputValorIdioma.setAttribute('type', 'number');
  inputValorIdioma.setAttribute('class', 'form-control');
  inputValorIdioma.setAttribute('placeholder', 'Valoracion');
  inputValorIdioma.setAttribute('name', 'valor-idioma' + idiomaCounter); 
  inputValorIdioma.setAttribute('id', 'valor-idioma' + idiomaCounter);
  inputValorIdioma.setAttribute('min', '1');
  inputValorIdioma.setAttribute('max', '5');
  inputValorIdioma.setAttribute('required', 'true');
  divValorIdioma.appendChild(inputValorIdioma);

  const validacionValorIdiomaDiv = document.createElement('div');
  validacionValorIdiomaDiv.setAttribute('class', 'valid-tooltip');
  validacionValorIdiomaDiv.textContent = 'Okey';
  divValorIdioma.appendChild(validacionValorIdiomaDiv);

  const invalidacionValorIdiomaDiv = document.createElement('div');
  invalidacionValorIdiomaDiv.setAttribute('class', 'invalid-tooltip');
  invalidacionValorIdiomaDiv.textContent = 'Se requiere llenar este campo.';
  divValorIdioma.appendChild(invalidacionValorIdiomaDiv);

  const btnDiv = document.createElement("div");

  const btnDelete = document.createElement("button");
  btnDelete.setAttribute("class", "btn btn-outline-danger mt-2 float-end");
  btnDelete.innerText = "Delete";
  btnDelete.type = "button";
  btnDelete.addEventListener("click", function () {
      if (confirm("¿Estás seguro de que deseas eliminar este idioma?")) {
          idiomaContainer.removeChild(divIdiomaRow);
      }
  });

  idiomaCounter++;

  btnDiv.appendChild(btnDelete);

  divIdiomaRow.appendChild(divIdioma);
  divIdiomaRow.appendChild(divValorIdioma);
  divIdiomaRow.appendChild(btnDiv); 

  idiomaContainer.appendChild(divIdiomaRow);
}

function AgregarExperiencia() {
  const experienciaContainer = document.getElementById('experiencia-container');

  const divExperienciaRow = document.createElement('div');
  divExperienciaRow.className = 'row mt-3'; 

  const divEmpresa = document.createElement('div');
  divEmpresa.className = 'col-4 input position-relative';

  const labelEmpresa = document.createElement('label');
  labelEmpresa.setAttribute('for', 'name-emp');
  labelEmpresa.className = 'form-label';
  labelEmpresa.innerText = 'Empresa:';
  divEmpresa.appendChild(labelEmpresa);

  const inputEmpresa = document.createElement('input');
  inputEmpresa.setAttribute('type', 'text');
  inputEmpresa.setAttribute('class', 'form-control');
  inputEmpresa.setAttribute('id', 'name-emp' + experienciaCounter);
  inputEmpresa.setAttribute('placeholder', 'Industrias.Inc');
  inputEmpresa.setAttribute('name', 'name-emp' + experienciaCounter);
  inputEmpresa.setAttribute('required', 'true'); 
  divEmpresa.appendChild(inputEmpresa);

  const validacionEmpresaDiv = document.createElement('div');
  validacionEmpresaDiv.setAttribute('class', 'valid-tooltip');
  validacionEmpresaDiv.textContent = 'Okey';
  divEmpresa.appendChild(validacionEmpresaDiv);

  const invalidacionEmpresaDiv = document.createElement('div');
  invalidacionEmpresaDiv.setAttribute('class', 'invalid-tooltip');
  invalidacionEmpresaDiv.textContent = 'Se requiere llenar este campo.';
  divEmpresa.appendChild(invalidacionEmpresaDiv);

  const divFechaInicio = document.createElement('div');
  divFechaInicio.className = 'col-4 input position-relative';

  const labelFechaInicio = document.createElement('label');
  labelFechaInicio.setAttribute('for', 'date-start');
  labelFechaInicio.className = 'form-label';
  labelFechaInicio.innerText = 'Fecha de Inicio:';
  divFechaInicio.appendChild(labelFechaInicio);

  const inputFechaInicio = document.createElement('input');
  inputFechaInicio.setAttribute('type', 'date');
  inputFechaInicio.setAttribute('class', 'form-control');
  inputFechaInicio.setAttribute('id', 'date-start-exp' + experienciaCounter);
  inputFechaInicio.setAttribute('name', 'date-start-exp' + experienciaCounter);
  inputFechaInicio.setAttribute('required', 'true');
  divFechaInicio.appendChild(inputFechaInicio);

  const validacionFechaInicioDiv = document.createElement('div');
  validacionFechaInicioDiv.setAttribute('class', 'valid-tooltip');
  validacionFechaInicioDiv.textContent = 'Okey';
  divFechaInicio.appendChild(validacionFechaInicioDiv);

  const invalidacionFechaInicioDiv = document.createElement('div');
  invalidacionFechaInicioDiv.setAttribute('class', 'invalid-tooltip');
  invalidacionFechaInicioDiv.textContent = 'Se requiere llenar este campo.';
  divFechaInicio.appendChild(invalidacionFechaInicioDiv);

  const divFechaFin = document.createElement('div');
  divFechaFin.className = 'col-4 input position-relative';

  const labelFechaFin = document.createElement('label');
  labelFechaFin.setAttribute('for', 'date-end');
  labelFechaFin.className = 'form-label';
  labelFechaFin.innerText = 'Fecha de Finalización:';
  divFechaFin.appendChild(labelFechaFin);

  const inputFechaFin = document.createElement('input');
  inputFechaFin.setAttribute('type', 'date');
  inputFechaFin.setAttribute('class', 'form-control');
  inputFechaFin.setAttribute('id', 'date-end-exp' + experienciaCounter);
  inputFechaFin.setAttribute('name', 'date-end-exp' + experienciaCounter);
  inputFechaFin.setAttribute('required', 'true');
  divFechaFin.appendChild(inputFechaFin);

  const validacionFechaFinDiv = document.createElement('div');
  validacionFechaFinDiv.setAttribute('class', 'valid-tooltip');
  validacionFechaFinDiv.textContent = 'Okey';
  divFechaFin.appendChild(validacionFechaFinDiv);

  const invalidacionFechaFinDiv = document.createElement('div');
  invalidacionFechaFinDiv.setAttribute('class', 'invalid-tooltip');
  invalidacionFechaFinDiv.textContent = 'Se requiere llenar este campo.';
  divFechaFin.appendChild(invalidacionFechaFinDiv);

  const btnDiv = document.createElement("div");

  const btnDelete = document.createElement("button");
  btnDelete.setAttribute("class", "btn btn-outline-danger mt-2 float-end");
  btnDelete.innerText = "Delete";
  btnDelete.type = "button";
  btnDelete.addEventListener("click", function () {
      if (confirm("¿Estás seguro de que deseas eliminar esta experiencia laboral?")) {
          experienciaContainer.removeChild(divExperienciaRow);
      }
  });

  experienciaCounter++;

  btnDiv.appendChild(btnDelete);

  divExperienciaRow.appendChild(divEmpresa);
  divExperienciaRow.appendChild(divFechaInicio);
  divExperienciaRow.appendChild(divFechaFin);
  divExperienciaRow.appendChild(btnDiv);

  experienciaContainer.appendChild(divExperienciaRow);
}

function AgregarEducacion() {
  const educacionContainer = document.getElementById('educacion-container');

  const divEducacionRow = document.createElement('div');
  divEducacionRow.className = 'row mt-3'; 

  const divInstitucion = document.createElement('div');
  divInstitucion.className = 'col-4 input position-relative';

  const labelInstitucion = document.createElement('label');
  labelInstitucion.setAttribute('for', 'name-inst');
  labelInstitucion.className = 'form-label';
  labelInstitucion.innerText = 'Institucion:';
  divInstitucion.appendChild(labelInstitucion);

  const inputInstitucion = document.createElement('input');
  inputInstitucion.setAttribute('type', 'text');
  inputInstitucion.setAttribute('class', 'form-control');
  inputInstitucion.setAttribute('id', 'name-inst' + educacionCounter);
  inputInstitucion.setAttribute('placeholder', 'ITLA');
  inputInstitucion.setAttribute('name', 'name-inst' + educacionCounter);
  inputInstitucion.setAttribute('required', 'true'); 
  divInstitucion.appendChild(inputInstitucion);

  const validacionInstitucionDiv = document.createElement('div');
  validacionInstitucionDiv.setAttribute('class', 'valid-tooltip');
  validacionInstitucionDiv.textContent = 'Okey';
  divInstitucion.appendChild(validacionInstitucionDiv);

  const invalidacionInstitucionDiv = document.createElement('div');
  invalidacionInstitucionDiv.setAttribute('class', 'invalid-tooltip');
  invalidacionInstitucionDiv.textContent = 'Se requiere llenar este campo.';
  divInstitucion.appendChild(invalidacionInstitucionDiv);

  const divFechaInicio = document.createElement('div');
  divFechaInicio.className = 'col-4 input position-relative';

  const labelFechaInicio = document.createElement('label');
  labelFechaInicio.setAttribute('for', 'date-start');
  labelFechaInicio.className = 'form-label';
  labelFechaInicio.innerText = 'Fecha de Inicio:';
  divFechaInicio.appendChild(labelFechaInicio);

  const inputFechaInicio = document.createElement('input');
  inputFechaInicio.setAttribute('type', 'date');
  inputFechaInicio.setAttribute('class', 'form-control');
  inputFechaInicio.setAttribute('id', 'date-start-inst' + educacionCounter);
  inputFechaInicio.setAttribute('name', 'date-start-inst' + educacionCounter);
  inputFechaInicio.setAttribute('required', 'true');
  divFechaInicio.appendChild(inputFechaInicio);

  const validacionFechaInicioDiv = document.createElement('div');
  validacionFechaInicioDiv.setAttribute('class', 'valid-tooltip');
  validacionFechaInicioDiv.textContent = 'Okey';
  divFechaInicio.appendChild(validacionFechaInicioDiv);

  const invalidacionFechaInicioDiv = document.createElement('div');
  invalidacionFechaInicioDiv.setAttribute('class', 'invalid-tooltip');
  invalidacionFechaInicioDiv.textContent = 'Se requiere llenar este campo.';
  divFechaInicio.appendChild(invalidacionFechaInicioDiv);

  const divFechaFin = document.createElement('div');
  divFechaFin.className = 'col-4 input position-relative';

  const labelFechaFin = document.createElement('label');
  labelFechaFin.setAttribute('for', 'date-end');
  labelFechaFin.className = 'form-label';
  labelFechaFin.innerText = 'Fecha de Finalización:';
  divFechaFin.appendChild(labelFechaFin);

  const inputFechaFin = document.createElement('input');
  inputFechaFin.setAttribute('type', 'date');
  inputFechaFin.setAttribute('class', 'form-control');
  inputFechaFin.setAttribute('id', 'date-end-inst' + educacionCounter);
  inputFechaFin.setAttribute('name', 'date-end-inst' + educacionCounter);
  inputFechaFin.setAttribute('required', 'true');
  divFechaFin.appendChild(inputFechaFin);

  const validacionFechaFinDiv = document.createElement('div');
  validacionFechaFinDiv.setAttribute('class', 'valid-tooltip');
  validacionFechaFinDiv.textContent = 'Okey';
  divFechaFin.appendChild(validacionFechaFinDiv);

  const invalidacionFechaFinDiv = document.createElement('div');
  invalidacionFechaFinDiv.setAttribute('class', 'invalid-tooltip');
  invalidacionFechaFinDiv.textContent = 'Se requiere llenar este campo.';
  divFechaFin.appendChild(invalidacionFechaFinDiv);

  const btnDiv = document.createElement("div");

  const btnDelete = document.createElement("button");
  btnDelete.setAttribute("class", "btn btn-outline-danger mt-2 float-end");
  btnDelete.innerText = "Delete";
  btnDelete.type = "button";
  btnDelete.addEventListener("click", function () {
      if (confirm("¿Estás seguro de que deseas eliminar esta educacion?")) {
          educacionContainer.removeChild(divEducacionRow);
      }
  });

  btnDiv.appendChild(btnDelete);

  divEducacionRow.appendChild(divInstitucion);
  divEducacionRow.appendChild(divFechaInicio);
  divEducacionRow.appendChild(divFechaFin);
  divEducacionRow.appendChild(btnDiv);

  educacionContainer.appendChild(divEducacionRow);
}

function AgregarCertificacion() {
  const certificacionContainer = document.getElementById('certificacion-container');

  const divCertificacionRow = document.createElement('div');
  divCertificacionRow.className = 'row mt-3'; 

  const divCertificacion = document.createElement('div');
  divCertificacion.className = 'col-4 input position-relative';

  const labelCertificacion = document.createElement('label');
  labelCertificacion.setAttribute('for', 'name-cert');
  labelCertificacion.className = 'form-label';
  labelCertificacion.innerText = 'Certificación:';
  divCertificacion.appendChild(labelCertificacion);

  const inputCertificacion = document.createElement('input');
  inputCertificacion.setAttribute('type', 'text');
  inputCertificacion.setAttribute('class', 'form-control');
  inputCertificacion.setAttribute('id', 'name-cert' + certificacionCounter);
  inputCertificacion.setAttribute('placeholder', 'Desarrollo web desde 0');
  inputCertificacion.setAttribute('name', 'name-cert' + certificacionCounter);
  inputCertificacion.setAttribute('required', 'true'); 
  divCertificacion.appendChild(inputCertificacion);

  const validacionCertificacionDiv = document.createElement('div');
  validacionCertificacionDiv.setAttribute('class', 'valid-tooltip');
  validacionCertificacionDiv.textContent = 'Okey';
  divCertificacion.appendChild(validacionCertificacionDiv);

  const invalidacionCertificacionDiv = document.createElement('div');
  invalidacionCertificacionDiv.setAttribute('class', 'invalid-tooltip');
  invalidacionCertificacionDiv.textContent = 'Se requiere llenar este campo.';
  divCertificacion.appendChild(invalidacionCertificacionDiv);

  const divFechaInicio = document.createElement('div');
  divFechaInicio.className = 'col-4 input position-relative';

  const labelFechaInicio = document.createElement('label');
  labelFechaInicio.setAttribute('for', 'date-start');
  labelFechaInicio.className = 'form-label';
  labelFechaInicio.innerText = 'Fecha de Inicio:';
  divFechaInicio.appendChild(labelFechaInicio);

  const inputFechaInicio = document.createElement('input');
  inputFechaInicio.setAttribute('type', 'date');
  inputFechaInicio.setAttribute('class', 'form-control');
  inputFechaInicio.setAttribute('id', 'date-start-cert' + certificacionCounter);
  inputFechaInicio.setAttribute('name', 'date-start-cert' + certificacionCounter);
  inputFechaInicio.setAttribute('required', 'true');
  divFechaInicio.appendChild(inputFechaInicio);

  const validacionFechaInicioDiv = document.createElement('div');
  validacionFechaInicioDiv.setAttribute('class', 'valid-tooltip');
  validacionFechaInicioDiv.textContent = 'Okey';
  divFechaInicio.appendChild(validacionFechaInicioDiv);

  const invalidacionFechaInicioDiv = document.createElement('div');
  invalidacionFechaInicioDiv.setAttribute('class', 'invalid-tooltip');
  invalidacionFechaInicioDiv.textContent = 'Se requiere llenar este campo.';
  divFechaInicio.appendChild(invalidacionFechaInicioDiv);

  const divFechaFin = document.createElement('div');
  divFechaFin.className = 'col-4 input position-relative';

  const labelFechaFin = document.createElement('label');
  labelFechaFin.setAttribute('for', 'date-end');
  labelFechaFin.className = 'form-label';
  labelFechaFin.innerText = 'Fecha de Finalización:';
  divFechaFin.appendChild(labelFechaFin);

  const inputFechaFin = document.createElement('input');
  inputFechaFin.setAttribute('type', 'date');
  inputFechaFin.setAttribute('class', 'form-control');
  inputFechaFin.setAttribute('id', 'date-end-cert' + certificacionCounter);
  inputFechaFin.setAttribute('name', 'date-end-cert' + certificacionCounter);
  inputFechaFin.setAttribute('required', 'true');
  divFechaFin.appendChild(inputFechaFin);

  const validacionFechaFinDiv = document.createElement('div');
  validacionFechaFinDiv.setAttribute('class', 'valid-tooltip');
  validacionFechaFinDiv.textContent = 'Okey';
  divFechaFin.appendChild(validacionFechaFinDiv);

  const invalidacionFechaFinDiv = document.createElement('div');
  invalidacionFechaFinDiv.setAttribute('class', 'invalid-tooltip');
  invalidacionFechaFinDiv.textContent = 'Se requiere llenar este campo.';
  divFechaFin.appendChild(invalidacionFechaFinDiv);

  const btnDiv = document.createElement("div");

  const btnDelete = document.createElement("button");
  btnDelete.setAttribute("class", "btn btn-outline-danger mt-2 float-end");
  btnDelete.innerText = "Delete";
  btnDelete.type = "button";
  btnDelete.addEventListener("click", function () {
      if (confirm("¿Estás seguro de que deseas eliminar esta certificación?")) {
          certificacionContainer.removeChild(divCertificacionRow);
      }
  });

  btnDiv.appendChild(btnDelete);

  divCertificacionRow.appendChild(divCertificacion);
  divCertificacionRow.appendChild(divFechaInicio);
  divCertificacionRow.appendChild(divFechaFin);
  divCertificacionRow.appendChild(btnDiv);

  certificacionContainer.appendChild(divCertificacionRow);
}

function GenerateCv() {

  const container = document.createElement("div");
  container.classList.add("container", "mt-5");
  container.id = "cv-container";
  
  const barra = document.createElement("div");
  barra.classList.add("header-bar");
  
  const head = document.createElement("h1");
  head.textContent = nameInput.value;
  
  const headTitle = document.createElement("h5");
  headTitle.textContent = titleInput.value;
  
  barra.appendChild(head);
  barra.appendChild(headTitle);
  
  container.appendChild(barra);
  
  const row = document.createElement("div");
  row.classList.add("row");
  
  const aside = document.createElement("aside");
  aside.classList.add("col-3");
  
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("col-8");
  
  const content = document.createElement("div");
  content.classList.add("content");

  // Información personal
  const infoPersonal = document.createElement("div");
  infoPersonal.setAttribute("class", "info-personal");
  
  const contact = document.createElement("h4");
  contact.textContent = "Contacto";
  
  const hrContacto = document.createElement("hr");

  const nameP = document.createElement("p");
  nameP.textContent = emailInput.value;
  
  const telP = document.createElement("p");
  telP.textContent = telInput.value;
  
  const dateP = document.createElement("p");
  dateP.textContent = dateInput.value;

  const linkedinP = document.createElement("p");
 linkedinP.textContent = enlaceInput.value;

 infoPersonal.appendChild(contact);
 infoPersonal.appendChild(hrContacto);
 infoPersonal.appendChild(nameP);
 infoPersonal.appendChild(document.createElement("br"));
 infoPersonal.appendChild(telP);
 infoPersonal.appendChild(document.createElement("br"));
 infoPersonal.appendChild(dateP);
 infoPersonal.appendChild(document.createElement("br"));
 infoPersonal.appendChild(linkedinP);

  aside.appendChild(infoPersonal);
  
  // Habilidades
  const habContainer = document.getElementById("habilidad-container");
  const hab = document.createElement("div");
  hab.setAttribute("class", "habilidades");
  const habTitle = document.createElement("h4");
  habTitle.textContent = "Habilidades";
  
  const hrHabilidad = document.createElement("hr");
  hab.appendChild(habTitle);
  hab.appendChild(hrHabilidad);
  habContainer.appendChild(hab);
  
  const habilidadesInputs = habContainer.querySelectorAll('[name^="skills"]');
  const valorHabilidadInputs = habContainer.querySelectorAll('[name^="valor-habilidad"]');
  
  for (let i = 0; i < habilidadesInputs.length; i++) {
      const habNombre = habilidadesInputs[i].value;
      const habValue = valorHabilidadInputs[i].value;
      
      const habElement = document.createElement("p");
      habElement.textContent = `${habNombre} : ${habValue}`;
      
      hab.appendChild(habElement);
  }

  aside.appendChild(hab);
  
  // Idiomas
  const idiomContainer = document.getElementById("idiomas-container");
  const idiomDiv = document.createElement("div");
  const idiomTitle = document.createElement("h4");
  idiomTitle.textContent = "Idiomas";
  
  const hrIdioma = document.createElement("hr");
  
  idiomDiv.appendChild(idiomTitle);
  idiomDiv.appendChild(hrIdioma);
  idiomContainer.appendChild(idiomDiv);
  
  const idiomasInputs = idiomContainer.querySelectorAll('[name^="idioma"]');
  const valorInputs = idiomContainer.querySelectorAll('[name^="valor-idioma"]');
  
  for (let i = 0; i < idiomasInputs.length; i++) {
      const idiomName = idiomasInputs[i].value;
      const idiomValor = valorInputs[i].value;
      
      const idiomElement = document.createElement("p");
      idiomElement.textContent = `${idiomName} : ${idiomValor}`;
      
      idiomDiv.appendChild(idiomElement);
  }
  
  aside.appendChild(idiomDiv);
  
  // Software
  const softContainer = document.getElementById("software-container");
  const softDiv = document.createElement("div");
  const softTitle = document.createElement("h4");
  softTitle.textContent = "Software";
  
  const hrSoftware = document.createElement("hr");
  
  softDiv.appendChild(softTitle);
  softDiv.appendChild(hrSoftware);
  softContainer.appendChild(softDiv);
  
  const softwareInputs = softContainer.querySelectorAll('[name^="software"]');
  const softValue = softContainer.querySelectorAll('[name^="valor-software"]');
  
  for (let i = 0; i < softwareInputs.length; i++) {
      const softName = softwareInputs[i].value;
      const softValor = softValue[i].value;
      
      const softElement = document.createElement("p");
      softElement.textContent = `${softName} : ${softValor}`;
      
      softDiv.appendChild(softElement);
  }
  
  aside.appendChild(softDiv);
  
  // Resumen profesional
  const resumenId = document.getElementById('resumen')
  const resumen = document.createElement("div");
  const resumenTit = document.createElement("h3");
  resumenTit.textContent = "Resumen Profesional";
  
  const resumenText = document.createElement("p");
  resumenText.textContent = resumenId.value;
  
  resumen.appendChild(resumenTit);
  resumen.appendChild(resumenText);
  mainContainer.appendChild(resumen);
  
  // Experiencia laboral
  const expContainer = document.getElementById("experiencia-container");
  const expDiv = document.createElement("div");
  const expTitle = document.createElement("h3");
  expTitle.textContent = "Experiencia Laboral";
  
  expDiv.appendChild(expTitle);
  expContainer.appendChild(expDiv);
  
  const experienciaInputs = expContainer.querySelectorAll('[name^="name-emp"]');
  const fechaIn = expContainer.querySelectorAll('[name^="date-start-exp"]');
  const fechaFin = expContainer.querySelectorAll('[name^="date-end-exp"]');
  
  for (let i = 0; i < experienciaInputs.length; i++) {
      const expName = experienciaInputs[i].value;
      const fechaInValue = fechaIn[i].value;
      const fechaFinValue = fechaFin[i].value;
      
      const expElement = document.createElement("p");
      expElement.textContent = `${expName} : (${fechaInValue} - ${fechaFinValue})`;
      
      expDiv.appendChild(expElement);
  }
  
  mainContainer.appendChild(expDiv);
  
  // Educación
  const eduContainer = document.getElementById("educacion-container");
  const eduDiv = document.createElement("div");
  const eduTitulo = document.createElement("h3");
  eduTitulo.textContent = "Educación";
  
  eduDiv.appendChild(eduTitulo);
  
  const educacionInputs = eduContainer.querySelectorAll('[name^="name-inst"]');
  const fechaInEdu = eduContainer.querySelectorAll('[name^="date-start-inst"]');
  const fechaFinEdu = eduContainer.querySelectorAll('[name^="date-end-inst"]');
  
  for (let i = 0; i < educacionInputs.length; i++) {
      const eduName = educacionInputs[i].value;
      const fechaInValueEdu = fechaInEdu[i].value;
      const fechaFinValueEdu = fechaFinEdu[i].value;
      
      const eduElement = document.createElement("p");
      eduElement.textContent = `${eduName} : (${fechaInValueEdu} - ${fechaFinValueEdu})`;
      
      eduDiv.appendChild(eduElement);
  }
  
  mainContainer.appendChild(eduDiv);
  
  // Certificaciones
  const certContainer = document.getElementById("certificacion-container");
  const certDiv = document.createElement("div");
  const certTitulo = document.createElement("h3");
  certTitulo.textContent = "Certificaciones";
  
  certDiv.appendChild(certTitulo);
  
  const certificacionInputs = certContainer.querySelectorAll('[name^="name-cert"]');
  const fechaInCert = certContainer.querySelectorAll('[name^="date-start-cert"]');
  const fechaFinCert = certContainer.querySelectorAll('[name^="date-end-cert"]');
  
  for (let i = 0; i < certificacionInputs.length; i++) {
      const certName = certificacionInputs[i].value;
      const fechaInValueCert = fechaInCert[i].value;
      const fechaFinValueCert = fechaFinCert[i].value;
      
      const certElement = document.createElement("p");
      certElement.textContent = `${certName} : (${fechaInValueCert} - ${fechaFinValueCert})`;
      
      certDiv.appendChild(certElement);
  }
  
  
  mainContainer.appendChild(certDiv);

  const btnDiv = document.createElement("div");

  const btnDelete = document.createElement("button");
  btnDelete.setAttribute("class", "btn btn-danger btnCerrar mt-2 float-end");
  btnDelete.innerText = "Cerrar";
  btnDelete.type = "button";
  btnDelete.addEventListener("click", function () {
    const containerToRemove = document.getElementById("cv-container");
      if (containerToRemove) {
        containerToRemove.remove();
        location.reload();
     }
  });

  btnDiv.appendChild(btnDelete);
  row.appendChild(btnDiv);
  row.appendChild(aside);
  row.appendChild(mainContainer);
  container.appendChild(row);
  
  document.body.appendChild(container);
}



(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    });
    
  })()

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("cv-form");

    form.addEventListener("submit", function (event) {
      event.preventDefault(); 

      if (!form.checkValidity()) {
        return;
      }
    
      GenerateCv();
    });
});



