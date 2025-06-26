<template>
  <!-- <div class="cursor" :style="{ left: `${x}px`, top: `${y}px` }"></div> -->
  <div
    class="line line-h line-h-l"
    :style="{ transform: `translate3D(${x}px, ${y}px, 0)` }"
  ></div>
  <div
    class="line line-h line-h-r"
    :style="{ transform: `translate3D(${x}px, ${y}px, 0)` }"
  ></div>
  <div
    class="line line-v line-v-t"
    :style="{ transform: `translate3D(${x}px, ${y}px, 0)` }"
  ></div>
  <div
    class="line line-v line-v-b"
    :style="{ transform: `translate3D(${x}px, ${y}px, 0)` }"
  ></div>
</template>

<script setup>
const x = ref(0);
const y = ref(0);

onMounted(() => {
  window.addEventListener("mousemove", (e) => {
    x.value = e.clientX;
    y.value = e.clientY;
  });
});
</script>

<style scoped lang="scss">
$blue: #009dff88;
$animation-duration: 4000ms;
$slope: 10%;
$bg-repeat: 33%;

.cursor {
  position: fixed;
  width: 5px;
  height: 5px;
  background-color: $blue;
  border-radius: 50%;
  z-index: 999;
}
.line {
  position: fixed;
  z-index: 999;
  pointer-events: none;
  user-select: none;
  &-h {
    background: linear-gradient(
      90deg,
      $blue 0%,
      transparent calc(100% - $slope)
    );
    background-repeat: repeat-x;
    background-position: 0vw 0vh;
    width: 100vmax;
    height: 1px;
    top: 0;
    animation: moveHorizontal $animation-duration linear infinite;

    &-l {
      background-size: $bg-repeat 100%;
      left: -100%;
      animation-direction: reverse;
    }
    &-r {
      background: linear-gradient(90deg, transparent $slope, $blue);
      background-size: $bg-repeat 100%;
      right: 0%;
    }
  }

  &-v {
    background: linear-gradient(180deg, transparent $slope, $blue);

    background-repeat: repeat-y;
    background-position: 0vw 0vh;
    width: 1px;
    height: 100vmax;
    left: 0;
    animation: moveVertical $animation-duration linear infinite;

    &-t {
      background: linear-gradient(
        180deg,
        $blue,
        transparent calc(100% - $slope)
      );
      background-size: 100% $bg-repeat;
      top: -100vmax;
      animation-direction: reverse;
    }
    &-b {
      top: 0;
      background: linear-gradient(180deg, transparent $slope, $blue);
      background-size: 100% $bg-repeat;
    }
  }
}

@keyframes moveHorizontal {
  0% {
    background-position: 0vw 0%;
  }
  100% {
    background-position: 100vmax 0%;
  }
}
@keyframes moveVertical {
  0% {
    background-position: 0% 0vh;
  }
  100% {
    background-position: 0% 100vmax;
  }
}
</style>
