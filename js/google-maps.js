var map;

var markers = [];
var infoWindows = [];
var directionsDisplay = null;
var directionsSchools = [];
var gsDataArray = [
    {
        'mapId': 0,
        'gsRating': '',
        'gsUrl': ''
    },
    {
        'mapId': 1,
        'gsRating': '',
        'gsUrl': ''
    },
    {
        'mapId': 2,
        'gsRating': '',
        'gsUrl': ''
    },
    {
        'mapId': 3,
        'gsRating': '',
        'gsUrl': ''
    },
    {
        'mapId': 4,
        'gsRating': '',
        'gsUrl': ''
    },
    {
        'mapId': 5,
        'gsRating': '',
        'gsUrl': ''
    },
    {
        'mapId': 6,
        'gsRating': '',
        'gsUrl': ''
    },
    {
        'mapId': 7,
        'gsRating': '',
        'gsUrl': ''
    }]

// Map style from Snazzy Maps (https://snazzymaps.com/style/64899/main-streets-and-transit)
var styles = [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#919191"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#ff0000"
            },
            {
                "saturation": "-98"
            },
            {
                "lightness": "32"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text",
        "stylers": [
            {
                "hue": "#ff0000"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#ee1e1e"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#ebebd7"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels.text",
        "stylers": [
            {
                "saturation": "100"
            },
            {
                "lightness": "-2"
            },
            {
                "weight": "5.50"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "labels",
        "stylers": [
            {
                "color": "#e23535"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "saturation": "-46"
            },
            {
                "lightness": "-6"
            },
            {
                "weight": "0.01"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "saturation": "-100"
            },
            {
                "lightness": "8"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
            {
                "hue": "#ff0000"
            },
            {
                "lightness": "39"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": "66"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text",
        "stylers": [
            {
                "saturation": "6"
            },
            {
                "color": "#a1a1a1"
            },
            {
                "weight": "0.33"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "saturation": "11"
            },
            {
                "lightness": "-40"
            },
            {
                "weight": "0.01"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "saturation": "-20"
            },
            {
                "lightness": "0"
            },
            {
                "weight": "0.01"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#64cfe3"
            },
            {
                "visibility": "simplified"
            }
        ]
    }
];

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.7413549, lng: -73.9980244},
    zoom: 10,
    styles: styles,
    mapTypeControl: false
    });

    // This autocomplete is for use in the search within time entry box.
    var timeAutocomplete = new google.maps.places.Autocomplete(
        document.getElementById('search-within-time-text'));

    // These are the real estate listings that will be shown to the user.
    // Normally we'd have these in a database instead.
    var locations =  [
        {
            nameLong: "The Bronx High School of Science",
            nameShort: "Bronx Science",
            location: {
                "lat" : 40.87766209999999,
                "lng" : -73.89105529999999
            },
            streetAddress: "75 West 205 Street",
            cityStateZip: "Bronx, NY 10468",
            borough: 'bx',
            cutoffScore: "512",
            website: "http://www.bxscience.edu/",
            logo: "images/bronx-science-logo.jpg",
            gsId: "1940",
        },
        {
            nameLong: "The Brooklyn Latin School",
            nameShort: "Brooklyn Latin",
            location: {
                "lat" : 40.7097646,
                "lng" : -73.94451889999999
            },
            streetAddress: "223 Graham Avenue",
            cityStateZip: "Brooklyn, NY 11206",
            borough: 'bk',
            cutoffScore: "479",
            website: "http://www.brooklynlatin.org/",
            logo: "images/brooklyn-latin-logo.png",
            gsId: "8799"
        },
        {
            nameLong: "Brooklyn Technical High School",
            nameShort: "Brooklyn Tech",
            location: {
                "lat" : 40.6889345,
                "lng" : -73.9764419
            },
            streetAddress: "29 Fort Greene Place",
            cityStateZip: "Brooklyn, NY 11217",
            borough: 'bk',
            cutoffScore: "486",
            website: "http://www.bths.edu/",
            logo: "images/brooklyn-tech-logo.png",
            gsId: "1944"
        },
        {
            nameLong: "High School for Mathematics, Science and Engineering at the City College of New York",
            nameShort: "HSMSE at City College",
            location: {
                "lat" : 40.8213947,
                "lng" : -73.94884589999999
            },
            streetAddress: "240 Convent Avenue",
            cityStateZip: "New York, NY 10031",
            borough: 'mh',
            cutoffScore: "504",
            website: "http://www.hsmse.org/",
            logo: "images/hsmse-logo.jpg",
            gsId: "8970"
        },
        {
            nameLong: "High School of American Studies at Lehman College",
            nameShort: "HSAS at Lehman College",
            location: {
                "lat" : 40.8748282,
                "lng" : -73.8952168
            },
            streetAddress: "2925 Goulden Avenue",
            cityStateZip: "Bronx, NY 10468",
            borough: 'bx',
            cutoffScore: "516",
            website: "http://www.hsas-lehman.org/",
            logo: "images/hsas-logo.png",
            gsId: "6960"
        },
        {
            nameLong: "Queens High School for the Sciences at York College",
            nameShort: "Queens Science",
            location: {
                "lat" : 40.7009286,
                "lng" : -73.7983153
            },
            streetAddress: "94-50 159th Street",
            cityStateZip: "Jamaica, NY 11451",
            borough: 'qn',
            cutoffScore: "507",
            website: "http://www.qhss.org/",
            logo: "images/queens-science-logo.jpg",
            gsId: "7067"
        },
        {
            nameLong: "Staten Island Technical High School",
            nameShort: "Staten Island Tech",
            location: {
                "lat" : 40.5681356,
                "lng" : -74.11634409999999
            },
            streetAddress: "485 Clawson Street",
            cityStateZip: "Staten Island, NY 10306",
            borough: 'si',
            cutoffScore: "515",
            website: "http://www.siths.org/",
            logo: "images/staten-island-tech-logo.png",
            gsId: "6349"
        },
        {
            nameLong: "Stuyvesant High School",
            nameShort: "Stuyvesant",
            location: {
                "lat" : 40.7179464,
                "lng" : -74.0139051
            },
            streetAddress: "345 Chambers Street",
            cityStateZip: "New York, NY 10282",
            borough: 'mh',
            cutoffScore: "555",
            website: "http://stuy.enschool.org/",
            logo: "images/stuyvesant-logo.png",
            gsId: "2796"
        }];

    var largeInfowindow = new google.maps.InfoWindow();
    infoWindows.push(largeInfowindow);

    // Style the markers a bit. This will be our listing marker icon.
    var defaultIcon = makeMarkerIcon('0091ff');

    // Create a "highlighted location" marker color for when the user
    // mouses over the marker.
    var highlightedIcon = makeMarkerIcon('FFFF24');

    // The following group uses the location array to create an array of markers on initialize.
    for (var i = 0; i < locations.length; i++) {
      // Get the position from the location array.
      var position = locations[i].location;
      var nameShort = locations[i].nameShort;
      var streetAddress = locations[i].streetAddress;
      var cityStateZip = locations[i].cityStateZip;
      var logo = locations[i].logo;
      var gsId = locations[i].gsId;
      var borough = locations[i].borough;
      // Create a marker per location, and put into markers array.
      var marker = new google.maps.Marker({
        position: position,
        map: map,
        nameShort: nameShort,
        streetAddress: streetAddress,
        cityStateZip: cityStateZip,
        borough: borough,
        logo: logo,
        animation: google.maps.Animation.DROP,
        icon: defaultIcon,
        mapId: i,
        gsRating: '',
        gsUrl: ''
      });
      // Push the marker to our array of markers.
      markers.push(marker);
      // Create an onclick event to open the large infowindow at each marker.
      marker.addListener('click', function() {
        for (var i = 0; i < markers.length; i++) {
            if ( markers[i] !== this ) {
                markers[i].setIcon(defaultIcon);
            }
        }
        populateInfoWindow(this, largeInfowindow);
      });
      // Two event listeners - one for mouseover, one for mouseout,
      // to change the colors back and forth.
      marker.addListener('mouseover', function() {
        this.setIcon(highlightedIcon);
      });
      marker.addListener('mouseout', function() {
        this.setIcon(defaultIcon);
      });
    }
}

// Updates markers with GreatSchools API results
function loadGs(gsData) {
    var mapId = gsData.mapId;
    var gsRating = gsData.gsRating;
    var gsUrl = gsData.gsUrl;
    gsDataArray[mapId].gsRating = gsRating;
    gsDataArray[mapId].gsUrl = gsUrl;
}


// This function populates the infowindow when the marker is clicked. We'll only allow
// one infowindow which will open at the marker that is clicked, and populate based
// on that markers position.
function populateInfoWindow(marker, infowindow) {
    // Check to make sure the infowindow is not already opened on this marker.
    if (infowindow.marker != marker) {
      // Close other infowindows
      closeAllInfoWindows();
      // Clear the infowindow content.
      infowindow.setContent('');
      infowindow.marker = marker;
      infowindow.setContent('<div class="infoWindow"><span><img class="infoWindowLogo" src="' + marker.logo + '" alt="' + marker.nameShort + '"></span><span><strong>' + marker.nameShort + '</strong><br><em>' + marker.streetAddress + '</em><br><em>' + marker.cityStateZip + '</em><br><u class"text-success>' + gsDataArray[marker.mapId].gsRating + '</u></span></div>');
      // Make sure the marker property is cleared if the infowindow is closed.
      infowindow.addListener('closeclick', function() {
        var defaultIcon = makeMarkerIcon('0091ff');
        infowindow.marker = null;
        marker.setIcon(defaultIcon);
      });
      // Open the infowindow on the correct marker.
      infowindow.open(map, marker);
    }
}

// Close all existing infowindows
function closeAllInfoWindows() {
  for (var i=0;i<infoWindows.length;i++) {
     infoWindows[i].close();
  }
}

// Set default icon
function setDefaultIcon() {
    var defaultIcon = makeMarkerIcon('0091ff');
    for (var i=0;i<markers.length;i++) {
        markers[i].setIcon(defaultIcon);
    }
}

// This function shows the s
function showSelectedSchool(item) {
    closeAllInfoWindows();
    setDefaultIcon();
    var mapId = $(item).attr("id");
    var schoolName = markers[mapId].nameShort;
    var defaultIcon = makeMarkerIcon('0091ff');
    var highlightedIcon = makeMarkerIcon('FFFF24');
    var largeInfowindow = new google.maps.InfoWindow();
    infoWindows.push(largeInfowindow);
    markers[mapId].setMap(map);
    markers[mapId].setIcon(highlightedIcon);
    markers[mapId].setAnimation(google.maps.Animation.DROP);
    populateInfoWindow(markers[mapId], largeInfowindow);
}

// This function shows schools by borough
function showByBorough(item) {
    var borough = $(item).attr("id");
    for (var i = 0; i < markers.length; i++) {
        if ( markers[i].borough === borough ) {
            markers[i].setMap(map);
            markers[i].setAnimation(google.maps.Animation.DROP);
        } else {
            markers[i].setMap(null);
        }
    }
}


// This function will loop through the markers array and display them all.
function showSchools() {
    // Extend the boundaries of the map for each marker and display the marker & display names of shown schools in list
    var bounds = new google.maps.LatLngBounds();
    var defaultIcon = makeMarkerIcon('0091ff');
    if ( directionsDisplay !== null ) {
        directionsDisplay.setMap(null);
    }
    closeAllInfoWindows();
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
      markers[i].setIcon(defaultIcon);
      markers[i].setAnimation(google.maps.Animation.DROP);
      bounds.extend(markers[i].position);
    }
    map.fitBounds(bounds);
}

// This function will loop through the listings and hide them all.
function hideMarkers() {
    if ( directionsDisplay !== null ) {
        directionsDisplay.setMap(null);
    }
    closeAllInfoWindows();
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
}

// This function takes in a COLOR, and then creates a new marker
// icon of that color. The icon will be 21 px wide by 34 high, have an origin
// of 0, 0 and be anchored at 10, 34).
function makeMarkerIcon(markerColor) {
    var markerImage = new google.maps.MarkerImage(
      'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
      '|40|_|%E2%80%A2',
      new google.maps.Size(21, 34),
      new google.maps.Point(0, 0),
      new google.maps.Point(10, 34),
      new google.maps.Size(21,34));
    return markerImage;
}

// This function allows the user to input a desired travel time, in
// minutes, and a travel mode, and a location - and only show the listings
// that are within that travel time (via that travel mode) of the location
function searchWithinTime() {
    // Initialize the distance matrix service.
    var distanceMatrixService = new google.maps.DistanceMatrixService();
    var address = document.getElementById('search-within-time-text').value;
    // Check to make sure the place entered isn't blank.
    if (address === '') {
      window.alert('You must enter an address.');
    } else {
      hideMarkers(markers);
      // Use the distance matrix service to calculate the duration of the
      // routes between all our markers, and the destination address entered
      // by the user. Then put all the origins into an origin matrix.
      var origins = [];
      for (var i = 0; i < markers.length; i++) {
        origins[i] = markers[i].position;
      }
      var destination = address;
      var mode = document.getElementById('mode').value;
      // Now that both the origins and destination are defined, get all the
      // info for the distances between them.
      distanceMatrixService.getDistanceMatrix({
        origins: origins,
        destinations: [destination],
        travelMode: google.maps.TravelMode[mode],
        unitSystem: google.maps.UnitSystem.IMPERIAL,
      }, function(response, status) {
        if (status !== google.maps.DistanceMatrixStatus.OK) {
          window.alert('Error was: ' + status);
        } else {
          displayMarkersWithinTime(response);
        }
      });
    }
}

// This function will go through each of the results, and,
// if the distance is LESS than the value in the picker, show it on the map.
function displayMarkersWithinTime(response) {
    closeAllInfoWindows();
    var maxDuration = document.getElementById('max-duration').value;
    var origins = response.originAddresses;
    var destinations = response.destinationAddresses;
    var bounds = new google.maps.LatLngBounds();
    // Parse through the results, and get the distance and duration of each.
    // Because there might be  multiple origins and destinations we have a nested loop
    // Then, make sure at least 1 result was found.
    var atLeastOne = false;
    var directionsSchools = [];
    for (var i = 0; i < origins.length; i++) {
      var results = response.rows[i].elements;
      for (var j = 0; j < results.length; j++) {
        var element = results[j];
        if (element.status === "OK") {
          // The distance is returned in feet, but the TEXT is in miles. If we wanted to switch
          // the function to show markers within a user-entered DISTANCE, we would need the
          // value for distance, but for now we only need the text.
          var distanceText = element.distance.text;
          // Duration value is given in seconds so we make it MINUTES. We need both the value
          // and the text.
          var duration = element.duration.value / 60;
          var durationText = element.duration.text;

          if (duration <= maxDuration) {
            //the origin [i] should = the markers[i]
            markers[i].setMap(map);
            directionsSchools.push(markers[i].mapId);
            atLeastOne = true;
            bounds.extend(markers[i].position);

            // Create a mini infowindow to open immediately and contain the
            // distance and duration
            infowindow = new google.maps.InfoWindow({
              content: markers[i].nameShort + '<br>' + durationText + ' away, ' + distanceText +
                '<div><input type=\"button\" class=\"dark-btn\" value=\"View Route\" onclick =' +
                '\"displayDirections(&quot;' + origins[i] + '&quot;);\"></input></div>'
            });
            infowindow.open(map, markers[i]);
            infoWindows.push(infowindow);

            // Put this in so that this small window closes if the user clicks
            // the marker, when the big infowindow opens
            markers[i].infowindow = infowindow;
            google.maps.event.addListener(markers[i], 'click', function() {
              this.infowindow.close();
            });
          }
        }
      }
      map.fitBounds(bounds);

    }
    if (!atLeastOne) {
        window.alert('We could not find any locations within that distance!');
    }
    sendDirections(directionsSchools);
}


// This function is in response to the user selecting "show route" on one
// of the markers within the calculated distance. This will display the route
// on the map.
function displayDirections(origin) {
    hideMarkers(markers);
    var directionsService = new google.maps.DirectionsService();
    // Get the destination address from the user entered value.
    var destinationAddress =
        document.getElementById('search-within-time-text').value;
    // Get mode again from the user entered value.
    var mode = document.getElementById('mode').value;
    directionsService.route({
      // The origin is the passed in marker's position.
      origin: origin,
      // The destination is user entered address.
      destination: destinationAddress,
      travelMode: google.maps.TravelMode[mode]
    }, function(response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsDisplay = new google.maps.DirectionsRenderer({
          map: map,
          directions: response,
          draggable: true,
          polylineOptions: {
            strokeColor: 'green'
          }
        });
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
}

function googleError() {
    $('#options-box').html('<h2 class="text-center text-danger">Unable to retrieve data from Google Maps</h2>');
}
