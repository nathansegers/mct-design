// Can be deleted?

var map,
	HQ = {lat: 50.8244565, lng: 3.2502635},
	src = window.location.origin + '/nmct-website/wp-content/themes/nmct/dist/script/nmct-world.kml';
	// src = 'https://developers.google.com/maps/documentation/javascript/examples/kml/westcampus.kml';


console.log( src );

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: HQ,
		zoom: 2,
		styles: [
		  {
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#f5f5f5"
		      }
		    ]
		  },
		  {
		    "elementType": "labels.icon",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#616161"
		      }
		    ]
		  },
		  {
		    "elementType": "labels.text.stroke",
		    "stylers": [
		      {
		        "color": "#f5f5f5"
		      }
		    ]
		  },
		  {
		    "featureType": "administrative",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "administrative.land_parcel",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "administrative.land_parcel",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#bdbdbd"
		      }
		    ]
		  },
		  {
		    "featureType": "administrative.neighborhood",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "poi",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "poi",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#eeeeee"
		      }
		    ]
		  },
		  {
		    "featureType": "poi",
		    "elementType": "labels.text",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "poi",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#757575"
		      }
		    ]
		  },
		  {
		    "featureType": "poi.park",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#e5e5e5"
		      }
		    ]
		  },
		  {
		    "featureType": "poi.park",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#9e9e9e"
		      }
		    ]
		  },
		  {
		    "featureType": "road",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#ffffff"
		      }
		    ]
		  },
		  // {
		    // "featureType": "road",
		    // "elementType": "labels",
		    // "stylers": [
		      // {
		        // "visibility": "off"
		      // }
		    // ]
		  // },
		  {
		    "featureType": "road",
		    "elementType": "labels.icon",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "road.arterial",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#757575"
		      }
		    ]
		  },
		  {
		    "featureType": "road.highway",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#dadada"
		      }
		    ]
		  },
		  {
		    "featureType": "road.highway",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#616161"
		      }
		    ]
		  },
		  {
		    "featureType": "road.local",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#9e9e9e"
		      }
		    ]
		  },
		  {
		    "featureType": "transit",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "transit.line",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#e5e5e5"
		      }
		    ]
		  },
		  {
		    "featureType": "transit.station",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#eeeeee"
		      }
		    ]
		  },
		  {
		    "featureType": "water",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#c9c9c9"
		      }
		    ]
		  },
		  {
		    "featureType": "water",
		    "elementType": "labels.text",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "water",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#9e9e9e"
		      }
		    ]
		  }
		]
	});

	var kmlLayer = new google.maps.KmlLayer({
		url: src,
		// suppressInfoWindows: true,
		preserveViewport: false,
		map: map
	});

	// var marker = new google.maps.Marker({
	// 	position: HQ,
	// 	icon: '../wp-content/themes/nmct/img/favicons/favicon-16.png',
	// 	map: map
	// });
}