<script setup>
import { profile } from '@/data/profile.js'
</script>

<template>
  <section id="contact" class="sm-py-30 md-py-40">
    <div class="row sm-px-10 md-px-15">
      <div class="sm-12">
        <h2 class="section-title sm-f-large md-f-xlarge sm-mb-5 animate-fade-in">Get In Touch</h2>
        <p class="section-subtitle sm-f-small sm-mb-20 animate-fade-in">Let's work together on your next project</p>
      </div>

      <div class="sm-12 md-6 lg-4 animate-fade-in" style="margin: 0 auto;">
        <div class="contact-info sm-mb-20">
          <div class="contact-item sm-f-tiny md-f-small sm-mb-10">
            <svg
              class="contact-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <a :href="`mailto:${profile.contact.email}`">{{ profile.contact.email }}</a>
          </div>
          <div class="contact-item sm-f-tiny md-f-small sm-mb-10">
            <svg
              class="contact-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>{{ profile.contact.location }}</span>
          </div>
          <div class="contact-item sm-f-tiny md-f-small sm-mb-10">
            <svg
              class="contact-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>{{ profile.contact.availability }}</span>
          </div>
        </div>

        <a :href="`mailto:${profile.contact.email}`" class="btn btn-primary btn-command" style="width: 100%;">
          Send Message
        </a>
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

.contact-info {
  display: flex;
  flex-direction: column;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
}

.contact-item::before {
  content: '>';
  color: var(--color-accent);
  opacity: 0.6;
}

.contact-icon {
  width: 20px;
  height: 20px;
  color: var(--color-secondary);
  flex-shrink: 0;
}
</style>
