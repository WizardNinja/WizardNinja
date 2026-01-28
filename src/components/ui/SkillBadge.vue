<script setup>
defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>

<template>
  <li class="skill-badge sm-f-tiny md-f-small">{{ name }}</li>
</template>

<style scoped>
.skill-badge {
  display: inline-flex;
  align-items: center;
  position: relative;
  padding: 0.5rem 1rem;
  background-color: var(--color-bg-alt);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-family: var(--font-mono);
  color: var(--color-text);
  transition: all var(--transition-fast);
  cursor: default;
}

.skill-badge::before,
.skill-badge::after {
  font-family: var(--font-mono);
  color: var(--color-highlight);
  font-weight: 600;
  transition: opacity var(--transition-fast);
  opacity: 0;
}

.skill-badge::before {
  content: '<';
  margin-right: 0.25rem;
}

.skill-badge::after {
  content: '/>';
  margin-left: 0.25rem;
}

.skill-badge:hover,
.skill-badge:focus-visible {
  border-color: var(--color-highlight);
  color: var(--color-highlight);
}

.skill-badge:hover::before,
.skill-badge:hover::after,
.skill-badge:focus-visible::before,
.skill-badge:focus-visible::after {
  opacity: 1;
}
</style>
