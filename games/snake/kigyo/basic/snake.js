const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");


// basic unit
const box = 16;

/*const ground = new Image();
ground.src = "img/ground1.png";*/

const beerImg = new Image();
beerImg.src = "img/mugmini.png";

var snake = [];
//start pozíció:
snake[0] = {
    x : 18 * box,
    y : 20 * box
};

var beer ={
	x : Math.floor(Math.random()*34+1) * box,
    y : Math.floor(Math.random()*30+3) * box
}

// create the score var
var score = 0;
//control the snake
var e;
document.addEventListener("keydown",direction);
function direction(event){
    var key = event.keyCode;
    if( key == 37 && e != "LEFT"){
        //left.play();
        e = "LEFT";
    }else if(key == 38 && e != "UP"){
        e = "UP";
        //up.play();
    }else if(key == 39 && e != "RIGHT"){
        e = "RIGHT";
       // right.play();
    }else if(key == 40 && e != "DOWN"){
        e = "DOWN";
        //down.play();
    }
}


function draw(){
	ctx.fillStyle="#ddd";
	ctx.fillRect(0,0,608,608); 
	
	for( var i = 0; i < snake.length ; i++){
        ctx.fillStyle = ( i == 0 )? "orange" : "white";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        ctx.strokeStyle = "red";
        ctx.strokeRect(snake[i].x,snake[i].y,box,box);
    }
	ctx.drawImage(beerImg, beer.x, beer.y);
	
	// old head position
    var snakeX = snake[0].x;
    var snakeY = snake[0].y;
	
	//remove tail
	snake.pop(); //tömb utolsó elemét kitörli
	
	//directions:
	if( e == "LEFT") snakeX -= box;
    if( e == "UP") snakeY -= box;
    if( e == "RIGHT") snakeX += box;
    if( e == "DOWN") snakeY += box;
	
	var newHead = {
		x:snakeX,
		y:snakeY
	}
	
	snake.unshift(newHead);//az unshift a tömb elejére rak be egy elemet
}

// call draw function every 100 ms
setInterval(draw,100);