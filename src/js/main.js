let x, y;
let angle = 0;
let defaultAngle = 25;
let lineLength = 5;

let start = "A"
let iterations = 4;

let rules = {
    "A": "AA+[+A-A-A]-[-A+A+A]"
}

function setup() {
    draw()
}

function draw() {
    canvas = createCanvas(600, 600, SVG)
    canvas.background(255)
    noLoop();

    stroke(0, 0, 0, 255);

    x = width / 2;
    y = height - height / 2;

    for (let i = 0; i < iterations; i++) {
        start = calc(start);
    }

    drawDefault(start)
}

function drawDefault(string) {
    resetMatrix();
    translate(width / 2, height);

    for (let letter of string) {
        if (letter == 'A') {
            line(0, 0, 0, -lineLength);

            let radius = 0;
            radius += random(0, 8);
            radius += random(0, 8);
            radius += random(0, 8);
            radius = radius / 3;

            translate(0, -lineLength);
        } else if (letter == '+') {
            rotate(radians(defaultAngle));
        } else if (letter == '-') {
            rotate(radians(-defaultAngle));
        } else if (letter == '[') {
            push();
        } else if (letter == ']') {
            pop();
        }
    }
}

function saveToSvg() {
    save("treeSVG.svg");
}
