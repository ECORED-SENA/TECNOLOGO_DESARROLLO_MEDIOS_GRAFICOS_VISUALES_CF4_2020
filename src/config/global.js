export default {
  global: {
    componenteFormativo: 'Producción gráfica 1',
    descripcionCurso:
      'La producción gráfica está presente prácticamente en todos los ámbitos de la vida, el diseño gráfico es una disciplina artística, que encuentra en la publicidad su máximo potencial; la publicidad se ha convertido en un elemento indispensable para una empresa a la hora de atraer más clientes y competir en el mercado; por eso, se debe asegurar que el diseño transmita el mensaje correctamente; la utilización de herramientas tecnológicas y software especializados soluciona de manera práctica la construcción de piezas publicitarias. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Producción gráfica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Software vectorial ',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Imagen e identidad corporativa',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Diseño de marca y branding',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Productos editoriales',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Productos gráficos ',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: ' Productos publicitarios ',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Productos corporativos',
            hash: 't_2_5',
          },
        ],
      },
    ],
    subMenu: [
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Astrid Lili Puerta',
        cargo: 'Experta temática',
        centro: 'Centro Agropecuario de Buga',
        regional: 'Regional valle',
      },
      {
        nombre: 'Javier Enrique Santana',
        cargo: 'Experto temático',
        centro: 'Centro de Gestión Industrial',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Michael Andrés Cortés Caro',
        cargo: 'Experto temático',
        centro: 'Ministerio de Ambiente y Desarrollo Sostenible',
      },
      {
        nombre: 'Mauricio Jiménez Fajardo',
        cargo: 'Experto temático',
        centro: 'Ministerio de Ambiente y Desarrollo Sostenible',
      },
      {
        nombre: 'Manuel Alejandro Garzón Cárdenas',
        cargo: 'Experto temático',
        centro: 'Deutsche Gesellschaft für',
        regional: 'Internationale Zusammenarbeit (GIZ)',
      },
      {
        nombre: 'Liliana Victoria Morales Gualdrón',
        cargo: 'Diseñador instruccional',
        centro: 'Centro para la Industria y la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Carlos Andrés Rodríguez',
        cargo: 'Evaluador instruccional',
        centro: 'Centro de Diseño y Metrología',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Julieth Paola Vital López',
        cargo: 'Revisora de estilo',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Integración de recursos y pruebas',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: ['Adriana Rincón Avendaño', 'Eulises Orduz Amezquita'],
        cargo: 'Diseño web y Producción Audiovisual',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo Front-End',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Brayan Stiven Pinto Diaz',
        cargo: ['Desarrollo front-end', 'Validación de recursos'],
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Adobe. (2016). Ayuda de Adobe Illustrator CC.',
      descargar: 'downloads/illustrator_reference.pdf',
    },
    {
      referencia: 'Adobe. (2017). Empaquetado de archivos.',
      link: 'https://helpx.adobe.com/es/illustrator/using/package-files.html',
    },
    {
      referencia: 'Adobe. (s.f.). Resumen de efectos.',
      link: 'https://helpx.adobe.com/es/illustrator/using/summary-effects.html',
    },
    {
      referencia:
        'Capriotti P. (2009). Branding corporativo Fundamentos para la gestión estratégica de la identidad corporativa. ',
      descargar: 'downloads/BrandingCorporativo.pdf',
    },
    {
      referencia:
        'Kalous, P. (2010). Una introducción a las herramientas de color de Illustrator. ',
      link:
        'https://design.tutsplus.com/es/tutorials/an-introduction-to-illustrators-color-tools--vector-3549',
    },
    {
      referencia:
        'Razak, A. (s.f.). Naming: definición, tipos y guía paso a paso. ',
      link: 'https://www.branfluence.com/guia-proceso-de-naming/',
    },
    {
      referencia: 'Rivas, T. (2020). ¿Qué es un acrónimo?',
      link:
        'https://www.estandarte.com/noticias/idioma-espanol/qu-es-un-acrnimo_2120.html',
    },
    {
      referencia:
        'Samsing, C. (2019). Branding Empresarial: cómo crear un manual de identidad corporativa.',
      link:
        'https://blog.hubspot.es/marketing/branding-e-identidad-corporativa-guias-de-estilo',
    },
    {
      referencia: '',
      link: '',
    },
    {
      referencia: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Branding',
      significado:
        'hace referencia al proceso para construir y gestionar una marca, se vincula en forma directa o indirecta al nombre y/o símbolo (logotipo), que la identifican, la hacen única y competitiva.',
    },
    {
      termino: 'Editorial',
      significado:
        'corresponde a un articulo que expresa la opinión sobre un tema determinado, generalmente de interés público; a través de un medio de comunicación como el periódico o la revista.',
    },
    {
      termino: 'Exponencial',
      significado:
        'Relativo a crecimiento, que se incrementa cada vez más rápido.',
    },
    {
      termino: 'Interfaz de usuario',
      significado:
        'en el ámbito de la informática se conoce como el medio que le permite al usuario comunicarse con la máquina. Generalmente los programas informáticos usan una interfaz intuitiva, que facilita la navegación e interacción.',
    },
    {
      termino: 'Marca',
      significado:
        'se entiende como una identificación comercial, conformada por atributos y valores que la hacen única.',
    },
    {
      termino: 'Publicidad',
      significado:
        'es una forma de comunicación con el propósito de presentar, divulgar o promocionar productos o servicios.',
    },
    {
      termino: 'Software vectorial:',
      significado:
        'permite la creación de diseños con gran valor artístico a través de vectores, y con la ventaja que se pueden ampliar o reducir sin perder la calidad.',
    },
  ],
  complementario: [
    {
      texto: 'Adobe. (2016). Ayuda de Adobe Illustrator CC. ”',
      tipo: 'Documento PDF',
      descarga: '/downloads/illustrator_reference.pdf',
    },
    {
      texto:
        'Capriotti, P. (2009). Branding corporativo, fundamentos para la gestión estratégica de la identidad corporativa. ',
      tipo: 'Documento PDF',
      descarga: '/downloads/BrandingCorporativo.pdf',
    },
  ],
}
