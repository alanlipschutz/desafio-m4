function addForm(container) {
  const formEl = document.createElement("form");
  formEl.setAttribute("class", "my-form");
  formEl.innerHTML = `
        <section class="my-form__sections">
          <label class="my-form__sections__label">
            <span class="my-form__sections__name">NOMBRE</span>
            <input name="name" type="text" class="my-form__sections__input" />
          </label>
          <label class="my-form__sections__label">
            <span class="my-form__sections__name">EMAIL</span>
            <input name="email" type="email" class="my-form__sections__input" />
          </label>
          <label class="my-form__sections__label">
            <span class="my-form__sections__name">Mensaje</span>
            <textarea
              name="message"
              cols="30"
              rows="5"
              class="my-form__sections__textarea"
            ></textarea>
          </label>
          <div class="my-form__button-container">
            <button class="my-form__button">Enviar</button>
          </div>
        </section>
  `;
  container.appendChild(formEl);
}

function postData() {}
