<template>
    <canvas id="dots-canvas" ref="canvas"></canvas>
</template>

<script setup>
import FastNoiseLite from "fastnoise-lite";
const devicePixelRatio = window.devicePixelRatio || 1;
console.log(devicePixelRatio);

const canvas = ref(null);

let ctx;

onMounted(() => {




    // const styleWidth = parseFloat(getComputedStyle(canvas.value).width.replace('px', ''));
    // const styleHeight = parseFloat(getComputedStyle(canvas.value).height.replace('px', ''));

    const width = window.innerWidth;
    const height = window.innerHeight;




    canvas.value.width = width * devicePixelRatio;
    canvas.value.height = height * devicePixelRatio;

    //canvas.value.style.width = `${width}px`;
    // canvas.value.style.height = `${window.innerHeight}px`;

    ctx = canvas.value.getContext("2d");
    ctx.imageSmoothingEnabled = true;
    ctx.scale(devicePixelRatio, devicePixelRatio)



    res = 100;
    //resDist = canvas.value.offsetWidth / res
    resDist = Math.max(width, height) / res;
    isVisible = true;
    ctx.fillStyle = 'hsl(from #BA41F3 h s 50 / 1)';

    ctx.shadowColor = 'hsl(from #BA41F3 h s l / 0.5)';
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 16;



    generateDots();
    animate();
})




let dots = [];
let res;
let resDist;
let threshold = 0.5;
let t = 0;
let isVisible;


//---- image loading




//---- noise settings

let noise = new FastNoiseLite();
noise.SetSeed(Math.random() * 1000)
noise.SetNoiseType(FastNoiseLite.NoiseType.Perlin);
noise.SetFrequency(0.001)
noise.SetFractalType('FBm');
noise.SetFractalOctaves(2);
noise.SetFractalGain(1)
noise.SetFractalLacunarity(3)

// Constants for controlling frame rate
const desiredFPS = 30; // Your desired frame rate (e.g., 30 FPS)
const frameDuration = 1000 / desiredFPS; // Time per frame in milliseconds
let lastFrameTime = 0;

class Dot {
    constructor(x, y) {
        this.x = x * resDist;
        this.y = y * resDist;
        this.diameter = 0;
        this.toRender = false;
    }
    update() {
        if (this.x > canvas.value.width || this.y > canvas.value.height) {
            return;
        }
        this.noise = (noise.GetNoise(this.x, this.y, t) + 1) / 2;
        if (this.noise > threshold) {
            this.diameter = map(this.noise, threshold, 1, 0, 1) * resDist / 2;
            this.toRender = true;
        } else {
            this.diameter = 0;
            this.toRender = false;
        }
    }
    render() {
        // if (this.diameter == 0) {
        //     this.toRender = false;
        //     return
        // }
        // this.toRender = true;
        // ctx.fillStyle = '#BA41F3';
        // ctx.beginPath();
        // ctx.arc(this.x, this.y, this.diameter / 2, 0, Math.PI * 2);
        // ctx.fill();
        // ctx.closePath();
        //ctx.fillRect(this.x, this.y, this.diameter / 1.2, this.diameter / 1.2)
    }
}


function generateDots() {
    console.log('dots are being built..')
    dots = [];
    for (let x = 0; x < res; x++) {
        dots[x] = [];
        for (let y = 0; y < res; y++) {
            dots[x][y] = new Dot(x, y);
        }
    }
}

function animate(timestamp) {
    requestAnimationFrame(animate);
    // if (window.innerWidth <= 500) {
    //     return;
    // }

    // Calculate time elapsed since the last frame
    const elapsed = timestamp - lastFrameTime;

    // If not enough time has passed, skip this frame
    if (elapsed < frameDuration) {
        return;
    }
    if (isVisible) {
        ctx.clearRect(0, 0, canvas.value.width, canvas.value.height); // Clear the canvas
        const pi2 = Math.PI * 2;
        ctx.beginPath();

        for (let x = 0; x < res; x++) {
            for (let y = 0; y < res; y++) {
                dots[x][y].update();
                if (dots[x][y].toRender) {
                    let r1 = dots[x][y].diameter;
                    let x1 = dots[x][y].x;
                    let y1 = dots[x][y].y;

                    //const gradient = ctx.createRadialGradient(x1, y1, 0, x1, y1, r1 / 2);
                    // const gradient = ctx.createRadialGradient(x1, y1, 30, 100, 100, 700);
                    // gradient.addColorStop(0, "red");
                    // gradient.addColorStop(0.9, "white");
                    // gradient.addColorStop(1, "green");
                    // ctx.fillStyle = gradient;


                    ctx.moveTo(x1 + r1, y1);
                    //ctx.fillRect(x1, y1, 10, 10);
                    ctx.arc(x1, y1, r1, 0, pi2);

                }
            }
        }

        // const gradient = ctx.createRadialGradient(110, 90, 30, 100, 100, 70);
        // gradient.addColorStop(0, "pink");
        // gradient.addColorStop(0.9, "white");
        // gradient.addColorStop(1, "green");
        // // Set the fill style and draw a rectangle
        // ctx.fillStyle = gradient;
        // ctx.fillRect(20, 20, 160, 160);


        ctx.closePath();
        ctx.fill();
        t += 2;
    }
}


function map(value, inMin, inMax, outMin, outMax) {
    return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}



</script>

<style lang="scss" scoped>
#dots-canvas {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100vw;
    height: 100vh;
}
</style>