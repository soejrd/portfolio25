<template>
  <div class="specs-component">
    <div class="button-container">
      <div
        v-for="(button, index) in buttons"
        :key="index"
        :class="{
          'selector-button': true,
          selected: selectedButtonIndex === index,
        }"
        @click="selectButton(index)"
      >
        <span v-html="button.icon"></span>
        <!-- <div class="connector-line"></div> -->
      </div>
    </div>
    <div class="connector-lines">
      <svg
        width="498"
        height="84"
        viewBox="0 0 498 84"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          :stroke="selectedButtonIndex === 0 ? '#50A8B5' : 'rgba(0, 0, 0, 0.1)'"
          d="M217 84V84C217 65.6655 202.137 50.8024 183.802 50.8024H51.8024C23.745 50.8024 1 28.0574 1 0V0"
        />

        <path
          :stroke="selectedButtonIndex === 1 ? '#50A8B5' : 'rgba(0, 0, 0, 0.1)'"
          d="M233 84V84C233 56.2204 210.48 33.7006 182.701 33.7006H158.701C140.088 33.7006 125 18.6123 125 0V0"
        />

        <path
          :stroke="selectedButtonIndex === 2 ? '#50A8B5' : 'rgba(0, 0, 0, 0.1)'"
          d="M249 84C249 51.196 249 32.804 249 0"
        />
        <path
          :stroke="selectedButtonIndex === 3 ? '#50A8B5' : 'rgba(0, 0, 0, 0.1)'"
          d="M265 84V84C265 56.2204 287.52 33.7006 315.299 33.7006H339.299C357.912 33.7006 373 18.6123 373 0V0"
        />

        <path
          :stroke="selectedButtonIndex === 4 ? '#50A8B5' : 'rgba(0, 0, 0, 0.1)'"
          d="M281 84V84C281 65.6655 295.863 50.8024 314.198 50.8024H446.198C474.255 50.8024 497 28.0574 497 0V0"
        />
      </svg>
    </div>

    <div class="card-container">
      <div
        v-for="(button, index) in buttons"
        :key="index"
        class="card"
        :class="{
          'selected-card': selectedButtonIndex === index,
          'card-adjacent-left': selectedButtonIndex === index + 1,
          'card-adjacent-right': selectedButtonIndex === index - 1,
          'card-outer-left': selectedButtonIndex === index + 2,
          'card-outer-right': selectedButtonIndex === index - 2,
        }"
      >
        <div class="card-content">
          <h4 class="h4">{{ button.cardTitle }}</h4>
          <p>{{ button.cardText }}</p>
        </div>
      </div>
      <div class="card-downward-line"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const selectedButtonIndex = ref(0); // Initialize to 0 for first button selected

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
  selectedButtonIndex.value = index;
};

const generateCurve = (index) => {
  const startX = 10 + index * 80; // Start position varies per button
  return `M ${startX},10 C ${startX},50 50,80 100,100`;
};
</script>

<style lang="scss">
$blue: #616bff;

.specs-component {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
}

.button-container {
  display: flex;
  justify-content: space-between;
  width: 552px;
  gap: 20px;
  margin-bottom: 4px;
}

.selector-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 68px;
  height: 68px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  transition: all 150ms ease-out;
  box-shadow: 0px 0px 5px rgba(97, 107, 255, 0);
  background: linear-gradient(white, white) padding-box,
    conic-gradient(
        from 90deg at 50% 50%,
        #7b7b7b 0deg,
        #ffffff 30.28deg,
        #7c7c7c 125.05deg,
        #f9f9f9 257.05deg,
        #7b7b7b 360deg,
        #ffffff 350deg
      )
      border-box;
  border: 1.2px solid transparent;
    span {
        width: 28px;
        height: 28px;
  svg {
    color: #cacaca;
    width: 28px;
    height: 28px;
  }
    }


  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 5px rgba(97, 107, 255, 0.1);

    svg {
      color: $blue;
    }
  }

  &.selected {
    background: linear-gradient(#e4fbfe, #e4fbfe) padding-box,
      conic-gradient(
          from 90deg at 50% 50%,
          #7b7b7b 0deg,
          #ffffff 30.28deg,
          #7c7c7c 125.05deg,
          #f9f9f9 257.05deg,
          #7b7b7b 360deg,
          #ffffff 350deg
        )
        border-box;
    box-shadow: 0px 8px 12px rgba(0, 130, 157, 0.15);
    svg {
      color: #50a8b5;
    }
  }
}

.connector-lines {
  height: 84px;
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
    border: 1px solid rgba(0, 0, 0, 0.1);

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
      .h4 {
        font-weight: bold;
        font-size: 16px;
        margin-bottom: 12px;
      }

      p {
        font-weight: 300;
        font-size: 14px;
        color: #808080;
      }
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
</style>
