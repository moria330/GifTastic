//create an array for default buttons called topics
//populate array according to a theme
//set a static image to start with

var topics = ["rock", "paper", "scissors"];

$(document).ready(function(){

for (var i = 0; i < topics.length; i++) {
	var b = $("<button>");
	b.addClass("btn btn-primary topics");
	b.attr("topic-name", topics[i]);
	b.text(topics[i]);
	$(".buttons").append(b);
	
}
console.log("first");
$(document).on("click", ".topics", displayGifs);

function displayGifs(){
	console.log("On Click of button");
	$(".images").empty();
	var name = $(this).attr('topic-name');
	var queryURL = "http://api.giphy.com/v1/gifs/search?q="+ name + "&api_key=dc6zaTOxFJmzC&limit=10";
console.log("queryURL: " + queryURL);
	$.ajax({
		url: queryURL,
		method: "GET",
	}).done(function(response){
		var results = response.data;
		console.log(response);
		for (var j = 0; j < results.length; j++) {
			var rating = results[j].rating;
			console.log(rating);
			var a = $("<div>");
			var g = $("<img>");
			var fixed = results[j].images.original_still.url;
			a.html("<p> Rating: " + rating + "</p>");
			g.attr("src", fixed)
			g.attr("data-still", fixed);
			g.attr("data-animate", results[j].images.original.url);
			g.attr("data-state", "still");
			g.attr("class", "gif col-lg-3")
			
			$(".images").append(a);
			a.append(g);

		}
	$(document).on("click", ".gif", toggleGifs);
	function toggleGifs(){
		var state = $(this).attr("data-state");

		if (state == "still") {
	        var animate = $(this).attr("data-animate");
	        $(this).attr("src", animate);
	        $(this).attr("data-state", "animate");
	      }

	      else {
	        var still = $(this).attr("data-still");
	        $(this).attr("src", still);
	        $(this).attr("data-state", "still");
	      }
	    }

	});



}

//displayGifs();

});