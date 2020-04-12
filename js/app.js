/*window.Game = new virusGame();

function clearcontent(elementID) { 
    document.getElementById(elementID).innerHTML = ""; 
	//playGame();
	var holes = document.querySelectorAll(".virus");
        var lastHole;

        function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
      console.log('Ah nah thats the same one bud');
      return randomHole(holes);
    }
    lastHole = hole;
    return hole;
  }
  const hole = randomHole(holes);
  var displaySetting = hole.style.display;

if (displaySetting == 'block') { 
  hole.style.display = 'none';
}
else { 
  hole.style.display = 'block';
}
} 	
function virusGame(){
    
}


function playGame(){
    window.Game = new virusGame();
	updateScore();
	updateTimer();
	nextCircle();
	var loop = setInterval(function() {
		if(!isGameOver()) {
			Game.timer--;
			Game.duration++;
			updateTimer();
		} else {
			clearInterval(loop);
			document.getElementById('playbox').innerHTML = "<a href=\"#\" class=\"play\">Play Again?</a>";
			document.getElementById('playbox').style.display = "block";
		}
    }, 1000);
}
*/
const arr_virus = [".virus1", ".virus2", ".virus3", ".virus4", ".virus5"];
// var virus = document.querySelector(randomVirus(arr_virus));
    var lastVirus;

    function randomVirus(arr_virus) {
        return arr_virus[Math.floor(Math.random() * arr_virus.length ) ];
    /*  var idx = Math.floor(Math.random() * arr_virus.length);
        var viro = arr_virus[idx];
        if (viro === lastVirus) {
            console.log('Ah nah thats the same one bud');
            return randomVirus(arr_virus);
        }
        lastVirus = viro;1`Q21  1AQ1QQ```s  QQW2q\
        return viro;*/
    }
    setInterval( () =>{
        var virus = document.querySelector(randomVirus(arr_virus));
        console.log(virus);
        
        virus.style.display = 'block';
        setTimeout(out,700);
        function out(){
            virus.style.display = 'none'; 
        }

        /*var displaySetting = virus.style.display;
            if (displaySetting == 'block') { 
                virus.style.display = 'none';
            }   
            else { 
                virus.style.display = 'block';
            }*/
        },700); 