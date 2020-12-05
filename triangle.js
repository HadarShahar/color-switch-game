class Triangle {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.speed = 0.025;
        this.angleStart = 0;
    }

    show() {


        let size = this.r;
        push();
        translate(this.x, this.y);
        rotate(this.angleStart);
        strokeWeight(5);

        stroke(colors[0]);
        line(-size, -size * 0.5, size, -size * 0.5);

        stroke(colors[1]);
        line(size, -size * 0.5, 0, 73.92);

        stroke(colors[3]);
        line(0, 73.92, -size, -size * 0.5);

        pop();
        this.angleStart += this.speed;


    }
}