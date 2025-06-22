<template>
  <div class="specs-component">
    <div class="connector-lines">
      <!-- <svg
        width="498"
        height="84"
        viewBox="0 0 498 84"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          :stroke="selectedCardIndex === 0 ? '#50A8B5' : 'rgba(0, 0, 0, 0.1)'"
          d="M217 84V84C217 65.6655 202.137 50.8024 183.802 50.8024H51.8024C23.745 50.8024 1 28.0574 1 0V0"
        />

        <path
          :stroke="selectedCardIndex === 1 ? '#50A8B5' : 'rgba(0, 0, 0, 0.1)'"
          d="M233 84V84C233 56.2204 210.48 33.7006 182.701 33.7006H158.701C140.088 33.7006 125 18.6123 125 0V0"
        />

        <path
          :stroke="selectedCardIndex === 2 ? '#50A8B5' : 'rgba(0, 0, 0, 0.1)'"
          d="M249 84C249 51.196 249 32.804 249 0"
        />
        <path
          :stroke="selectedCardIndex === 3 ? '#50A8B5' : 'rgba(0, 0, 0, 0.1)'"
          d="M265 84V84C265 56.2204 287.52 33.7006 315.299 33.7006H339.299C357.912 33.7006 373 18.6123 373 0V0"
        />

        <path
          :stroke="selectedCardIndex === 4 ? '#50A8B5' : 'rgba(0, 0, 0, 0.1)'"
          d="M281 84V84C281 65.6655 295.863 50.8024 314.198 50.8024H446.198C474.255 50.8024 497 28.0574 497 0V0"
        />
      </svg> -->
      <svg
        width="945"
        height="113"
        viewBox="0 0 945 113"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_2383_1118"
          style="mask-type: luminance"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="945"
          height="113"
        >
          <rect width="945" height="113" fill="url(#paint0_linear_2383_1118)" />
        </mask>
        <g mask="url(#mask0_2383_1118)">
          <path
            d="M472.5 1.1087C472.5 44.7188 472.5 69.1692 472.5 112.779"
            :stroke="selectedCardIndex === 2 ? '#50A8B5' : 'rgba(0, 0, 0, 0.1)'"
          />
          <path
            d="M442.328 1.1087V1.1087C442.328 38.0392 412.39 67.9773 375.459 67.9773H283.466C258.722 67.9773 238.664 88.0358 238.664 112.779V112.779"
            :stroke="selectedCardIndex === 1 ? '#50A8B5' : 'rgba(0, 0, 0, 0.1)'"
          />
          <path
            d="M502.673 1.1087V1.1087C502.673 38.0392 532.611 67.9773 569.541 67.9773H661.535C686.278 67.9773 706.337 88.0358 706.337 112.779V112.779"
            :stroke="selectedCardIndex === 3 ? '#50A8B5' : 'rgba(0, 0, 0, 0.1)'"
          />
          <path
            d="M412.155 1.1087V1.1087C412.155 25.4828 392.396 45.242 368.022 45.242H72.3634C35.0636 45.242 4.82617 75.4795 4.82617 112.779V112.779"
            :stroke="selectedCardIndex === 0 ? '#50A8B5' : 'rgba(0, 0, 0, 0.1)'"
          />
          <path
            d="M532.845 1.1087V1.1087C532.845 25.4828 552.604 45.242 576.978 45.242H872.637C909.936 45.242 940.174 75.4795 940.174 112.779V112.779"
            :stroke="selectedCardIndex === 4 ? '#50A8B5' : 'rgba(0, 0, 0, 0.1)'"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_2383_1118"
            x1="444.507"
            y1="0"
            x2="444.507"
            y2="113"
            gradientUnits="userSpaceOnUse"
          >
            <stop />
            <stop offset="0.509615" stop-color="white" />
            <stop offset="1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div class="specs-container">
      <div
        v-for="(button, index) in buttons"
        :key="index"
        :class="{
          'specs-card': true,
          selected: selectedCardIndex === index,
        }"
        @click="selectButton(index)"
      >
        <span v-html="button.icon"></span>
        <h4>{{ button.cardTitle }}</h4>
        <p>{{ button.cardText }}</p>
        <div class="specs-card-bg"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCardIndex = ref(0); // Initialize to 0 for first button selected

