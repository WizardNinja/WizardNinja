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
    <div class="row sm-px-10 md-px-15">
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
  </section>
</template>
