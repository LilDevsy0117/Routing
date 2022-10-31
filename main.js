const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');

toggleBtn.addEventListener('click', () => {
	menu.classList.toggle('active');
});

$('#lang').selectpicker();


function routing(){
	console.log($("#start option:selected").val());
	var selected = [];
	for(var option of document.getElementById('via').options){
		if(option.selected){
			selected.push(option.value);
		}
	}
	console.log(selected);
	var selected = [];
	for(var option of document.getElementById('cross').options){
		if(option.selected){
			selected.push(option.value);
		}
	}
	console.log(selected);
	
	console.log($("#weight option:selected").val());
}







//---------------------openlayer----------------

$(document).ready(function() {
	init();
});

function init() {
	// map 생성
	var map = new ol.Map({
		layers: [
			new ol.layer.Tile({
				source: new ol.source.OSM()     // OpenStreetMap 레이어
			})
		],
		target: 'map',                          // Map 생성할 div id
		view: new ol.View({
			center: [54300000, 4350000],        // 초기 지도 위치 좌표
			zoom: 7.25                           // 초기 지도 위치 줌레벨
		})
	});
	// 레이어 추가
	
	var osmLayer = new ol.layer.Tile({
		source: new ol.source.OSM()
	});
	map.addLayer(osmLayer);
	
}

