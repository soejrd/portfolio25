// plugins/heroReveal.js
import { gsap } from "gsap";
import SplitType from "split-type";


export default defineNuxtPlugin((nuxtApp) => {
  parallel: true,
    nuxtApp.vueApp.directive("reveal-header", {
      mounted(element, binding, globalThis) {
        if (import.meta.client) {
          element.classList.add("reveal-header");
          const h1_elements = element.querySelectorAll("h1");
          if (h1_elements.length > 0) {
            h1_elements.forEach((e, i) => {
              const h1_split = SplitType.create(e, {
                types: "characters, words, lines",
              })
              gsap.fromTo(
                h1_split.words,
                {
                  opacity: 0.5,
                  yPercent: 100,
                },
                {
                  opacity: 1,
                  yPercent: 0,
                  stagger: {
                    amount: 0.4,
                  },
                  ease: "power2.out",
                  duration: 0.6,
                }
              );
            });
          }
                    const p_elements = element.querySelectorAll("p");
          if (p_elements.length > 0) {
            p_elements.forEach((e, i) => {
              const p_split = SplitType.create(e, {
                types: "characters, words, lines",
              })
              gsap.fromTo(
                p_split.chars,
                {
                  opacity: 0.5,
                  yPercent: 100,
                },
                {
                  opacity: 1,
                  yPercent: 0,
                  delay: 0.4,
                  ease: "power2.out",
                  duration: 0.5,
                }
              );
            });
          }
      }
    },
    });
});

