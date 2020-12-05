class Ball {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = colors[floor(random(4))];
        this.speed = 1;
        this.acc = 0.2;
    }

    update() {
        this.speed += this.acc;
        this.y += this.speed;

        for (let i = 0; i < gameObjects.length; i++) {
            if (gameObjects[i] instanceof ColorChanger) {
                let d = dist(this.x, this.y, gameObjects[i].x, gameObjects[i].y);
                if (d < this.r + gameObjects[i].r) {
                    let newColor = colors[floor(random(4))];
                    while (newColor == this.color) {
                        newColor = colors[floor(random(4))];
                    }
                    this.color = newColor;
                    gameObjects.splice(i, 1);
                }
            }
        }
    }

    alive() {
        if (this.y + this.r >= height) {
            return false;
        }

        loadPixels();
        let d = pixelDensity();
        for (let y = floor(this.y) - this.r; y < floor(this.y) + this.r; y++) {
            for (let x = floor(this.x) - this.r; x < floor(this.x) + this.r; x++) {
                if (dist(x, y, this.x, this.y) <= this.r) {
                    let i = (x + y * width * d) * 4 * d;

                    let r = pixels[i];
                    let g = pixels[i + 1];
                    let b = pixels[i + 2];


                    colors.push(color(0, 0, 0));
                    colors.push(color(255, 255, 255));
                    let closestIndex = 0;
                    let closestDiff = 999;
                    for (let j = 0; j < colors.length; j++) {
                        let d = abs(red(colors[j]) - r) + abs(green(colors[j]) - g) + abs(blue(colors[j]) - b);
                        // let d = abs(red(colors[j]) + green(colors[j]) + blue(colors[j]) - (pixels[i] + pixels[i + 1] + pixels[i + 2]));
                        if (d < closestDiff) {
                            closestDiff = d;
                            closestIndex = j;
                        }
                    }
                    let test = red(colors[closestIndex]);
                    let test1 = green(colors[closestIndex]);
                    let test2 = blue(colors[closestIndex]);
                    colors.splice(colors.length - 2, 2);

                    // star problem 
                    if (pixels[i] == 112 && pixels[i + 1] == 112 && pixels[i + 2] == 112) {
                        test = 255;
                        test1 = 255;
                        test2 = 255;
                    }

                    // purple problem: 
                    let problems = [
                        [74, 10, 132],
                        [72, 9, 128],
                        [73, 9, 121],
                        [71, 9, 126],
                        [73, 9, 130],
                        [72, 9, 129],
                        [16, 9, 125]
                    ];
                    for (let problem of problems) {
                        if (pixels[i] == problem[0] && pixels[i + 1] == problem[1] && pixels[i + 2] == problem[2]) {
                            test = 141;
                            test1 = 19;
                            test2 = 252;
                        }
                    }



                    if (!(test == 0 && test1 == 0 && test2 == 0)) {
                        if (!(test == 255 && test1 == 255 && test2 == 255)) {
                            // if (!(pixels[i] == red(this.color) && pixels[i + 1] == green(this.color) && pixels[i + 2] == blue(this.color))) {
                            if (!(test == red(this.color) && test1 == green(this.color) && test2 == blue(this.color))) {
                                console.log(pixels[i], pixels[i + 1], pixels[i + 2], " --> ", test, test1, test2);
                                return false;
                            }
                        }
                    }

                    // for (let j = 0; j < colors.length; j++) {
                    //     if (red(colors[j]) == r && green(colors[j]) == g && blue(colors[j]) == b) {
                    //         if (!(pixels[i] == red(this.color) && pixels[i + 1] == green(this.color) && pixels[i + 2] == blue(this.color))) {
                    //             return false;
                    //         }
                    //     } else {
                    //         break;
                    //     }
                    // }






                    // pixels[i] = 0;
                    // pixels[i + 1] = 255;
                    // pixels[i + 2] = 0;
                    // pixels[i + 3] = 255;
                    // updatePixels();
                }
            }
        }
        return true;
    }


    jump() {
        this.speed = -4;
    }

    show() {
        if (this.y < height / 2) {
            for (let gameObject of gameObjects) {
                gameObject.y++;
            }
            this.y++;
        }
        noStroke();
        fill(this.color);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
}