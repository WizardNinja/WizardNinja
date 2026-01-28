import { ref, watch, onMounted } from 'vue'

const STORAGE_KEY = 'theme-preference'

export function useTheme() {
  const isDark = ref(false)

  const getSystemPreference = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  const getStoredPreference = () => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored !== null) {
      return stored === 'dark'
    }
    return null
  }

  const applyTheme = (dark) => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }

  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  watch(isDark, (newValue) => {
    applyTheme(newValue)
    localStorage.setItem(STORAGE_KEY, newValue ? 'dark' : 'light')
  })

  onMounted(() => {
    const stored = getStoredPreference()
    isDark.value = stored !== null ? stored : getSystemPreference()
    applyTheme(isDark.value)

    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (getStoredPreference() === null) {
        isDark.value = e.matches
      }
    })
  })

  return {
    isDark,
    toggleTheme
  }
}
