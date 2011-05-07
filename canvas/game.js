
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

var player = new (function(){
	var that = this;
	
	that.image = new Image();
	that.image.src = 'angel.png';
	
	that.width = 65;
	that.height = 95;
	
	that.X = 0;
	that.Y = 0;

	that.frames = 1;
	that.actualFrame = 0;
	that.interval = 0;

    that.isJumping = false;
    that.isFalling = false;

    that.jumpSpeed = 0;
    that.fallSpeed = 0;

	that.setPosition = function(x, y){
		that.X = x;
		that.Y = y;
	}
	
	that.draw = function(){
		try{
			ctx.drawImage(that.image, 0, that.height*that.actualFrame, that.width, that.height, that.X, that.Y, that.width, that.height);
			//drawImage(Image Object, sourceX, sY, sWidht, sHeight, destinationX, dY, dWidth, dHeight)
		}catch(e){
			//first frame problem...	
		}
		if(that.interval == 4){
			if(that.actualFrame == that.frames){
				that.actualFrame = 0;
			}else{
				that.actualFrame++;
			}
			that.interval = 0;
		}
		that.interval++;
		//switch frames in 4 loops
	}

    that.moveLeft = function(){
        if(that.X > 0){
            //check if object is inside the screen
            that.setPosition(that.X - 5, that.Y);
        }
    }

    that.moveRight = function(){
        if(that.X + that.width < width){
            //if object inside screen
            that.setPosition(that.X + 5, that.Y);
        }
    }


    that.jump = function(){
        //initialization of the jump
        if(!that.isJumping && !that.isFalling){
            //if object isn't currently jumping or falling
            //(preventing of 'double jumps', or bouncing from the air
            that.fallSpeed = 0;
            that.isJumping = true;
            that.jumpSpeed = 17;
            //initial velocity
        }
    }

    that.checkJump = function(){
        //when 'jumping' action was initialized by jump() method
        //initiative is taken by this one
        that.setPosition(that.X, that.Y - that.jumpSpeed);
        //move object by number of pixels equal to current value of jumpSpeed
        that.jumpSpeed--;
        //and decease it (simulate of gravity)
        if(that.jumpSpeed == 0){
            //start to falling, similar to jump() function
            that.isJumping = false;
            that.isFalling = true;
            that.fallSpeed = 1;
        }
    }

    that.checkFall = function(){
        //same situation as in checkJump()
        if(that.Y < height - that.height){
            //check if the object meets the bottom of the screen, if not just
            //change the position and increase the fall Speed (gravity acceleration)
            that.setPosition(that.X, that.Y + that.fallSpeed);
            that.fallSpeed++;
        }else{
            //if yes - bounce
            that.fallStop();
        }
    }

    that.fallStop = function(){
        //stop falling, start jumping again
        that.isFalling = false;
        that.fallSpeed = 0;
        that.jump();
    }

    
})();

player.setPosition(~~((width-player.width)/2), ~~((height - player.height)/2));
//initial jump
player.jump();

window.requestAnimFrame = (function(){
	return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame	||
		window.mozRequestAnimationFrame		||
		window.oRequestAnimationFrame		||
		window.msRequestAnimationFrame		||
		function( callback, element){
			window.setTimeout(callback, 1000 / 60 );
		}
})();

(function GameLoop(){
	clear();
	MoveCircles(5);
	DrawCircles();
    if(player.isJumping){
        player.checkJump();
    }
    if(player.isFalling){
        player.checkFall();
    }
	player.draw();
	requestAnimFrame(GameLoop, c);
})();

document.onmousemove = function(e){
    if(player.X + c.offsetLeft > e.pageX){
        //if mouse is on the left side of the player
        player.moveLeft();
    }else if(player.X + c.offsetLeft < e.pageX){
        //or on right
        player.moveRight();
    }
}

