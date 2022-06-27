/*
const myApp = Object.create(null)

var mymap = L.map('mapid');

// create the tile layer
var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 19, attribution: osmAttrib});

// start the map in Moratel
mymap.setView(new L.LatLng(46.489727, 6.738277),14);
mymap.addLayer(osm);

// add a marker
var marker2 = L.marker([46.489727, 6.738277]).addTo(mymap);

// and the pop-up
marker2.bindPopup("<b>le chantier est ici</b><br>au dessus du port de Moratel, voir sur <a href='https://www.google.ch/maps/@46.489727,6.738277,150m/data=!3m1!1e3?hl=fr'>google</a>.").openPopup();

/*
var loaded = function(){
    console.clear()
   var myRenderer = L.canvas({ padding: 0.5 });
   // Handler when the DOM is fully loaded
   myApp.map = initmap(lat, long, zoom);
*/ 