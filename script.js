
var i=0;
var color="black"
startButton = document.getElementById('startButton');
$("#startButton").css('background', 'black');
function go(){
	$("div").last().text("");
	$("#startButton").animate({
		height:"100%",
		width:"100%",
		left:0,
		top:0,
		margin: 0,
		borderRadius:0,
		},
		1000);
	$("<div>Click Here</div>").appendTo("#startButton").addClass("start");
	$("#startButton").css('position', 'absolute');
	$("#startButton").removeAttr('class');
	$("#startButton").disabled=true;
	$("#startButton").removeAttr('id');
	color = '#'+Math.floor(Math.random()*16777215).toString(16);
	$("div").last().css('background', color).attr('id', 'startButton');
	startButton = document.getElementById('startButton');
	startButton.onclick = function(){
go();
this.onclick=null;	
}


}

startButton.onclick = function(){

go();
this.onclick=null;
	
}

