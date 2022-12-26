const vanApi = "http://localhost:8080/api/v1/van";

function getTableHeadVan(){
    return `<thead>
        <tr>
            <th class="van-table-head-id">ID</th>
            <th class="van-table-head-brand">BRAND</th>
            <th class="van-table-head-model">MODEL</th>
            <th class="van-table-head-capacity">CAPACITY</th>
        </tr>
    </thead>
    `
}
function getTableBodyVan(object){
    return `<tr>
        <td>${object.id}</td>
        <td>${object.brand}</td>
        <td>${object.model}</td>
        <td>${object.capacity}</td>
    </tr>
    `
}

// EDIT VAN
function editVanPreview(id, destination){
  fetchObjectById('van', id, destination)
}
function updateVanValue(field, value, id, destination){
  patch('van', field, id, value)
  setTimeout(() => {editVanPreview(id, destination)}, 500)
  updateVanRefreshInput(field)
}
function updateVanValueAll(id, destination){
  patch('van', 'brand', id, document.getElementById('patch-van-brand-input').value)
  patch('van', 'model', id, document.getElementById('patch-van-model-input').value)
  patch('van', 'capacity', id, document.getElementById('patch-van-capacity-input').value)
  setTimeout(() => {editVanPreview(id, destination)}, 500)
  updateVanRefreshInputAll()
}
function updateVanRefreshInputAll(){
  console.log('no field')
  updateVanRefreshInput('brand')
  updateVanRefreshInput('model')
  updateVanRefreshInput('capacity')
}
function updateVanRefreshInput(field){
  document.getElementById('patch-van-' + field + '-input').value = ""
}
// ADD NEW VAN
function createVan(){
  let inputs = document.querySelectorAll('#add-van-input')
  if(validateCreateVan(inputs)){
    post('van', inputs)
  }
  console.log('getting object')
  setTimeout(() => { getAllObject('van', 'add-van-view-all-table'); }, 500)
}
function validateCreateVan(inputs){
  let result = true
  inputs.forEach((input) => {
    if(input.value === "" || input.value === null){
      result = false
    }
  })
  return result
}

// DELETE VAN
function deleteVan(id){
  deleteObject('van', id)
}
function deleteVanPreview(id){
  getObjectById('van', id, 'delete-van-preview-table')
}