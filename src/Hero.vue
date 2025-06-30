<template>
  <section
    ref="sectionRef"
    :class="[
      'snap-start flex flex-col items-center justify-center relative bg-white dark:bg-gray-900 px-6 md:px-12 transition-all duration-700 ease-out',
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
      'min-h-[70vh] md:h-screen'
    ]"
  >
    <div class="max-w-4xl text-center z-10">
      <h1 class="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-4">
        ¡Hola! Soy <span class="text-indigo-600">Adolfo</span>
      </h1>
      <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
        Ingeniero en Sistemas, apasionado por el desarrollo web y la tecnología.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#projects"
          class="px-6 py-3 text-white bg-indigo-600 rounded-lg shadow hover:bg-indigo-700 transition duration-300"
        >
          Ver proyectos
        </a>
        <a
          href="/cv.pdf"
          target="_blank"
          class="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition duration-300"
        >
          Descargar CV
        </a>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-12 md:bottom-20 flex justify-center">
      <div class="w-6 h-10 border-2 border-gray-400 dark:border-gray-300 rounded-full flex items-start justify-center p-1">
        <div class="w-1 h-1 bg-gray-400 dark:bg-gray-300 rounded-full animate-bounce"></div>
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

<style scoped>
@keyframes scroll-bounce {
  0%, 100% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(6px);
    opacity: 0.6;
  }
}

.animate-bounce {
  animation: scroll-bounce 1.2s infinite;
}
</style>
