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
      <h3 class="project-card-title sm-f-small md-f-medium sm-mb-5">
        <a v-if="project.link" :href="project.link" target="_blank" rel="noopener noreferrer" class="project-card-link">
          {{ project.title }}
          <svg
            class="project-link-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
        <template v-else>{{ project.title }}</template>
      </h3>
      <p class="project-card-description sm-f-tiny md-f-small sm-mb-10">{{ project.description }}</p>
      <ul class="project-card-tags" role="list" aria-label="Technologies used">
        <li v-for="tag in project.tags" :key="tag" class="project-tag sm-f-tiny">
          {{ tag }}
        </li>
      </ul>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  overflow: hidden;
}

.project-card-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background-color: var(--color-bg-alt);
  border-bottom: 1px solid var(--color-border);
}

.terminal-dots {
  display: flex;
  gap: 6px;
}

.terminal-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.terminal-dot--red {
  background-color: #ff5f56;
}

.terminal-dot--yellow {
  background-color: #ffbd2e;
}

.terminal-dot--green {
  background-color: #27ca41;
}

.project-card-path {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-text-muted);
  margin-left: auto;
}

.project-card-title {
  font-weight: 600;
  color: var(--color-accent);
}

.project-card-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: inherit;
  text-decoration: none;
}

.project-card-link:hover {
  color: var(--color-secondary);
}

.project-link-icon {
  width: 1em;
  height: 1em;
  opacity: 0.7;
  transition: opacity var(--transition-fast), transform var(--transition-fast);
}

.project-card-link:hover .project-link-icon {
  opacity: 1;
  transform: translate(2px, -2px);
}

.project-card-description {
  color: var(--color-text-muted);
  line-height: 1.6;
}

.project-card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.project-tag {
  font-family: var(--font-mono);
  padding: 0.25rem 0.75rem;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  color: var(--color-secondary);
  border-radius: var(--radius-sm);
}
</style>
