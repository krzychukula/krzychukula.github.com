
var width = 320, 
	height = 500,
	gLoop,
	c = document.getElementById('c'),
	ctx = c.getContext('2d');

c.width = width;
c.height = height;

var clear = function(){
	ctx.fillStyle = '#d0e7f9';
	
	ctx.beginPath();
	
	ctx.rect(0,0, width, height);
	ctx.closePath();
	ctx.fill();
}
var howManyCircles = 10, circles = [];

for(var i = 0; i<howManyCircles; i++){
	circles.push([Math.random() * width, Math.random() * height, Math.random() * 100, Math.random() /2]);
//x &y, radius and transparency 0invisible, 1 no trans
}
var DrawCircles = function(){
	for(var i = 0; i<howManyCircles; i++){
		ctx.fillStyle = 'rgba(255,255,255,'+circles[i][3]+')';
		//white with rgba transparency
		ctx.beginPath();
		ctx.arc(circles[i][0], circles[i][1], circles[i][2], 0, Math.PI * 2, true);
		//x,y,radius,startAngle,endAngle, antiClockwise
		ctx.closePath();
		ctx.fill();
		
	}
};


var MoveCircles = function(deltaY){
	for(var i = 0; i < howManyCircles; i++){
		if(circles[i][1] - circles[i][2] > height){
			//the circle is under the screen
			circles[i][0] = Math.random() * width;
			circles[i][2] = Math.random() * 100;
			circles[i][1] = 0 - circles[i][2];
			circles[i][3] = Math.random() / 2;
		}else{
			//move circle deltaY pixels down
			circles[i][1] += deltaY;
		}
	}
};

var GameLoop = function(){
	clear();
	MoveCircles(5);
	DrawCircles();
	gLoop = setTimeout(GameLoop, 1000 / 50);
}
GameLoop();
