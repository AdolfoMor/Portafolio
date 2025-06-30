<!-- src/views/Contact.vue -->
<template>
  <section
  id="contact"
    class="snap-start h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 px-6 md:px-12 text-center"
  >
    <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
      Contáctame
    </h2>

    <p class="text-lg text-gray-600 dark:text-gray-300 mb-10">
      Estoy disponible para proyectos, colaboraciones o cualquier consulta.
    </p>

    <div class="flex flex-col gap-6 sm:flex-row sm:justify-center items-center">
      <!-- Teléfono -->
      <a
        href="tel:6711130016"
        class="flex items-center gap-3 px-6 py-4 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
          viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M3 5a2 2 0 012-2h1.586a1 1 0 01.707.293l2.828 2.828a1 1 0 01-.707 1.707H7a11.003 11.003 0 0011 11v-2.414a1 1 0 011.707-.707l2.828 2.828a1 1 0 01.293.707V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 4V3a2 2 0 012-2z"/>
        </svg>
        6711130016
      </a>

      <!-- Email -->
      <a
        href="mailto:adolfomorher@gmail.com"
        class="flex items-center gap-3 px-6 py-4 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
          viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M16 12l-4-4-4 4m8 0l-4 4-4-4"/>
        </svg>
        adolfomorher@gmail.com
      </a>
    </div>

    <div class="flex gap-6 mt-10">
      <!-- GitHub -->
      <a
        href="https://github.com/AdolfoMor"
        target="_blank"
        class="text-gray-700 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition"
      >
        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.2.8-.5v-1.8c-3.2.7-3.9-1.4-3.9-1.4-.5-1.1-1.3-1.4-1.3-1.4-1.1-.8.1-.8.1-.8 1.3.1 2 .9 2 .9 1 .1 1.6.6 2 .9.1-.8.4-1.4.7-1.7-2.6-.3-5.4-1.3-5.4-5.7 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.4-2.8 5.4-5.4 5.7.5.4.8 1.1.8 2.3v3.4c0 .3.2.6.8.5 4.5-1.5 7.8-5.8 7.8-10.9C23.5 5.65 18.35.5 12 .5z"/>
        </svg>
      </a>

      <!-- LinkedIn -->
      <a
        href="www.linkedin.com/in/adolfo-moreno-hernandez-9b4864201"
        target="_blank"
        class="text-gray-700 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition"
      >
        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48s1.34 2.98 2.98 2.98 2.98-1.34 2.98-2.98S6.62 3.5 4.98 3.5zM2.4 8.9H7.5V21H2.4V8.9zm6.1 0h4.8v1.6h.1c.7-1.3 2.4-2.7 5-2.7 5.3 0 6.3 3.5 6.3 8.1V21h-5.1v-6c0-1.4 0-3.1-1.9-3.1-1.9 0-2.2 1.5-2.2 3v6H8.5V8.9z"/>
        </svg>
      </a>
    </div>
  </section>
</template>
