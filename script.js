(function () {
  var cfg = window.SITE_CONFIG || {};
  var url = (cfg.CHECKOUT_URL || "").trim();
  var valid = /^https:\/\/[^\s]+$/i.test(url);

  // Preço (deve ser igual ao da oferta na Kiwify)
  document.querySelectorAll(".js-price").forEach(function (el) {
    if (cfg.PRICE_LABEL) el.textContent = cfg.PRICE_LABEL;
  });

  // Botões de compra
  document.querySelectorAll(".js-buy").forEach(function (a) {
    if (valid) {
      a.setAttribute("href", url);
      a.setAttribute("rel", "noopener");
    } else if (a.closest("#comprar")) {
      a.removeAttribute("href");
      a.setAttribute("role", "link");
      a.setAttribute("aria-disabled", "true");
      a.textContent = "Compra disponível em breve";
    }
  });

  // Aviso de demonstração
  var banner = document.getElementById("demo-banner");
  if (banner && !valid) banner.hidden = false;

  // Produtor e suporte (só aparecem se preenchidos)
  var prod = document.querySelector(".js-producer");
  if (prod && cfg.PRODUCER_NAME) { prod.textContent = cfg.PRODUCER_NAME; prod.hidden = false; }
  var sup = document.querySelector(".js-support");
  if (sup && cfg.SUPPORT_EMAIL) {
    var l = sup.querySelector(".js-support-link");
    l.textContent = cfg.SUPPORT_EMAIL;
    l.href = "mailto:" + cfg.SUPPORT_EMAIL;
    sup.hidden = false;
  }
  var y = document.querySelector(".js-year");
  if (y) y.textContent = new Date().getFullYear();
})();