const buttons = ref([
  {
    icon: `<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_2350_1077)">
<mask id="mask0_2350_1077" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="29" height="29">
<rect x="0.199707" y="0.199219" width="28" height="28" fill="currentColor"/>
</mask>
<g mask="url(#mask0_2350_1077)">
<path d="M9.53369 21.1973L2.53369 14.1973L9.53369 7.19727L11.1962 8.85977L5.82953 14.2264L11.167 19.5639L9.53369 21.1973ZM18.867 21.1973L17.2045 19.5348L22.5712 14.1681L17.2337 8.8306L18.867 7.19727L25.867 14.1973L18.867 21.1973Z" fill="currentColor"/>
</g>
</g>
<defs>
<filter id="filter0_i_2350_1077" x="2.53369" y="7.19727" width="24.5002" height="15.1667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1.16667" dy="1.16667"/>
<feGaussianBlur stdDeviation="1.75"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.0573225 0 0 0 0 0.149038 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_2350_1077"/>
</filter>
</defs>
</svg>
`,
    cardTitle: "Designer at heart",
    cardText:
      "Lorem ipsum dolor sit met mit dem. achmed lorem tada et. Lorem ipsum dolor sit met mit dem. achmed lorem tada et.  dolor sit met mit dem.",
  },
  {
    icon: `<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_2350_1077)">
<mask id="mask0_2350_1077" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="29" height="29">
<rect x="0.199707" y="0.199219" width="28" height="28" fill="currentColor"/>
</mask>
<g mask="url(#mask0_2350_1077)">
<path d="M9.53369 21.1973L2.53369 14.1973L9.53369 7.19727L11.1962 8.85977L5.82953 14.2264L11.167 19.5639L9.53369 21.1973ZM18.867 21.1973L17.2045 19.5348L22.5712 14.1681L17.2337 8.8306L18.867 7.19727L25.867 14.1973L18.867 21.1973Z" fill="currentColor"/>
</g>
</g>
<defs>
<filter id="filter0_i_2350_1077" x="2.53369" y="7.19727" width="24.5002" height="15.1667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1.16667" dy="1.16667"/>
<feGaussianBlur stdDeviation="1.75"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.0573225 0 0 0 0 0.149038 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_2350_1077"/>
</filter>
</defs>
</svg>
`,
    cardTitle: "Card Two Title",
    cardText:
      "Lorem ipsum dolor sit met mit dem. achmed lorem tada et. Lorem ipsum dolor sit met mit dem. achmed lorem tada et.  dolor sit met mit dem.",
  },
  {
    icon: `<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_2350_1077)">
<mask id="mask0_2350_1077" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="29" height="29">
<rect x="0.199707" y="0.199219" width="28" height="28" fill="currentColor"/>
</mask>
<g mask="url(#mask0_2350_1077)">
<path d="M9.53369 21.1973L2.53369 14.1973L9.53369 7.19727L11.1962 8.85977L5.82953 14.2264L11.167 19.5639L9.53369 21.1973ZM18.867 21.1973L17.2045 19.5348L22.5712 14.1681L17.2337 8.8306L18.867 7.19727L25.867 14.1973L18.867 21.1973Z" fill="currentColor"/>
</g>
</g>
<defs>
<filter id="filter0_i_2350_1077" x="2.53369" y="7.19727" width="24.5002" height="15.1667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1.16667" dy="1.16667"/>
<feGaussianBlur stdDeviation="1.75"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.0573225 0 0 0 0 0.149038 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_2350_1077"/>
</filter>
</defs>
</svg>
`,
    cardTitle: "Card Three Title",
    cardText:
      "Lorem ipsum dolor sit met mit dem. achmed lorem tada et. Lorem ipsum dolor sit met mit dem. achmed lorem tada et.  dolor sit met mit dem.",
  },
  {
    icon: `<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_2350_1077)">
<mask id="mask0_2350_1077" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="29" height="29">
<rect x="0.199707" y="0.199219" width="28" height="28" fill="currentColor"/>
</mask>
<g mask="url(#mask0_2350_1077)">
<path d="M9.53369 21.1973L2.53369 14.1973L9.53369 7.19727L11.1962 8.85977L5.82953 14.2264L11.167 19.5639L9.53369 21.1973ZM18.867 21.1973L17.2045 19.5348L22.5712 14.1681L17.2337 8.8306L18.867 7.19727L25.867 14.1973L18.867 21.1973Z" fill="currentColor"/>
</g>
</g>
<defs>
<filter id="filter0_i_2350_1077" x="2.53369" y="7.19727" width="24.5002" height="15.1667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1.16667" dy="1.16667"/>
<feGaussianBlur stdDeviation="1.75"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.0573225 0 0 0 0 0.149038 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_2350_1077"/>
</filter>
</defs>
</svg>
`,
    cardTitle: "Card Four Title",
    cardText:
      "Lorem ipsum dolor sit met mit dem. achmed lorem tada et. Lorem ipsum dolor sit met mit dem. achmed lorem tada et.  dolor sit met mit dem.",
  },
  {
    icon: `<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_2350_1077)">
<mask id="mask0_2350_1077" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="29" height="29">
<rect x="0.199707" y="0.199219" width="28" height="28" fill="currentColor"/>
</mask>
<g mask="url(#mask0_2350_1077)">
<path d="M9.53369 21.1973L2.53369 14.1973L9.53369 7.19727L11.1962 8.85977L5.82953 14.2264L11.167 19.5639L9.53369 21.1973ZM18.867 21.1973L17.2045 19.5348L22.5712 14.1681L17.2337 8.8306L18.867 7.19727L25.867 14.1973L18.867 21.1973Z" fill="currentColor"/>
</g>
</g>
<defs>
<filter id="filter0_i_2350_1077" x="2.53369" y="7.19727" width="24.5002" height="15.1667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1.16667" dy="1.16667"/>
<feGaussianBlur stdDeviation="1.75"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.0573225 0 0 0 0 0.149038 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_2350_1077"/>
</filter>
</defs>
</svg>
`,
    cardTitle: "Card Five Title",
    cardText:
      "Lorem ipsum dolor sit met mit dem. achmed lorem tada et. Lorem ipsum dolor sit met mit dem. achmed lorem tada et.  dolor sit met mit dem.",
  },
]);

