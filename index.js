function addComponents() {
  const headerSectionEl = document.querySelector(
    ".header-encabezado-container"
  );
  const formSectionEl = document.querySelector(".form-container");
  const footerSectionEl = document.querySelector(".footer-container");
  addHeader(headerSectionEl);
  openMenu();
  closeMenu();
  addForm(formSectionEl);
  addFooter(footerSectionEl);
}

function main() {
  addComponents();
}

main();
