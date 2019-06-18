class tile{
	contructor(x, y){
		this.s = 10;
		this.occupied = false;
		this.c = true;
	}

	setColor(boolean b){
		this.c = b;
	}
	setOccupied(boolean b){
		this.occupied = b;
	}

	getcolor(){
		return this.c;
	}

	getOccupied(){
		return this.occupied;
	}

	show(){
		if(this.c){
			console.log("COLOR BLACK");
			fill(255);
		}
		if(!this.c){
			console.log("COLOR WHITE");
			fill(0);
		}

		rect(x, y, this.size, this.size);
	}
}