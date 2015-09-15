MusicButton = document.getElementById('MusicButton');
MoviesButton = document.getElementById('MoviesButton');
GamesButton = document.getElementById('GamesButton');

MusicButton.onclick = function(){
	$("#MusicButton").css('z-index', 9999);
	$("#MusicButton").animate({
		height:"100%",
		width:"100%",
		left:0,
		top:0,
		margin: 0,
		borderRadius:0,
		},
		1000);
	$(":animated").promise().done(function() {
    location.replace("MusicPage.html");
});
	
}

MoviesButton.onclick = function(){
	$("#MoviesButton").css('z-index', 9999);
	$("#MoviesButton").animate({
		height:"100%",
		width:"100%",
		left:0,
		top:0,
		margin: 0,
		borderRadius:0,
		},
		1000);
		$(":animated").promise().done(function() {
    location.replace("MoviePage.html");
});
	
}
GamesButton.onclick = function(){
	$("#GamesButton").css('z-index', 9999);
	$("#GamesButton").animate({
		height:"100%",
		width:"100%",
		left:0,
		top:0,
		margin: 0,
		borderRadius:0,
		},
		1000);
		$(":animated").promise().done(function() {
    location.replace("GamePage.html");
});
	
}
