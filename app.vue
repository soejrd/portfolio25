<template>
  <Nav></Nav>
  <Fab />
  <main>
    <section id="section-hero" v-reveal-header>
      <Dots />
      <div class="container">
        <div class="hero">
          <h1 class="h1 h1_split" v-html="$t('section-hero.title')"></h1>
          <p class="p-l p_split" v-html="$t('section-hero.paragraph')"></p>
          <Button :to="'https://www.linkedin.com/in/sjoerdklatser'"
            >Let's connect</Button
          >
        </div>
      </div>
    </section>
    <section id="section-specs">
      <div class="container">
        <div class="hero">
          <h2 class="h2" v-fade>
            Brede interesses met jke moeder lorem ipsum dolor sit amet.
          </h2>
          <!-- <p class="p-m" v-fade>
            Leverage the power of serverless architecture to deliver your lorem
            ipsum dolor moeder ja noe euhef.
          </p> -->
        </div>
        <Specs3 v-fade />
      </div>
    </section>
    <section id="section-ervaring">
      <div class="container">
        <div class="main">
          <h2 class="h2" v-fade>
            {{ $t("section-ervaring.title") }}
            <NuxtLink to="https://www.uselab.com" target="_blank">
              Uselab
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M8.60016 4.41L3.94078 9.0825C3.83578 9.1875 3.71101 9.24 3.56646 9.24C3.42226 9.24 3.29766 9.1875 3.19266 9.0825C3.08766 8.9775 3.03516 8.85273 3.03516 8.70818C3.03516 8.56398 3.08766 8.43938 3.19266 8.33438L7.86516 3.675H3.87516C3.72641 3.675 3.60163 3.62477 3.50083 3.52432C3.40038 3.42352 3.35016 3.29875 3.35016 3.15C3.35016 3.00125 3.40038 2.87648 3.50083 2.77568C3.60163 2.67523 3.72641 2.625 3.87516 2.625H9.12516C9.27391 2.625 9.39851 2.67523 9.49896 2.77568C9.59976 2.87648 9.65016 3.00125 9.65016 3.15V8.4C9.65016 8.54875 9.59976 8.67335 9.49896 8.7738C9.39851 8.8746 9.27391 8.925 9.12516 8.925C8.97641 8.925 8.85181 8.8746 8.75136 8.7738C8.65056 8.67335 8.60016 8.54875 8.60016 8.4V4.41Z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </NuxtLink>
          </h2>
          <p class="p-m" v-fade v-html="$t('section-ervaring.paragraph')"></p>
        </div>
        <div class="sub" v-fade>
          <ul>
            <li
              v-for="(job, index) in jobs"
              :key="index"
              :class="[{ selected: selectedIndex === index }, 'job']"
              @mouseover="selectedIndex = index"
              @mouseout="selectedIndex = null"
            >
              <NuxtLink :to="job.link" target="_blank">
                <img
                  :src="job.image"
                  :alt="job.name"
                  width="64px"
                  height="64px"
                  :id="'img-' + job.name.toLowerCase()"
                />
                <div class="text">
                  <h5>{{ job.name }}</h5>
                  <h6>{{ job.title }}</h6>
                  <p>{{ job.duration }}</p>
                </div>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section id="section-end">
      <div class="container">
        <h3 class="h3" v-fade>Geïnteresseerd?</h3>
        <Button :to="'https://www.linkedin.com/in/sjoerdklatser'" v-fade
          >Let's connect</Button
        >
      </div>
    </section>
  </main>
</template>

<script setup>
import { gsap } from "gsap";
import SplitType from "split-type";
const { locales, setLocale } = useI18n();

let jobs = ref([
  {
    name: "Uselab",
    title: "Digital Product Designer",
    duration: "2024 - nu",
    image: "/uselab.jpg",
    link: "https://www.uselab.com",
  },
  {
    name: "Clutch",
    title: "Brand Designer",
    duration: "2024 - nu",
    image: "/clutch.jpg",
    link: "https://www.clutch.com", 
  },
  {
    name: "Endeavour",
    title: "Digital Designer",
    duration: "2016 - nu",
    image: "/endeavour.jpg",
    link: "https://www.endeavour.com", 
  },
]);

nextTick(() => {
  const tl_button = gsap.fromTo(
    "#section-hero .button",
    {
      opacity: 0,
      y: 10,
    },
    {
      opacity: 1,
      y: 0,
      delay: 0.6,
      duration: 0.4,
      clearProps: "all",
    }
  );
  tl_button.play();
});
</script>

<style lang="scss">
$color-text-secondary: #6c7176;
$color-text-primary: #131d28;
$color-text-primary-color: #003270;

body {
  margin: 0;
  padding: 0;
  font-family: "Geist", sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  //font-family: 'Geist', sans-serif;
  font-kerning: none;
}

section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container {
  max-width: 1200px;
  padding-left: 16px;
  padding-right: 16px;
}

h1 {
  font-style: normal;
  font-weight: 375;
  font-size: 74px;
  line-height: 120%;
  letter-spacing: -0.03em;

  color: $color-text-primary;

  em {
    font-style: normal;
    color: $color-text-primary-color;
  }
}

.p-l {
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 42px;

  color: #333333;
}

