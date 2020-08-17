
//NYitólap és választó gomb
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

//Időmérő beállításai
var showTimer = 0;

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
	

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

		
        display.text(minutes + ":" + seconds);
		timer++;
		showTimer = timer;
        /*if (--timer < 0) {
            timer = duration;
        }*/
    }, 1000);
}

function goTimer(){
	 var zero = 0,
    display = $('#time');
    startTimer(zero, display);
}

function reloadCards(){
	jQuery("#Page3").replaceWith(jQuery(".wrapper"));
	location.reload();
}

/*jQuery(function ($) {
    var zero = 0,
        display = $('#time');
    startTimer(zero, display);
	
});*/



function cardClick(){
	
	var numOfFlip = [1, 2, 3, 4, 5, 6, 7, 8, "X", "Y", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N"/*,"O", "P", "Q", "R", "S", "T"*/];
	numOfFlip.sort( function() { return Math.random() - .5 } );


	function appendContent(){
	
	for (i = 0; i < 24; i++) {	
	
			var section = '<div class="container"><div class="card" id="'+numOfFlip[i]+'"><div class="front" style="background-size:contain; background-repeat:no-repeat; background-image:url(&apos;korso_fekete.png&apos;);"><!--<h2>Hihi</h2>--></div>   <div class="back"><div class="content" id="div'+numOfFlip[i]+'"></div>  </div> </div></div>';
			if(numOfFlip[i] == 1 || numOfFlip[i] ==2){
				
			}
			$(".wrapper").append(section);
		}
	}
	appendContent();
	
	$('.card').click(function(){
	$('.csik').css('display', 'none');
	//$('#time').css('display', 'block');
	
	//alert(showTimer);
	if(!clickDisabled) {
	
	if(!clicked.includes($( this ).attr('id')) && !paired.includes($( this ).attr('id')) ) {
		
		clicked+= $( this ).attr('id'); //minden klikk során a clicked tömbbe rakjuk az elem #id-jét
		
		if(clicked.length%2==0){ //páros klikk esetén
				$(this).css("transform", "rotateY(180deg)" ); //180 fokos forgás
				$(this).css("transitionDuration", "1s");
				
			if(clicked.includes(1) && clicked.includes(2) && !paired.includes(1) && !paired.includes(2)
				|| clicked.includes(3) && clicked.includes(4) && !paired.includes(3) && !paired.includes(4)
				|| clicked.includes(5) && clicked.includes(6) && !paired.includes(5) && !paired.includes(6) 
				|| clicked.includes(7) && clicked.includes(8) && !paired.includes(7) && !paired.includes(8)
				|| clicked.includes("X") && clicked.includes("Y") && !paired.includes("X") && !paired.includes("Y")
				|| clicked.includes("A") && clicked.includes("B") && !paired.includes("A") && !paired.includes("B")
				|| clicked.includes("C") && clicked.includes("D") && !paired.includes("C") && !paired.includes("D")
				|| clicked.includes("E") && clicked.includes("F") && !paired.includes("E") && !paired.includes("F")
				
				|| clicked.includes("G") && clicked.includes("H") && !paired.includes("G") && !paired.includes("H")
				|| clicked.includes("I") && clicked.includes("J") && !paired.includes("I") && !paired.includes("J")
				|| clicked.includes("K") && clicked.includes("L") && !paired.includes("K") && !paired.includes("L")
				|| clicked.includes("M") && clicked.includes("N") && !paired.includes("M") && !paired.includes("N")
				
				//|| clicked.includes("O") && clicked.includes("P") && !paired.includes("O") && !paired.includes("P")
				//|| clicked.includes("Q") && clicked.includes("R") && !paired.includes("Q") && !paired.includes("R")
				//|| clicked.includes("S") && clicked.includes("T") && !paired.includes("S") && !paired.includes("T")
				
				
				){ //ha a megfelelő elemek vannak párosítva
					
					paired += clicked[(clicked.length)-1];
					paired += clicked[(clicked.length)-2];
					
					clicked = [];
					//alert(clicked.length);
					if(paired.length==24){ //az összes párosítva van, vagyis a klikkel tömbben mind a 6 #id ott van
						//alert("Gratulálunk! Időeredményed: " + showTimer + " másodperc" );
						//location.reload(); 
						
						$('.stopper').css('display', 'none');
						//$(".wrapper").html(".ending");
						
						jQuery(".wrapper").replaceWith(jQuery("#Page3"));
						$("#Page3").css("display","block");
						$('#score').html("<span style='font-size:96px; margin-bottom:100px; color:orange;'>Gratulálunk!</span><br> Eredményed: " + showTimer + " mp!");	
						if(localStorage["theGameName_HighScores"] !== undefined){
							scores = JSON.parse(localStorage["theGameName_HighScores"]);
							$('#score').append("<br>Legjobb eredményed: " + scores + " mp!");
						}
						if(showTimer < scores){
						scores = showTimer;
						localStorage["theGameName_HighScores"] = JSON.stringify(scores); // done all saved on the client machine
						}
						
					}
				
			} else {
				last = clicked[(clicked.length)-1]; //utolsónak klikkelt elem
				lastBut = clicked[(clicked.length)-2]; //utolsó előttinek klikkelt elem
				
				function flipBack(last, lastBut){ //visszaforgatjuk a rosszul párosított elemeket
					//alert(last+ " - " + lastBut);
					if(!paired.includes(lastBut) ){ //ha a jól párosított elemek közt nincs ott az aktuális elem
						$('#'+lastBut).css("transform", "rotateY(360deg)" );
					}
					if(!paired.includes(last) ){
						$('#'+last).css("transform", "rotateY(360deg)" );
					}
										
					clicked = [];
				}
				
							
				//setTimeout(flipBack, 1000); //az érintett elemek kiinduló pozícióba mennek a functionben
				setTimeout(function(){ //ha rossz a párosítás, visszafordító funkciót indítunk 1mp-es eltéréssel
					flipBack(last, lastBut)
				},1000 );
				
			}
		}
		else { //páratlan klikk esetén
		
			$(this).css("transform", "rotateY(180deg)" ); //180 fokos forgás
			$(this).css("transitionDuration", "1s");
			
		}	
	}
	
	clickDisabled = true;
	setTimeout(function(){clickDisabled = false;}, 500)
	
	}
});
	
}




