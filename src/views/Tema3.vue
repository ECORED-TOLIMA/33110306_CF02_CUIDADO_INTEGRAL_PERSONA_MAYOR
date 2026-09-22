<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Limpieza y desinfección
    p.mb-4(data-aos="fade-down") La limpieza y la desinfección son procesos fundamentales para mantener condiciones adecuadas de higiene y seguridad en los espacios donde permanece la persona mayor. Su aplicación contribuye a disminuir la presencia de suciedad, microorganismos y otros agentes que pueden favorecer la contaminación de superficies y aumentar los riesgos para la salud.
    .bloque-texto-g.cajon.c04.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Estos procesos deben realizarse de manera organizada, segura y de acuerdo con el tipo de superficie, el nivel de suciedad y el producto utilizado. Además, es necesario considerar las características de la persona mayor y evitar que durante el procedimiento quede expuesta a productos químicos, superficies húmedas u otras situaciones de riesgo.
        br
        br
        p.mb-0(data-aos="fade-down") La limpieza y la desinfección no son procedimientos equivalentes. Cada una cumple una función específica y, cuando corresponde, deben aplicarse siguiendo una secuencia adecuada para obtener mejores resultados.
    p.mb-0(data-aos="fade-down") En este apartado se abordan los conceptos y diferencias entre limpieza y desinfección, las principales precauciones durante su aplicación y las técnicas básicas para realizar estos procesos de manera segura y adecuada en el entorno de cuidado. 
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Conceptos y diferencias
    TabsC.color-acento-botones.mb-4
      .py-3.py-md-4(titulo="Limpieza")
        .px-4
          .row.justify-content-center
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/t3/img02.png', alt='')
            .col-lg-7.mb-4.mb-md-0
              p.mb-4 Es el proceso mediante el cual se elimina la suciedad, el polvo, los residuos y parte de los microorganismos presentes en objetos y superficies. Generalmente se realiza utilizando agua, detergente y acción mecánica, como frotar o limpiar una superficie.
              .tarjeta.tarjeta-c02.p-4
                p.mb-0 La limpieza es fundamental porque la presencia de materia orgánica e inorgánica puede interferir con la acción posterior de algunos productos desinfectantes. Por ello, cuando se requiere desinfectar una superficie, primero debe realizarse una limpieza adecuada.
      .py-3.py-md-4(titulo="Desinfección")
        .px-4
          .row.justify-content-center
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/t3/img03.png', alt='')
            .col-lg-7.mb-4.mb-md-0
              p.mb-4 Es el proceso destinado a eliminar o reducir a niveles seguros los microorganismos presentes en superficies y objetos, mediante el uso de productos químicos o métodos físicos apropiados.
              .tarjeta.tarjeta-c02.p-4
                p.mb-0 La desinfección no sustituye la limpieza. Su efectividad depende, entre otros factores, de que la superficie haya sido previamente limpiada cuando corresponda y de que el producto utilizado se aplique siguiendo las instrucciones establecidas.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Diferencias entre limpieza y desinfección
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Aspecto
                th(data-aos="fade-down")(style= "width: 40%") Limpieza
                th(data-aos="fade-down")(style= "width: 40%") Desinfección
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Propósito
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Eliminar suciedad y residuos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Eliminar o reducir microorganismos.
              tr
                td(data-aos="fade-down") Medios
                td(data-aos="fade-down") Agua, detergente y acción mecánica.
                td(data-aos="fade-down") Productos o métodos desinfectantes apropiados.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Actúa principalmente sobre
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Suciedad y materia presente en la superficie.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Microorganismos presentes en la superficie.
              tr
                td(data-aos="fade-down") Secuencia
                td(data-aos="fade-down") Generalmente precede a la desinfección cuando esta es necesaria.
                td(data-aos="fade-down") Se realiza después de la limpieza, cuando corresponde.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Resultado
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Superficie limpia.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Superficie con menor carga de microorganismos.
    p.mb-0(data-aos="fade-down") Por lo tanto, limpiar no es lo mismo que desinfectar. En el cuidado de la persona mayor, ambos procesos deben aplicarse según las necesidades del entorno, las características de las superficies y las indicaciones del producto utilizado.
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Precauciones
    p(data-aos="fade-down") Durante los procesos de limpieza y desinfección es necesario aplicar medidas de seguridad que protejan a la persona mayor, al cuidador y a las superficies. Las precauciones deben prevenir accidentes, evitar la contaminación cruzada y reducir la exposición innecesaria a productos químicos.
    p.mb-4(data-aos="fade-down") Antes, durante y después del procedimiento se deben tener en cuenta las siguientes recomendaciones:
    .row.mb-4
      .col-12
        .px-0.py-0
          .row.align-items-center.bg01(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-2
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/t3/img04.png", alt="")
            .col-lg-8.px-0.py-4
              SlyderF.custom.color-acento-botones.px-lg-5.py-0.px-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t3/img05.svg", alt="").img100.m-auto
                  p.text-center Leer y seguir las instrucciones del producto, especialmente las relacionadas con su uso, concentración, tiempo de contacto y superficies en las que puede aplicarse.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t3/img06.svg", alt="").img100.m-auto
                  p.text-center Utilizar los elementos de protección personal que correspondan al producto y al riesgo de la actividad.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t3/img07.svg", alt="").img100.m-auto
                  p.text-center Realizar higiene de manos antes y después del procedimiento y después de retirar los guantes, cuando estos sean utilizados.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t3/img08.svg", alt="").img100.m-auto
                  p.text-center Mantener a la persona mayor alejada del área mientras se realiza el procedimiento, especialmente cuando se emplean productos químicos.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t3/img09.svg", alt="").img100.m-auto
                  p.text-center Garantizar una ventilación adecuada del espacio cuando las características del producto lo requieran.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t3/img10.svg", alt="").img100.m-auto
                  p.text-center No mezclar productos químicos, ya que algunas combinaciones pueden generar sustancias peligrosas.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t3/img11.svg", alt="").img100.m-auto
                  p.text-center Mantener los productos identificados, cerrados y fuera del alcance de la persona mayor, especialmente cuando presenta alteraciones cognitivas.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t3/img12.svg", alt="").img100.m-auto
                  p.text-center Evitar aplicar productos sobre alimentos, medicamentos, piel u otras superficies para las cuales no estén destinados.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t3/img13.svg", alt="").img100.m-auto
                  p.text-center Utilizar elementos de limpieza limpios y en buenas condiciones, evitando trasladar suciedad de una superficie a otra.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t3/img14.svg", alt="").img100.m-auto
                  p.text-center Respetar el tiempo de contacto indicado para el desinfectante y evitar retirarlo antes de lo establecido.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t3/img15.svg", alt="").img100.m-auto
                  p.text-center Señalizar o controlar el acceso a superficies húmedas o recién tratadas para prevenir caídas.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t3/img16.svg", alt="").img100.m-auto
                  p.text-center Almacenar los productos en un lugar seguro, ventilado y separado de alimentos y medicamentos.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t3/img17.svg", alt="").img100.m-auto
                  p.text-center Secuencia básica de precaución
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-6.col-12
        .tarjeta.tarjeta-c01.px-2.py-2.h-100
          p.mb-0.text-center Para favorecer un procedimiento seguro, puede seguirse esta secuencia:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-12.order-lg-1.order-2
        .cajon.c01.px-4.py-3.h-100.w-100
          ol.lista-ol--cuadro.lista-ol--separador.mb-0
            li
              .lista-ol--cuadro__vineta
                span.text-bold 1
              p.mb-0 Preparar
            li
              .lista-ol--cuadro__vineta
                span.text-bold 2
              p.mb-0 Proteger
            li
              .lista-ol--cuadro__vineta
                span.text-bold 3
              p.mb-0 Limpiar
            li
              .lista-ol--cuadro__vineta
                span.text-bold 4
              p.mb-0 Desinfectar
            li
              .lista-ol--cuadro__vineta
                span.text-bold 5
              p.mb-0 Verificar
            li
              .lista-ol--cuadro__vineta
                span.text-bold 6
              p.mb-0 Almacenar
      .col-lg-6.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t3/img18.png', alt='')
    p.mb-0(data-aos="fade-down") La aplicación de estas precauciones permite realizar los procesos de limpieza y desinfección de manera organizada, disminuyendo riesgos para la persona mayor y el cuidador y favoreciendo condiciones adecuadas de higiene en el entorno.
    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Técnicas de limpieza y desinfección
    p(data-aos="fade-down") Las técnicas de limpieza y desinfección permiten mantener las superficies y los elementos del entorno de cuidado en condiciones adecuadas de higiene. Su aplicación debe realizarse de forma organizada, respetando la secuencia del procedimiento y las indicaciones correspondientes a cada producto y superficie.
    p.mb-4(data-aos="fade-down") La técnica debe adaptarse al tipo de superficie, al nivel de suciedad y a las características del entorno. El cuidador debe seguir siempre los protocolos establecidos y las instrucciones específicas de los productos, evitando improvisar concentraciones o procedimientos.
    .row.justify-content-center.align-items-center.px-3.mb-4(data-aos="flip-up")
      AcordionA.mb-0(tipo="a" clase-tarjeta="tarjeta tarjeta-c03" data-aos="zoom-in")
        .row.justify-content-center(titulo="a) Técnica de limpieza")
          .col.col-lg-7.col-12.order-lg-1.order-2
            p.mb-3(data-aos="fade-down") Se realiza mediante la remoción de suciedad y residuos utilizando agua, detergente y acción mecánica. De manera general, se desarrolla así:
            .tarjeta.tarjeta--blanca.px-4.py-2.mb-3
              ul.lista-ul--color.mb-0(data-aos="fade-down")
                li
                  i.fas.fa-thumbs-up
                  p.mb-0 Preparar el área: retirar objetos innecesarios y organizar los materiales.
                li
                  i.fas.fa-thumbs-up
                  p.mb-0 Realizar higiene de manos y utilizar los elementos de protección requeridos.
                li
                  i.fas.fa-thumbs-up
                  p.mb-0 Retirar residuos visibles y desecharlos de acuerdo con su naturaleza.
                li
                  i.fas.fa-thumbs-up
                  p.mb-0 Aplicar el producto de limpieza siguiendo las indicaciones establecidas.
                li
                  i.fas.fa-thumbs-up
                  p.mb-0 Frotar las superficies para desprender la suciedad.
                li
                  i.fas.fa-thumbs-up
                  p.mb-0 Retirar los residuos del producto cuando corresponda.
                li.mb-0
                  i.fas.fa-thumbs-up
                  p.mb-0 Dejar secar la superficie o utilizar un medio adecuado para ello.
            .col-12.order-lg-3.order-3
              p(data-aos="fade-down") La limpieza debe realizarse de manera sistemática, evitando regresar con un elemento sucio a una superficie que ya ha sido limpiada.
          .col.col-lg-5.col-6.order-lg-1.order-2
            figure
              img(src="@/assets/curso/temas/t3/img19.jpg", alt="")
        .row.justify-content-center.align-items-center(titulo="b) Técnica de desinfección")
          .col.col-lg-7.col-12.order-lg-1.order-2
            p(data-aos="fade-down") Cuando la desinfección sea necesaria, debe realizarse después de la limpieza de la superficie. El procedimiento general comprende:
            .tarjeta.tarjeta--blanca.px-4.py-2
              ul.lista-ul--color.mb-0(data-aos="fade-down")
                li
                  i.fas.fa-thumbs-up
                  p.mb-0 Verificar que la superficie esté limpia.
                li
                  i.fas.fa-thumbs-up
                  p.mb-0 Seleccionar el desinfectante apropiado para la superficie y el uso previsto.
                li
                  i.fas.fa-thumbs-up
                  p.mb-0 Preparar y aplicar el producto de acuerdo con las instrucciones del fabricante.
                li
                  i.fas.fa-thumbs-up
                  p.mb-0 Cubrir de manera uniforme la superficie que se desea desinfectar.
                li
                  i.fas.fa-thumbs-up
                  p.mb-0 Respetar el tiempo de contacto indicado para que el producto sea efectivo.
                li
                  i.fas.fa-thumbs-up
                  p.mb-0 Retirar el producto cuando las instrucciones lo indiquen.
                li
                  i.fas.fa-thumbs-up
                  p.mb-0 Permitir que la superficie quede en condiciones adecuadas antes de volver a utilizarla.
          .col.col-lg-5.col-auto.order-lg-1.order-2
            figure
              img(src="@/assets/curso/temas/t3/img20.jpg", alt="")
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.col-12.order-lg-2.order-2
        .cajon.c01.px-4.py-3.h-100.w-100
          h5 Para disminuir la contaminación durante la limpieza y desinfección, es conveniente:
          ol.lista-ol--cuadro.lista-ol--separador.mb-0
            li
              .lista-ol--cuadro__vineta
                span.text-bold 1
              p.mb-0 Trabajar de las áreas más limpias hacia las más sucias.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 2
              p.mb-0 Limpiar de arriba hacia abajo cuando las características de la superficie lo permitan.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 3
              p.mb-0 Evitar movimientos que dispersen polvo o suciedad.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 4
              p.mb-0 Utilizar elementos diferenciados cuando exista riesgo de contaminación entre áreas.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 5
              p.mb-0 Cambiar o lavar los elementos de limpieza cuando estén sucios.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 6
              p.mb-0 Mantener los materiales de limpieza limpios, secos y almacenados adecuadamente después de utilizarlos.
      .col-lg-3.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t3/img21.svg', alt='')
    p.mb-0(data-aos="fade-down") La técnica debe adaptarse al tipo de superficie, al nivel de suciedad y a las características del entorno. El cuidador debe seguir siempre los protocolos establecidos y las instrucciones específicas de los productos, evitando improvisar concentraciones o procedimientos.
</template>
<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
