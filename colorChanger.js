class ColorChanger {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    show() {
        noStroke();
        let start = -PI;
        for (let i = 0; i < colors.length; i++) {
            fill(colors[i]);
            arc(this.x, this.y, this.r * 2, this.r * 2, start, start + HALF_PI);
            start += HALF_PI;
        }
    }
}