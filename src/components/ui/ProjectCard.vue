<script setup>
import { computed } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

// Generate a path-like display from the project title
const projectPath = computed(() => {
  const slug = props.project.title.toLowerCase().replace(/\s+/g, '-')
  return `~/projects/${slug}`
})
</script>

<template>
  <article class="card project-card">
    <div class="project-card-header" aria-hidden="true">
      <div class="terminal-dots">
        <span class="terminal-dot terminal-dot--red"></span>
        <span class="terminal-dot terminal-dot--yellow"></span>
        <span class="terminal-dot terminal-dot--green"></span>
      </div>
      <span class="project-card-path">{{ projectPath }}</span>
    </div>
    <div class="project-card-body sm-p-15">
      <h3 class="project-card-title sm-f-small md-f-medium sm-mb-5">{{ project.title }}</h3>
      <p class="project-card-description sm-f-tiny md-f-small sm-mb-10">{{ project.description }}</p>
      <ul class="project-card-tags" role="list" aria-label="Technologies used">
        <li v-for="tag in project.tags" :key="tag" class="project-tag sm-f-tiny">
          {{ tag }}
        </li>
      </ul>
    </div>
  </article>
</template>
