function addHeader(el) {
  const headerEl = document.createElement("div");
  headerEl.setAttribute("class", "header");
  headerEl.innerHTML = `
    <h2 class="header__title">ALAN</h2>
    <div class="header__container__hamburguer">
      <div class="barra"></div>
      <div class="barra"></div>
      <div class="barra"></div>
    </div>
    <nav class="header__container__nav">
    <div class="nav__container__cross">
      <span class="nav__cross">X</span>
    </div>
    <div class="nav__container__links">
      <a href="./" class="nav__link">Home</a>
      <a href="./products.html" class="nav__link">Portfolio</a>
      <a href="./services.html" class="nav__link">Servicios</a>
      <a href="./contact.html" class="nav__link">Contacto</a>
      </div>
    </nav>
  
    `;
  el.appendChild(headerEl);
}

function openMenu() {
  const hamburguerEl = document.querySelector(".header__container__hamburguer");
  const navEl = document.querySelector(".header__container__nav");

  hamburguerEl.addEventListener("click", () => (navEl.style.display = "flex"));
}

function closeMenu() {
  const crossEl = document.querySelector(".nav__cross");
  const navEl = document.querySelector(".header__container__nav");

  crossEl.addEventListener("click", () => (navEl.style.display = ""));
}
