function addHome(params) {
  const container = document.querySelector(".header__home");
  const template = document.querySelector("#template-header__home");
  const titleEl = template.content.querySelector(".header__home__title");
  titleEl.textContent = params.title;
  const subtitleEl = template.content.querySelector(".header__home__subtitle");
  subtitleEl.textContent = params.subtitle;
  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getHome() {
  return fetch(
    "https://cdn.contentful.com/spaces/prwodad3pg7p/environments/master/entries?access_token=8LfWuDDJFBryOOfkWkgVB48jc7uQPd_nTNk_gmxuv9U&content_type=desafioHome"
  )
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      const portfolioCollection = json.items.map(function (item) {
        return {
          title: item.fields.title,
          subtitle: item.fields.subtitle,
        };
      });
      return portfolioCollection;
    });
}

// main welcome block

function addWelcome(params) {
  const container = document.querySelector(".main");
  const template = document.querySelector("#main-template");
  const titleEl = template.content.querySelector(".main__title");
  titleEl.textContent = params.title;
  const descriptionEl = template.content.querySelector(".main__description");
  descriptionEl.textContent = params.description;
  const imgEl = template.content.querySelector(".main__image");
  imgEl.src = params.image;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getWelcome() {
  return fetch(
    "https://cdn.contentful.com/spaces/prwodad3pg7p/environments/master/entries?access_token=8LfWuDDJFBryOOfkWkgVB48jc7uQPd_nTNk_gmxuv9U&content_type=desafioModulo4Welcome"
  )
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      const welcomeCollection = json.items.map(function (item) {
        return {
          title: item.fields.title,
          description: item.fields.description,
          imageUrl: item.fields.image.sys.id,
          includes: json.includes.Asset,
        };
      });
      welcomeCollection.forEach((x) => {
        let idEncontrado = findAsset(x.imageUrl, x.includes);
        x.image = idEncontrado.fields.file.url;
      });
      return welcomeCollection;
    });
}

// services block

function addServices(params) {
  const container = document.querySelector(".my-services__container");
  const template = document.querySelector("#my-services-template");
  const titleEl = template.content.querySelector(".container__services__title");
  titleEl.textContent = params.title;
  const descriptionEl = template.content.querySelector(
    ".container__services__description"
  );
  descriptionEl.textContent = params.description;
  const imgEl = template.content.querySelector(".container__services__img");
  imgEl.src = params.image;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getServices() {
  return fetch(
    "https://cdn.contentful.com/spaces/prwodad3pg7p/environments/master/entries?access_token=8LfWuDDJFBryOOfkWkgVB48jc7uQPd_nTNk_gmxuv9U&content_type=desafioModulo4"
  )
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      const servicesCollection = json.items.map(function (item) {
        return {
          title: item.fields.titulo,
          description: item.fields.description,
          imageUrl: item.fields.img.sys.id,
          includes: json.includes.Asset,
        };
      });
      servicesCollection.forEach((x) => {
        let idEncontrado = findAsset(x.imageUrl, x.includes);
        x.image = idEncontrado.fields.file.url;
      });
      return servicesCollection;
    });
}

function findAsset(assetId, includes) {
  const id = includes.find((inc) => {
    return inc.sys.id == assetId;
  });
  return id;
}

function main() {
  getHome().then((portfolios) => {
    for (const p of portfolios) {
      addHome(p);
    }
  });
  getWelcome().then((welcome) => {
    for (const w of welcome) {
      addWelcome(w);
    }
  });

  getServices().then((services) => {
    for (const s of services) {
      addServices(s);
    }
  });
}

main();