.v-fade-active {
  opacity: 1;
  transform: translateY(0px);
  transition: opacity 0.4s ease-out, transform 0.7s ease-out;
}
.v-fade-inactive {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.4s ease-out, transform 0.7s ease-out;
}

.reveal-header {
  h1,
  h2,
  p,
  button,
  a,
  img {
    position: relative;
    z-index: 1;
    font-kerning: none;
    .line {
      overflow: hidden;
      display: block;
    }
  }
}

#section-hero {
  height: 100vh;

  //background: linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), linear-gradient(180deg, #EFF1F1 15.85%, #D9DBDD 86.56%);
  //background: linear-gradient(180deg, #f4f4f4 100%, #ff00ff 10%);
  background: linear-gradient(180deg, #f4f4f4 50%, #e7e9ea 100%);

  .hero {
    display: flex;
    flex-direction: column;
    gap: 32px;
    z-index: 1;
    position: relative;
  }
  &::before {
    content: "";
    position: absolute;
    bottom: -30vh;
    left: 0;
    width: 100vw;
    height: 30vh;
    background: linear-gradient(180deg, transparent 0%, #e7e9ea 100%);
    z-index: 2;
  }
}

#section-specs {
  height: auto;
  //background: linear-gradient(180deg, #f4f4f4 100%, #E7E9EA 50%);
  background: linear-gradient(180deg, #e7e9ea 50%, #f4f4f4 100%);
  width: 100%;
  position: relative;
  z-index: -1;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(rgba(173, 216, 237, 1) 0%, rgba(173, 216, 237, 0) 100%);
    mix-blend-mode: color;
    //z-index: 4;
    opacity: 0.4;
    pointer-events: none;
    user-select: none;

  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .hero {
    max-width: 680px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    z-index: 4;
    position: relative;
    padding-bottom: 24px;

    h2 {
      text-align: center;
      color: #000000;
      font-family: "Geist";
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 120%;
      letter-spacing: -0.01em;
    }

    p {
      font-family: "Geist";
      font-style: normal;
      font-weight: 375;
      font-size: 18px;
      line-height: 23px;
      text-align: center;
      letter-spacing: -0.01em;
      color: #6c7176;
    }
  }
}

#section-ervaring {
  background: linear-gradient(180deg, #f4f4f4 50%, #e7e9ea 100%);

  .container {
    display: flex;
    flex-direction: row;
    gap: 100px;

    .main {
      width: 600px;
      display: flex;
      flex-direction: column;
      gap: 30px;

      h2 {
        font-style: normal;
        font-weight: 350;
        font-size: 64px;
        line-height: 77px;
        letter-spacing: -0.02em;
        color: #131d28;

        a {
          color: #003270;
          text-decoration: none;
          font-weight: 350;
          position: relative;

          background: linear-gradient(transparent, black);
          background-size: 0% 2px;
          background-repeat: no-repeat;
          background-position: 0% 100%;
          transition: all 150ms ease-out;
          display: inline-block;

          &:hover {
            background: linear-gradient(#76a1e6, #003270);
            background-size: 100% 2px;
            background-repeat: no-repeat;
            background-position: 0 100%;
            transform: translateX(4px);
          }

          svg {
            width: 24px;
            height: 24px;
            position: absolute;
            top: 0;
            right: -20px;
            color: $color-text-primary-color;
            opacity: 0.3;
          }
        }
      }

      p {
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 130%;
        letter-spacing: -0.02em;
        color: #6c7176;
      }
    }

    .sub {
      ul {
        display: flex;
        flex-direction: column;
        gap: 32px;
        // &:hover {
        //   li.job {
        //     opacity: 0.3;
        //     &:hover {
        //       opacity: 1;
        //     }
        //   }
        // }
        li.job {
          list-style: none;
          transition: all 200ms ease-out;

          &:hover {
            transform: translateX(5px);
          }

          a {
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            gap: 16px;
            min-width: 264px;
            text-decoration: none;
            color: black;

            img {
              &#img-uselab {
                box-shadow: 0px 4px 16px rgba(255, 0, 0, 0.2);
              }

              &#img-clutch {
                box-shadow: 0px 4px 16px rgba(0, 0, 255, 0.15);
              }

              &#img-endeavour {
                box-shadow: 0px 4px 16px rgba(69, 0, 76, 0.2);
              }
            }

            .text {
              display: flex;
              flex-direction: column;
              gap: 2px;
              flex-grow: 1;

              h5 {
                font-size: 16px;
                font-weight: 600;
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 6px;
              }

              h6 {
                color: $color-text-primary;
                font-size: 14px;
                font-weight: 400;
                padding-bottom: 2px;
                color: #131d28;
              }

              p {
                font-size: 14px;
                color: $color-text-secondary;
                font-weight: 400;
                line-height: 18px;
                letter-spacing: -0.01em;
              }
            }
          }
        }
      }
    }
  }
}

#section-end {
  background: linear-gradient(180deg, #e7e9ea 50%, #f4f4f4 100%);

  h3 {
    text-align: center;
    font-size: 36px;
  }
}

#section-specs,
#section-ervaring,
#section-end {
  //border-top: 1px solid red;
  min-height: 100vh;
  //background-color: #f2f2f2;
}
</style>
