<script setup>
import { useTheme } from '@/composables/useTheme.js'
import { useScrollSpy } from '@/composables/useScrollSpy.js'
import { useAnimation } from '@/composables/useAnimation.js'

import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

const { isDark, toggleTheme } = useTheme()
const { activeSection } = useScrollSpy(['hero', 'about', 'skills', 'projects', 'contact'])
useAnimation()
</script>

<template>
  <TheHeader
    :is-dark="isDark"
    :active-section="activeSection"
    @toggle-theme="toggleTheme"
  />

  <main id="main-content" class="sm-f-small">
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
  </main>

  <TheFooter />
</template>
