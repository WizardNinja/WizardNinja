<script setup>
import { profile } from '@/data/profile.js'
</script>

<template>
  <section id="about" class="section-alt sm-py-30 md-py-40">
    <div class="row sm-px-10 md-px-15">
      <div class="sm-12">
        <h2 class="section-title sm-f-large md-f-xlarge sm-mb-10 animate-fade-in">About Me</h2>
        <p class="section-subtitle sm-f-small sm-mb-20 animate-fade-in">Get to know me a little better</p>
      </div>

      <div class="sm-12 md-4 sm-mb-20 md-mb-0 animate-fade-left">
        <div class="about-image-wrapper">
          <div class="about-image" aria-hidden="true">
            WN
          </div>
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
