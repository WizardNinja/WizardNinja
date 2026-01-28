import { onMounted, onUnmounted } from 'vue'

export function useAnimation() {
  let observer = null

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
      }
    })
  }

  const observe = (elements) => {
    if (!observer) return

    if (typeof elements === 'string') {
      document.querySelectorAll(elements).forEach((el) => {
        observer.observe(el)
      })
    } else if (elements instanceof Element) {
      observer.observe(elements)
    } else if (elements?.length) {
      elements.forEach((el) => observer.observe(el))
    }
  }

  onMounted(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      // Show all elements immediately
      document.querySelectorAll('.animate-fade-in, .animate-fade-left, .animate-fade-right, .animate-scale, .stagger-children').forEach((el) => {
        el.classList.add('is-visible')
      })
      return
    }

    observer = new IntersectionObserver(observerCallback, {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1
    })

    // Auto-observe common animation classes
    observe('.animate-fade-in, .animate-fade-left, .animate-fade-right, .animate-scale, .stagger-children')
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    observe
  }
}
