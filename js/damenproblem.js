
var size = 10;
var field = [];
var root;
var co = 0;
let img;
function setup() {
	createCanvas(800, 800);
	 img = loadImage('assets/dame.png');

	var i = 0;
	for(var x = 0; x < 8; x++){
		for(var y = 0; y < 8; y++){
			field[i] = new Tile(x*100,y*100, this.co);
			i++;
			if(co == 0){
				co = co + 255;
			}else{
				co = co - 255;
			}
		}
		if(co == 0){
			co = co + 255;
		}else{
			co = co - 255;
		}
	}

	
}



function draw() {
	background(100);
	for(var i = 0; i < field.length; i++){
			field[i].show();
			check(field[i].x, field[i].y);
			image(img, 100, 0, 100, 100);	
	}
}

function check(posX, posY){
	for(var i = 0; i < field.length; i++){
		console.log("i");
		for(var x = posX; x >= 0; x--){
			if(field[i].x == x && field[i].getOccupied()){
				console.log("test");
			}
		}

	}
}