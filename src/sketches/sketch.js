export default function sketch(p) {
    let s;
    let scl = 20;
    let goal;
    let gameWon = false;

    let windowWidth = 200;
    let windowHeight = 200;

    let walls = [];

    var drops = [];

    p.myCustomRedrawAccordingToNewPropsHandler = ({ windowSize }) => {
        windowWidth = p.floor(windowSize.width / 1.6);
        windowHeight = p.floor(windowSize.height / 1.6);
        p.resizeCanvas(windowWidth, windowHeight);
        reset();
    };

    p.setup = () => {
        p.createCanvas(windowWidth, windowHeight);
        reset();
        for (var i = 0; i < 30; i++) {
            drops[i] = new Drop();
        }
    };

    let reset = () => {
        walls = [];
        s = new Player();
        walls.push(new Wall(windowWidth / 2, windowHeight / 2, scl / 4, 1000));
        walls.push(
            new Wall(windowWidth / 1.5, windowHeight / 2, scl / 4, -1000)
        );
        walls.push(
            new Wall(windowWidth / 3.5, windowHeight / 2, scl / 4, -1000)
        );

        p.frameRate(20);
        pickLocation();
    };

    let pickLocation = () => {
        let cols = p.floor(p.width / scl);
        let rows = p.floor(p.height / scl);
        goal = p.createVector(p.floor(cols / 1.2), p.floor(rows / 2));
        goal.mult(scl);
    };

    p.draw = () => {
        if (gameWon) {
            p.background(255, 0, 255);
        } else {
            p.background(51);
        }

        if (s.win(goal)) {
            gameWon = true;
            s.stop();
            document.cookie = "isRobot=false";
            setTimeout(() => {
                document.location.href = "/";
            }, 500);
        }

        for (var i = 0; i < drops.length; i++) {
            drops[i].fall();
            drops[i].show();
        }

        s.update();
        s.show();

        for (let i = 0; i < walls.length; i++) {
            walls[i].show();
            if (s.crash(walls[i])) {
                reset();
            }
        }
        if (gameWon) {
            p.fill(0, 0, 255);
        } else {
            p.fill(0, 255, 0);
        }
        p.rect(goal.x, goal.y, scl * 2, scl * 2);
    };

    p.keyPressed = () => {
        if (p.keyCode === p.UP_ARROW) {
            s.dir(0, -1);
        } else if (p.keyCode === p.DOWN_ARROW) {
            s.dir(0, 1);
        } else if (p.keyCode === p.RIGHT_ARROW) {
            s.dir(1, 0);
        } else if (p.keyCode === p.LEFT_ARROW) {
            s.dir(-1, 0);
        }
    };

    function Wall(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.show = () => {
            p.fill(255, 0, 0);
            p.rect(this.x, this.y, this.w, this.h);
        };
    }

    function Player() {
        this.x = 0;
        this.y = windowHeight / 2;
        this.xspeed = 0;
        this.yspeed = 0;

        this.win = function (pos) {
            let d = p.dist(
                this.x + scl / 4,
                this.y + scl / 4,
                pos.x + scl / 2,
                pos.y + scl / 2
            );
            if (d < 20) {
                return true;
            } else {
                return false;
            }
        };

        this.crash = (wall) => {
            let direction;
            if (wall.h < 0) {
                direction = "ceil";
            } else {
                direction = "floor";
            }
            if (p.abs(this.x - wall.x) < scl / 2) {
                if (
                    (direction === "ceil" && this.y < wall.y + scl) ||
                    (direction === "floor" && this.y > wall.y - scl)
                ) {
                    return true;
                }
            }
            return false;
        };

        this.dir = function (x, y) {
            this.xspeed = x;
            this.yspeed = y;
        };

        this.update = function () {
            this.x = this.x + this.xspeed * scl;
            this.y = this.y + this.yspeed * scl;

            this.x = p.constrain(this.x, 0, p.width - scl);
            this.y = p.constrain(this.y, 0, p.height - scl);
        };

        this.show = function () {
            p.fill(255);
            p.rect(this.x, this.y, scl, scl);
        };

        this.stop = () => {
            this.xspeed = 0;
            this.yspeed = 0;
        };
    }

    function Drop() {
        this.x = p.random(windowWidth);
        this.y = p.random(-500, -50);
        this.z = p.random(0, 20);
        this.len = p.map(this.z, 0, 20, 10, 20);
        this.yspeed = p.map(this.z, 0, 20, 1, 20);

        this.fall = function () {
            this.y = this.y + this.yspeed;
            var grav = p.map(this.z, 0, 20, 0, 0.2);
            this.yspeed = this.yspeed + grav;

            if (this.y > windowHeight) {
                this.y = p.random(-200, -100);
                this.yspeed = p.map(this.z, 0, 20, 4, 10);
            }
        };

        this.show = function () {
            var thick = p.map(this.z, 0, 20, 1, 3);
            p.strokeWeight(thick);
            p.stroke(138, 43, 226);
            if (gameWon) {
                p.stroke(173, 216, 230);
            }
            p.line(this.x, this.y, this.x, this.y + this.len);
        };
    }
}
