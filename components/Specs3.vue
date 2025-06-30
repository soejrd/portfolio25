<template>
  <div class="specs">
    <div class="specs__connector-lines">
      <svg
        width="945" 
        height="113"
        viewBox="0 0 945 113"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
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
            d="M442.328 1.1087V1.1087C442.328 38.0392 412.39 67.9773 375.459 67.9773H283.466C258.722 67.9773 238.664 88.0358 238.664 112.779V112.779"
            :stroke="selectedCardIndex === 1 ? '#45d4ff' : 'rgba(0, 0, 0, 0.1)'"
            style="transition: stroke 0.3s ease; will-change: stroke; transform: translateZ(0); backface-visibility: hidden; -webkit-backface-visibility: hidden"
          />
          <path
            d="M472.5 1.1087C472.5 44.7188 472.5 69.1692 472.5 112.779"
            :stroke="selectedCardIndex === 2 ? '#45d4ff' : 'rgba(0, 0, 0, 0.1)'"
            style="transition: stroke 0.3s ease; will-change: stroke; transform: translateZ(0); backface-visibility: hidden; -webkit-backface-visibility: hidden"
          />
          <path
            d="M502.673 1.1087V1.1087C502.673 38.0392 532.611 67.9773 569.541 67.9773H661.535C686.278 67.9773 706.337 88.0358 706.337 112.779V112.779"
            :stroke="selectedCardIndex === 3 ? '#45d4ff' : 'rgba(0, 0, 0, 0.1)'"
            style="transition: stroke 0.3s ease; will-change: stroke; transform: translateZ(0); backface-visibility: hidden; -webkit-backface-visibility: hidden"
          />
          <path
            d="M412.155 1.1087V1.1087C412.155 25.4828 392.396 45.242 368.022 45.242H72.3634C35.0636 45.242 4.82617 75.4795 4.82617 112.779V112.779"
            :stroke="selectedCardIndex === 0 ? '#45d4ff' : 'rgba(0, 0, 0, 0.1)'"
            style="transition: stroke 0.3s ease; will-change: stroke; transform: translateZ(0); backface-visibility: hidden; -webkit-backface-visibility: hidden"
          />
          <path
            d="M532.845 1.1087V1.1087C532.845 25.4828 552.604 45.242 576.978 45.242H872.637C909.936 45.242 940.174 75.4795 940.174 112.779V112.779"
            :stroke="selectedCardIndex === 4 ? '#45d4ff' : 'rgba(0, 0, 0, 0.1)'"
            style="transition: stroke 0.3s ease; will-change: stroke; transform: translateZ(0); backface-visibility: hidden; -webkit-backface-visibility: hidden"
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
    <div class="specs__container">
      <div
        v-for="(card, index) in cards"
        :key="index"
        :class="{
          'specs__card': true,
          'specs__card--selected': selectedCardIndex === index,
        }"
        @click="selectcard(index)"
        @mouseenter="handleMouseEnter(index)"
        @mouseleave="handleMouseLeave(index)"
      >
        <span v-html="card.icon"></span>
        <h4>{{ card.cardTitle }}</h4>
        <p>{{ card.cardText }}</p>
        <div class="specs__card-bg"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCardIndex = ref(0); // Initialize to 0 for first card selected
const selectionSource = ref("click"); // 'click' or 'hover'

const cards = ref([
  {
    icon: `<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_2427_991" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="29" height="29">
<rect x="0.45166" y="0.46875" width="28" height="28" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_2427_991)">
<path d="M9.78516 21.4648L2.78516 14.4648L9.78516 7.46484L11.4477 9.12734L6.08099 14.494L11.4185 19.8315L9.78516 21.4648ZM19.1185 21.4648L17.456 19.8023L22.8227 14.4357L17.4852 9.09818L19.1185 7.46484L26.1185 14.4648L19.1185 21.4648Z" fill="#CACACA"/>
</g>
</svg>`,
    cardTitle: "Designer at heart",
    cardText:
      "Lorem ipsum dolor sit met mit dem. achmed lorem tada et. Lorem ipsum dolor sit met mit dem. achmed lorem tada et.  dolor sit met mit dem.",
  },
  {
    icon: `<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_2427_991" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="29" height="29">
<rect x="0.45166" y="0.46875" width="28" height="28" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_2427_991)">
<path d="M9.78516 21.4648L2.78516 14.4648L9.78516 7.46484L11.4477 9.12734L6.08099 14.494L11.4185 19.8315L9.78516 21.4648ZM19.1185 21.4648L17.456 19.8023L22.8227 14.4357L17.4852 9.09818L19.1185 7.46484L26.1185 14.4648L19.1185 21.4648Z" fill="#CACACA"/>
</g>
</svg>`,
    cardTitle: "Card Two Title",
    cardText:
      "Lorem ipsum dolor sit met mit dem. achmed lorem tada et. Lorem ipsum dolor sit met mit dem. achmed lorem tada et.  dolor sit met mit dem.",
  },
  {
    icon: `<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_2427_991" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="29" height="29">
<rect x="0.45166" y="0.46875" width="28" height="28" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_2427_991)">
<path d="M9.78516 21.4648L2.78516 14.4648L9.78516 7.46484L11.4477 9.12734L6.08099 14.494L11.4185 19.8315L9.78516 21.4648ZM19.1185 21.4648L17.456 19.8023L22.8227 14.4357L17.4852 9.09818L19.1185 7.46484L26.1185 14.4648L19.1185 21.4648Z" fill="#CACACA"/>
</g>
</svg>`,
    cardTitle: "Card Three Title",
    cardText:
      "Lorem ipsum dolor sit met mit dem. achmed lorem tada et. Lorem ipsum dolor sit met mit dem. achmed lorem tada et.  dolor sit met mit dem.",
  },
  {
    icon: `<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_2427_991" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="29" height="29">
<rect x="0.45166" y="0.46875" width="28" height="28" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_2427_991)">
<path d="M9.78516 21.4648L2.78516 14.4648L9.78516 7.46484L11.4477 9.12734L6.08099 14.494L11.4185 19.8315L9.78516 21.4648ZM19.1185 21.4648L17.456 19.8023L22.8227 14.4357L17.4852 9.09818L19.1185 7.46484L26.1185 14.4648L19.1185 21.4648Z" fill="#CACACA"/>
</g>
</svg>`,
    cardTitle: "Card Four Title",
    cardText:
      "Lorem ipsum dolor sit met mit dem. achmed lorem tada et. Lorem ipsum dolor sit met mit dem. achmed lorem tada et.  dolor sit met mit dem.",
  },
  {
    icon: `<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_2427_991" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="29" height="29">
<rect x="0.45166" y="0.46875" width="28" height="28" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_2427_991)">
<path d="M9.78516 21.4648L2.78516 14.4648L9.78516 7.46484L11.4477 9.12734L6.08099 14.494L11.4185 19.8315L9.78516 21.4648ZM19.1185 21.4648L17.456 19.8023L22.8227 14.4357L17.4852 9.09818L19.1185 7.46484L26.1185 14.4648L19.1185 21.4648Z" fill="#CACACA"/>
</g>
</svg>`,
    cardTitle: "Card Five Title",
    cardText:
      "Lorem ipsum dolor sit met mit dem. achmed lorem tada et. Lorem ipsum dolor sit met mit dem. achmed lorem tada et.  dolor sit met mit dem.",
  },
]);

