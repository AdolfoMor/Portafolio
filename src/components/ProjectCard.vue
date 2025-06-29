<template>
  <div class="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition overflow-hidden">
    <img
      :src="image"
      :alt="title"
      class="w-full h-48 object-cover"
    />
    <div class="p-5">
      <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">{{ title }}</h3>
      <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">{{ description }}</p>
      <a
        :href="link"
        target="_blank"
        class="text-indigo-600 hover:underline font-medium text-sm"
      >
        Ver proyecto →
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  link: String,
})
</script>
