function loadGs(item) {


    var url = "http://api.greatschools.org/schools/NY/";
    var schoolId = $(item).attr("id");
    var gsKey = "?key=6i8inihoymrgg9dvcmwzfqxx";
    url += schoolId;
    url += gsKey;

    var request = $.get(url)

    request.success(function(responseText) {
        var $gsLink = $('#gsLink');
        var $gsRating = $('#gsRating');
        var $name = $(item).text();
        var rating = responseText.getElementsByTagName("gsRating")[0].childNodes[0].nodeValue;
        var gsUrl = responseText.getElementsByTagName("overviewLink")[0].childNodes[0].nodeValue;
        $gsRating.text('GreatSchools Rating: ' + rating + ' / 10');
        $gsLink.text(name + ' GreatSchools Profile');
        $gsLink.attr('href', gsUrl);
    });

    request.error(function(jqXHR, textStatus, errorThrown) {
        if (textStatus == 'timeout')
            console.log('The server is not responding');

        if (textStatus == 'error')
            console.log(errorThrown);

        var $gsErr = $('#gsErr');
        $gsErr.text('Unable to reach GreatSchools.org')
    });

};

// $( document ).ready(loadGs());


