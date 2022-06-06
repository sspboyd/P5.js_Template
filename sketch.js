const s = (p55) => {
  let canvasW = 400;
  let canvasH = 400;

  p55.setup = () => {
    p55.createCanvas(canvasW, canvasH);
  };

  let render = function () {
    let pg = p55.createGraphics(canvasW, canvasH);
    pg.background(29, 123, 199);
    pg.fill(255);
    pg.rect(p55.mouseX, p55.mouseY, 47, 47);
    return pg;
  };

  p55.draw = () => {
    p55.image(render(), 0, 0);
  };
};
let myp5 = new p5(s);
