//create an array for default buttons called topics
//populate array according to a theme
//set a static image to start with

var topics = ["rock","paper","scissors"];

$(document).ready(function(){

for (var i = 0; i < topics.length; i++) {
	var b = $("<button>");
	b.addClass("topics");
	b.attr("topic-name", topics[i]);
	b.text(topics[i]);
	$(".buttons").append(b);
}

$(document).on("click", ".topics", displayGifs);

function displayGifs(){
var name = $(this).attr('topic-name');
var queryURL = "http://api.giphy.com/v1/gifs/search?q="+ name + "&api_key=dc6zaTOxFJmzC&limit=10";
console.log("queryURL: " + queryURL);
	$.ajax({
		url: queryURL,
		method: "GET",
	}).done(function(response){
		for (var j = 0; j < 11; j++) {
			var rating = $("data").find("rating").val();
			console.log(rating);
			var a = $("<div>");
			var still = response.find("original_still").url;
			var animate = response.find("original").url.val();
			a.html("<p> rating: " + rating + "</p>");
			a.append('<img src= "' + still + '">');
			$(".images").append(a);

		}
		

	});



}

displayGifs();

});