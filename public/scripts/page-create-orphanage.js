//create map
const map = L.map('mapid').setView([-18.2059853,-45.2354281], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map);

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
})
let marker
//create and add marker
map.on("click", (event) =>{
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    document.querySelector("[name=lat]").value = lat;
    document.querySelector("[name=lng]").value = lng;
    //remove icon
    marker && map.removeLayer(marker)
    // add icon layer
    marker = L.marker([lat, lng], {icon}).addTo(map)
})
//adicionar campo de fotos
function addPhotoField(){
    //pegar o container de fotos #images
    const container = document.querySelector("#images")
    //pegar para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll(".new-upload")
    //clonar o último campo
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    //verificar se está vazio e se estiver não adicionar
    const input = newFieldContainer.children[0]
    if(input.value == ""){
        return
    }
    //limpar o campo 
    input.value = ""
    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}
//deletar/limpar campo de fotos
function deleteField(event){
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll(".new-upload")
    if(fieldsContainer.length < 2){
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }
    // deletar o campo
    span.parentNode.remove()
}
//select yes or no
function toggleSelect(event){
    //retirar a class .active dos botões
    document.querySelectorAll(".button-select button").forEach(button => button.classList.remove("active"))
    //colocar .active no novo botão clicado
    const button = event.currentTarget
    button.classList.add("active")
    //atualizar meu input hidden com o valor selecionado
    const input = document.querySelector("[name='open_on_weekends']")
    //verificar se é sim ou não
    input.value = button.dataset.value


}