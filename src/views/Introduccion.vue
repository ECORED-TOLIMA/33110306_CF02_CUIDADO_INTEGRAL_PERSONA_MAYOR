<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-2.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/intro/img01.png', alt='')
      .col.col-lg-8.col-12.order-lg-1.order-2
        p(data-aos="fade-down") El bienestar de la persona mayor comprende condiciones y experiencias que favorecen su calidad de vida, participación, autonomía y seguridad. Por ello, el cuidado requiere reconocer sus intereses, capacidades y necesidades, así como las características de su entorno y las redes de apoyo disponibles.
        .cajon.cajon.c01.color-secundario.px-4.py-3.mb-3
          p.mb-0 Este componente formativo aborda el ocio, el tiempo libre, las actividades de esparcimiento, las redes de apoyo y los servicios disponibles para la participación de la persona mayor. También desarrolla aspectos relacionados con la seguridad y adecuación del entorno, la limpieza y desinfección, la movilización segura, la mecánica corporal, la comunicación y el acompañamiento.
        p(data-aos="fade-down") Asimismo, se fortalecen conocimientos para valorar la percepción de bienestar y satisfacción de la persona mayor, realizar ajustes en las actividades y promover el autocuidado del cuidador. Estos elementos contribuyen a brindar un cuidado seguro, respetuoso y centrado en la persona.
        p.mb-0(data-aos="fade-down") Para complementar la comprensión de los temas abordados, se recomienda acceder al siguiente video.
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
