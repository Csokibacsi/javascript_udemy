const cvs = document.getElementById("beerhero");
const ctx = cvs.getContext("2d");

const box = 32;

const hero = new Image();
hero.src = "babu32.png";

const ghostimg = new Image();
ghostimg.src = "ghost.png";


var beerhero = [];
//start pozíció:
beerhero[0] = {
    x : 9 * box,
    y : 10 * box
};

var ghost = {
	x : 1 * box,
    y : 2 * box
}

//FOLYT KÖV
/*var ghost = [];
//ghost start
ghost[0] = {
	x : 1 * box,
    y : 2 * box
}*/

var speed; 
var s;
document.addEventListener("keyup",stop);
function stop(){
	speed = 0;
}

//beerhero controls
var e;
document.addEventListener("keydown",direction);
function direction(event){
	speed=8;
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
	
	for( var i = 0; i < beerhero.length ; i++){
		ctx.drawImage(hero, beerhero[i].x, beerhero[i].y,box,box );
    }
	ctx.drawImage(ghostimg, ghost.x, ghost.y);
	//FOLYT KÖV
	/*for( var i = 0; i < ghost.length ; i++){
		ctx.drawImage(ghost, beerhero[i].x, beerhero[i].y,box,box );
    }*/

	var beerheroX = beerhero[0].x;
	var beerheroY = beerhero[0].y;
	
	beerhero.pop(); //tömb utolsó elemét kitörli
	
	//directions:
	if( e == "LEFT") beerheroX -= speed; //box
    if( e == "UP") beerheroY -= speed;
    if( e == "RIGHT") beerheroX += speed;
    if( e == "DOWN") beerheroY += speed;
     
	var newPosition = {
		x:beerheroX,
		y:beerheroY
	} 
	 
	beerhero.unshift(newPosition); 
}
	
// call draw function every 100 ms	
setInterval(draw,100);
