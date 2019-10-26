$("button").on("click", function () {

    var movie = $(this).attr("data-movie");


    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        movie + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";


    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function (response) {
            console.log(queryURL);

            console.log(response);

            var results = response.data;


            for (var i = 0; i < results.length; i++) {


                var movieDiv = $("<div>");


                var p = $("<p>").text("Rating: " + results[i].rating);


                var movieImage = $("<img>");

                movieImage.attr("src", results[i].images.fixed_height.url);


                movieDiv.append(p);
                movieDiv.append(movieImage);


                $("#gifs-appear-here").prepend(movieDiv);
            }
        });
});