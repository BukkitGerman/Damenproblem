class Tile{
	constructor(x, y, color){
		this.s = 100;
		this.occupied = false;
		this.color = color;
		this.x = x;
		this.y = y;
	}

	setColor(b){
		this.c = b;
	}
	setOccupied(b){
		this.occupied = b;
	}

	show(){
		fill(this.color);
		rect(this.x, this.y, this.s, this.s);
	}
}