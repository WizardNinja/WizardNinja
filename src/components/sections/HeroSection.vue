<script setup>
import { profile } from '@/data/profile.js'
import { useTypingEffect } from '@/composables/useTypingEffect.js'

const { displayedText, isComplete } = useTypingEffect(profile.tagline, {
  typingSpeed: 40,
  startDelay: 800
})

const scrollToSection = (href) => {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section id="hero" class="hero">
    <div class="row">
      <div class="xs-12 sm-px-10 md-px-15">
        <div class="hero-content animate-fade-in">
          <h1 class="hero-title sm-f-xlarge md-f-huge sm-mb-10">
            Hi, I'm <span class="hero-title-accent">{{ profile.name }}</span>
          </h1>
          <p class="hero-tagline sm-f-small md-f-large sm-mb-20">
            {{ displayedText }}<span
              v-if="!isComplete"
              class="typing-cursor"
              aria-hidden="true"
            ></span>
          </p>
          <div class="hero-cta">
            <button class="btn btn-primary btn-command sm-m-5" @click="scrollToSection('#projects')">
              View My Work
            </button>
            <button class="btn btn-outline btn-command sm-m-5" @click="scrollToSection('#contact')">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: var(--header-height);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    linear-gradient(var(--color-border) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-border) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.3;
  pointer-events: none;
}

.hero::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(ellipse at center, transparent 0%, var(--color-bg) 70%);
  pointer-events: none;
}

.hero-content {
  text-align: center;
  position: relative;
  z-index: 1;
}

.hero-title {
  font-weight: 800;
  line-height: 1.1;
}

.hero-title-accent {
  color: var(--color-accent);
}

.hero-tagline {
  color: var(--color-text-muted);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  min-height: 1.5em;
}

.hero-cta {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
