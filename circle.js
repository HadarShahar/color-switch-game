class Circle {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.speed = 0.04;
        this.angleStart = -PI;
    }

    show() {
        // strokeWeight(6);
        // noFill();
        // let start = this.angleStart;
        // for (let i = 0; i < colors.length; i++) {
        //     stroke(colors[i]);
        //     arc(this.x, this.y, this.r * 2, this.r * 2, start, start + HALF_PI);
        //     start += HALF_PI;
        // }

        noStroke();
        let start = this.angleStart;
        for (let i = 0; i < colors.length; i++) {
            fill(colors[i]);
            arc(this.x, this.y, this.r * 2, this.r * 2, start, start + HALF_PI);
            start += HALF_PI;
        }

        this.angleStart += this.speed;

        let thickness = 13;
        fill(0);
        ellipse(this.x, this.y, this.r * 2 - thickness, this.r * 2 - thickness);

    }
}