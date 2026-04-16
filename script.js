let total = 0;

function addItemToOrder(name, price) {
  total = total + price;
  console.log(name + " wurde für " + price + " € der Bestellung hinzugefügt");
  console.log("Der Gesamtpreis beträgt: " + total + " €");

  const order = document.createElement("p");
  order.innerHTML = `<p class="order-item">${name} - ${price} €</p>`;
  document.getElementById("orders").appendChild(order);
  refreshAmmount();
}

function reset() {
  total = 0;
  console.log(
    "Die Bestellung wurde zurückgesetzt. Der Gesamtpreis beträgt: " +
      total +
      " €",
  );

  const orders = document.getElementById("orders");
  orders.innerHTML = "";
  refreshAmmount();
}

function booking() {
  alert(
    "Vielen Dank für Ihre Bestellung! Der gesamte Betrag von " +
      total +
      " € wird an der Kasse fällig.",
  );
  (reset(), refreshAmmount());
}

function delivery() {
  if (total < 20) {
    alert(
      "Der Mindestbestellwert für eine Lieferung beträgt 20 €. Bitte fügen Sie weitere Artikel zu Ihrer Bestellung hinzu.",
    );
  } else {
    total = total + 2.5;
    alert(
      "Vielen Dank für Ihre Bestellung! Ihre Bestellung wird zur Lieferung bearbeitet. Der gesamte Betrag von " +
        total +
        " € inkl. 2,5 € Liefergebühr,  wird bei Lieferung fällig.",
    );
    (reset(), refreshAmmount());
  }
}

function refreshAmmount() {
  const element = document.getElementById("total-price");
  element.innerHTML = total + " €";
}
