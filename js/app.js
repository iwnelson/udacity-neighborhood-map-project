var initialSchools = [
    {
        nameLong: "The Bronx High School of Science",
        nameShort: "Bronx Science",
        location: {
            "lat" : 40.87766209999999,
            "lng" : -73.89105529999999
        },
        streetAddress: "75 West 205 Street",
        cityStateZip: "Bronx, NY 10468",
        cutoffScore: "512",
        website: "http://www.bxscience.edu/",
        logo: "images/bronx-science-logo.jpg"
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
        cutoffScore: "479",
        website: "http://www.brooklynlatin.org/",
        logo: "images/brooklyn-latin-logo.png"
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
        cutoffScore: "486",
        website: "http://www.bths.edu/",
        logo: "images/brooklyn-tech-logo.png"
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
        cutoffScore: "504",
        website: "http://www.hsmse.org/",
        logo: "images/hsmse-logo.jpg"
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
        cutoffScore: "516",
        website: "http://www.hsas-lehman.org/",
        logo: "images/hsas-logo.png"
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
        cutoffScore: "507",
        website: "http://www.qhss.org/",
        logo: "images/queens-science-logo.jpg"
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
        cutoffScore: "515",
        website: "http://www.siths.org/",
        logo: "images/staten-island-tech-logo.png"
    },
    {
        nameLong: "Stuyvesant High School",
        nameShort: "Stuyvesant",
        location: {
            "lat" : 40.7179464,
            "lng" : -74.0139051
        },
        streetAddress: "345 Chambers Street,",
        cityStateZip: "New York, NY 10282",
        cutoffScore: "555",
        website: "http://stuy.enschool.org/",
        logo: "images/stuyvesant-logo.png"
    }];

var School = function(data) {
    this.nameLong = ko.observable(data.nameLong);
    this.nameShort = ko.observable(data.nameShort);
    this.streetAddress = ko.observable(data.streetAddress);
    this.cityStateZip = ko.observable(data.cityStateZip);
    this.cutoffScore = ko.observable(data.cutoffScore);
    this.website = ko.observable(data.website);
    this.logo = ko.observable(data.logo);
}

var ViewModel = function() {
    var self = this;

    this.schoolList = ko.observableArray([]);

    initialSchools.forEach(function(schoolItem) {
        self.schoolList.push( new School(schoolItem) );
    });

    this.currentSchool = ko.observable( this.schoolList()[0] );

    this.setSchool = function(clickedSchool) {
        self.currentSchool(clickedSchool);
    };
}

ko.applyBindings(new ViewModel());


