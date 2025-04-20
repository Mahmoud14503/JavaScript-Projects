var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext('2d');
function dreawBackground() {
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'black' ;
}
dreawBackground();

class Player {
    constructor({position, velocity}) {
        this.position = position;
        this.velocity = velocity;
        this.rotation = 0;
    }
    drawPlayer() {
        context.save();
        context.translate(this.position.x, this.position.y);
        context.rotate(this.rotation);
        context.translate(-this.position.x, -this.position.y);

        context.arc(this.position.x, this.position.y, 5, 0, Math.PI * 2)
        // context.strokeStyle = 'red'
        // context.stroke()
        context.fillStyle = 'red'
        context.fill();
        
        context.beginPath();
        context.moveTo(this.position.x + 30, this.position.y);
        context.lineTo(this.position.x - 10, this.position.y - 10)
        context.lineTo(this.position.x - 10, this.position.y + 10)
        context.closePath();
        context.strokeStyle = 'white';
        context.stroke();

        context.restore();
    }
    updatePosition() {
        this.drawPlayer();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
};

const player1 = new Player({
    position : {x: canvas.width / 2, y: canvas.height / 2},
    velocity : {x: 0, y: 0}
});
// const player2 = new Player({
//     position: {x: 55, y: 55},
//     velocity: {x: 0, y: 0}
// });
player1.drawPlayer();
const keys = {
    w: {
        pressed: false,
    },
    s: {
        pressed: false,
    },
    a: {
        pressed: false,
    },
    d: {
        pressed: false,
    }
}   

const SPEED = 3;
const FRICTION = 0.98;
function animate() {
    requestAnimationFrame(animate);
    dreawBackground();
    player1.updatePosition();
    
    if (keys.w.pressed === true) {
        player1.velocity.x = Math.cos(player1.rotation) * SPEED;
        player1.velocity.y = Math.sin(player1.rotation) * SPEED;
    }
    else {
        player1.velocity.x *= FRICTION;  
        player1.velocity.y *= FRICTION;  
    }
    if (keys.d.pressed === true)
        player1.rotation += 0.045;
    if (keys.a.pressed === true)
        player1.rotation -= 0.045;
}
animate();
addEventListener('keydown', (e) => {
    switch (e.code)
    {
        case 'KeyW' :
            console.log('w has been pressed');
            keys.w.pressed = true;
            break;
        case 'KeyS' :
            console.log('s has been pressed');
            keys.s.pressed = true;
            break;
        case 'KeyA' :
            console.log('a has been pressed');
            keys.a.pressed = true;
            break;
        case 'KeyD' :
            console.log('d has been pressed');
            keys.d.pressed = true;
            break;
        }
        
    console.log(e);
})

addEventListener('keyup', (e) => {
    switch (e.code) {
        case 'KeyW' :
            console.log('w has been unpressd');
            keys.w.pressed = false;
            break;
        case 'KeyS' :
            console.log('s has been unpressd');
            keys.s.pressed = false;
            break;
        case 'KeyA' :
            console.log('a has been unpressd');
            keys.a.pressed = false;
            break;
        case 'KeyD' :
            console.log('d has been unpressd');
            keys.d.pressed = false;
            break;
    }
    console.log(e);
})