class paperBall{
	constructor(x,y,r){
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2
		}

		this.r=40;
		this.body=Bodies.circle(200,450,this.r/2,options);
		World.add(world, this.body);
	}

	display(){
		push();
		translate(this.body.position.x, this.body.position.y);
		rectMode(CENTER);
		fill(286,0,108);
		ellipse(0,0,this.r, this.r);
		pop();		
	}
}