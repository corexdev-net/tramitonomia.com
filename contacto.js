// Tramitonomía · contacto. Pon aquí el WhatsApp del negocio (52 + 10 dígitos, sin espacios). Vacío = los botones abren el correo.
var WHATSAPP = "";

(function () {
  function wa(msg) { return "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(msg); }
  if (WHATSAPP) {
    document.querySelectorAll(".js-wa").forEach(function (a) {
      a.href = wa(a.getAttribute("data-msg") || "Hola, quiero información sobre un trámite.");
      a.target = "_blank"; a.rel = "noopener";
    });
  }
  var f = document.getElementById("cotiza");
  if (!f) return;
  f.addEventListener("submit", function (e) {
    e.preventDefault();
    var t = document.getElementById("c-tramite").value, n = document.getElementById("c-nombre").value.trim(), s = document.getElementById("c-estado").value.trim();
    var msg = "Hola, soy " + n + ". Quiero cotizar: " + t + (s ? " (vivo en " + s + ")" : "") + ".";
    if (WHATSAPP) window.open(wa(msg), "_blank", "noopener");
    else location.href = "mailto:" + (document.querySelector('a[href^="mailto:"]').href.replace("mailto:", "").split("?")[0]) + "?subject=" + encodeURIComponent("Cotización: " + t) + "&body=" + encodeURIComponent(msg);
  });
})();
