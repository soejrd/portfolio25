export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('fade', {
    mounted(el) {
      el.classList.add('v-fade-inactive');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              el.classList.remove('v-fade-inactive');
              el.classList.add('v-fade-active');
              observer.unobserve(el);
            }
          });
        },
        {
          rootMargin: '0px 0px -200px 0px', // 100px from the bottom of the screen
          threshold: 0.1, // Trigger when 10% of the element is visible
        }
      );

      observer.observe(el);
    },
    beforeUnmount(el) {
      const observer = el.__vue_intersection_observer__;
      if (observer) {
        observer.unobserve(el);
      }
    }
  });
});