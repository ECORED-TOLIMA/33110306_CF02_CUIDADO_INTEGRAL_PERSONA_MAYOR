<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Proyección y promoción del servicio de cuidado
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-2.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t8/img01.jpg', alt='')
      .col.col-lg-8.col-12.order-lg-2.order-2
        p.mb-4 El cuidado de la persona mayor requiere conocimientos, habilidades y actitudes que permiten brindar un acompañamiento seguro, respetuoso y centrado en sus necesidades. Reconocer estas capacidades, facilita al cuidador proyectar su labor y comunicar de manera clara los servicios que puede ofrecer dentro de su ámbito de actuación.
        .cajon.cajon.c02.color-primario.p-4
          p.mb-0(data-aos="fade-down") La promoción del servicio de cuidado implica presentar las capacidades, actividades y condiciones de atención de forma responsable, utilizando información clara y evitando ofrecer servicios o procedimientos que excedan su formación o competencias. También es importante destacar aspectos como el trato digno, el respeto por la autonomía, la seguridad y la atención centrada en la persona mayor.
    separador
    #t_8_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.1 Perfil y capacidades del cuidador
    p(data-aos="fade-down") El cuidador de la persona mayor desempeña un papel fundamental en el acompañamiento y apoyo para el desarrollo de las actividades cotidianas. Su labor requiere conocimientos, habilidades y actitudes que permitan responder de manera responsable a las necesidades de la persona, respetando su autonomía, dignidad, preferencias y nivel de dependencia.
    p.mb-4(data-aos="fade-down") Entre las principales capacidades del cuidador se encuentran:
    .row.justify-content-center.mb-4
      .col.col-lg-8.col-12.mb-md-0.order-lg-1.order-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta-c03")
          .row(titulo="Conocimientos para el cuidado")
            .col-12.mb-0.mb-md-0
              p Comprende aspectos relacionados con las actividades básicas cotidianas, seguridad, higiene, alimentación, movilización y bienestar de la persona mayor.
          .row(titulo="Habilidades de comunicación")
            .col-12.mb-0.mb-md-0
              p Establece relaciones basadas en la escucha, el respeto, la empatía y el trato digno.
          .row(titulo="Capacidad de observación")
            .col-12.mb-0.mb-md-0
              p Identifica cambios en el estado, comportamiento o necesidades de la persona mayor y comunica oportunamente las situaciones que requieran atención.
          .row(titulo="Organización")
            .col-12.mb-0.mb-md-0
              p Planifica las actividades de cuidado de acuerdo con las necesidades, preferencias y rutinas de la persona.
      .col.col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t8/img02.png', alt='')
    .row.justify-content-center.mb-4
      .col.col-lg-8.col-12.mb-md-0.order-lg-2.order-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta-c03")
          .row(titulo="Responsabilidad")
            .col-12.mb-0.mb-md-0
              p Cumple los acuerdos establecidos y actúa dentro de los límites de sus conocimientos y capacidades.
          .row(titulo="Promoción de la autonomía")
            .col-12.mb-0.mb-md-0
              p Facilita la participación de la persona mayor y proporciona únicamente el apoyo que requiere.
          .row(titulo="Trabajo con redes de apoyo")
            .col-12.mb-0.mb-md-0
              p Reconoce la importancia de la familia, la comunidad y otros actores en el bienestar de la persona mayor.
          .row(titulo="Autocuidado")
            .col-12.mb-0.mb-md-0
              p Reconoce sus propios límites y adopta prácticas que favorecen su bienestar y la continuidad de un cuidado adecuado.
      .col.col-lg-4.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t8/img03.png', alt='')
    p.mb-4(data-aos="fade-down") Estas capacidades permiten al cuidador proyectar su labor de manera responsable y comunicar sus servicios con claridad, sin atribuirse funciones o competencias que correspondan a otros profesionales.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-10.col-12
        .cajon.cajon.c02.color-primario.p-4
          p.mb-0(data-aos="fade-down") Se recomienda mantener una formación continua en temas relacionados con cuidado básico de la persona mayor, primeros auxilios, prevención de caídas, movilización segura, alimentación, higiene y bioseguridad, comunicación, salud mental, manejo de situaciones de riesgo y autocuidado del cuidador. La selección de las capacitaciones debe responder a las necesidades de la persona mayor y a las actividades que desarrolla el cuidador.
    separador
    #t_8_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.2 Presentación y promoción del servicio
    p(data-aos="fade-down") La presentación y promoción del servicio de cuidado permite comunicar de manera clara las capacidades, actividades y condiciones en las que se ofrece el acompañamiento a la persona mayor. Una presentación adecuada debe transmitir confianza y mostrar el compromiso con un cuidado respetuoso, seguro y centrado en las necesidades de cada persona.
    p.mb-4(data-aos="fade-down") Para presentar el servicio, es importante incluir información concreta que facilite a las personas interesadas conocer la oferta y determinar si responde a sus necesidades. Entre los principales elementos se encuentran:
    .row.justify-content-center
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t8/img04.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Nombre del servicio
            h5.t2.mb-2 Nombre del servicio
            p.mb-0 Debe ser claro y relacionado con las actividades de cuidado ofrecidas.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t8/img05.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Descripción
            h5.t2.mb-2 Descripción
            p.mb-0 Explica brevemente el propósito del servicio y el tipo de acompañamiento que se proporciona.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t8/img06.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Servicios ofrecidos 
            h5.t2.mb-2 Servicios ofrecidos 
            p.mb-0 Especifica las actividades que puede desarrollar el cuidador, de acuerdo con sus capacidades y formación.
    .row.justify-content-center
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t8/img07.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Perfil del cuidador
            h5.t2.mb-2 Perfil del cuidador
            p.mb-0 Presenta los conocimientos, habilidades y experiencia relacionados con el cuidado.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t8/img08.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Condiciones del servicio
            h5.t2.mb-2 Condiciones del servicio
            p.mb-0 Informa sobre horarios, disponibilidad, zona de atención y otras condiciones acordadas.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t8/img09.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Datos de contacto
            h5.t2.mb-2 Datos de contacto
            p.mb-0 Proporciona los medios mediante los cuales las personas interesadas pueden solicitar información.
    p.mb-0(data-aos="fade-down") La promoción debe utilizar información veraz, clara y responsable, evitando atribuir al cuidador competencias profesionales que no posee o garantizar resultados relacionados con la salud. De esta manera, la comunicación del servicio contribuye a generar confianza y facilita que la persona mayor, su familia o su red de apoyo tomen decisiones informadas.
    separador
    #t_8_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.3 Elaboración de una pieza publicitaria
    p.mb-4(data-aos="fade-down") La elaboración de una pieza publicitaria permite presentar de manera atractiva, clara y responsable un servicio de cuidado dirigido a personas mayores y sus familias. Esta herramienta facilita comunicar las capacidades del cuidador, las actividades que puede desarrollar y los medios disponibles para establecer contacto.
    .row.mb-4
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t8/img10.svg' alt='')
          .tarjeta.color-primario.w-100
            .p-4
              h4.text-center Nombre o título del servicio
              p.mb-0.text-center Debe ser breve y fácil de identificar.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t8/img11.svg' alt='')
          .tarjeta.color-primario
            .p-4
              h4.text-center Mensaje principal
              p.mb-0.text-center Comunica el propósito del servicio y su valor para la persona mayor.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t8/img12.svg' alt='')
          .tarjeta.color-primario
            .p-4
              h4.text-center Servicios ofrecidos
              p.mb-0.text-center Presenta las actividades de cuidado y acompañamiento que puede realizar el cuidador.
    .row.mb-4
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t8/img13.svg' alt='')
          .tarjeta.color-primario
            .p-4
              h4.text-center Perfil o capacidades
              p.mb-0.text-center Destaca conocimientos, habilidades o formación relacionados con el cuidado.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t8/img14.svg' alt='')
          .tarjeta.color-primario
            .p-4
              h4.text-center Información de contacto
              p.mb-0.text-center Incluye nombre, teléfono, correo u otro medio de comunicación.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t8/img15.svg' alt='')
          .tarjeta.color-primario
            .p-4
              h4.text-center Condiciones del servicio
              p.mb-0.text-center Puede indicar disponibilidad, horarios y zona de atención, cuando corresponda.
    p.mb-4(data-aos="fade-down") La información debe ser clara, veraz y respetuosa, evitando promesas relacionadas con resultados de salud o la oferta de procedimientos que requieran competencias profesionales diferentes a las del cuidador.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Ejemplo de pieza publicitaria
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/t8/img16.svg', alt='En la Figura 1 se presenta un ejemplo de pieza publicitaria para promocionar un servicio de cuidado y acompañamiento a personas mayores, con información sobre servicios ofrecidos y datos de contacto.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/temas/t8/img17.svg', alt='En la Figura 1 se presenta un ejemplo de pieza publicitaria para promocionar un servicio de cuidado y acompañamiento a personas mayores, con información sobre servicios ofrecidos y datos de contacto.')
    p.mb-0(data-aos="fade-down") Esta actividad permite integrar los conocimientos desarrollados y proyectar las capacidades del cuidador mediante una comunicación responsable de su servicio.
</template>
<script>
export default {
  name: 'Tema8',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
