class Ground{
	constructor(){
		var options={
			isStatic:true			
		}

		this.body=Bodies.rectangle(width/2,670,1600,20, options);
		this.width = 1600;
		this.height = 20;
 		World.add(world, this.body);
	}
	display(){
			push();
			translate(this.body.position.x, this.body.position.y);
			rectMode(CENTER);
			fill(230,245,0);
			rect(0,0,this.width, this.height);
			pop();
	}
}
