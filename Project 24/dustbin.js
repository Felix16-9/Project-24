class dustbin{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.bodyWidth=200;
		this.bodyHeight=100;
		this.bodyThickness=20;
		this.angle=0;	
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.bodyWidth, this.bodyThickness, {isStatic:true});
		this.leftBody=Bodies.rectangle(this.x-this.bodyWidth/2, this.y-this.bodyHeight/2, this.bodyThickness, this.bodyHeight, {isStatic:true});
		Matter.Body.setAngle(this.leftBody, this.angle);
		

		this.rightBody=Bodies.rectangle(this.x+this.bodyWidth/2, this.y-this.bodyHeight/2, this.bodyThickness, this.bodyHeight, {isStatic:true});
		Matter.Body.setAngle(this.rightBody, -1*this.angle);
		World.add(world, this.bottomBody);
		World.add(world, this.leftBody);
		World.add(world, this.rightBody);

	}

	display(){
		push();
		translate(this.leftBody.position.x,this.leftBody.position.y);
		rectMode(CENTER);
		angleMode(RADIANS);
		fill(225);
		stroke(215);
		rotate(this.angle);
		rect(0,0,this.bodyThickness, this.bodyHeight);
		pop();

		push();
		translate(this.rightBody.position.x,this.rightBody.position.y);
		rectMode(CENTER);
		stroke(215);
		angleMode(RADIANS);
		fill(155);
		rotate(-1*this.angle);
		rect(0,0,this.bodyThickness, this.bodyHeight);
		pop();

		push();
		translate(this.bottomBody.position.x,this.bottomBody.position.y);
		rectMode(CENTER);
		stroke(321);
		angleMode(RADIANS);
		fill(184);
		rect(0,0,this.bodyWidth, this.bodyThickness);
		pop();	
	}
}