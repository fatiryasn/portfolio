(function () {
  class ScrollFadeUpManager {
    constructor(options = {}) {
      this.selector = options.selector || ".fade-up";
      this.threshold = options.threshold ?? 0.2;
      this.rootMargin = options.rootMargin || "0px 0px -60px 0px";
      this.visibleClass = options.visibleClass || "visible";
      this.observedElements = new Set();

      this.initObserver();
      this.observeElements();
      this.setupMutationObserver();
    }

    initObserver() {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(this.visibleClass);
              this.observer.unobserve(entry.target);
              this.observedElements.delete(entry.target);
            }
          });
        },
        {
          threshold: this.threshold,
          rootMargin: this.rootMargin,
        },
      );
    }

    observeElements() {
      document.querySelectorAll(this.selector).forEach((el) => {
        if (!this.observedElements.has(el)) {
          this.observer.observe(el);
          this.observedElements.add(el);
        }
      });
    }

    setupMutationObserver() {
      const mutationObserver = new MutationObserver(() => this.refresh());
      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
      });
      this.mutationObserver = mutationObserver;
    }

    refresh() {
      document.querySelectorAll(this.selector).forEach((el) => {
        if (
          !el.classList.contains(this.visibleClass) &&
          !this.observedElements.has(el)
        ) {
          this.observer.observe(el);
          this.observedElements.add(el);
        }
      });
    }

    destroy() {
      this.observer?.disconnect();
      this.mutationObserver?.disconnect();
      this.observedElements.clear();
    }
  }

  function initScrollFadeUp(config = {}) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => {
        window.fadeUpManager = new ScrollFadeUpManager(config);
      });
    } else {
      window.fadeUpManager = new ScrollFadeUpManager(config);
    }
  }

  initScrollFadeUp({ threshold: 0.2, rootMargin: "0px 0px -30px 0px" });
})();
