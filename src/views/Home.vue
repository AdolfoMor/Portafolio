<template>
  <main class="h-screen overflow-y-auto snap-y snap-mandatory">
    <Hero />
    <About />
    <Projects />
    <Contact />
  </main>
</template>

<script setup>
import Hero from '../Hero.vue'
import About from '../About.vue'
import Projects from '../components/Projects.vue'
import Contact from '../Contact.vue'
</script>
