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
