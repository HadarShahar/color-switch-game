class Star {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.alive = true;
    }

    show() {
        if (this.alive) {

            // fill(50);
            // ellipse(this.x, this.y, 15, 15);

            if (dist(this.x, this.y, ball.x, ball.y) < ball.r + 7.5) {
                this.alive = false;
                score++;
            }

            if (this.alive) {
                let radius1 = 3;
                let radius2 = 7;
                let npoints = 5;

                fill(255);
                push();
                // translate(this.x, this.y);
                // rotate(60);

                // strokeWeight(10);
                // stroke(255, 0, 0);
                // point(0, 0);
                // noStroke();

                let angle = TWO_PI / npoints;
                let halfAngle = angle / 2.0;
                beginShape();
                for (let a = 0; a < TWO_PI; a += angle) {
                    let sx = this.x + cos(a) * radius2;
                    let sy = this.y + sin(a) * radius2;
                    vertex(sx, sy);
                    sx = this.x + cos(a + halfAngle) * radius1;
                    sy = this.y + sin(a + halfAngle) * radius1;
                    vertex(sx, sy);
                }
                endShape(CLOSE);

                pop();
            }
        }
    }

}