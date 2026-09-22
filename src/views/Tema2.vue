<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Seguridad y adecuación del entorno
    p.mb-4(data-aos="fade-down") El entorno en el que vive y se desenvuelve la persona mayor influye directamente en su seguridad, autonomía y bienestar. Un espacio organizado, accesible y adaptado a sus características facilita la realización de las actividades cotidianas y disminuye la exposición a situaciones que pueden generar accidentes o limitar su participación.
    .bloque-texto-g.cajon.c04.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") La seguridad del entorno implica identificar y controlar factores que puedan representar un riesgo, mientras que la adecuación de los espacios busca adaptar las condiciones físicas del hogar y otros lugares de uso frecuente a las necesidades de la persona mayor. Estas acciones deben considerar su movilidad, nivel de dependencia, capacidades sensoriales y cognitivas, así como las características del espacio.
    p.mb-0(data-aos="fade-down") En este apartado se abordan las medidas de seguridad en el hogar, la organización y adecuación de los espacios, las condiciones físicas del ambiente y los principales riesgos presentes en el entorno. Estos elementos permiten fortalecer la capacidad del cuidador para prevenir accidentes, favorecer la movilidad segura y proporcionar ambientes que promuevan la autonomía y la calidad de vida.
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Medidas de seguridad en el hogar
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-2.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t2/img02.svg', alt='')
      .col.col-lg-8.col-12.order-lg-1.order-2
        .cajon.cajon.c02.color-primario.px-4.py-3.mb-4
          p.mb-0 La seguridad en el hogar comprende el conjunto de acciones orientadas a prevenir accidentes, reducir riesgos y favorecer un entorno protegido para la persona mayor. Estas medidas deben responder a las características del espacio y, especialmente, a las capacidades, necesidades y nivel de autonomía de quien lo habita.
        p.mb-0(data-aos="fade-down") El cuidador debe identificar situaciones que puedan dificultar el desplazamiento o la realización de actividades cotidianas y promover los ajustes necesarios. La prevención debe realizarse sin limitar innecesariamente la independencia de la persona mayor.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-6.col-12
        .tarjeta.tarjeta-c01.px-2.py-2.h-100
          p.mb-0.text-center Entre las principales medidas de seguridad se encuentran:
    .row.mb-4
      .col-12
        .px-0.py-0
          .row.align-items-center.bg01(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-2
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/t2/img15.png", alt="")
            .col-lg-8.px-0.py-4
              SlyderF.custom.color-acento-botones.px-lg-5.py-0.px-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img03.svg", alt="").img100.m-auto
                  p.text-center Mantener pisos secos, estables y libres de obstáculos.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img04.svg", alt="").img100.m-auto
                  p.text-center Retirar o fijar adecuadamente tapetes, cables y objetos que puedan provocar tropiezos.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img05.svg", alt="").img100.m-auto
                  p.text-center Mantener las zonas de circulación despejadas, especialmente aquellas utilizadas con ayudas para la movilidad.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img06.svg", alt="").img100.m-auto
                  p.text-center Garantizar una iluminación suficiente, principalmente en escaleras, pasillos, baños y dormitorios.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img07.svg", alt="").img100.m-auto
                  p.text-center Instalar o utilizar elementos de apoyo cuando sean necesarios y estén adecuadamente ubicados.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img08.svg", alt="").img100.m-auto
                  p.text-center Mantener los objetos de uso frecuente en lugares accesibles, evitando que la persona deba subirse a sillas o superficies inestables.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img09.svg", alt="").img100.m-auto
                  p.text-center Mantener productos de limpieza, sustancias químicas y medicamentos fuera del alcance de personas que puedan hacer un uso inadecuado de ellos.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img10.svg", alt="").img100.m-auto
                  p.text-center Revisar las condiciones de enchufes, cables y aparatos eléctricos, evitando sobrecargas y conexiones improvisadas.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img11.svg", alt="").img100.m-auto
                  p.text-center Mantener las escaleras despejadas y utilizar pasamanos seguros.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img12.svg", alt="").img100.m-auto
                  p.text-center Controlar riesgos relacionados con agua caliente, cocina, fuego y fuentes de calor.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img13.svg", alt="").img100.m-auto
                  p.text-center Si existe uso de oxígeno en el hogar, mantenerlo alejado de llamas, cigarrillos y fuentes de calor, siguiendo las indicaciones establecidas para su manejo.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img14.svg", alt="").img100.m-auto
                  p.text-center Favorecer espacios que permitan la privacidad, el descanso y el desplazamiento seguro de la persona mayor.
    p(data-aos="fade-down") Las caídas constituyen uno de los principales riesgos en el entorno doméstico. Pueden estar relacionadas con factores propios de la persona, como alteraciones de la movilidad, equilibrio o visión, y con factores ambientales, como pisos resbaladizos, iluminación insuficiente, obstáculos o escaleras inseguras.
    p.mb-4(data-aos="fade-down") Por ello, la prevención requiere combinar la identificación de las condiciones de la persona con la revisión permanente del entorno. El cuidador debe prestar atención a cambios que puedan aumentar el riesgo y comunicar oportunamente las situaciones que requieran valoración profesional.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t2/img16.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c03.p-3
          p.mb-0(data-aos="fade-down") Adaptar el hogar no significa eliminar toda posibilidad de movimiento. El propósito es crear condiciones que permitan a la persona mayor desenvolverse con la mayor autonomía posible y de manera segura.
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Organización y adecuación de los espacios
    p.mb-4(data-aos="fade-down") La organización y adecuación de los espacios busca facilitar el desplazamiento, la realización de actividades cotidianas y la participación de la persona mayor en un entorno seguro. Para ello, es necesario considerar sus capacidades, necesidades y nivel de autonomía, procurando que los elementos de uso frecuente sean accesibles y que las zonas de circulación permanezcan despejadas.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12.order-lg-1.order-2
        .cajon.cajon.c02.color-primario.px-4.py-3
          p.mb-0 La distribución de los objetos debe permitir que la persona mayor se movilice con comodidad, especialmente cuando utiliza bastón, caminador u otra ayuda técnica. Los muebles deben ubicarse de manera que no obstruyan puertas, pasillos o zonas de tránsito, y deben mantenerse estables para evitar accidentes.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-6.col-12
        .tarjeta.tarjeta-c01.px-2.py-2.h-100
          p.mb-0.text-center Al adecuar un espacio, se deben considerar los siguientes aspectos:
    .row.mb-4
      .col-12
        .px-0.py-0
          .row.align-items-center.bg01(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-2
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/t2/img17.png", alt="")
            .col-lg-8.px-0.py-4
              SlyderF.custom.color-acento-botones.px-lg-5.py-0.px-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img18.svg", alt="").img100.m-auto
                  h4.text-center Circulación
                  p.text-center Mantener libres de obstáculos los recorridos habituales.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img19.svg", alt="").img100.m-auto
                  h4.text-center Accesibilidad
                  p.text-center Ubicar objetos de uso frecuente a una altura y distancia que faciliten su alcance.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img20.svg", alt="").img100.m-auto
                  h4.text-center Estabilidad
                  p.text-center Verificar que muebles, sillas y otros elementos sean firmes y seguros.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img21.svg", alt="").img100.m-auto
                  h4.text-center Distribución
                  p.text-center Evitar acumulación de objetos y conservar una organización que facilite la orientación.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img22.svg", alt="").img100.m-auto
                  h4.text-center Movilidad
                  p.text-center Disponer el espacio de acuerdo con las ayudas técnicas utilizadas por la persona mayor.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img23.svg", alt="").img100.m-auto
                  h4.text-center Baño
                  p.text-center Procurar superficies seguras y disponer elementos de apoyo cuando sean necesarios.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img24.svg", alt="").img100.m-auto
                  h4.text-center Dormitorio
                  p.text-center Facilitar el acceso a la cama, iluminación y objetos de uso habitual.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img25.svg", alt="").img100.m-auto
                  h4.text-center Cocina
                  p.text-center Organizar los elementos de uso frecuente en lugares accesibles y seguros.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img26.svg", alt="").img100.m-auto
                  h4.text-center Escaleras
                  p.text-center Mantenerlas despejadas y contar con condiciones adecuadas para su utilización.
    p(data-aos="fade-down") La adecuación debe realizarse de manera individualizada. No existe una única distribución válida para todas las personas mayores, ya que las necesidades pueden variar según su movilidad, visión, audición, capacidad cognitiva y grado de dependencia.
    p.mb-0(data-aos="fade-down") Por esta razón, el cuidador debe identificar las dificultades que presenta la persona en cada espacio y proponer ajustes que reduzcan riesgos sin restringir innecesariamente su autonomía.
    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Condiciones físicas del ambiente
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-1.order-2
        .cajon.c02.p-4.h-100.w-100
          p.mb-2(data-aos="fade-down") Las condiciones físicas del ambiente influyen en la seguridad, el confort, la autonomía y el bienestar de la persona mayor. Un entorno adecuado debe facilitar las actividades cotidianas y reducir las barreras que puedan limitar la movilidad, la comunicación o la participación. La OMS reconoce que las características del entorno físico y social pueden favorecer o dificultar la capacidad funcional de las personas mayores.
          .row.mb-0
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t2/img28.svg', alt='')
            .col-lg-10.col-12
              p.mb-0(data-aos="fade-down") Para adecuar el ambiente, es necesario prestar atención especialmente a la temperatura, ventilación, iluminación, ruido, intensidad de la luz y presencia de olores, considerando las características y preferencias de la persona mayor. 
      .col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t2/img27.jpg', alt='')
    .bg02.p-4.mb-4
      LineaTiempoC.color-acento-botones(text-small)
        .row(titulo="a.")
          .col-md-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Temperatura
            p Debe mantenerse en condiciones que proporcionen comodidad y eviten la exposición innecesaria al frío o al calor. Las personas mayores pueden presentar mayor vulnerabilidad frente a temperaturas extremas, por lo que es importante favorecer ambientes confortables y adaptar la vestimenta o las condiciones del espacio cuando sea necesario.
          .col-md-6.order-lg-1.order-1
            figure
              img(src='@/assets/curso/temas/t2/img29.jpg', alt='')
        .row(titulo="b.")
          .col-md-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Ventilación
            p Una ventilación adecuada contribuye a mantener un ambiente confortable y a favorecer la calidad del aire. Se deben procurar espacios ventilados, evitando corrientes de aire excesivas que puedan generar incomodidad. Cuando se ventile naturalmente, es importante considerar las condiciones climáticas y la seguridad del espacio.
          .col-md-6.order-lg-1.order-1
            figure
              img(src='@/assets/curso/temas/t2/img30.jpg', alt='')
        .row(titulo="c.")
          .col-md-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Iluminación
            p Debe ser suficiente, uniforme y adecuada para la actividad que se realiza. Es especialmente importante en lugares de tránsito, escaleras, baños y zonas donde la persona mayor desarrolla actividades cotidianas. Se deben evitar tanto los espacios demasiado oscuros como las luces excesivamente intensas que puedan producir deslumbramiento. También es conveniente aprovechar la iluminación natural cuando las condiciones lo permitan.
          .col-md-6.order-lg-1.order-1
            figure
              img(src='@/assets/curso/temas/t2/img31.jpg', alt='')
        .row(titulo="d.")
          .col-md-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Ruido
            p El exceso de ruido puede dificultar la comunicación, generar incomodidad y afectar el descanso. Por ello, se recomienda controlar fuentes de ruido innecesarias, especialmente durante los periodos de descanso o cuando se realizan actividades que requieren concentración o comunicación.
          .col-md-6.order-lg-1.order-1
            figure
              img(src='@/assets/curso/temas/t2/img32.jpg', alt='')
        .row(titulo="e.")
          .col-md-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Luces intensas y reflejos
            p Las luces muy intensas, los reflejos y los cambios bruscos entre espacios claros y oscuros pueden dificultar la adaptación visual. La iluminación debe distribuirse de manera que permita reconocer obstáculos y desplazarse con seguridad.
          .col-md-6.order-lg-1.order-1
            figure
              img(src='@/assets/curso/temas/t2/img33.jpg', alt='')
        .row(titulo="f.")
          .col-md-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Olores
            p Fuertes o desagradables pueden generar incomodidad y afectar la percepción del ambiente. Es conveniente mantener una adecuada ventilación, realizar la limpieza correspondiente y evitar la acumulación de residuos o sustancias que produzcan olores persistentes.
          .col-md-6.order-lg-1.order-1
            figure
              img(src='@/assets/curso/temas/t2/img34.jpg', alt='')
    p.mb-0(data-aos="fade-down") En conjunto, estas condiciones deben valorarse de acuerdo con las características individuales y las actividades que realiza la persona mayor. La adecuación del ambiente no consiste únicamente en eliminar riesgos, sino en crear un espacio que facilite que la persona pueda desenvolverse con seguridad, comodidad y el mayor grado posible de autonomía.
    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Riesgos en el hogar y medidas preventivas
    p(data-aos="fade-down") El hogar puede presentar diferentes situaciones que afectan la seguridad de la persona mayor. Identificar estos riesgos permite establecer medidas preventivas y realizar ajustes que favorezcan un entorno seguro, accesible y acorde con las capacidades de cada persona.
    p.mb-4(data-aos="fade-down") Los riesgos pueden estar relacionados con las características del espacio, los elementos presentes en el hogar o las actividades que se realizan. Entre los más frecuentes se encuentran:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Riesgos frecuentes
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Riesgo
                th(data-aos="fade-down")(style= "width: 40%") Situaciones que pueden generarlo
                th(data-aos="fade-down")(style= "width: 40%") Medidas preventivas
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Caídas
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Pisos húmedos o irregulares, tapetes sueltos, cables, objetos en zonas de circulación o escaleras inseguras.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Mantener los pisos secos, retirar obstáculos, fijar tapetes y mantener despejadas las zonas de paso.
              tr
                td(data-aos="fade-down") Superficies para caminar
                td(data-aos="fade-down") Desniveles, superficies resbaladizas o deterioradas.
                td(data-aos="fade-down") Reparar o señalizar los desniveles y utilizar superficies firmes y antideslizantes.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Escaleras
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Falta de iluminación, objetos en los escalones o ausencia de elementos de apoyo.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Mantenerlas despejadas, bien iluminadas y utilizar pasamanos seguros.
              tr
                td(data-aos="fade-down") Electricidad
                td(data-aos="fade-down") Cables deteriorados, enchufes defectuosos o sobrecarga de tomas.
                td(data-aos="fade-down") Revisar las instalaciones, evitar conexiones improvisadas y retirar equipos o cables deteriorados.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Incendios y fuentes de calor
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Velas, estufas, cigarrillos, líquidos calientes o aparatos eléctricos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Mantener fuentes de calor bajo control, evitar materiales inflamables cerca de ellas y verificar los equipos después de utilizarlos.
              tr
                td(data-aos="fade-down") Productos químicos
                td(data-aos="fade-down") Contacto o consumo accidental de productos de limpieza u otras sustancias.
                td(data-aos="fade-down") Conservarlos identificados, cerrados y separados de alimentos y medicamentos.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Oxígeno
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Presencia de llamas, cigarrillos o fuentes de calor cerca de equipos de oxígeno.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Mantener los equipos alejados de fuentes de ignición y seguir las indicaciones establecidas para su utilización.
              tr
                td(data-aos="fade-down") Baño
                td(data-aos="fade-down") Piso mojado, superficies resbaladizas o dificultad para entrar y salir.
                td(data-aos="fade-down") Mantener el piso seco, facilitar el apoyo y adecuar el espacio según las necesidades de la persona.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Objetos y muebles
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Muebles inestables, objetos ubicados a alturas difíciles de alcanzar o exceso de elementos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Asegurar los muebles y ubicar los objetos de uso frecuente en lugares accesibles.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t2/img35.svg', alt='')
      .col.col-lg-11.col-12.order-lg-2.order-2
        p.mb-0(data-aos="fade-down") Además de los riesgos físicos, es importante prestar atención a situaciones relacionadas con la seguridad y protección de la persona mayor, como el acceso no autorizado a medicamentos, dinero u objetos personales, así como cualquier situación de maltrato, negligencia, abandono o vulneración de sus derechos. Estas situaciones deben ser identificadas y comunicadas por los canales correspondientes.
    p.mb-4(data-aos="fade-down") La prevención requiere una revisión periódica del entorno. El cuidador puede realizar un recorrido por los espacios que utiliza habitualmente la persona mayor y verificar:
    .row.mb-4
      .col-12
        .px-0.py-0
          .row.align-items-center.bg01(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-2
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/t2/img36.png", alt="")
            .col-lg-8.px-0.py-4
              SlyderF.custom.color-acento-botones.px-lg-5.py-0.px-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img37.svg", alt="").img100.m-auto
                  p.text-center Qué situaciones pueden representar un riesgo.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img38.svg", alt="").img100.m-auto
                  p.text-center Quién podría verse afectado y de qué manera.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img39.svg", alt="").img100.m-auto
                  p.text-center Qué medidas pueden reducir o eliminar el riesgo.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img40.svg", alt="").img100.m-auto
                  p.text-center Si las medidas implementadas son suficientes.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img41.svg", alt="").img100.m-auto
                  p.text-center Si es necesario solicitar apoyo de la familia, la comunidad o un profesional.
    p.mb-4(data-aos="fade-down") La prevención debe ser continua y adaptada a los cambios que pueda presentar la persona mayor. Una modificación en su movilidad, visión, audición, orientación o nivel de dependencia puede requerir nuevos ajustes en el entorno.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12.order-lg-1.order-2
        .cajon.cajon.c02.color-primario.px-4.py-3
          p.mb-0 Un entorno seguro no es aquel que restringe la movilidad de la persona mayor, sino aquel que reduce los riesgos y facilita que pueda realizar sus actividades con el mayor grado posible de autonomía.
</template>
<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
