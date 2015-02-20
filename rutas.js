var map;

function inicio(){

map=L.map('map').setView([37.048913, -2.741784],8);

var terrain=L.tileLayer('https://{s}.tiles.mapbox.com/v4/{mapId}/{z}/{x}/{y}.png?access_token={token}', {
    attribution: '<a href="https://www.mapbox.com/about/maps/" target="_blank">&copy; Mapbox &copy; OpenStreetMap</a>',
    subdomains: ['a','b','c','d'],
    mapId: 'southmapping.k1cjibk0',
    token: 'pk.eyJ1Ijoic291dGhtYXBwaW5nIiwiYSI6IkdsNWJpUzQifQ.wGioWqTZt28vefHwFu1hQA'}).addTo(map);

var satellite=L.tileLayer('https://{s}.tiles.mapbox.com/v4/{mapId}/{z}/{x}/{y}.png?access_token={token}', {
    attribution: '<a href="https://www.mapbox.com/about/maps/" target="_blank">&copy; Mapbox &copy; OpenStreetMap</a>',
    subdomains: ['a','b','c','d'],
    mapId: 'southmapping.k1egc4nh',
    token: 'pk.eyJ1Ijoic291dGhtYXBwaW5nIiwiYSI6IkdsNWJpUzQifQ.wGioWqTZt28vefHwFu1hQA'}).addTo(map);

/*var pnoa = L.tileLayer.wms("http://www.ign.es/wms-inspire/pnoa-ma?SERVICE=WMS&", {
    layers: 'OI.OrthoimageCoverage',
    format: 'image/png',
    transparent: true,
    attribution: "Cedido por © Instituto Geográfico Nacional"
}).addTo(map);*/


//estilos
var estilo_al={"color":"#1AD3AA","weight": 3, "opacity":0.8};
var estilo_gr={"color":"#FF5A00","weight": 3, "opacity":0.8};

//funcion para popup
function createPopup(feature, layer) {
                      if (feature.properties && feature.properties.name) {
                         layer.bindPopup("<center><b>"+feature.properties.name+"</center></b></br><img src="+feature.properties.img+" width=300px height=200px></br><b>Distancia: </b>"+feature.properties.dist+" Km </br><b>Desnivel Acumulado: </b>"+feature.properties.desn+" m</br><b>Dificultad: </b>"+feature.properties.dif+"</br><b>Tiempo: </b>"+feature.properties.time,{className:"custom-popup"});
                      }
                     }
//capas geojson
var alme1=L.geoJson(al01, {style:estilo_al,
		onEachFeature:createPopup});
var alme2=L.geoJson(al02, {style:estilo_al,
		onEachFeature:createPopup});
var alme3=L.geoJson(al03, {style:estilo_al,
		onEachFeature:createPopup});
var alme4=L.geoJson(al04, {style:estilo_al,
		onEachFeature:createPopup});
var alme5=L.geoJson(al05, {style:estilo_al,
		onEachFeature:createPopup});

var gr1=L.geoJson(gr01, {style:estilo_gr,
		onEachFeature:createPopup});
var gr2=L.geoJson(gr02, {style:estilo_gr,
		onEachFeature:createPopup});
var gr4=L.geoJson(gr04, {style:estilo_gr,
		onEachFeature:createPopup});
var gr5=L.geoJson(gr05, {style:estilo_gr,
		onEachFeature:createPopup});
var gr6=L.geoJson(gr06, {style:estilo_gr,
		onEachFeature:createPopup});

var almeria=L.featureGroup([alme1, alme2, alme3, alme4, alme5]).addTo(map);
var granada=L.featureGroup([gr1, gr2, gr4, gr5, gr6]).addTo(map);


//Control de capas
var base={"Relieve":terrain, "Sat&eacute;lite":satellite};
var overlay={/*"PNOA":pnoa, */"Rutas de Almer&iacute;a":almeria, "Rutas de Granada":granada};
L.control.layers(base, overlay).addTo(map);

//FIN INICIO()//
}

//Botones de zoom
function zoom_granada(){
map.setView([37.05, -3.20],10);
}

function zoom_almeria(){
map.setView([36.93, -2.42],10);
}


