(function(){
	

	var locations = {
	
	1:{	
		name:'nyu',
		lat:40.7300,
		lng:-73.9050,
		msg:'New York University'
		},

	2:{	
		name:'columbia',
		lat:40.8075,
		lng:-73.9619,
		msg:'Columbia University'
		},

	3:{	
		name:'ccny',
		lat:40.8196311,
		lng:-73.9505155,
		msg:'City College of New York'
		}

	};

	var keys = {
		'nyu':1,
		'columbia':2,
		'ccny':3
	}

	var map = L.map('map').setView([40.8075,-73.9619], 16);

	L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-i875mjb7/{z}/{x}/{y}.png', {
	    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	    maxZoom: 18
	}).addTo(map);

	var i,marker;

	for (i =1; i<=3; i++){
		var latlng = L.latLng(locations[i].lat, locations[i].lng);
		marker = new L.marker(latlng)
			.bindPopup(locations[i].msg)
    		.addTo(map);
	}


	$('.option').on('click', function(){
		var id = $(this).attr('data-which');
		var loc = keys[id];
		var place = locations[loc].name;
		var latlng = L.latLng(locations[loc].lat, locations[loc].lng);
		map.setView(latlng, 16,{animate: true, duration: 5.0});
	});


	$('#geo').on('click',function(){
		map.locate({setView:true});
		$('.load').addClass('appear');
		$('.image').addClass('disappear');
		map.on('locationfound',function(){
			$('.load').removeClass('appear');
		$('.image').removeClass('disappear');
		});
	});

}).call(this);