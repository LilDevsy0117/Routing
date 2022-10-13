const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');

toggleBtn.addEventListener('click', () => {
	menu.classList.toggle('active');
});

$('#lang').selectpicker();

//---------------------openlayer----------------

$(document).ready(function() {
	init();
});

function init() {

	// map 생성
	var map1 = new ol.Map({
		layers: [
			new ol.layer.Tile({
				source: new ol.source.OSM()     // OpenStreetMap 레이어
			})
		],
		target: 'map1',                          // Map 생성할 div id
		view: new ol.View({
			center: [54200000, 4300000],        // 초기 지도 위치 좌표
			zoom: 6                             // 초기 지도 위치 줌레벨
		})
	});

	var map2 = new ol.Map({
		layers: [
			new ol.layer.Tile({
				source: new ol.source.OSM()     // OpenStreetMap 레이어
			})
		],
		target: 'map2',                          // Map 생성할 div id
		view: new ol.View({
			center: [54200000, 4300000],        // 초기 지도 위치 좌표
			zoom: 6                             // 초기 지도 위치 줌레벨
		})
	});
	// 레이어 추가
	/*
	var osmLayer = new ol.layer.Tile({
		source: new ol.source.OSM()
	});
	map.addLayer(osmLayer);
	*/

}

