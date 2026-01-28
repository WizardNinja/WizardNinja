<script setup>
import { projects } from '@/data/projects.js'
import ProjectCard from '@/components/ui/ProjectCard.vue'
</script>

<template>
  <section id="projects" class="section-alt sm-py-30 md-py-40">
    <div class="row sm-px-10 md-px-15">
      <div class="sm-12">
        <h2 class="section-title sm-f-large md-f-xlarge sm-mb-10 animate-fade-in">Featured Projects</h2>
        <p class="section-subtitle sm-f-small sm-mb-20 animate-fade-in">Some of my recent work</p>
      </div>

      <div
        v-for="(project, index) in projects"
        :key="project.id"
        class="sm-12 md-6 lg-4 sm-p-5"
      >
        <ProjectCard
          :project="project"
          class="animate-scale"
          :style="{ transitionDelay: `${index * 100}ms` }"
        />
      </div>
    </div>
  </section>
</template>
