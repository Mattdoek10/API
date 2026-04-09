// function initMap(elementId) {
//   if (typeof L === "undefined") {
//     console.error("Leaflet (L) is not loaded.");
//     return null;
//   }

//   const map = L.map(elementId, {
//     zoomControl: true,
//     attributionControl: false,
//     minZoom: 2,
//     worldCopyJump: true,
//     maxBounds: [
//       [-90, -10000],
//       [90, 10000],
//     ],
//     maxBoundsViscosity: 1.0,
//   }).setView([1, 1], 2);

//   L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}', {
// 	minZoom: 0,
// 	maxZoom: 20,
// 	attribution: '&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// 	ext: 'jpg'
//   }).addTo(map);

//   return map;
// }

// document.addEventListener('DOMContentLoaded', () => initMap('map'));

// // var Stadia_AlidadeSatellite = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}', {
// // 	minZoom: 0,
// // 	maxZoom: 20,
// // 	attribution: '&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// // 	ext: 'jpg'
// // });

// Nederland als startpunt
const netherlandsBounds = [
  [50.5, 3.0],  // Zuidwest (onder links)
  [53.7, 7.2]   // Noordoost (boven rechts)
];

const map = L.map('map' , {
  maxBounds: netherlandsBounds,
  maxBoundsViscosity: 1.0
}).setView([52.37, 4.89], 7);

// Kaart 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  minZoom: 2,
	maxZoom: 20, 
}).addTo(map);

map.setMinZoom(7);