const selectButton = (index) => {
  selectedCardIndex.value = index;
};

const generateCurve = (index) => {
  const startX = 10 + index * 80; // Start position varies per button
  return `M ${startX},10 C ${startX},50 50,80 100,100`;
};
</script>

<style lang="scss">
$blue: #616bff;
$transition-duration: 400ms;

.specs-component {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  width: 100%;
}

.specs-container {
  display: flex;
  justify-content: space-between;
  //flex-wrap: wrap;
  width: 100%;
  gap: 20px;
  margin-bottom: 4px;
}

.specs-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-width: 200px;
  gap: 10px;
  aspect-ratio: 1;
  padding: 20px;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  //transition: all 150ms ease-out;
  box-shadow: 0px 0px 5px rgba(97, 107, 255, 0);
  background-color: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(52, 170, 255, 0.1);
  overflow: clip;
  transition: background-color calc($transition-duration/2) ease-out, transform calc($transition-duration/2) ease-out;

  span {
    width: 28px;
    height: 28px;
    position: absolute;
    right: 50%;
    top: 50%;
    transform: translate(50%, -50%);
    z-index: 1;
    svg {
      color: #cacaca;
      width: 28px;
      height: 28px;
    }
  }
  h4 {
    font-weight: normal;
    font-size: 12px;
    color: black;
    z-index: 1;
    
  }

  p {
    font-weight: 300;
    font-size: 14px;
    color: #ffffff;
    opacity: 0;
    z-index: 1;
    transform: translateY(4px);
    transition: all $transition-duration ease-out;
  }
  .specs-card-bg {
    position: absolute;
    display: block;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    object-fit: cover;
    border-radius: 8px;
    content: "";
    z-index: 0;
    background: radial-gradient(
        50% 50% at 50% 50%,
        #45d4ff 0%,
        #004373 100%
      )
      #34aaff;
    background-blend-mode: overlay, normal;
    opacity: 0;
    background-position: 0px 0px;
    animation: specs-card-bg 30s cubic-bezier(.1,0,.9,1) infinite;
    transition: opacity calc($transition-duration/2) ease-out;
  }

  // &:hover {
  //   box-shadow: 0px 5px 5px rgba(97, 107, 255, 0.1);
  //   svg {
  //     color: $blue;
  //   }
  // }
  &:hover{
    transform: translateY(-5px);
  }

  &.selected {
    transform: translateY(-5px);
    background-color: #34aaff;
    box-shadow: 0px 8px 12px rgba(0, 130, 157, 0.15);
    span {
      right: 8px;
      top: 8px;
      left: unset;
      transform: translate(0, 0);
      opacity: 0.5;
      svg {
        transform: scale(0.8);
      }
      color: white;
    }
    .specs-card-bg {
      opacity: 0.5;
    }
    h4 {
      color: white;
    }
    p {
      opacity: 1;
      transform: none;

    }
  }
}

