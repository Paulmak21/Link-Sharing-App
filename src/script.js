let linkCount = 1;

// Función para agregar un nuevo formulario
function agregarNuevoFormulario() {
  const formContainer = document.getElementById("formContainer");

  // Crear formulario
  const nuevoFormulario = document.createElement("form");
  nuevoFormulario.className = "formulario";

  // Agregar Link #1
  const titulo = document.createElement("h6");
  titulo.textContent = `Link #${linkCount}`;
  nuevoFormulario.appendChild(titulo);

  // Boton remove para formulario
  const removeButton = document.createElement("span");
  removeButton.textContent = "Remove";
  removeButton.className = "remove-button";
  removeButton.addEventListener("click", () => eliminarFormulario(nuevoFormulario));
  nuevoFormulario.appendChild(removeButton);

  const platform = document.createElement("p");
  platform.textContent = 'Platform';

  // Crear dropdown
  const dropdown = document.createElement("select");
  dropdown.className = "form-select";
  dropdown.innerHTML = `
    <option placeholder="Please select one"></option>
    <option value="github"><i class="fa-brands fa-github-alt">GitHub</i></option>
    <option value="youtube">YouTube</option>
    <option value="linkedin">LinkedIn</option>
    <option value="facebook">Facebook</option>
    <option value="dev">Dev.to</option>
    <option value="x">X</option>
    <!-- Agrega más opciones según sea necesario -->
  `;

  const aquiLink = document.createElement("p");
  aquiLink.textContent = "Aquí tu link:";


  // Input con redSocial url || link
  const urlInput = document.createElement("input");
  urlInput.type = "text";
  urlInput.className = "form-control";
  urlInput.placeholder = "Anade url";

  // Anade titulo, remove, dropdown && el input
  nuevoFormulario.appendChild(titulo);
  nuevoFormulario.appendChild(removeButton);
  nuevoFormulario.appendChild(platform);
  nuevoFormulario.appendChild(dropdown);
  nuevoFormulario.appendChild(aquiLink);
  nuevoFormulario.appendChild(urlInput);

  // Lo anade al div creado en el HTML
  formContainer.appendChild(nuevoFormulario);

  linkCount++;
}

function eliminarFormulario(formulario) {
  const formContainer = document.getElementById("formContainer");
  formContainer.removeChild(formulario);
  linkCount--;
  // Ajustar header de Links# 1,2,3 etc.
  const formularios = formContainer.querySelectorAll(".formulario h6");
  formularios.forEach((titulo, index) => {
    titulo.textContent = `Link #${index + 1}`;
  });
}

// Agrega un evento clic al botón "Nuevo formulario"
const botonNuevoFormulario = document.querySelector("#links button.btn");
botonNuevoFormulario.addEventListener("click", agregarNuevoFormulario);
