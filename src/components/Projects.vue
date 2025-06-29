<template>
  <section id="projects" class="bg-gray-100 dark:bg-gray-900 py-16 px-6 md:px-12">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-12">
        Proyectos realizados
      </h2>

      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="index"
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :link="project.link"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue'

const projects = [
  {
    title: 'Sistema de Inventario',
    description: 'App web desarrollada con Vue y Laravel para gestionar productos y almacenes.',
    image: '/images/inventario.jpg',
    link: 'https://github.com/AdolfoMor/inventario',
  },
  {
    title: 'Portafolio Personal',
    description: 'Este mismo sitio, hecho con Vue 3, Vite y Tailwind CSS.',
    image: '/images/portafolio.jpg',
    link: 'https://github.com/AdolfoMor/portafolio',
  },
  {
    title: 'Plataforma de cursos',
    description: 'Sistema tipo Moodle para subir, administrar y visualizar cursos.',
    image: '/images/cursos.jpg',
    link: 'https://github.com/AdolfoMor/cursos',
  },
]
</script>
