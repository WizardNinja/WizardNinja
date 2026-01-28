<script setup>
defineProps({
  href: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: false
  },
  index: {
    type: String,
    default: ''
  }
})

const scrollToSection = (e, href) => {
  e.preventDefault()
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <a
    :href="href"
    class="nav-link"
    :class="{ active }"
    :aria-current="active ? 'page' : undefined"
    @click="(e) => scrollToSection(e, href)"
  >
    <span v-if="index" class="nav-link-index" aria-hidden="true">{{ index }}.</span>
    <slot />
  </a>
</template>

<style scoped>
.nav-link {
  position: relative;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: color var(--transition-fast);
}

.nav-link-index {
  color: var(--color-text-muted);
  opacity: 0.5;
  margin-right: 0.25rem;
  font-size: 0.75rem;
}

.nav-link:hover,
.nav-link.active {
  color: var(--color-accent);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-accent);
  transition: width var(--transition-fast);
}

.nav-link.active::after,
.nav-link:hover::after {
  width: 100%;
}
</style>
