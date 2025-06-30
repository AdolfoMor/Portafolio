<template>
  <section
    id="about"
    ref="sectionRef"
    :class="[
      'snap-start h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800 px-6 md:px-12 transition-all duration-700 ease-out',
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    ]"
  >
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
        Sobre mí
      </h2>
      <p class="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
        Soy Ingeniero en Sistemas con experiencia en desarrollo web fullstack. Me encanta construir interfaces limpias,
        rápidas y funcionales usando tecnologías modernas como Vue, Laravel y Tailwind CSS.
        Siempre estoy aprendiendo y explorando nuevas herramientas para mejorar mi trabajo.
      </p>

      <div class="flex flex-wrap justify-center gap-3">
        <span class="px-4 py-2 bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300 rounded-full text-sm font-medium">Vue.js</span>
        <span class="px-4 py-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 rounded-full text-sm font-medium">Laravel</span>
        <span class="px-4 py-2 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 rounded-full text-sm font-medium">JavaScript</span>
        <span class="px-4 py-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 rounded-full text-sm font-medium">Tailwind CSS</span>
        <span class="px-4 py-2 bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300 rounded-full text-sm font-medium">GitHub</span>
        <span class="px-4 py-2 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100 rounded-full text-sm font-medium">Docker</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const sectionRef = ref(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.unobserve(entry.target)
      }
    },
    { threshold: 0.3 }
  )

  if (sectionRef.value) observer.observe(sectionRef.value)
})
</script>

<style scoped></style>
