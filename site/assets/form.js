// Checks the contact form before it is sent, with clear messages next to each field.
// Without JavaScript, the browser's own checks (required, type="email", maxlength) still apply.
(function () {
  var form = document.querySelector("form.contact");
  if (!form) return;

  var fr = (document.documentElement.lang || "").slice(0, 2) === "fr";
  var text = fr
    ? {
        required: "Ce champ est obligatoire.",
        email: "Saisissez une adresse e-mail valide, par exemple nom@entreprise.com.",
        website: "Saisissez l'adresse de votre site, par exemple entreprise.com.",
        tooLong: "Ce texte est trop long.",
        choose: "Choisissez une réponse.",
        sending: "Envoi…"
      }
    : {
        required: "Please fill in this field.",
        email: "Enter a valid email address, for example name@company.com.",
        website: "Enter your website address, for example company.com.",
        tooLong: "This text is too long.",
        choose: "Please choose an answer.",
        sending: "Sending…"
      };

  var emailRe = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)*\.[a-z]{2,}$/i;
  var siteRe = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(:\d+)?([\/?#]\S*)?$/i;

  var fields = Array.prototype.filter.call(form.querySelectorAll("input, textarea"), function (el) {
    return el.type !== "hidden" && el.type !== "radio" && el.type !== "checkbox" && !el.closest(".hp");
  });

  // Groups of radio buttons where an answer is required.
  var groups = Array.prototype.slice.call(form.querySelectorAll("fieldset[data-required]"));
  var items = fields.concat(groups);

  form.setAttribute("novalidate", "");

  function isGroup(el) {
    return el.tagName === "FIELDSET";
  }

  function problem(el) {
    if (isGroup(el)) return el.querySelector("input:checked") ? "" : text.choose;
    var v = el.value.trim();
    if (!v) return el.required ? text.required : "";
    if (el.maxLength > 0 && v.length > el.maxLength) return text.tooLong;
    if (el.type === "email" && !emailRe.test(v)) return text.email;
    if (el.name === "website" && !siteRe.test(v)) return text.website;
    return "";
  }

  function show(el, msg) {
    var id = el.id + "-error";
    var box = document.getElementById(id);
    if (!msg) {
      el.removeAttribute("aria-invalid");
      if (box) box.remove();
      el.setAttribute("aria-describedby", (el.getAttribute("aria-describedby") || "").replace(id, "").trim());
      if (!el.getAttribute("aria-describedby")) el.removeAttribute("aria-describedby");
      return;
    }
    if (!box) {
      box = document.createElement("span");
      box.id = id;
      box.className = "field-error";
      if (isGroup(el)) el.appendChild(box);
      else el.insertAdjacentElement("afterend", box);
      var ids = (el.getAttribute("aria-describedby") || "").split(" ").filter(Boolean);
      if (ids.indexOf(id) < 0) ids.push(id);
      el.setAttribute("aria-describedby", ids.join(" "));
    }
    box.textContent = msg;
    el.setAttribute("aria-invalid", "true");
  }

  items.forEach(function (el) {
    // Fields are checked on submit, then again as the visitor fixes them.
    // No check on leaving a field: a message appearing there would move the Send button under the pointer.
    el.addEventListener(isGroup(el) ? "change" : "input", function () {
      if (el.getAttribute("aria-invalid")) show(el, problem(el));
    });
  });

  var button = form.querySelector('button[type="submit"]');
  var label = button ? button.textContent : "";

  form.addEventListener("submit", function (e) {
    var first = null;
    // Check in the order of the page, so the first problem gets the focus.
    items
      .slice()
      .sort(function (a, b) {
        return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
      })
      .forEach(function (el) {
        var msg = problem(el);
        show(el, msg);
        if (msg && !first) first = el;
      });
    if (first) {
      e.preventDefault();
      (isGroup(first) ? first.querySelector("input") : first).focus();
      return;
    }
    fields.forEach(function (el) {
      el.value = el.value.trim();
    });
    if (button) {
      button.disabled = true;
      button.textContent = text.sending;
    }
  });

  // If the visitor comes back with the browser's Back button, the button works again.
  window.addEventListener("pageshow", function () {
    if (button) {
      button.disabled = false;
      button.textContent = label;
    }
  });
})();
