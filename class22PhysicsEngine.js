const Engine = Matter.Engine; //Universe
const World = Matter.World;  //Earth
const Bodies = Matter.Bodies;  //Physical Bodies
const Render = Matter.Render; //optional physics engine viewer/renderer

var myEngine, myWorld; //our engine and world objects for this file
var ground, ball; //physical bodies
var box;

function setup()
{
    createCanvas(800,500);

    //initialising myEngine and myWorld objects
    myEngine=Engine.create();
    myWorld = myEngine.world;

    //declaring options for the body in JSON format
    var groundOptions={
        isStatic:true        
    }
//optional -- to  render/view the physics engine bodies
    var render = Render.create({
	  element: document.body,
	  engine: myEngine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	//Engine.run(myEngine);
	Render.run(render); 

    //adding ground to the Physics Engine
    ground = Bodies.rectangle(400,480,800,20,groundOptions);
    World.add(myWorld, ground);
    console.log(ground)

    var heyHey={
        restitution:1.2,
        density:0.8
    }

    box=Bodies.rectangle(350,370,30,30,heyHey)
    World.add(myWorld,box);

    var ballOptions={
        isStatic:false,
        restitution:0.8,
        density:1.5
    }
    
    
    ball=Bodies.circle(300,100,25, ballOptions); //25 is the radius of the circle
    World.add(myWorld,ball);

}

function draw()
{
    background(0);

    Engine.update(myEngine); //refreshing myEngine in every frame-like drawSprites()
    //displaying the box using p5 rect Shape
    rectMode(CENTER);
    fill("yellow")
    rect(ground.position.x, ground.position.y, 800,20)

    fill("red");
    ellipseMode(CENTER);
    ellipse(ball.position.x, ball.position.y, 50);

fill('aqua');
rect(box.position.x,box.position.y,30,30)


}
