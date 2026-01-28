<script setup>
import { profile } from '@/data/profile.js'
</script>

<template>
  <section id="about" class="section-alt sm-py-30 md-py-40">
    <div class="row sm-px-10 md-px-15">
      <div class="sm-12">
        <h2 class="section-title sm-f-large md-f-xlarge sm-mb-5 animate-fade-in">About Me</h2>
        <p class="section-subtitle sm-f-small sm-mb-20 animate-fade-in">Get to know me a little better</p>
      </div>

      <div class="sm-12 md-4 sm-mb-20 md-mb-0 animate-fade-left">
        <div class="about-image-wrapper">
          <img src="/self.jpg" alt="Photo of me" class="about-image" />
        </div>
      </div>
      <div class="sm-12 md-8 animate-fade-right">
        <div class="about-text">
          <p v-for="(paragraph, index) in profile.bio" :key="index" class="sm-f-small sm-mb-10">
            {{ paragraph }}
          </p>
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

.about-image-wrapper {
  display: flex;
  justify-content: center;
}

.about-image {
  width: 200px;
  height: 200px;
  border-radius: var(--radius-md);
  object-fit: cover;
  border: 2px solid var(--color-border);
}

.about-text {
  color: var(--color-text-muted);
  line-height: 1.8;
}

.about-text p {
  margin-bottom: 1rem;
}
</style>
