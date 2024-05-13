function setup() { 
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0); // Set canvas position
    canvas.style('z-index', '-1'); // Set canvas z-index
      r = random(255);
      g = random(255);
      b = random(255);
      button = createButton("CHANGE BACKGROUND");
      button.mousePressed(changeColor);
      button.position(1000, 1000);
  } 
  
  function draw() { 
      background(r, g, b);
  }
  
  function changeColor(){
      r = random(255);
      g = random(255);
      b = random(255);
  }