var w = 800;
var h = 500;
var data;
var stopbutton;
var startbutton;
var start_sort = false;

function setup() {
  createCanvas(w, h);
  data = createArr();
  stopbutton = createButton("Reset visualisation");
  stopbutton.position(0, h + 20);
  stopbutton.mousePressed(stopSort);
  startbutton = createButton("Start Bubblesort");
  startbutton.position(0, h + 50);
  startbutton.mousePressed(startSort);
}

function draw() {
  background(0);
  translate(0, h);
  stroke(255);
  for (var i = 0; i < data.length; i++) {
    line(i, 0, i, -data[i]);
  }
  if (start_sort) {
    bubbleSort();
  }
}

function startSort() {
  start_sort = true;
}

function stopSort() {
  start_sort = false;
  data = createArr();
}

function bubbleSort() {
  var temp;
  for (var i = 0; i < data.length; i++) {
    if (data[i] > data[i + 1]) {
      temp = data[i];
      data[i] = data[i + 1];
      data[i + 1] = temp;
    }
  }
}

function createArr() {
  var arr = new Array(w);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = random(h - 20);
  }
  return arr;
}
