var map = L.map('map').setView([-24.126702, -51.152344], 5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//marker
//MG
var marker = L.marker([-18.812718, -44.428711]).addTo(map);



//AP
var calcoene = L.marker([2.496339439308288, -50.94344850528144]).addTo(map); //Calçoene

var macapa = L.marker([0.040811768452351745, -51.05430894201819]).addTo(map); //Macapá

var oiapoque = L.marker([3.8428602276177712, -51.834070558573885]).addTo(map); //Oiapoque

var laranjal = L.marker([-0.8397531227949967, -52.519426126956006]).addTo(map); //Laranjal do Jari

var porto = L.marker([0.7080503266012939, -51.41030412977548]).addTo(map); //Porto Grande

//popup

//AP
calcoene.bindPopup(`<b>Calçoene, AP</b>
    <p>Área territorial: 14.117,297 km²</p>
    <p>População residente: 10.612 pessoas[IBGE 2022]</p>
    <p>Coordenadas geográficas: 2.496339439308288, -50.94344850528144 </p>
    <p>Prefeitura: <a href="https://calcoene.portal.ap.gov.br/">Prefeitura de Calçoene</a> </p>`);

macapa.bindPopup(`<b>Macapá, AP</b>
    <p>Área territorial: 6.563,849 km²</p>
    <p>População residente: 442.933 pessoas[IBGE 2022]</p>
    <p>Coordenadas geográficas: 0.040811768452351745, -51.05430894201819 </p>
    <p>Prefeitura: <a href="https://macapa.ap.gov.br/">Prefeitura de Macapá</a> </p>`);

oiapoque.bindPopup(`<b>Oiapoque, AP</b>
    <p>Área territorial: 23.034,392 km²</p>
    <p>População residente: 27.482 pessoas[IBGE 2022]</p>
    <p>Coordenadas geográficas: 3.8428602276177712, -51.834070558573885 </p>
    <p>Prefeitura: <a href="http://www.oiapoque.ap.gov.br/">Prefeitura de Oiapoque</a> </p>`);

laranjal.bindPopup(`<b>Laranjal do Jari, AP</b>
    <p>Área territorial: 30.782,998 km²</p>
    <p>População residente: 35.114 pessoas[IBGE 2022]</p>
    <p>Coordenadas geográficas: -0.8397531227949967, -52.519426126956006 </p>
    <p>Prefeitura: <a href="http://www.laranjaldojari.ap.gov.br/">Prefeitura de Laranjal do Jari</a> </p>`);
       
porto.bindPopup(`<b>Porto Grande, AP</b>
    <p>Área territorial: 4.428,013 km²</p>
    <p>População residente: 17.848 pessoas[IBGE 2022]</p>
    <p>Coordenadas geográficas: 0.7080503266012939, -51.41030412977548 </p>
    <p>Prefeitura: <a href="http://www.portogrande.ap.gov.br/">Prefeitura de Porto Grande</a> </p>`);
       

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
