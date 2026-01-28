<script setup>
import NavLink from '@/components/ui/NavLink.vue'
import ThemeToggle from '@/components/ui/ThemeToggle.vue'

defineProps({
  isDark: {
    type: Boolean,
    required: true
  },
  activeSection: {
    type: String,
    default: 'hero'
  }
})

defineEmits(['toggle-theme'])

const navItems = [
  { href: '#about', label: 'About', index: '01' },
  { href: '#skills', label: 'Skills', index: '02' },
  { href: '#projects', label: 'Projects', index: '03' },
  { href: '#contact', label: 'Contact', index: '04' }
]
</script>

<template>
  <!-- Skip link for accessibility -->
  <a href="#main-content" class="skip-link">Skip to main content</a>

  <header class="header">
    <div class="header-inner row sm-px-10 md-px-15">
      <a href="#" class="header-logo">
        WizardNinja<span class="header-logo-cursor" aria-hidden="true"></span>
      </a>
      <nav class="header-nav" aria-label="Main navigation">
        <ul class="header-nav-list">
          <li class="sm-small" v-for="item in navItems" :key="item.href">
            <NavLink
              :href="item.href"
              :active="activeSection === item.href.slice(1)"
              :index="item.index"
            >
              {{ item.label }}
            </NavLink>
          </li>
        </ul>
        <ThemeToggle :is-dark="isDark" @toggle="$emit('toggle-theme')" />
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* Skip link for accessibility */
.skip-link {
  position: absolute;
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.75rem 1.5rem;
  background-color: var(--color-accent);
  color: #272822;
  font-family: var(--font-mono);
  font-weight: 600;
  border-radius: var(--radius-md);
  z-index: 9999;
  transition: top var(--transition-fast);
}

.skip-link:focus {
  top: 1rem;
  outline: 2px solid var(--color-text);
  outline-offset: 2px;
}

/* Header styles */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  background-color: rgba(250, 250, 250, 0.9);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border);
  z-index: 1000;
  transition: background-color var(--transition-normal), border-color var(--transition-normal);
}

[data-theme="dark"] .header {
  background-color: rgba(39, 40, 34, 0.9);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.header-logo {
  font-family: var(--font-mono);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-accent);
  text-decoration: none;
}

.header-logo::before {
  content: '$ ';
  color: var(--color-text-muted);
}

.header-logo-cursor {
  display: inline-block;
  width: 8px;
  height: 1.1em;
  background-color: var(--color-accent);
  margin-left: 2px;
  vertical-align: text-bottom;
  animation: blink-cursor 1s step-end infinite;
}

.header-nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.header-nav-list {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

@media (max-width: 759px) {
  .header-nav-list {
    display: none;
  }
}
</style>
