// CLoud Movement
$('#cloud1').pan({fps: 24, speed: 0.5, dir: 'right'});
$('#cloud2').pan({fps: 24, speed: 1.2, dir: 'right'});
$('#cloud3').pan({fps: 24, speed: 3, dir: 'right'});
$('#cloud4').pan({fps: 24, speed: 2, dir: 'right'});
$('#cloud5').pan({fps: 24, speed: 2.4, dir: 'right'});

//Rain
// number of drops created.
var nbDrop = 1000; 

// function to generate a random number range.
function randRange( minNum, maxNum) {
  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

// function to generate drops
function createRain() {

	for( i=1;i<nbDrop;i++) {
	var dropLeft = randRange(0,2000);
	var dropTop = randRange(-1000,1400);

	$('#rain').append('<div class="drop" id="drop'+i+'"></div>');
	$('#drop'+i).css('left',dropLeft);
	$('#drop'+i).css('top',dropTop);
	}

}
// Make it rain
createRain();


// Hide Dang oveflow bars
$(document).ready(function(){
    
$('body').on({
    'mousewheel': function(e) {
        if (e.target.id == 'rain') return;
        e.preventDefault();
        e.stopPropagation();
    }
})

$('html, body').css('overflow', 'hidden'); 

});


