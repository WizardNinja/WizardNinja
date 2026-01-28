<script setup>
import { skills } from '@/data/skills.js'
import SkillBadge from '@/components/ui/SkillBadge.vue'
</script>

<template>
  <section id="skills" class="sm-py-30 md-py-40">
    <div class="row sm-px-10 md-px-15">
      <div class="sm-12">
        <h2 class="section-title sm-f-large md-f-xlarge sm-mb-5 animate-fade-in">Skills & Expertise</h2>
        <p class="section-subtitle sm-f-small sm-mb-20 animate-fade-in">Technologies I work with</p>
      </div>

      <div
        v-for="(category, index) in skills"
        :key="category.category"
        class="sm-12 md-6 lg-4 sm-p-10 animate-fade-in"
        :style="{ transitionDelay: `${index * 100}ms` }"
      >
        <div class="skills-category sm-mb-20">
          <h3 class="skills-category-title sm-f-small md-f-medium sm-mb-10">{{ category.category }}</h3>
          <ul class="skills-list stagger-children" role="list">
            <SkillBadge
              v-for="skill in category.items"
              :key="skill"
              :name="skill"
            />
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-title,
.section-subtitle {
  display: block;
  width: 100%;
}

.skills-category-title {
  font-weight: 600;
  color: var(--color-secondary);
  font-family: var(--font-mono);
}

.skills-category-title::before {
  content: '// ';
  opacity: 0.5;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
