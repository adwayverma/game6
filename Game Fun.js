var character=document.getElementById("chrachter");
var block=document.getElementById("block");
var hole=document.getElementById("hole");
var score=0;
var jumping=0;


hole.addEventListener('animationiteration', () => {
	var random =  -((Math.random()*300)+250);
	hole.style.top= random+'px';
	score++;
});

var move=setInterval(function () {
	var charTop= parseInt(window.getComputedStyle(character).getPropertyValue("top"));
	
	if (jumping==0) 
	{
		character.style.top= (charTop+3) + 'px';
	}
	
	var bleft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
	var holetop=parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
	var ctop= -(550-charTop);
	if( (charTop>510) || ( (bleft<100)&&(bleft>-100) && ((ctop <= holetop) ||ctop>=(holetop+250))  ) )
	{
		block.style.animationPlayState="paused";
		hole.style.animationPlayState="paused";
		clearInterval(move);
		alert("GAME OVER!! Score" + score);
	}
	}, 30);

function jump() 
{
	jumping=1;
	let jumpcount=0;
	var jumpInterval=setInterval( function () {
		var charTop= parseInt(window.getComputedStyle(character).getPropertyValue("top"));
		if (charTop>=40) 
		{
			character.style.top= (charTop-4)+'px';
		}
		if (jumpcount > 40) 
		{
			clearInterval(jumpInterval);
			jumping=0;
			jumpcount=0;
		}
		jumpcount++;
	},30 );
}














