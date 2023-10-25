document.addEventListener("DOMContentLoaded", (event) => {
  const buttonCreateNewPost = document.querySelector("#buttonNewPost");
  const buttonSavePost = document.querySelector("#buttonSavePost");
  const formContainer = document.querySelector("#formContainer");
  const linksContainer = document.querySelector("#links");

  buttonCreateNewPost.addEventListener("click", () => {
    const platformOptions = `
      <option selected></option>
      <option value="github">Github</option>
      <option value="youtube">YouTube</option>
      <option value="linkedin">LinkedIn</option>
      <option value="instagram">Instagram</option>
      <option value="others">Others</option>
    `;

    const newForm = document.createElement("div");
    newForm.classList.add("postedLink", "bg-body-tertiary", "p-2");
    newForm.innerHTML = `
      <div class="d-flex flex-row justify-content-between">
        <p>Link #${formContainer.children.length + 1}</p>
        <button type="button" class="btn btn-light buttonRemovePost border-0">Remove</button>
      </div>
      <div>
        <label class="w-100">
          Plataforma:
          <select class="form-select mb-3">${platformOptions}</select>
        </label>
      </div>
      <div>
        <label for="platform-url">Aquí tu link:</label>
        <div class="input-group">
          <span class="input-group-text" id="destinationLink">https://</span>
          <input type="text" class="form-control" id="platform-url" />
        </div>
      </div>
    `;

    formContainer.appendChild(newForm);

    const buttonRemovePost = newForm.querySelector(".buttonRemovePost");

    buttonRemovePost.addEventListener("click", () => {
      newForm.remove();
    });
  });

  buttonSavePost.addEventListener("click", () => {
    const formElements = formContainer.querySelectorAll(".postedLink");
    let buttonsContainer = "";

    formElements.forEach((form, index) => {
      const platformSelect = form.querySelector("select");
      const urlInput = form.querySelector("input");

      if (platformSelect.value && urlInput.value) {
        buttonsContainer += `<a href="${urlInput.value}" id="${
          platformSelect.value
        }" class="btn ${
          platformSelect.value
        }" style="margin-right: 10px; background-color: blue; color: white;">Link #${
          index + 1
        }</a>`;
      }
    });
    linksContainer.innerHTML = buttonsContainer;
  });
});
