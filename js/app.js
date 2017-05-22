var initialSchools = [
    {
        nameLong: "The Bronx High School of Science",
        nameShort: "Bronx Science",
        location: {
            "lat" : 40.87766209999999,
            "lng" : -73.89105529999999
        },
        streetAddress: "75 West 205 Street",
        borough: "Bronx",
        cityStateZip: "Bronx, NY 10468",
        cutoffScore: "512",
        website: "http://www.bxscience.edu/",
        logo: "images/bronx-science-logo.jpg",
        mapId: 0,
        visible: true,
        gsId: "1940",
        gsStatus: "",
        gsErrMessage: "",
        gsRating: "",
        gsProfileMessage: "",
        gsUrl: ""
    },
    {
        nameLong: "The Brooklyn Latin School",
        nameShort: "Brooklyn Latin",
        location: {
            "lat" : 40.7097646,
            "lng" : -73.94451889999999
        },
        streetAddress: "223 Graham Avenue",
        borough: "Brooklyn",
        cityStateZip: "Brooklyn, NY 11206",
        cutoffScore: "479",
        website: "http://www.brooklynlatin.org/",
        logo: "images/brooklyn-latin-logo.png",
        mapId: 1,
        visible: true,
        gsId: "8799",
        gsStatus: "",
        gsErrMessage: "",
        gsRating: "",
        gsProfileMessage: "",
        gsUrl: ""
    },
    {
        nameLong: "Brooklyn Technical High School",
        nameShort: "Brooklyn Tech",
        location: {
            "lat" : 40.6889345,
            "lng" : -73.9764419
        },
        streetAddress: "29 Fort Greene Place",
        borough: "Brooklyn",
        cityStateZip: "Brooklyn, NY 11217",
        cutoffScore: "486",
        website: "http://www.bths.edu/",
        logo: "images/brooklyn-tech-logo.png",
        mapId: 2,
        visible: true,
        gsId: "1944",
        gsStatus: "",
        gsErrMessage: "",
        gsRating: "",
        gsProfileMessage: "",
        gsUrl: ""
    },
    {
        nameLong: "High School for Mathematics, Science and Engineering at the City College of New York",
        nameShort: "HSMSE at City College",
        location: {
            "lat" : 40.8213947,
            "lng" : -73.94884589999999
        },
        streetAddress: "240 Convent Avenue",
        borough: "Manhattan",
        cityStateZip: "New York, NY 10031",
        cutoffScore: "504",
        website: "http://www.hsmse.org/",
        logo: "images/hsmse-logo.jpg",
        mapId: 3,
        visible: true,
        gsId: "8970",
        gsStatus: "",
        gsErrMessage: "",
        gsRating: "",
        gsProfileMessage: "",
        gsUrl: ""
    },
    {
        nameLong: "High School of American Studies at Lehman College",
        nameShort: "HSAS at Lehman College",
        location: {
            "lat" : 40.8748282,
            "lng" : -73.8952168
        },
        streetAddress: "2925 Goulden Avenue",
        borough: "Bronx",
        cityStateZip: "Bronx, NY 10468",
        cutoffScore: "516",
        website: "http://www.hsas-lehman.org/",
        logo: "images/hsas-logo.png",
        mapId: 4,
        visible: true,
        gsId: "6960",
        gsStatus: "",
        gsErrMessage: "",
        gsRating: "",
        gsProfileMessage: "",
        gsUrl: ""
    },
    {
        nameLong: "Queens High School for the Sciences at York College",
        nameShort: "Queens Science",
        location: {
            "lat" : 40.7009286,
            "lng" : -73.7983153
        },
        streetAddress: "94-50 159th Street",
        borough: "Queens",
        cityStateZip: "Jamaica, NY 11451",
        cutoffScore: "507",
        website: "http://www.qhss.org/",
        logo: "images/queens-science-logo.jpg",
        mapId: 5,
        visible: true,
        gsId: "7067",
        gsStatus: "",
        gsErrMessage: "",
        gsRating: "",
        gsProfileMessage: "",
        gsUrl: ""
    },
    {
        nameLong: "Staten Island Technical High School",
        nameShort: "Staten Island Tech",
        location: {
            "lat" : 40.5681356,
            "lng" : -74.11634409999999
        },
        streetAddress: "485 Clawson Street",
        borough: "Staten Island",
        cityStateZip: "Staten Island, NY 10306",
        cutoffScore: "515",
        website: "http://www.siths.org/",
        logo: "images/staten-island-tech-logo.png",
        mapId: 6,
        visible: true,
        gsId: "6349",
        gsStatus: "",
        gsErrMessage: "",
        gsRating: "",
        gsProfileMessage: "",
        gsUrl: ""
    },
    {
        nameLong: "Stuyvesant High School",
        nameShort: "Stuyvesant",
        location: {
            "lat" : 40.7179464,
            "lng" : -74.0139051
        },
        streetAddress: "345 Chambers Street,",
        borough: "Manhattan",
        cityStateZip: "New York, NY 10282",
        cutoffScore: "555",
        website: "http://stuy.enschool.org/",
        logo: "images/stuyvesant-logo.png",
        mapId: 7,
        visible: true,
        gsId: "2796",
        gsStatus: "",
        gsErrMessage: "",
        gsRating: "",
        gsProfileMessage: "",
        gsUrl: ""
    }];

