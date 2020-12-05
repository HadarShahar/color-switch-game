class Plus {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.speed = 0.025;
        this.angleStart = 0;
    }

    show() {

        noStroke();

        let size = 7;
        push();
        translate(this.x, this.y);
        rotate(this.angleStart);
        for (let i = 0; i < colors.length; i++) {
            fill(colors[i]);
            triangle(0, 0, -size, -size, size, -size);
            if (i == colors.length - 1) {
                fill(colors[0]);
            } else {
                fill(colors[i + 1]);
            }
            rect(size, -size, this.r, size * 2, 0, 20, 20, 0);
            rotate(HALF_PI);
        }
        pop();
        this.angleStart += this.speed;


    }
}