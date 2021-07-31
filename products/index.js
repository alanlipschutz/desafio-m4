function addComponents() {
  const headerSectionEl = document.querySelector(
    ".header-encabezado-container"
  );
  const footerSectionEl = document.querySelector(".footer-container");
  addHeader(headerSectionEl);
  addFooter(footerSectionEl);
}

function addCards(params) {
  const container = document.querySelector(".portfolio-content");
  const template = document.querySelector("#template-content");
  const titleEl = template.content.querySelector(".portfolio-card__title");
  titleEl.textContent = params.title;
  const descriptionEl = template.content.querySelector(
    ".portfolio-card__description"
  );
  descriptionEl.textContent = params.description;
  const imgEl = template.content.querySelector(".portfolio-card__img");
  imgEl.src = params.image;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getPortfolio() {
  return fetch(
    "https://cdn.contentful.com/spaces/prwodad3pg7p/environments/master/entries?access_token=8LfWuDDJFBryOOfkWkgVB48jc7uQPd_nTNk_gmxuv9U&content_type=desafioModulo4"
  )
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      console.log(json);
      const portfolioCollection = json.items.map(function (item) {
        return {
          title: item.fields.titulo,
          description: item.fields.description,
          imageUrl: item.fields.img.sys.id,
          includes: json.includes.Asset,
        };
      });
      portfolioCollection.forEach((x) => {
        let idEncontrado = findAsset(x.imageUrl, x.includes);
        x.image = idEncontrado.fields.file.url;
      });
      return portfolioCollection;
    });
}

function findAsset(assetId, includes) {
  const id = includes.find((inc) => {
    return inc.sys.id == assetId;
  });
  return id;
}

function main() {
  addComponents();
  getPortfolio().then((portfolios) => {
    for (const p of portfolios) {
      addCards(p);
    }
  });
}

main();
