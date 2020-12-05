class DoubleCircle {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.leftSpeed = 0.02;
        this.rightSpeed = -this.leftSpeed;

        this.leftAngleStart = -PI;
        this.rightAngleStart = -HALF_PI;

    }

    show() {


        noStroke();
        let thickness = 10;

        let start = this.leftAngleStart;
        for (let i = 0; i < colors.length; i++) {
            fill(colors[i]);
            arc(this.x - this.r, this.y, this.r * 2, this.r * 2, start, start + HALF_PI);
            start += HALF_PI;
        }
        this.leftAngleStart += this.leftSpeed;
        fill(0);
        ellipse(this.x - this.r, this.y, this.r * 2 - thickness, this.r * 2 - thickness);


        let c1 = colors[1];
        colors[1] = colors[3];
        colors[3] = c1;
        start = this.rightAngleStart;
        for (let i = 0; i < colors.length; i++) {
            fill(colors[i]);
            arc(this.x + this.r, this.y, this.r * 2, this.r * 2, start, start + HALF_PI);
            start += HALF_PI;
        }
        this.rightAngleStart += this.rightSpeed;
        fill(0);
        ellipse(this.x + this.r, this.y, this.r * 2 - thickness, this.r * 2 - thickness);
        c1 = colors[1];
        colors[1] = colors[3];
        colors[3] = c1;

    }
}