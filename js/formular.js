document.addEventListener("DOMContentLoaded", () => {
  const formularArtikel = document.querySelector("#formular");

  const alleFormulare = formularArtikel.querySelectorAll("form");

  alleFormulare.forEach((form) => {
    const submitBtn = form.querySelector('input[type="submit"]');
    const resetBtn = form.querySelector('input[type="reset"]');
    const fields = form.querySelectorAll("input, select, textarea");

    submitBtn.addEventListener("click", (e) => {
      e.preventDefault();
      entferneMeldungen(form);
      console.log("checkValidity:", form.checkValidity());

      if (form.checkValidity()) {
        zeigeMeldung(form, "Erfolgreich abgesendet!", "erfolg");
        form.reset(); // Optional: Formular nach Erfolg leeren
      } else {
        fields.forEach((feld) => {
          if (!feld.checkValidity()) {
            zeigeFehlermeldung(form, feld);
          }
        });
      }
    });

    resetBtn.addEventListener("click", () => {
      entferneMeldungen(form);
    });
  });

  function zeigeMeldung(form, text, typ = "fehler") {
    const p = document.createElement("p");
    p.textContent = text;
    p.classList.add("meldung", typ);
    form.appendChild(p);
  }

  function zeigeFehlermeldung(form, feld) {
    let nachricht = "";
    if (feld.validity.valueMissing) {
      nachricht = `${feld.name} ist erforderlich.`;
    }
    zeigeMeldung(form, nachricht, "fehler");
  }

  function entferneMeldungen(form) {
    const meldungen = form.querySelectorAll(".meldung");
    meldungen.forEach((m) => m.remove());
  }
});