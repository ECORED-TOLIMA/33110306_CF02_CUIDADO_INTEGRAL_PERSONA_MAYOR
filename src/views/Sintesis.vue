<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo aborda el bienestar y la participación de la persona mayor mediante actividades de ocio, tiempo libre y esparcimiento, el fortalecimiento de las redes de apoyo y el reconocimiento de entidades y servicios disponibles. Asimismo, desarrolla aspectos relacionados con la seguridad y adecuación del entorno, la identificación y prevención de riesgos en el hogar, los procesos de limpieza y desinfección, la movilización segura y la aplicación de principios de mecánica corporal. También fortalece estrategias de comunicación y acompañamiento respetuoso que favorecen la participación y autonomía, así como técnicas para valorar la percepción y satisfacción de la persona mayor, realizar el seguimiento y ajustar las actividades. Finalmente, aborda el autocuidado del cuidador y la proyección y promoción responsable del servicio de cuidado, incluyendo la presentación de sus capacidades y la elaboración de piezas publicitarias.
    .row.justify-content-center
      .col-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis se presenta la organización de los contenidos relacionados con el bienestar, la seguridad, la limpieza, la movilización, la comunicación, la evaluación de la satisfacción, el autocuidado y la promoción del servicio de cuidado de la persona mayor.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
