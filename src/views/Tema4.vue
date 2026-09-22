<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Movilización y mecánica corporal
    p.mb-4(data-aos="fade-down") La movilización de la persona mayor comprende las acciones orientadas a facilitar cambios de posición, desplazamientos y transferencias de manera segura, respetando sus capacidades y nivel de autonomía. Para realizar estas actividades, el cuidador debe aplicar principios de mecánica corporal que permitan proteger tanto a la persona mayor como a quien brinda el cuidado.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t4/img01.jpg', alt='')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.c02.color-primario.p-4.mb-4
          p.mb-0 Una movilización inadecuada puede aumentar el riesgo de caídas, golpes, lesiones musculoesqueléticas o pérdida de confianza para realizar actividades cotidianas. Por ello, antes de movilizar, es importante valorar las condiciones de la persona, preparar el espacio, explicar lo que se realizará y favorecer su participación.
        p.mb-0(data-aos="fade-down") La asistencia debe ser proporcional a la necesidad de apoyo. Cuando la persona puede realizar una parte del movimiento, el cuidador debe facilitar su participación en lugar de ejecutar toda la acción. Asimismo, cuando la movilización supera las capacidades del cuidador o requiere procedimientos especializados, se debe solicitar el apoyo correspondiente.
    p.mb-0(data-aos="fade-down") En este apartado se abordan los principios de mecánica corporal, las posturas y movimientos adecuados, el manejo físico y la movilización segura, así como el uso de ayudas técnicas y las medidas para prevenir lesiones. Estos conocimientos permiten desarrollar prácticas de cuidado que favorecen la seguridad, autonomía, comodidad y dignidad de la persona mayor, al tiempo que protegen la integridad física del cuidador.
    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Mecánica corporal
    .bloque-texto-g.bloque-texto-g--inverso.cajon.c04.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/img02.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") La mecánica corporal es el conjunto de principios que permiten utilizar el cuerpo de manera adecuada durante actividades que requieren mantener una postura, realizar movimientos, levantar, sostener o movilizar objetos o personas. Su aplicación busca distribuir mejor el esfuerzo y disminuir la sobrecarga física y el riesgo de lesiones en el cuidador.
        br
        br
        p.mb-0(data-aos="fade-down") En el cuidado de la persona mayor, la mecánica corporal adquiere especial importancia durante los cambios de posición, las transferencias y los desplazamientos. Una adecuada utilización del cuerpo permite realizar estas acciones de manera más segura y favorece la protección tanto de la persona mayor como del cuidador.
    p.mb-4(data-aos="fade-down") Para realizar movimientos de manera segura, se deben considerar los siguientes principios:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.bg03.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img03.svg' alt='AvatarTop')
          h4.text-center Mantener una base de sustentación estable
          br
          p.text-center Separar los pies aproximadamente al ancho de los hombros cuando la actividad lo permita.
        .tarjeta.bg03.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img04.svg' alt='AvatarTop')
          h4.text-center Conservar la alineación corporal
          br
          p.text-center Mantener cabeza, espalda y extremidades en posiciones que reduzcan tensiones innecesarias.
        .tarjeta.bg03.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img05.svg' alt='AvatarTop')
          h4.text-center Flexionar las rodillas
          br
          p.text-center Utilizar principalmente las piernas para realizar esfuerzos, evitando doblar excesivamente la espalda.
        .tarjeta.bg03.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img06.svg' alt='AvatarTop')
          h4.text-center Mantener la carga cerca del cuerpo
          br
          p.text-center Reducir la distancia entre el cuidador y el objeto o la persona que se moviliza.
        .tarjeta.bg03.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img07.svg' alt='AvatarTop')
          h4.text-center Evitar giros bruscos del tronco
          br
          p.text-center Cuando sea necesario cambiar de dirección, mover los pies y girar el cuerpo en conjunto.
        .tarjeta.bg03.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img08.svg' alt='AvatarTop')
          h4.text-center Distribuir el peso
          br
          p.text-center Procurar que el esfuerzo se reparta entre ambos lados del cuerpo.
        .tarjeta.bg03.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img09.svg' alt='AvatarTop')
          h4.text-center Utilizar movimientos coordinados y controlados
          br
          p.text-center Vitar acciones repentinas o esfuerzos innecesarios.
        .tarjeta.bg03.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img10.svg' alt='AvatarTop')
          h4.text-center Solicitar apoyo cuando sea necesario
          br
          p.text-center No realizar solo una movilización que supere las capacidades físicas del cuidador o de la persona mayor.
    p.mb-4(data-aos="fade-down") Los movimientos corporales pueden clasificarse de acuerdo con la forma en que se realizan y las estructuras que participan. Para el cuidador, es especialmente importante diferenciar entre:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span Clasificación de los movimientos
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Tipo de movimiento
                th(data-aos="fade-down")(style= "width: 70%") Característica
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Flexión
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Disminuye el ángulo entre dos segmentos corporales.
              tr
                td(data-aos="fade-down") Extensión
                td(data-aos="fade-down") Aumenta el ángulo entre dos segmentos corporales.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Abducción
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Aleja una parte del cuerpo de la línea media.
              tr
                td(data-aos="fade-down") Aducción
                td(data-aos="fade-down") Acerca una parte del cuerpo hacia la línea media.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Rotación
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Movimiento de una parte del cuerpo alrededor de su eje.
    p.mb-0(data-aos="fade-down") La aplicación de estos principios debe adaptarse a las características de cada actividad y a las capacidades de la persona mayor. Una buena mecánica corporal no consiste en utilizar la fuerza del cuidador, sino en aprovechar una postura estable, una adecuada distribución del peso y movimientos coordinados para realizar el esfuerzo de forma segura.
    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Posturas y movimientos
    p(data-aos="fade-down") Las posturas y movimientos corporales influyen en la seguridad y comodidad durante las actividades de cuidado. Una postura adecuada permite mantener el cuerpo alineado y estable, mientras que realizar los movimientos de manera controlada ayuda a disminuir esfuerzos innecesarios y prevenir lesiones.
    p(data-aos="fade-down") Durante la movilización y asistencia de la persona mayor, el cuidador debe procurar mantener una posición estable, adaptar su postura a la actividad y evitar movimientos bruscos. También debe considerar la capacidad de participación de la persona mayor y favorecer que realice por sí misma las acciones que pueda ejecutar.
    p.mb-4(data-aos="fade-down") Posturas básicas durante el cuidado:
    .desktop
      .row.mb-4
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.tarjeta-c04(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/img11.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 De pie
                p.mb-0 Mantener los pies separados para obtener una base estable, distribuir el peso corporal y conservar la espalda alineada.
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.tarjeta-c04(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/img12.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Sentado
                p.mb-0 Mantener la espalda apoyada cuando sea posible, los pies firmes sobre el suelo y las piernas en una posición cómoda.
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.tarjeta-c04(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/img13.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Agachado
                p.mb-0 Flexionar las rodillas y mantener la espalda alineada, evitando inclinar excesivamente el tronco.
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.tarjeta-c04(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/img14.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Durante la asistencia
                p.mb-0 Ubicarse cerca de la persona mayor y ajustar la altura de trabajo para evitar posiciones forzadas.
    .movil.mb-0
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta-c04.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/t4/img15.png', alt='')
            h4 De pie
            p.mb-0 Mantener los pies separados para obtener una base estable, distribuir el peso corporal y conservar la espalda alineada.
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta-c04.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/t4/img15.png', alt='')
            h4 Sentado
            p.mb-0 Mantener la espalda apoyada cuando sea posible, los pies firmes sobre el suelo y las piernas en una posición cómoda.
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta-c04.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/t4/img15.png', alt='')
            h4 Agachado
            p.mb-0 Flexionar las rodillas y mantener la espalda alineada, evitando inclinar excesivamente el tronco.
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta-c04.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/t4/img15.png', alt='')
            h4 Durante la asistencia
            p.mb-0 Ubicarse cerca de la persona mayor y ajustar la altura de trabajo para evitar posiciones forzadas.
    p.mb-4(data-aos="fade-down") Los movimientos deben realizarse de forma lenta, coordinada y controlada. Antes de iniciar una movilización, es importante explicar a la persona mayor qué se hará y acordar cómo participará.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-6.col-12
        .tarjeta.tarjeta-c01.px-2.py-2.h-100
          p.mb-0.text-center Para realizar movimientos seguros se recomienda:
    .row.mb-4
      .col-12
        .px-0.py-0
          .row.align-items-center.bg01(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-2
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/t4/img16.png", alt="")
            .col-lg-8.px-0.py-4
              SlyderF.custom.color-acento-botones.px-lg-5.py-0.px-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img17.svg", alt="").img100.m-auto
                  p.text-center Leer y seguir las instrucciones del producto, especialmente las relacionadas con su uso, concentración, tiempo de contacto y superficies en las que puede aplicarse.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img18.svg", alt="").img100.m-auto
                  p.text-center Utilizar los elementos de protección personal que correspondan al producto y al riesgo de la actividad.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img19.svg", alt="").img100.m-auto
                  p.text-center Realizar higiene de manos antes y después del procedimiento y después de retirar los guantes, cuando estos sean utilizados.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img20.svg", alt="").img100.m-auto
                  p.text-center Mantener a la persona mayor alejada del área mientras se realiza el procedimiento, especialmente cuando se emplean productos químicos.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img21.svg", alt="").img100.m-auto
                  p.text-center Garantizar una ventilación adecuada del espacio cuando las características del producto lo requieran.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img22.svg", alt="").img100.m-auto
                  p.text-center No mezclar productos químicos, ya que algunas combinaciones pueden generar sustancias peligrosas.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img23.svg", alt="").img100.m-auto
                  p.text-center Mantener los productos identificados, cerrados y fuera del alcance de la persona mayor, especialmente cuando presenta alteraciones cognitivas.
    p.mb-0(data-aos="fade-down") La postura y el movimiento deben adaptarse a cada situación. El objetivo no es únicamente proteger al cuidador, sino facilitar una movilización segura y respetuosa que conserve la participación y autonomía de la persona mayor.
    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Manejo físico y movilización segura
    .bloque-texto-g.cajon.c04.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/img24.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") El manejo físico comprende las acciones que realiza el cuidador para apoyar a la persona mayor durante cambios de posición, transferencias o desplazamientos, de acuerdo con sus capacidades y necesidades de apoyo. Estas acciones deben realizarse de manera planificada, respetuosa y segura, evitando movimientos bruscos o esfuerzos que puedan generar lesiones.
    p(data-aos="fade-down") Antes de iniciar una movilización, es importante explicar el procedimiento a la persona mayor, verificar su disposición para participar y preparar el espacio. También se deben identificar posibles riesgos y comprobar que los elementos que se utilizarán se encuentren en condiciones adecuadas.
    p.mb-4(data-aos="fade-down") Recomendaciones para una movilización segura.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-6.col-12
        .tarjeta.tarjeta-c01.px-2.py-2.h-100
          p.mb-0.text-center Para realizar movimientos seguros se recomienda:
    .row.mb-4
      .col-12
        .px-0.py-0
          .row.align-items-center.bg01(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-2
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/t4/img25.png", alt="")
            .col-lg-8.px-0.py-4
              SlyderF.custom.color-acento-botones.px-lg-5.py-0.px-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img26.svg", alt="").img100.m-auto
                  p.text-center Informar a la persona mayor sobre el movimiento que se realizará y cómo puede participar.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img27.svg", alt="").img100.m-auto
                  p.text-center Valorar sus capacidades, identificando qué movimientos puede realizar por sí misma y qué apoyo requiere.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img28.svg", alt="").img100.m-auto
                  p.text-center Preparar el entorno, retirando obstáculos y asegurando que el área de movilización sea estable y suficiente.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img29.svg", alt="").img100.m-auto
                  p.text-center Aplicar los principios de mecánica corporal, manteniendo una postura estable y evitando sobrecargar la espalda.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img30.svg", alt="").img100.m-auto
                  p.text-center Utilizar apoyos o ayudas técnicas cuando estén indicados y disponibles.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img31.svg", alt="").img100.m-auto
                  p.text-center Coordinar los movimientos, utilizando instrucciones sencillas y un ritmo que la persona pueda seguir.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img32.svg", alt="").img100.m-auto
                  p.text-center Evitar tirar de los brazos o realizar movimientos bruscos, ya que pueden generar dolor o lesiones.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img33.svg", alt="").img100.m-auto
                  p.text-center Mantener la privacidad y dignidad de la persona durante todo el procedimiento.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img34.svg", alt="").img100.m-auto
                  p.text-center  Suspender la movilización si aparecen dolor intenso, mareo, dificultad respiratoria, debilidad repentina u otra manifestación que comprometa la seguridad.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img35.svg", alt="").img100.m-auto
                  p.text-center Solicitar apoyo cuando la movilización supere las capacidades físicas del cuidador o requiera conocimientos o procedimientos especializados.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img36.svg", alt="").img100.m-auto
                  p.text-center Mantener la privacidad y dignidad de la persona durante todo el procedimiento.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img37.svg", alt="").img100.m-auto
                  p.text-center Suspender la movilización si aparecen dolor intenso, mareo, dificultad respiratoria, debilidad repentina u otra manifestación que comprometa la seguridad.
    .row.justify-content-center.align-items-center.mb-4
      .cajon.cajon.c01.color-secundario.px-4.py-3
        .row.justify-content-center.align-items-center
          .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/t4/img38.svg', alt='')
          .col.col-lg-11.col-12.order-lg-2.order-2
            p.mb-0(data-aos="fade-down") Los cambios de posición permiten modificar la postura de la persona mayor para favorecer su comodidad y facilitar determinadas actividades. Las transferencias corresponden al desplazamiento entre superficies o posiciones, por ejemplo, de la cama a una silla.
    p.mb-4(data-aos="fade-down") En ambos casos, el nivel de asistencia debe ajustarse a la capacidad funcional de la persona. Cuando pueda realizar parte del movimiento, el cuidador debe facilitar su participación mediante instrucciones claras y apoyo físico proporcional, en lugar de ejecutar todo el movimiento.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-auto.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t4/img39.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c03.p-2
          p.mb-0(data-aos="fade-down") La movilización segura requiere reconocer los límites del cuidador y de la persona mayor. Cuando exista un riesgo elevado de caída, una dependencia física importante o una situación que requiera técnicas especializadas, se debe solicitar el apoyo correspondiente.
    separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Ayudas técnicas y prevención de lesiones
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t4/img40.jpg', alt='')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .cajon.cajon.c02.color-primario.p-4.mb-4
          p.mb-0 Las ayudas técnicas son elementos diseñados para facilitar la movilidad, el desplazamiento, los cambios de posición y la realización de actividades cotidianas cuando una persona presenta alguna limitación funcional. Su utilización puede favorecer la autonomía y proporcionar mayor seguridad durante las actividades de cuidado.
        p.mb-0(data-aos="fade-down") Entre las ayudas técnicas utilizadas para la movilidad se encuentran el bastón, caminador, muletas y silla de ruedas. La selección y utilización de estos elementos debe responder a las características y necesidades de cada persona, procurando que se encuentren en buenas condiciones y sean utilizados de acuerdo con las indicaciones correspondientes.
    .row.align-items-stretch.g-0.mb-4
      .col-lg-8.col-12.order-lg-1.order-2
        .cajon.c05.p-4.h-100.w-100
          h5 Antes de utilizar una ayuda técnica, el cuidador debe verificar:
          .col.col-12
            ul.lista-ul--color.mb-0(data-aos="fade-down")
              li
                i.fas.fa-thumbs-up
                p.mb-0 Que se encuentre limpia, estable y en buen estado.
              li
                i.fas.fa-thumbs-up
                p.mb-0 Que sus elementos de apoyo o sistemas de seguridad funcionen correctamente.
              li
                i.fas.fa-thumbs-up
                p.mb-0 Que el espacio permita su desplazamiento sin obstáculos.
              li
                i.fas.fa-thumbs-up
                p.mb-0 Que la persona mayor conozca cómo utilizarla o cuente con el acompañamiento necesario.
              li
                i.fas.fa-thumbs-up
                p.mb-0 Que el elemento corresponda a las necesidades y capacidades de la persona.
      .col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t4/img41.svg', alt='')
    p.mb-4(data-aos="fade-down") Durante la asistencia y movilización pueden presentarse lesiones tanto en la persona mayor como en el cuidador. La prevención requiere aplicar los principios de mecánica corporal, preparar adecuadamente el entorno y evitar esfuerzos que superen las capacidades físicas.
    .row.mb-4
      .col-12
        .px-0.py-0
          .row.align-items-center.bg01(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-2
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/t4/img42.png", alt="")
            .col-lg-8.px-0.py-4
              SlyderF.custom.color-acento-botones.px-lg-5.py-0.px-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img43.svg", alt="").img100.m-auto
                  p.text-center Informar a la persona mayor sobre el movimiento que se realizará y cómo puede participar.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img44.svg", alt="").img100.m-auto
                  p.text-center Valorar sus capacidades, identificando qué movimientos puede realizar por sí misma y qué apoyo requiere.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img45.svg", alt="").img100.m-auto
                  p.text-center Preparar el entorno, retirando obstáculos y asegurando que el área de movilización sea estable y suficiente.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img46.svg", alt="").img100.m-auto
                  p.text-center Aplicar los principios de mecánica corporal, manteniendo una postura estable y evitando sobrecargar la espalda.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img47.svg", alt="").img100.m-auto
                  p.text-center Utilizar apoyos o ayudas técnicas cuando estén indicados y disponibles.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img48.svg", alt="").img100.m-auto
                  p.text-center Coordinar los movimientos, utilizando instrucciones sencillas y un ritmo que la persona pueda seguir.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img49.svg", alt="").img100.m-auto
                  p.text-center Evitar tirar de los brazos o realizar movimientos bruscos, ya que pueden generar dolor o lesiones.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img50.svg", alt="").img100.m-auto
                  p.text-center Mantener la privacidad y dignidad de la persona durante todo el procedimiento.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img51.svg", alt="").img100.m-auto
                  p.text-center  Suspender la movilización si aparecen dolor intenso, mareo, dificultad respiratoria, debilidad repentina u otra manifestación que comprometa la seguridad.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img52.svg", alt="").img100.m-auto
                  p.text-center Solicitar apoyo cuando la movilización supere las capacidades físicas del cuidador o requiera conocimientos o procedimientos especializados.
    p.mb-0(data-aos="fade-down") El uso adecuado de las ayudas técnicas y la aplicación de medidas preventivas permiten disminuir el riesgo de caídas y lesiones, favorecer la movilidad y conservar la participación de la persona mayor en las actividades cotidianas.
</template>
<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
