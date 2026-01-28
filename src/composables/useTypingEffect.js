import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Accessible typing effect composable with reduced-motion support
 * @param {string} fullText - The complete text to type out
 * @param {Object} options - Configuration options
 * @param {number} options.typingSpeed - Milliseconds between characters (default: 50)
 * @param {number} options.startDelay - Delay before typing starts (default: 500)
 */
export function useTypingEffect(fullText, options = {}) {
  const { typingSpeed = 50, startDelay = 500 } = options

  const displayedText = ref('')
  const isTyping = ref(false)
  const isComplete = ref(false)

  let timeoutId = null
  let charIndex = 0
  let prefersReducedMotion = false

  const typeNextChar = () => {
    if (charIndex < fullText.length) {
      displayedText.value = fullText.slice(0, charIndex + 1)
      charIndex++
      timeoutId = setTimeout(typeNextChar, typingSpeed)
    } else {
      isTyping.value = false
      isComplete.value = true
    }
  }

  const startTyping = () => {
    // Check for reduced motion preference
    prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      // Skip animation, show full text immediately
      displayedText.value = fullText
      isComplete.value = true
      return
    }

    isTyping.value = true
    charIndex = 0
    displayedText.value = ''

    timeoutId = setTimeout(() => {
      typeNextChar()
    }, startDelay)
  }

  const stopTyping = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      timeoutId = null
    }
    isTyping.value = false
  }

  const reset = () => {
    stopTyping()
    displayedText.value = ''
    isComplete.value = false
    charIndex = 0
  }

  onMounted(() => {
    startTyping()
  })

  onUnmounted(() => {
    stopTyping()
  })

  return {
    displayedText,
    isTyping,
    isComplete,
    startTyping,
    stopTyping,
    reset
  }
}
