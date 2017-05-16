function loadGs(item) {
    var mapId_gsId = $(item).attr("id");
    var mapId = mapId_gsId.split('_')[0];
    var gsId = mapId_gsId.split('_')[1];
    var schoolName = $(item).text();
    var $greatSchoolsHr = $('#greatSchoolsHr');
    $greatSchoolsHr.html('<hr>');


    var url = "http://api.greatschools.org/schools/NY/";
    // var mapId_gsId = $(item).attr("id");
    // var schoolId = mapId_gsId.split("_")[1];
    // var schoolName = $(item).text();
    var gsKey = "?key=6i8inihoymrgg9dvcmwzfqxx";
    url += gsId;
    url += gsKey;


    // Generate YQL Query
    var yqlURL = [
        "http://query.yahooapis.com/v1/public/yql",
        "?q=" + encodeURIComponent("select * from xml where url='" + url + "'"),
        "&format=xml&callback=?"
    ].join("");

    // Set timout for YQL result
    var yqlRequestTimeout = setTimeout (function(){
        console.log('Did not received YQL response within 3 seconds while searching for ' + schoolName);
        var $gsErr = $('#gsErr');
        $gsErr.text("Failed to connect to GreatSchools.org");
    }, 3000);

    // Ajax request of YQL results
    $.ajax({
        url: yqlURL,
        dataType: "jsonp",
        success: function(response){
            xmlContent = $(response.results[0]);
            var rating = $(xmlContent).find("gsRating").text();
            var gsUrl = $(xmlContent).find("overviewLink").text();

            // If GreatSchols API request was not successful
            if ( rating === '' || gsUrl === '' ) {

                console.log('Returned error from YQL query on GreatSchools.org request on ' + schoolName);
                $gsErr.text("Failed to connect to GreatSchools.org");
                clearTimeout(yqlRequestTimeout);

            // If GreatSchools request successful
            } else {

                console.log('Successfully returned GreatSchools.org data from YQL for ' + schoolName);
                var $gsLink = $('#gsLink');
                var $gsRating = $('#gsRating');
                var $gsErr = $('#gsErr');

                $gsRating.text('GreatSchools Rating: ' + rating + ' / 10');
                $gsLink.text(name + ' GreatSchools Profile');
                $gsLink.attr('href', gsUrl);


                $gsErr.text('');
                clearTimeout(yqlRequestTimeout);
            }

        }
    });

    showSelectedSchool(item);

}
