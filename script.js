
var i=0;
var color="black"
startButton = document.getElementById('startButton');
$("#startButton").css('background', 'black');
startButton.onclick = function(){
	$("#startButton").css('color', color);
	$("#startButton").animate({
		height:"100%",
		width:"100%",
		left:0,
		top:0,
		margin: 0,
		borderRadius:0,
		},
		200);
	$("<div>Click Here</div>").appendTo("#startButton").addClass("start");
	$("#startButton").removeAttr('id');
	color = '#'+Math.floor(Math.random()*16777215).toString(16);
	$("div").last().css('background', color).attr('id', 'startButton');
	
}

