let total = 0;

function addItemToOrder(name, price) {
  total = total + price;
  console.log(name + " wurde für " + price + " € der Bestellung hinzugefügt");
  console.log("Der Gesamtpreis beträgt: " + total + " €");

  const order = document.createElement("p");
  order.innerHTML =
    name + ": " + price + " €" + "<br />" + "<br />" + "<hr />" + "<br />";
  document.getElementById("orders").appendChild(order);

  var element = document.getElementById("total-price");
  element.innerHTML = total + " €";
}

function reset() {
  window.location.reload();
}

function booking() {
  alert(
    "Vielen Dank für Ihre Bestellung! Ihre Bestellung wird zum Verzehr vor Ort bearbeitet. Der gesamte Betrag von " +
      total +
      " € wird an der Kasse fällig.",
  );
  reset();
}

function delivery() {
  if (total < 20) {
    alert(
      "Der Mindestbestellwert für eine Lieferung beträgt 20 €. Bitte fügen Sie weitere Artikel zu Ihrer Bestellung hinzu.",
    );
  } else {
    alert(
      "Vielen Dank für Ihre Bestellung! Ihre Bestellung wird zur Lieferung bearbeitet. Der gesamte Betrag von " +
        total +
        " € wird bei Lieferung fällig.",
    );
    reset();
  }
}
