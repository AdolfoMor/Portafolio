<template>
  <section
    id="projects"
    ref="sectionRef"
    :class="[
      'snap-start min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-6 md:px-12 transition-all duration-700 ease-out scroll-mt-20',
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    ]"
  >
    <div class="max-w-6xl w-full text-center py-16">
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
import { ref, onMounted } from 'vue'
import ProjectCard from './ProjectCard.vue'

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

const projects = [
  {
    title: 'ICAT a Distancia',
    description:
      'ICAT a Distancia es una plataforma de capacitación en línea basada en Moodle, diseñada para ofrecer cursos gratuitos, gestión de usuarios, acceso a contenidos educativos y emisión automática de constancias digitales.',
    image: '/img/ICATADISTANCIA.png',
    link: 'https://icatadistancia.cdmx.gob.mx/',
  },
  {
    title: 'Certificación ICAT',
    description:
      'Una plataforma web desarrollada en Laravel que permite a los usuarios agendar citas para evaluaciones presenciales. El sistema gestiona el registro de usuarios, disponibilidad de fechas, asignación de evaluadores y generación de reportes.',
    image: '/img/CERTIFICACION.png',
    link: 'https://sii.icatadistancia.cdmx.gob.mx/',
  },
  {
    title: 'ICAT Digital',
    description:
      'Plataforma desarrollada con Laravel Jetstream para la gestión de cursos presenciales impartidos por el ICAT. Permite explorar cursos, registrarse y dar seguimiento en línea.',
    image: '/img/ICATDIGITAL.png',
    link: 'https://icatdigital.cdmx.gob.mx/',
  },
  {
    title: 'Eje Crítico',
    description:
      'Plataforma basada en Moodle con sistema de pago en línea mediante Stripe para la inscripción a cursos virtuales de costo.',
    image: '/img/EJECRITICO.png',
    link: 'https://plataforma.ejecritico.com/',
  },
]
</script>

<style scoped></style>