.connector-lines {
  height: 113px;
  margin-bottom: 12px;
  box-sizing: content-box;
}

.card-container {
  display: flex;
  justify-content: center;
  position: relative;
  background-color: blue;
  min-height: 165px;

  .card {
    background-color: #ffffff;
    border-radius: 8px;
    padding: 32px;
    position: absolute;
    top: 0;
    transition: all 0.3s ease;
    width: 360px;
    height: 165px;
    text-align: left;
    //border: 1px solid rgba(0, 0, 0, 0.1);

    &.selected-card {
      z-index: 10;
      /* Highest z-index for selected card */
      transform: scale(1);
    }

    &.card-adjacent-left,
    &.card-adjacent-right {
      z-index: 5;
      /* Medium z-index for adjacent cards */
      transform: scale(0.95) translateX(0);
    }

    &.card-outer-left,
    &.card-outer-right {
      z-index: 1;
      /* Lowest z-index for outer cards */
      transform: scale(0.9) translateX(0);
    }

    &.card-adjacent-left {
      transform: scale(0.95) translateX(-20px);
      /* Adjust translation as needed */
    }

    &.card-adjacent-right {
      transform: scale(0.95) translateX(20px);
      /* Adjust translation as needed */
    }

    &.card-outer-left {
      transform: scale(0.9) translateX(-40px);
      /* Adjust translation as needed */
    }

    &.card-outer-right {
      transform: scale(0.9) translateX(40px);
      /* Adjust translation as needed */
    }

    &.card:not(.selected-card) {
      pointer-events: none;
      /* Make unselected cards non-interactive */
    }

    .card-content {
    }
  }
}

.card.selected-card .card-connector-line {
  display: block;
}

.card-downward-line {
  position: absolute;
  top: calc(163px + 0px);
  /* Position just below the card container */
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100px;
  /* Adjust height as needed */
  background: linear-gradient(to top, transparent, rgba(0, 0, 0, 0.1));
  /* Purple color */
}

@keyframes specs-card-bg {
  0% {
    background-position: 0px 0px;
  }

  50% {
    //transform: translate3d(100%, 100%, 0);
    background-position: 800px 200px;
  }
    100% {
    //transform: translate3d(100%, 100%, 0);
    background-position: 0px 0px;
  }
}
</style>
