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
