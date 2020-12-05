class Square {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.speed = 0.03;
        this.particles = [];
        for (let color of colors) {
            for (let i = 0; i < 5; i++) {
                this.particles.push(color);
            }
        }
    }

    show() {
        noStroke();
        let space = 5;
        let particlesR = (this.r * 2 - 6 * space) / 5;

        // top
        let x = this.x - this.r + particlesR;
        let y = this.y - this.r;
        for (let i = 0; i < 5; i++) {
            fill(this.particles[i]);
            ellipse(x + i * (particlesR + space) + random(1), y, particlesR, particlesR);
        }

        // right
        x = this.x + this.r;
        y = this.y - this.r + particlesR;
        for (let i = 0; i < 5; i++) {
            fill(this.particles[i + 5]);
            ellipse(x, y + i * (particlesR + space) + random(1), particlesR, particlesR);
        }

        // bottom
        x = this.x + this.r - particlesR;
        y = this.y + this.r;
        for (let i = 0; i < 5; i++) {
            fill(this.particles[i + 10]);
            ellipse(x - i * (particlesR + space) + random(1), y, particlesR, particlesR);
        }

        // left
        x = this.x - this.r;
        y = this.y + this.r - particlesR;
        for (let i = 0; i < 5; i++) {
            fill(this.particles[i + 15]);
            ellipse(x, y - i * (particlesR + space) + random(1), particlesR, particlesR);
        }

        if (frameCount % 10 == 0) {
            let last = this.particles.pop();
            this.particles.splice(0, 0, last);
        }
    }
}