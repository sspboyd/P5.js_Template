const s = (p55) => {
  const PHI = (Math.sqrt(5) + 1) / 2; // I use PHI for layout ratios
  const sketch_name = "sspboyd"; // put this in the index.html canvas div too!

  let canvasW = 400;
  let canvasH = 400;
  // let copy_font;

  p55.preload = () => {
    // copy_font = p55.loadFont('assets/fonts/Georgia.ttf');
  };

  p55.setup = () => {
    c = p55.createCanvas(canvasW, canvasH);
    // c.parent(sketch_name); // used to associate this sketch with an html div id
  };

  p55.draw = () => {
    p55.background(29, 123, 199);
    p55.fill(255, 47);
    p55.strokeWeight(0.47);
    p55.stroke(255, 199);
    p55.rect(p55.mouseX - 18, p55.mouseY - 29, 47, 47, 4);
  };

  let exportImg = function () {
    let name = sketch_name; // String
    // generate date string: YYYY-MM-DD-HH-MM-SS
    let dt = new Date();
    let datetime = `${dt.getFullYear().toString()}${(dt.getMonth()+1).toString().padStart(2,'0')}${dt.getDate().toString().padStart(2,'0')}${dt.getHours().toString().padStart(2,'0')}${dt.getMinutes().toString().padStart(2,'0')}${dt.getSeconds().toString().padStart(2,'0')}`;
    let filename = `${name}-${datetime}`;
    console.log(`saving canvas to: ${filename}`);
    p55.saveCanvas(c, filename, 'png');
  };

  p55.keyTyped = () => {
    if (p55.key === 'S' || p55.key === 's') {
      exportImg();
    }
  };
};

let myp5 = new p5(s);