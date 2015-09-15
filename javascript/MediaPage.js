HomeButton = document.getElementById('HomeButton');

HomeButton.onclick = function(){
	$("#HomeButton").css('z-index', 9999);
	$("#HomeButton").animate({
		height:"100%",
		width:"100%",
		left:0,
		top:0,
		margin: 0,
		borderRadius:0,
		},
		1000);
	$(":animated").promise().done(function() {
    location.replace("index.html");
});
	
}
