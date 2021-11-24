function setup() {
  cnv=createCanvas(900, 400);
  cnv.parent('container');
  background(170, 170, 200);
  
}

class Shape {
  constructor(name, x, y) {
      this.name = name;
      this.x = x;
      this.y = y;
  }
  static draw(Shape) {
    switch (Shape.name) {
        case "square":
            square(Shape.x, Shape.y, Shape.s);
            break;
        case "rectangle":
            rect(Shape.x, Shape.y, Shape.w, Shape.h)
            break;
        case "ellipse":
            ellipse(Shape.x, Shape.y, Shape.r, Shape.r);
            break;
    }
  }
}

class Square extends Shape {
  constructor(name, x, y, s) {
      super(name, y, x);
      this.s = s;
  }
}
class Rectangle extends Shape {
  constructor(name, x, y, w, h) {
      super(name, y, x);
      this.w = w;
      this.h = h;
  }
}
class Ellipse extends Shape {
  constructor(name, x, y, r) {
      super(name, y, x);
      this.r = r;
  }
}

let shape = document.getElementById("shape");
let draw = document.getElementById("draw");
let selected;
let x = document.getElementById("x");
let y = document.getElementById("y");
let w = document.getElementById("w");
let h = document.getElementById("h");
let s = document.getElementById("s");
let r = document.getElementById("r");

shape.addEventListener('change', function(){
  selected = shape.options[shape.selectedIndex].value;
})

draw.addEventListener('click',function(){
  switch (selected) {
    case "square":
        let sqr = new Square(selected, x.value, y.value, s.value);
        Square.draw(sqr);
        break;
    case "rectangle":
        let rec = new Rectangle(selected, x.value, y.value, w.value, h.value);
        Rectangle.draw(rec);
        break;
    case "ellipse":
        let elp = new Ellipse(selected, x.value, y.value, r.value);
        Ellipse.draw(elp);document.getElementById(w).style.display="none"
        break;
}
})
// draw.addEventListener('click',function(){
//     if ( shape.selectedIndex = 1){
//       let sqr = new Square(selected, x.value, y.value, s.value);
//       Square.draw(sqr);
//     }else if ( shape.selectedIndex = 2){
//       let rec = new Rectangle(selected, x.value, y.value, w.value, h.value);
//       Rectangle.draw(rec);
//     }else {
//       let elp = new Ellipse(selected, x.value, y.value, r.value);
//       Ellipse.draw(elp);
//     }
// })