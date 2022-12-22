// Post
function post(type, form, input) {
  postForm(type, generateForm(type, input));
}

function generateForm(type, input) {
  switch (type) {
    case "delivery":
      var date = input[0].value;
      var warehouse = input[1].value;
      var destination = input[2].value;
      const dataDeliveryObject = {
        deliveryDate: date,
        fromWarehouse: warehouse,
        destination: destination,
      };
      return dataDeliveryObject;
    case "product":
      var name = input[0].value;
      var price = input[1].value;
      var weight = input[2].value;
      const dataProductObject = {
        name: name,
        price: price,
        weight: weight,
      };
      return dataProductObject;
    case "order":
      var quantity = input[0].value;
      const dataOrderObject = {
        quantity: quantity,
      };
      return dataOrderObject;
    case "van":
      var brand = input[0].value;
      var model = input[1].value;
      var capacity = input[2].value;
      const dataVanObject = {
        brand: brand,
        model: model,
        capacity: capacity,
      };
      return dataVanObject;
  }
}
function getProductObject(id) {
  fetch(getLink("product") + "/" + id)
    .then((response) => response.json())
    .then((object) => {
      return object;
    });
}

async function postForm(type, formObject) {
  let response = await fetch(getLink(type), {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formObject),
  });
}