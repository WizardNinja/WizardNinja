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