var directions = [];

// Update schools within directions matrix from Google Maps API
function sendDirections(directionsSchools){
    directions = directionsSchools;
}

var School = function(data) {
    this.nameLong = data.nameLong;
    this.nameShort = data.nameShort;
    this.streetAddress = data.streetAddress;
    this.cityStateZip = data.cityStateZip;
    this.borough = data.borough;
    this.cutoffScore = data.cutoffScore;
    this.website = data.website;
    this.logo = data.logo;
    this.mapId = data.mapId;
    this.visible = ko.observable(data.visible);
    this.gsId = data.gsId;
    this.gsStatus = ko.observable(data.gsStatus);
    this.gsErrMessage = ko.observable(data.gsErrMessage);
    this.gsRating = ko.observable(data.gsRating);
    this.gsProfileMessage = ko.observable(data.gsProfileMessage);
    this.gsUrl = ko.observable(data.gsUrl);
};


function ViewModel() {
    var self = this;

    self.schoolList = ko.observableArray([]);

    initialSchools.forEach(function(schoolItem) {
        self.schoolList.push( new School(schoolItem) );
    });

    this.visibleSchools = ko.observable(true);

    // Show Bronx schools only
    this.showBronx = function(clickedBorough) {
        self.schoolList().forEach( function(school) {
            if ( school.borough !== 'Bronx' ) {
                school.visible(false);
            } else {
                school.visible(true);
            }
        });
        self.visibleSchools(true);
        closeAllInfoWindows();
        setDefaultIcon();
    };

    // Show Brooklyn schools only
    this.showBrooklyn = function(clickedBorough) {
        self.schoolList().forEach( function(school) {
            if ( school.borough !== 'Brooklyn' ) {
                school.visible(false);
            } else {
                school.visible(true);
            }
        });
        self.visibleSchools(true);
        closeAllInfoWindows();
        setDefaultIcon();
    };

    // Show Manhattan schools only
    this.showManhattan = function(clickedBorough) {
        self.schoolList().forEach( function(school) {
            if ( school.borough !== 'Manhattan' ) {
                school.visible(false);
            } else {
                school.visible(true);
            }
        });
        self.visibleSchools(true);
        closeAllInfoWindows();
        setDefaultIcon();
    };

    // Show Queens schools only
    this.showQueens = function(clickedBorough) {
        self.schoolList().forEach( function(school) {
            if ( school.borough !== 'Queens' ) {
                school.visible(false);
            } else {
                school.visible(true);
            }
        });
        self.visibleSchools(true);
        closeAllInfoWindows();
        setDefaultIcon();
    };

    // Show Staten Island schools only
    this.showStatenIsland = function(clickedBorough) {
        self.schoolList().forEach( function(school) {
            if ( school.borough !== 'Staten Island' ) {
                school.visible(false);
            } else {
                school.visible(true);
            }
        });
        self.visibleSchools(true);
        closeAllInfoWindows();
        setDefaultIcon();
    };

    // Show all schools
    this.showAllSchools = function(clickedBorough) {
        self.schoolList().forEach( function(school) {
            school.visible(true);
        });
        self.visibleSchools(true);
        closeAllInfoWindows();
        showSchools();
        setDefaultIcon();
    };

    // Hide all schools
    this.hideAllSchools = function(clickedBorough) {
        self.schoolList().forEach( function(school) {
            school.visible(false);
        });
        self.visibleSchools(false);
        closeAllInfoWindows();
        hideMarkers();
        setDefaultIcon();
    };

    // Load GreatSchools.org API Results
    self.schoolList().forEach( function(school) {

        var gsId = school.gsId;

        // Build Great Schools API request URL
        var url = "http://api.greatschools.org/schools/NY/";
        var gsKey = "?key=6i8inihoymrgg9dvcmwzfqxx";
        url += gsId;
        url += gsKey;

        var err = {
            'gsStatus': 'err',
            'gsErrMessage': 'Failed to connect to GreatSchools.org',
            'gsRating': '',
            'gsProfileMessage': '',
            'gsUrl': '#'
        };

        // Generate YQL Query for Great Schools API request
        var yqlURL = [
            "http://query.yahooapis.com/v1/public/yql",
            "?q=" + encodeURIComponent("select * from xml where url='" + url + "'"),
            "&format=xml&callback=?"
        ].join("");

        // Ajax request of YQL results
        $.ajax({
            url: yqlURL,
            dataType: "jsonp",
        }).done( function(response){
                xmlContent = $(response.results[0]);
                var rating = $(xmlContent).find("gsRating").text();
                var gsUrl = $(xmlContent).find("overviewLink").text();

                // If GreatSchols API request was not successful
                if ( rating === '' || gsUrl === '' ) {

                    console.log('Returned error from YQL query on GreatSchools.org request for ' + school.nameShort);
                    school.gsStatus(err.gsStatus);
                    school.gsErrMessage(err.gsErrMessage);
                    school.gsRating(err.gsRating);
                    school.gsProfileMessage(err.gsProfileMessage);
                    school.gsUrl(err.gsUrl);

                    var schoolJS = ko.toJS(school);
                    loadGs(schoolJS);

                // If GreatSchools request successful
                } else {

                    var gsRating = 'GreatSchools Rating: ' + rating + ' / 10';
                    school.gsStatus('OK');
                    school.gsErrMessage('');
                    school.gsRating(gsRating);
                    school.gsProfileMessage('GreatSchools.org School Overview');
                    school.gsUrl(gsUrl);

                    var schoolJS = ko.toJS(school);
                    loadGs(schoolJS);

                }
        }).fail( function() {

                console.log('Failed to return YQL result for ' + school.nameShort);
                school.gsStatus(err.gsStatus);
                school.gsErrMessage(err.gsErrMessage);
                school.gsRating(err.gsRating);
                school.gsProfileMessage(err.gsProfileMessage);
                school.gsUrl(err.gsUrl);

                var schoolJS = ko.toJS(school);
                loadGs(schoolJS);

        });
    });

    this.currentSchool = ko.observable( null );

    this.setSchool = function(clickedSchool) {
        clickedSchool.visible(true);
        self.visibleSchools(true);
        self.currentSchool(clickedSchool);
    };

    // // Show schools from Google Maps directions Matrix
    this.directionsSchools = function() {
        // 1.5 second delay to allow Google Maps API to return directions matrix
        setTimeout(function() {
            if ( directions.length === 0 ) {
                self.hideAllSchools();
            } else {
                self.schoolList().forEach( function(school) {
                    if ( directions.indexOf(school.mapId) === -1 ) {
                        school.visible(false);
                    } else {
                        school.visible(true);
                    }
                });
                self.visibleSchools(true);
            }
        }, 1500);
    };
}

ko.applyBindings( new ViewModel() );
