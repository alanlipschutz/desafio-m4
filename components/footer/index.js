function addFooter(container) {
  const footerEl = document.createElement("footer");
  footerEl.setAttribute("class", "footer");
  footerEl.innerHTML = `
    <h2 class="footer__title">ALAN</h2>
    <div class="footer__social-container">
      <a href="" class="footer__social-link">
        <span class="link__title">Instagram</span>
        <img src="./images/instagram.png" alt="" class="link__img" />
      </a>
      <a href="" class="footer__social-link">
        <span class="link__title">Linkedin</span>
        <img src="./images/linkedin.png" alt="" class="link img" />
      </a>
      <a href="" class="footer__social-link">
        <span class="link__title">Github</span>
        <img src="./images/github.png" alt="" class="link img" />
      </a>
    </div>
    `;
  container.appendChild(footerEl);
}