const selectcard = (index) => {
  // Remove hover class from all cards
  document.querySelectorAll('.specs__card').forEach(card => {
    card.classList.remove('specs__card--hovered');
  });
  
  selectedCardIndex.value = index;
  selectionSource.value = "click";
};

const handleMouseEnter = (index) => {
  const card = document.querySelectorAll(".specs__card")[index];
  card.classList.add('specs__card--hovered');
  selectedCardIndex.value = index;
  selectionSource.value = "hover";
};

const handleMouseLeave = (index) => {
  const card = document.querySelectorAll(".specs__card")[index];
  card.classList.remove('specs__card--hovered');
};

const generateCurve = (index) => {
  const startX = 10 + index * 80; // Start position varies per card
  return `M ${startX},10 C ${startX},50 50,80 100,100`;
};
onMounted(() => {
  const cards = document.querySelectorAll(".specs__card");
  
  // Set random rotation for each card and store as data attribute
  cards.forEach(card => {
    const rotation = Math.random() * 12 - 6; // Random between -6 and +6
    card.dataset.rotation = rotation;
    card.style.setProperty('--random-rotation', rotation);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view');
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => observer.observe(card));

  return () => cards.forEach(card => observer.unobserve(card));
});
</script>

<style lang="scss">
$blue: #616bff;
$transition-duration: 300ms;

.specs {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px;
  width: 100%;
}

.specs__container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 0px;
  margin-bottom: 4px;
  margin-left: 75px;
}

.specs__card {
  //flex-basis: 30%;
  will-change: transform;
  box-sizing: border-box;
  transition: transform $transition-duration ease-out;
  transform: rotate(calc(var(--random-rotation) * 1deg));
  
  &--hovered, &--selected {
    transform: rotate(0deg);
  }
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-width: 250px;
  margin-left: -75px;
  gap: 10px;
  aspect-ratio: 1;
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  background: rgba(245, 245, 245, 1);
  border: 2px solid rgba(255, 255, 255, 1);
  overflow: clip;
  box-shadow: 0px 8px 50px rgba(0, 0, 0, 0.05);

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
    font-size: 16px;
    color: #ffffff;
    opacity: 0;
    z-index: 1;
    transform: translateY(4px);
    transition: all $transition-duration ease-out;
  }
  .specs__card-bg {
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
    background: radial-gradient(50% 50% at 50% 50%, #45d4ff 0%, #004373 100%)
      #34aaff;
    background-blend-mode: overlay, normal;
    opacity: 0;
    background-position: 0px 0px;
    animation: specs-card-bg 20s cubic-bezier(0.1, 0, 0.9, 1) infinite paused;
    transition: opacity calc($transition-duration/2) ease-out;
  }

  &--selected .specs__card-bg {
    animation-play-state: running;
  }

  &--selected {
    --original-rotation: var(--random-rotation);
    transform: rotate3D(0, 0, 1, 0deg) scale(1.03) !important;
    z-index: 1;
    background-color: #34aaff;
    box-shadow: 0px 8px 12px rgba(0, 130, 157, 0.15);
    border: 2px solid rgba(255, 255, 255, 0.1);
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
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
    .specs__card-bg {
      opacity: 0.5;
    }
    h4 {
      color: white;
    }
    p {
      opacity: 1;
      transform: translateY(0px);
      
    }
  }
}

.specs__connector-lines {
  height: 113px;
  margin-bottom: 12px;
  box-sizing: content-box;
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
