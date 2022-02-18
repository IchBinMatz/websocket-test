let socket;
function setup() {
	cvs = createCanvas(windowWidth,windowHeight);
	background(220);
	socket = io.connect("http://minecraft.matzklint.de:3000");
	cvs.touchMoved((e)=>{
		e.preventDefault();
		return false;
	});
	socket.on('mouse', (data) => {
		noStroke();
		fill(255,0,0);
		ellipse(data.x, data.y, 30,30);
	});
}

function mouseDragged() {
	noStroke();
	fill(0,255,0);
	ellipse(mouseX,mouseY,30,30);

	let data = {
		x: mouseX,
		y: mouseY
	};

	socket.emit("mouse", data);
}

function draw() {
}

