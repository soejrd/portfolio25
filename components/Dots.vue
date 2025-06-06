<template>
    <!-- <canvas id="dots-canvas" ref="canvas"></canvas> -->
    <canvas id="gl-canvas" ref="canvas"></canvas>

</template>

<!-- <script setup>
import FastNoiseLite from "fastnoise-lite";
const devicePixelRatio = window.devicePixelRatio || 1;
console.log(devicePixelRatio);

const canvas = ref(null);

let ctx;

onMounted(() => {

    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.value.width = width * devicePixelRatio;
    canvas.value.height = height * devicePixelRatio;

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

                    ctx.moveTo(x1 + r1, y1);
                    ctx.arc(x1, y1, r1, 0, pi2);

                }
            }
        }
        ctx.closePath();
        ctx.fill();
        t += 2;
    }
}


function map(value, inMin, inMax, outMin, outMax) {
    return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}



</script> -->




<script setup>

const vertexShaderSource = `
  attribute vec2 a_position;

  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const fragmentShaderSource = `
  precision mediump float;

  uniform vec2 u_resolution;
  uniform float u_time;

  // --- New Uniforms for sketch parameters ---
  uniform float u_res_float;        // Corresponds to p5 'res' (e.g., 100.0)
  uniform float u_threshold;        // Noise threshold (e.g., 0.5)
  uniform float u_noise_freq;       // Noise frequency (e.g., 0.001)
  uniform float u_noise_time_scale; // Scales u_time for noise animation (e.g., 60.0)
  
  uniform vec3 u_fillColor;         // Main circle color (RGB)
  uniform float u_dot_opacity;      // Overall opacity for each dot
  uniform float u_dot_spacing;      // Spacing between dots in the series (normalized to resDist)

  // --- New Uniforms for FBM noise ---
  // REMOVED: uniform int u_fractalOctaves; // Hardcoded to 2 below
  uniform float u_fractalLacunarity;
  uniform float u_fractalGain;

  // --- Helper: Map function (like p5.js map) ---
  float map(float value, float inMin, float inMax, float outMin, float outMax) {
    return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
  }

  // --- 3D Simplex Noise (by Morgan McGuire & Stefan Gustavson) ---
  // ... (snoise code remains the same) ...
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472090914 * r; }

    float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 =   v - i + dot(i, C.xxx) ;

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );

    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
    vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

    i = mod289(i);
    vec4 p = permute( permute( permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

    float n_ = 0.142857142857; // 1.0/7.0
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );

    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                  dot(p2,x2), dot(p3,x3) ) );
  }


  // --- Fractal Brownian Motion (FBM) ---
  float fbm(vec3 p_in) {
    float total = 0.0;
    float amplitude = 1.0;
    float frequency = 1.0;
    vec3 p = p_in;

    // Hardcode octaves to 2, as in the original p5 sketch and to fix GLSL loop error
    for (int i = 0; i < 2; i++) { 
      total += snoise(p * frequency) * amplitude;
      frequency *= u_fractalLacunarity;
      amplitude *= u_fractalGain;
    }
    return total;
  }

  void main() {
    vec2 fragCoord = gl_FragCoord.xy;

    float resDist = max(u_resolution.x, u_resolution.y) / u_res_float;
    vec2 gridCellID = floor(fragCoord / resDist);
    vec2 cellCenterPx = (gridCellID + 0.5) * resDist;

    float noiseVal = fbm(vec3(cellCenterPx * u_noise_freq, u_time * u_noise_time_scale));
    noiseVal = (noiseVal + 1.0) / 2.0; 
    noiseVal = clamp(noiseVal, 0.0, 1.0);

    vec3 finalColor = vec3(0.0);
    float finalAlpha = 0.0;

    // Hardcoded number of dots (5) - unrolled loop for WebGL 1.0 compatibility
    // Calculate offset for each dot based on its index (0 to 4)
    // The center of the series will be at the original cellCenterPx
    // (float(i) - float(num_dots - 1) / 2.0) will give:
    // i=0: -2.0
    // i=1: -1.0
    // i=2:  0.0
    // i=3:  1.0
    // i=4:  2.0
    const int NUM_DOTS = 5;

    for (int i = 0; i < NUM_DOTS; ++i) {
      float offset_y = (float(i) - float(NUM_DOTS - 1) / 2.0) * resDist * u_dot_spacing;
      vec2 currentDotCenterPx = cellCenterPx + vec2(0.0, offset_y);

      float distToCenter = distance(fragCoord, currentDotCenterPx);

      if (noiseVal > u_threshold) {
        float radius = map(noiseVal, u_threshold, 1.0, 0.0, resDist / 4.0);
        radius = max(0.0, radius); 

        float aa = 1.5 / min(u_resolution.x, u_resolution.y);
        
        float circleStrength = smoothstep(radius + aa, radius - aa, distToCenter);
        
        finalColor += u_fillColor * circleStrength * u_dot_opacity;
        finalAlpha += circleStrength * u_dot_opacity;
      }
    }

    finalAlpha = min(finalAlpha, 1.0);
    gl_FragColor = vec4(finalColor, finalAlpha);
  }
