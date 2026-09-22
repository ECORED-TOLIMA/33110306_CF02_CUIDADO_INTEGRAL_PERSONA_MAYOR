export default {
  global: {
    Name: 'Bienestar y participación de la persona mayor',
    Description:
      'Este componente formativo aborda el bienestar y la participación de la persona mayor mediante actividades de ocio, esparcimiento y redes de apoyo. Asimismo, desarrolla estrategias para la adecuación de entornos seguros, limpieza y desinfección, movilización, comunicación, evaluación de la satisfacción y autocuidado del cuidador.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Bienestar, ocio y participación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Bienestar de la persona mayor',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Ocio y tiempo libre',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Actividades de esparcimiento',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Redes de apoyo y comunidad',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Entidades y servicios de recreación y esparcimiento',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Seguridad y adecuación del entorno',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Medidas de seguridad en el hogar',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Organización y adecuación de los espacios',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Condiciones físicas del ambiente',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Riesgos en el hogar y medidas preventivas',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Limpieza y desinfección',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Conceptos y diferencias',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Precauciones',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Técnicas de limpieza y desinfección',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Movilización y mecánica corporal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Mecánica corporal',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Posturas y movimientos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Manejo físico y movilización segura',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Ayudas técnicas y prevención de lesiones',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Comunicación y acompañamiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Estrategias de comunicación',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Acompañamiento respetuoso',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Participación y autonomía de la persona mayor',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Evaluación del bienestar y satisfacción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Percepción de la persona mayor',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Técnicas para valorar la satisfacción',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Seguimiento y ajustes de las actividades',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Autocuidado del cuidador',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Proyección y promoción del servicio de cuidado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Perfil y capacidades del cuidador',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Presentación y promoción del servicio',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Elaboración de una pieza publicitaria',
            hash: 't_8_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Acompañamiento',
      significado:
        'Apoyo que se brinda a la persona mayor durante sus actividades, respetando sus capacidades, decisiones, preferencias y autonomía.',
    },
    {
      termino: 'Autocuidado',
      significado:
        'Conjunto de acciones que realiza una persona para mantener y favorecer su bienestar físico, emocional y social.',
    },
    {
      termino: 'Autonomía',
      significado:
        'Capacidad de la persona para tomar decisiones y realizar actividades de acuerdo con sus capacidades y preferencias.',
    },
    {
      termino: 'Bienestar',
      significado:
        'Condición integral relacionada con la salud, comodidad, seguridad, autonomía, participación y calidad de vida de la persona.',
    },
    {
      termino: 'Desinfección',
      significado:
        'Proceso destinado a reducir o eliminar microorganismos presentes en superficies mediante métodos químicos o físicos apropiados.',
    },
    {
      termino: 'Esparcimiento',
      significado:
        'Actividades realizadas para el disfrute, la recreación, el descanso y el aprovechamiento significativo del tiempo libre.',
    },
    {
      termino: 'Mecánica corporal',
      significado:
        'Aplicación de principios de postura, equilibrio y movimiento para realizar actividades físicas de manera segura y disminuir el riesgo de lesiones.',
    },
    {
      termino: 'Movilización',
      significado:
        'Acciones destinadas a facilitar cambios de posición, desplazamientos o transferencias de una persona de manera segura.',
    },
    {
      termino: 'Ocio',
      significado:
        'Actividades realizadas voluntariamente durante el tiempo disponible, de acuerdo con los intereses y preferencias de la persona.',
    },
    {
      termino: 'Participación',
      significado:
        'Intervención activa de la persona mayor en actividades, relaciones y decisiones relacionadas con su vida cotidiana.',
    },
    {
      termino: 'Percepción',
      significado:
        'Forma en que la persona mayor interpreta y experimenta una situación, actividad o condición de su entorno.',
    },
    {
      termino: 'Red de apoyo',
      significado:
        'Conjunto de personas, grupos, organizaciones o instituciones que proporcionan diferentes formas de apoyo a la persona mayor.',
    },
    {
      termino: 'Satisfacción',
      significado:
        'Grado de conformidad de la persona mayor frente a las actividades, condiciones o servicios relacionados con su cuidado y bienestar.',
    },
    {
      termino: 'Sobreprotección',
      significado:
        'Conducta que limita innecesariamente la participación y autonomía de una persona al realizar por ella actividades que puede desarrollar por sí misma.',
    },
    {
      termino: 'Tiempo libre',
      significado:
        'Periodo disponible después de atender las responsabilidades y actividades necesarias de la vida cotidiana.',
    },
  ],
  referencias: [
    {
      referencia:
        'Asamblea Nacional Constituyente. (1991). Constitución Política de Colombia. Departamento Administrativo de la Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4125',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2008). Ley 1251 de 2008. Departamento Administrativo de la Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=33964',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2009). Ley 1315 de 2009. Departamento Administrativo de la Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=36834',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2017). Ley 1850 de 2017. Departamento Administrativo de la Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=82917',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s. f.). Desnutrición.',
      link: 'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/CA/prevenir-la-malnutricion-o-desnutricion.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2022). Decreto 681 de 2022.',
      link: 'https://www.minsalud.gov.co/Normatividad_Nuevo/Decreto%20No.%20681%20de%202022.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s. f.). Programa Ampliado de Inmunizaciones (PAI).',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (2015). <em>Informe mundial sobre el envejecimiento y la salud.</em>',
      link: 'https://apps.who.int/iris/handle/10665/186466',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (2009). <em>Directrices de la OMS sobre higiene de las manos en la atención sanitaria.</em>',
    },
    {
      referencia:
        'Organización Panamericana de la Salud. (2022). <em>Cartera de programas basados en la evidencia para la atención integrada y centrada en la persona para personas mayores en el nivel de atención primaria de salud.</em>',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez ',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Laura Briguitte Perea Possos',
          cargo: 'Experto temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
