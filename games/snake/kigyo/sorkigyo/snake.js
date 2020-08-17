const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

// basic unit
const box = 16;

const beerImg = new Image();
beerImg.src = "img/mugmicro.png";

const BigbeerImg = new Image();
BigbeerImg.src = "img/mugmini.png";

var snake = [];
//start pozíció:
snake[0] = {
    x : 18 * box,
    y : 20 * box
};

var beer ={
	x : Math.floor(Math.random()*33+1) * box,
    y : Math.floor(Math.random()*29+2) * box
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

// check collision 
function collision(head,array){
    for(var i = 0; i < array.length; i++){
        if(head.x == array[i].x && head.y == array[i].y){
            return true;
        }
    }
    return false;
}

function draw(){
	ctx.fillStyle="#ddd";
	ctx.fillRect(0,0,608,608); 
	
	//scoreboard
	ctx.fillStyle="#555";
	ctx.fillRect(0,0,608,2*box); 
	
	for( var i = 0; i < snake.length ; i++){
        ctx.fillStyle = ( i == 0 )? "red" : "#333333";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
       // ctx.strokeStyle = "red";
       // ctx.strokeRect(snake[i].x,snake[i].y,box,box);
    }
	ctx.drawImage(beerImg, beer.x, beer.y);
	
	// old head position
    var snakeX = snake[0].x;
    var snakeY = snake[0].y;
	
	//if snake eats beer
	if(snakeX == beer.x && snakeY == beer.y){
        score++;
        beer = {
            x : Math.floor(Math.random()*37+1) * box,
            y : Math.floor(Math.random()*35+3) * box
        }
        // we don't remove the tail
    }else{
        // remove  tail
        snake.pop();  //tömb utolsó elemét kitörli
    }
		
	//directions:
	if( e == "LEFT") snakeX -= box;
    if( e == "UP") snakeY -= box;
    if( e == "RIGHT") snakeX += box;
    if( e == "DOWN") snakeY += box;
	
	var newHead = {
		x:snakeX,
		y:snakeY
	}
	
	//gameover
	if(snakeX < 0 || snakeX > 37 * box || snakeY < 2*box || snakeY > 37*box || collision(newHead,snake)){
        clearInterval(game);
		alert("Begyűjtött korsók száma: " +score + "\nÚj játék: ENTER");
		
		function screenReload(){
			location.reload();			
		}
		setInterval(screenReload, 500);
		
    }
	
	snake.unshift(newHead); //az unshift a tömb elejére rak be egy elemet
	
	//score counter
	ctx.fillStyle = "white";
    ctx.font = "30px Rockwell";
    ctx.fillText(score,34*box,1.6*box);
	
	ctx.drawImage(BigbeerImg, 32*box, 1);
}

// call draw function every 100 ms
var game = setInterval(draw,100);


////////////////////////////////////////////////////////////////////////

//Nyitólap és választó gomb
function show(elementID) {
    var ele = document.getElementById(elementID);
    if (!ele) {
        alert("no such element");
        return;
    }
    var pages = document.getElementsByClassName('page');
    for(var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    ele.style.display = 'block';
	
	
}