`;



const canvasRef = useTemplateRef('canvas')



function main() {
    const canvas = canvasRef.value;
    const gl = canvas.getContext('webgl');
    if (!gl) {
        console.error("WebGL is not supported.");
        return;
    }

    // ---- ENABLE ALPHA BLENDING ----
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA); 

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    const program = createProgram(gl, vertexShader, fragmentShader);

    const positionAttributeLocation = gl.getAttribLocation(program, "a_position");
    const resolutionUniformLocation = gl.getUniformLocation(program, "u_resolution");
    const timeUniformLocation = gl.getUniformLocation(program, "u_time");

    // ---- Get new uniform locations ----
    const resFloatUniformLocation = gl.getUniformLocation(program, "u_res_float");
    const thresholdUniformLocation = gl.getUniformLocation(program, "u_threshold");
    const noiseFreqUniformLocation = gl.getUniformLocation(program, "u_noise_freq");
    const noiseTimeScaleUniformLocation = gl.getUniformLocation(program, "u_noise_time_scale");
    const fillColorUniformLocation = gl.getUniformLocation(program, "u_fillColor");
    const dotOpacityUniformLocation = gl.getUniformLocation(program, "u_dot_opacity");
    const dotSpacingUniformLocation = gl.getUniformLocation(program, "u_dot_spacing");
    
    const fractalLacunarityUniformLocation = gl.getUniformLocation(program, "u_fractalLacunarity");
    const fractalGainUniformLocation = gl.getUniformLocation(program, "u_fractalGain");

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const vertices = [-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    // ---- Define values for uniforms (from p5 sketch) ----
    const p5_res = 100.0;
    const p5_threshold = 0.5;
    const p5_t_increment_per_frame = 1.0;
    const p5_approx_fps = 30.0; // Original sketch was targeting 30 FPS for t updates
    const noise_time_scale_factor = p5_t_increment_per_frame * p5_approx_fps; // So u_time * this = equivalent p5 't'

    const noise_freq = 0.0005;
    const fractal_gain = 1.0;
    const fractal_lacunarity = 3.0;

    // Colors (converted from HSL in p5 sketch)
    // Fill: HSL(282, 89%, 50%) -> RGB(136, 20, 207)
    const fill_color_rgb = [170.0 / 255.0, 248.0 / 255.0, 255.0 / 255.0];

    // New dot series parameters
    const dot_spacing = 0.2; // Spacing between dots (0.0 = no space, 1.0 = one resDist apart)
    const dot_opacity = 1; // Opacity of each individual dot

    // --- Render Loop ---
    function render(time) {
        time *= 0.000005;  // convert time to seconds

        resizeCanvasToDisplaySize(gl.canvas);
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

        gl.clearColor(0, 0, 0, 0); // Clear to transparent black
        gl.clear(gl.COLOR_BUFFER_BIT);

        gl.useProgram(program);

        gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height);
        gl.uniform1f(timeUniformLocation, time);

        // ---- Set new uniforms ----
        gl.uniform1f(resFloatUniformLocation, p5_res);
        gl.uniform1f(thresholdUniformLocation, p5_threshold);
        gl.uniform1f(noiseFreqUniformLocation, noise_freq);
        gl.uniform1f(noiseTimeScaleUniformLocation, noise_time_scale_factor);
        gl.uniform3fv(fillColorUniformLocation, fill_color_rgb);
        gl.uniform1f(dotOpacityUniformLocation, dot_opacity);
        gl.uniform1f(dotSpacingUniformLocation, dot_spacing);

        gl.uniform1f(fractalLacunarityUniformLocation, fractal_lacunarity);
        gl.uniform1f(fractalGainUniformLocation, fractal_gain);


        gl.enableVertexAttribArray(positionAttributeLocation);
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        const size = 2; const type = gl.FLOAT; const normalize = false; const stride = 0; const offset = 0;
        gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset);

        const primitiveType = gl.TRIANGLES; const drawOffset = 0; const count = 6;
        gl.drawArrays(primitiveType, drawOffset, count);

        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
}

// --- Helper Functions ---

/**
 * Creates and compiles a shader.
 * @param {WebGLRenderingContext} gl The WebGL Context.
 * @param {number} type The shader type, gl.VERTEX_SHADER or gl.FRAGMENT_SHADER.
 * @param {string} source The GLSL source code for the shader.
 * @returns {WebGLShader} The created shader.
 */


 
function createShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (success) {
        return shader;
    }
    // Log error if compilation fails
    console.error(`Error compiling shader type ${type}:`);
    console.error(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
}

/**
 * Creates and links a WebGL program from vertex and fragment shaders.
 * @param {WebGLRenderingContext} gl The WebGL Context.
 * @param {WebGLShader} vertexShader The vertex shader.
 * @param {WebGLShader} fragmentShader The fragment shader.
 * @returns {WebGLProgram} The created program.
 */
function createProgram(gl, vertexShader, fragmentShader) {
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    const success = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (success) {
        return program;
    }
    // Log error if linking fails
    console.error("Error linking program:");
    console.error(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
}

/**
 * Resizes the canvas to match its display size.
 * This is important for high-DPI displays.
 * @param {HTMLCanvasElement} canvas The canvas to resize.
 * @returns {boolean} true if the canvas was resized.
 */
function resizeCanvasToDisplaySize(canvas) {
    const dpr = window.devicePixelRatio || 1;

    // Get the size the browser is displaying the canvas in CSS pixels.
    const displayWidthCSS  = canvas.clientWidth;
    const displayHeightCSS = canvas.clientHeight;

    // Calculate the actual number of pixels the canvas drawing buffer should have.
    const targetWidthPhysical = Math.round(displayWidthCSS * dpr);
    const targetHeightPhysical = Math.round(displayHeightCSS * dpr);

    // Check if the canvas's drawing buffer size is different from the target.
    if (canvas.width  !== targetWidthPhysical ||
        canvas.height !== targetHeightPhysical) {
        
        // Make the canvas drawing buffer the same size as the physical pixels.
        canvas.width  = targetWidthPhysical;
        canvas.height = targetHeightPhysical;
        return true;
    }
    return false;
}

// Run the main function when the document is ready.

onMounted(() => {
    main();
})




</script>

<style lang="scss" scoped>
#gl-canvas {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100vw;
    height: 100vh;
}
</style>
