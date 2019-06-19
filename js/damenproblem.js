
var size = 10;
var field = [];
var root;
var co = 0;
function setup() {
	createCanvas(800, 800);

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
	}
}