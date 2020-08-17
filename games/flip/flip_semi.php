<!doctype html>
<html>
<head>
<title>Flip Semi Final </title>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8">

<style>

.animation {
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.wrapper {
  width: 80%;
  padding: 4%;
  margin: 20px auto;
  background: #fff;
}

.wrapper.cards {
  background: 0;
  width: 88%;
  padding: 20px 0 0 0;
}

.container {
  position: relative;
  float: left;
  width: 10%;
  height: 100px;
  margin: 10px 0 10px 4%;
  background: #fff;
  
  
  /* Set the depth of the elements */
  -webkit-perspective: 800px;
  -moz-perspective: 800px;
  -o-perspective: 800px;
  perspective: 800px;
}


.card {
  width: 100%;
  height: 100%;
  position: absolute;
  cursor: pointer;
  
  
  /* Set the transition effects */
  -webkit-transition: -webkit-transform 0.4s;
  -moz-transition: -moz-transform 0.4s;
  -o-transition: -o-transform 0.4s;
  transition: transform 0.4s;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.card.flipped {
  -webkit-transform: rotateY( 180deg );
  -moz-transform: rotateY( 180deg );
  -o-transform: rotateY( 180deg );
  transform: rotateY( 180deg );
}



.card .front,
.card .back {
  display: block;
  height: 100%;
  width: 100%;
  line-height: 20px;
  color: white;
  text-align: center;
  font-size: 12px;
  position: absolute;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
  
}

.card .back {
  width: 94%;
  padding-left: 3%;
  padding-right: 3%;
  font-size: 12px;
  text-align: left;
  line-height: 20px;
 
}

.card .front {
  background: /*#222222;*/ #000;
}

.card .back {
  background: #444444;
  -webkit-transform: rotateY( 180deg );
  -moz-transform: rotateY( 180deg );
  -o-transform: rotateY( 180deg );
  transform: rotateY( 180deg );
}



.content {
  /*padding: 4%;
  font-weight: 100;
  text-align: left;*/
  
  /*width:100px;
  height:100px;*/
  width:100%;
  height:100%;
}


#div1, #div2{
	background:url('femtonics.png');
	background-size:cover;
}

#div3, #div4{
	background:url('olympus.png');
	background-size:cover;
}

#div5, #div6{
	background:url('zeiss.png');
	background-size:cover;
}



/*---- TOVÁBBIAK -----*/
#div7, #div8{
	background:url('nikon.png');
	background-size:cover;
}

#div9, #div10{
	background:url('nikon.png');
	background-size:cover;
}


</style>

<script type="text/javascript" src="../jquery/jquery.js"></script>
<script type="text/javascript" src="../jquery-ui/jquery-ui.js"></script>

<script type="text/javascript">

</script>

</head>

<body>
<div class="wrapper"> </div>


<!--
  <div class="container">
    <div class="card" id="1">
      <div class="front"><h2>Hihi</h2></div>
      <div class="back">
        <div class="content">
          <h3 class="cardTitle">Quem eu sou?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  </div>
  
  
</div>-->

	
<script>

var numOfFlip = [1, 2, 3, 4, 5, 6];
numOfFlip.sort( function() { return Math.random() - .5 } );


function appendContent(){
	
	for (i = 0; i < 6; i++) {	
	
		var section = '<div class="container"><div class="card" id="'+numOfFlip[i]+'"><div class="front" style="background-size:contain; background-repeat:no-repeat; background-image:url(&apos;micro.png&apos;);"><!--<h2>Hihi</h2>--></div>   <div class="back"><div class="content" id="div'+numOfFlip[i]+'"></div>  </div> </div></div>';
		if(numOfFlip[i] == 1 || numOfFlip[i] ==2){
			
		}
		$(".wrapper").append(section);
	}
}
appendContent();

	
var clicked = []; 
var paired = []; //ha megvannak a párok
var last = 0;
var lastBut = 0;


$('.card').click(function(){
	
	if(!clicked.includes($( this ).attr('id')) && !paired.includes($( this ).attr('id')) ) {
		
		clicked+= $( this ).attr('id'); //minden klikk során a clicked tömbbe rakjuk az elem #id-jét
		
		if(clicked.length%2==0){ //páros klikk esetén
				$(this).css("transform", "rotateY(180deg)" ); //180 fokos forgás
				$(this).css("transitionDuration", "1s");
				
			if(clicked.includes(1) && clicked.includes(2) && !paired.includes(1) && !paired.includes(2)
				|| clicked.includes(3) && clicked.includes(4) && !paired.includes(3) && !paired.includes(4)
				|| clicked.includes(5) && clicked.includes(6) && !paired.includes(5) && !paired.includes(6) ){ //ha a megfelelő elemek vannak párosítva
					
					paired += clicked[(clicked.length)-1];
					paired += clicked[(clicked.length)-2];
					
					clicked = [];
					//alert(clicked.length);
					if(paired.length==6){ //az összes párosítva van, vagyis a klikkel tömbben mind a 6 #id ott van
						alert("kész");
						location.reload(); 
					}
				
			} else {
				last = clicked[(clicked.length)-1]; //utolsónak klikkelt elem
				lastBut = clicked[(clicked.length)-2]; //utolsó előttinek klikkelt elem
				
				function flipBack(last, lastBut){ //visszaforgatjuk a rosszul párosított elemeket
					//alert(last+ " - " + lastBut);
					/*$('.card #'+last).css("transform", "rotateY(360deg)" );
					$('.card #'+lastBut).css("transform", "rotateY(360deg)" );
					$('#'+last+' .card').css("transform", "rotateY(360deg)" );
					$('#'+lastBut+' .card').css("transform", "rotateY(360deg)" );*/
					if(!paired.includes(lastBut) ){ //ha a jól párosított elemek közt nincs ott az aktuális elem
						$('#'+lastBut).css("transform", "rotateY(360deg)" );
					}
					if(!paired.includes(last) ){
						$('#'+last).css("transform", "rotateY(360deg)" );
					}
										
					clicked = [];
				}
							
				//setTimeout(flipBack, 1000); //az érintett elemek kiinduló pozícióba mennek a functionben
				setTimeout(function(){ //ha rossz a párosítás visszafordító funkciót indítunk 1mp-es eltéréssel
					flipBack(last, lastBut)
				},1000 );
				
			}
		}
		else { //páratlan klikk esetén
		
			$(this).css("transform", "rotateY(180deg)" ); //180 fokos forgás
			$(this).css("transitionDuration", "1s");
			
		}
		
		
	}
	

});



</script>

</body>
</html>