<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Autocuidado del cuidador
    p.mb-4(data-aos="fade-down") El autocuidado del cuidador comprende las acciones orientadas a conservar su bienestar físico, emocional y social mientras desarrolla las actividades de cuidado. Atender las propias necesidades permite mantener condiciones adecuadas para brindar un acompañamiento seguro, respetuoso y de calidad a la persona mayor.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t7/img01.svg', alt='')
      .col.col-lg-11.col-12.order-lg-2.order-2
        .cajon.cajon.c03.p-3
          p.mb-0(data-aos="fade-down") Las actividades de cuidado pueden implicar esfuerzo físico, responsabilidad y dedicación de tiempo. Por ello, es importante que el cuidador reconozca sus propios límites, identifique señales de cansancio o sobrecarga y adopte prácticas que contribuyan a su bienestar.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-6.col-12
        .tarjeta.tarjeta-c01.px-2.py-2.h-100
          p.mb-0.text-center Entre las principales acciones de autocuidado se encuentran:
    .row.mb-4
      .col-12
        .px-0.py-0
          .row.align-items-center.bg01(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-2
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/t7/img02.png", alt="")
            .col-lg-8.px-0.py-4
              SlyderF.custom.color-acento-botones.px-lg-5.py-0.px-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t7/img03.svg", alt="").img100.m-auto
                  h4 Alimentación e hidratación
                  p.text-center Mantener hábitos adecuados de alimentación y consumo de líquidos.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t7/img04.svg", alt="").img100.m-auto
                  h4 Descanso
                  p.text-center Establecer momentos suficientes para dormir y recuperar energía.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t7/img05.svg", alt="").img100.m-auto
                  h4 Actividad física
                  p.text-center Realizar actividades acordes con las propias condiciones y posibilidades.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t7/img06.svg", alt="").img100.m-auto
                  h4 Organización del tiempo
                  p.text-center Distribuir las responsabilidades y establecer prioridades.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t7/img07.svg", alt="").img100.m-auto
                  h4 Reconocimiento de límites
                  p.text-center Identificar cuándo una actividad supera las capacidades propias y solicitar apoyo cuando sea necesario.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t7/img08.svg", alt="").img100.m-auto
                  h4 Espacios personales
                  p.text-center Conservar actividades de interés, recreación y contacto con familiares o redes de apoyo.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t7/img09.svg", alt="").img100.m-auto
                  h4 Manejo emocional
                  p.text-center Reconocer emociones asociadas al cuidado y buscar orientación o apoyo cuando se requiera.
    p.mb-0(data-aos="fade-down") El autocuidado no significa dejar de cumplir las responsabilidades de cuidado, sino encontrar un equilibrio que permita proteger el bienestar del cuidador y favorecer la continuidad de una atención adecuada a la persona mayor.
</template>
<script>
export default {
  name: 'Tema7',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
