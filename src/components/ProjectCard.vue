<template>
  <div>
    <!-- Card con efecto 3D -->
    <div
      ref="card"
      class="card-container bg-white dark:bg-gray-800 rounded-xl shadow-md transition duration-300 cursor-pointer overflow-hidden"
      @mousemove="handleMouse"
      @mouseleave="resetTilt"
      @click="open = true"
    >
      <img :src="image" :alt="title" class="w-full h-48 object-cover rounded-t-xl" />
      <div class="p-5">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">{{ title }}</h3>
        
      </div>
    </div>

    <!-- Modal -->
<div
  v-if="open"
  class="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4"
  @click.self="open = false"
>
  <div
    class="relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg w-full max-w-6xl flex flex-col md:flex-row p-4 gap-4 animate-fade-in"
  >
    <!-- Imagen (arriba en móvil, izquierda en escritorio) -->
    <div class="w-full md:w-[60%] p-2">
      <div class="rounded-xl overflow-hidden h-full">
        <img :src="image" :alt="title" class="w-full h-full object-cover" />
      </div>
    </div>

    <!-- Contenido (abajo en móvil, derecha en escritorio) -->
    <div class="w-full md:w-[40%] flex flex-col justify-center p-6 text-center md:text-left">
      <h2 class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
        {{ title }}
      </h2>
      <p class="text-gray-700 dark:text-gray-300 text-base leading-relaxed whitespace-pre-line">
        {{ description }}
      </p>
      <a
        v-if="link"
        :href="link"
        target="_blank"
        class="inline-block mt-6 text-indigo-600 hover:underline font-medium text-sm"
      >
        Ir al proyecto externo ↗
      </a>
    </div>

    <!-- Botón cerrar -->
    <button
      @click="open = false"
      class="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold"
    >
      &times;
    </button>
  </div>
</div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  title: String,
  description: String,
  image: String,
  link: String,
})

const card = ref(null)
const open = ref(false)

function handleMouse(e) {
  const el = card.value
  const rect = el.getBoundingClientRect()

  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  const centerX = rect.width / 2
  const centerY = rect.height / 2

  const rotateX = ((y - centerY) / centerY) * 10
  const rotateY = ((x - centerX) / centerX) * -10

  el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
}

function resetTilt() {
  const el = card.value
  el.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)'
}
</script>

<style scoped>
.card-container {
  will-change: transform;
  transform-style: preserve-3d;
  transform-origin: center;
  transition: transform 0.2s ease;
  user-select: none;
  overflow: hidden;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}
</style>
