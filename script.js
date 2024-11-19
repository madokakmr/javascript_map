// JavaScript

const map = L.map('map').setView([33.67345752177457, 130.44140661378802], 15);
//拡大率は0〜18で設定

// タイルレイヤーを作成し、地図にセットする

// Open Street Map
// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// 国土地理院
// L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg', {
//   maxZoom: 18,
//   attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>',
// }).addTo(map);

// Open Street Map hot
L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'
}).addTo(map);

//アイコン
// const whiteIcon = L.icon({
//   iconUrl: 'ico.png',
//   shadowUrl: 'ico_shadow.png',
// 
// iconSize:     [40, 40], // size of the icon
// shadowSize:   [40, 40], // size of the shadow
// iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
// shadowAnchor: [20, 40],  // the same for the shadow
// popupAnchor:  [0, 42] // point from which the popup should open relative to the iconAnchor
// });

//複数アイコンをまとめて定義
const circleIcon = L.Icon.extend({
  options: {
    shadowUrl: 'images/ico_shadow.png',
    iconSize: [40, 40],
    shadowSize: [40, 40],
    iconAnchor: [20, 40],
    shadowAnchor: [20, 40],
    popupAnchor: [0, -42]
  }
});

const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' }),
  pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' }),
  blueIcon = new circleIcon({ iconUrl: 'images/ico_blue.png' });

L.marker([33.67345752177457, 130.44140661378802], { icon: whiteIcon }).addTo(map)
  .bindPopup('A pretty CSS popup.<br> Easily customizable.<br><img src="images/img01.png" alt="img">');
// .openPopup();
// openPopupの追加で最初から吹き出し表示

L.marker([33.65958150849491, 130.4440143454105], { icon: pinkIcon }).addTo(map)
  .bindPopup('A pretty CSS popup.<br> Easily customizable.');

L.marker([33.6725548181527, 130.4507470363642], { icon: blueIcon }).addTo(map)
  .bindPopup('A pretty CSS popup.<br> Easily customizable.');

// 円の表示 
const circle = L.circle([33.66614576162976, 130.4191584683405], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.3,
  radius: 1000
}).addTo(map);

circle.bindPopup("アイランドシティ");

// 多角形の表示
const polygon = L.polygon([
  [33.65977266889867, 130.44303541560004],
  [33.653218029652436, 130.45362013100328],
  [33.64702506722246, 130.44674045914027]
], {
  color: 'blue',
  fillColor: '#30f',
  fillOpacity: 0.3
}).addTo(map);

// クリック位置の緯度経度表示
const popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("ここは " + e.latlng.toString() + " です")
    .openOn(map);
}

map.on('click', onMapClick);