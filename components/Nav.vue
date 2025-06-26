<template>
  <nav ref="nav">
    <div class="container">
      <NuxtLink to="#">
        Linkedin
        <svg
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.3">
            <path
              d="M8.60016 4.41L3.94078 9.0825C3.83578 9.1875 3.71101 9.24 3.56646 9.24C3.42226 9.24 3.29766 9.1875 3.19266 9.0825C3.08766 8.9775 3.03516 8.85273 3.03516 8.70818C3.03516 8.56398 3.08766 8.43938 3.19266 8.33438L7.86516 3.675H3.87516C3.72641 3.675 3.60163 3.62477 3.50083 3.52432C3.40038 3.42352 3.35016 3.29875 3.35016 3.15C3.35016 3.00125 3.40038 2.87648 3.50083 2.77568C3.60163 2.67523 3.72641 2.625 3.87516 2.625H9.12516C9.27391 2.625 9.39851 2.67523 9.49896 2.77568C9.59976 2.87648 9.65016 3.00125 9.65016 3.15V8.4C9.65016 8.54875 9.59976 8.67335 9.49896 8.7738C9.39851 8.8746 9.27391 8.925 9.12516 8.925C8.97641 8.925 8.85181 8.8746 8.75136 8.7738C8.65056 8.67335 8.60016 8.54875 8.60016 8.4V4.41Z"
              fill="black"
            />
          </g>
        </svg>
      </NuxtLink>
      <div class="meta">
        <div class="main">
          <p>Amsterdam</p>
          <Clock />
        </div>
        <Toggle>p</Toggle>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { gsap } from "gsap";

const nav = ref(null);
onMounted(() => {
  gsap.from(nav.value, {
    opacity: 0,
    yPercent: -50,
    ease: "power1.out",
    delay: 1.5,
  });
});
</script>

<style lang="scss">
nav {
  position: fixed;
  width: 100%;
  top: 16px;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 99;

  .container {
    width: 100%;
    max-width: 1200px;
    padding: 12px;
    padding-left: 24px;
    padding-right: 16px;
    border-radius: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    transition: all 200ms ease-out;

    background-color: rgba(107, 170, 191, 0.05);
    box-shadow: 0px -1px 0px rgba(255, 255, 255, 0.3),
      0px 1px 0px rgba(0, 0, 0, 0.02);
    backdrop-filter: blur(2px);

    &:hover {
      backdrop-filter: blur(4px);
    }

    a {
      text-decoration: none;
      color: black;

      display: block;
      background: linear-gradient(transparent, black);
      background-size: 0% 1px;
      background-repeat: no-repeat;
      background-position: 0% 100%;
      transition: all 200ms ease-out;

      &:hover {
        background: linear-gradient(#76a1e6, #76a1e6);
        background-size: 100% 1px;
        background-repeat: no-repeat;
        background-position: 0 100%;
        color: #3367bb;
      }
    }

    .meta {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 32px;

      .main {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
        opacity: 0.5;
        transition: all 200ms;
        &:hover {
          opacity: 1;
        }
      }
    }
  }
}
</style>
