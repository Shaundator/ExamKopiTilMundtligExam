function getTableHead(type){
    switch(type){
      case "delivery":
        return getTableHeadDelivery()
      case "product":
        return getTableHeadProduct()
      case "order":
        return getTableHeadOrder()
      case "van":
        return getTableHeadVan()
    }
  }
  
  function getTableBody(type, object) {
    switch (type) {
      case "delivery":
        console.log("getting delivery body");
        return getTableBodyDelivery(object);
      case "product":
        return getTableBodyProduct(object);
      case "product-view-all":
        return getTableBodyProduct(object);
      case "order":
        return getTableBodyOrder(object);
      case "van":
        return getTableBodyVan(object);
      case "van-view-all-detail":
        return getTableBodyVanDetail(object);
    }
  }