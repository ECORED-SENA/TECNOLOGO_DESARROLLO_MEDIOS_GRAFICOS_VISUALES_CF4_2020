<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Imagen e identidad corporativa
    p.mb-5 En el siguiente cuadro podrá conocer la definición de imagen e identidad corporativa.
    .tabla-a.color-acento-contenido.mb-5 
      table
        thead
          tr
            th Imagen corporativa
            th Identidad corporativa
        tbody.p-5
          tr
            td 
              figure
                img(src='@/assets/curso/img77.jpg', alt='imagen vectorial calavera con fuego')
            td 
              figure
                img(src='@/assets/curso/img78.jpg', alt='fotografía de perro')
          tr
            td La imagen corporativa es la concepción que tenemos de una  empresa, marca, producto, o servicio,  en relación a si es bueno(a) o malo(a), cuál es el valor que percibimos de la misma, si cumple con lo que promete o no, entre otras.
            td La identidad corporativa es de gran importancia en  una organización, ya que influye en todos los ámbitos decisivos de la misma. La identidad tiene que ver con los valores de la marca, su buen nombre, su espíritu y esencia, es el ADN de la misma. 
          tr
            td La imagen corporativa hace referencia a los valores externos de la marca.  
            td La identidad  corporativa son los factores internos de la organización, muchas veces intangibles. 
          tr
            td  Es percibida por la gente a través de los servicios que proyecta la empresa en el exterior. 
            td Se crea una identidad distintiva dentro de toda la  organización, por medio de rasgos característicos de la misma. 
          tr
            td  Lo construye el público a partir de situaciones, vivencias, o influencia de otras personas.  
            td  Se construye internamente a partir de lo que quiere y desea expresar la  misma empresa.
          tr
            td  El concepto que tiene un cliente sobre una marca o producto es muy difícil de controlar, ya que pesan elementos como la tradición, el precio, el empaque, etc. 
            td  Se controla a voluntad, ya que son los procesos internos de la empresa, los cuales por lo general tienen un equipo robusto de trabajo. 
    #t_2_1.titulo-segundo
      .h3 2.1 Diseño de marca y branding
    .row.mb-5 
      .col-lg-6
        p 
          b Diseño de marca: 
          b-none El diseño de marca es la representación gráfica de los valores más relevantes de una empresa. Es parte de la cara visible de la empresa al público, esta compuesta por factores psicológicos, gráficos y visuales, intangibles, que son compartidos a los consumidores.
      .col-lg-6
        figure.mb-5 
          img(src='@/assets/curso/img79.jpg' alt='AvatarTop' style='width:500px').m-auto
    .row.mb-5 
      .col-lg-6
        p 
          b Branding: 
          b-none Se entienden como el proceso de construcción de una marca, y todos los aspectos que intervienen. Construir una marca es mucho más que elegir un nombre y diseñar un logotipo, es lograr que sea conocida y recordada en la mente de los consumidores; para ello es necesario crear un ecosistema completo donde todo esté interconectado y se generen acciones relacionadas con ese propósito. 
            br
            br
            |El branding 
            b comprende experiencias, ideas, sensaciones, colores, y personas; un conjunto de elementos, mayormente intangibles
            b-none , que tienen que ver más con las emociones y la psicología, que con lo externo de las cosas; pero que son capaces de transmitir la propuesta de valor que diferencia a la empresa en el mercado y la hace competitiva.
      .col-lg-6
        figure.mb-5 
          img(src='@/assets/curso/img80.jpg' alt='AvatarTop' style='width:500px').m-auto
    p.mb-5 Estos son algunos de los pasos resumidos para la construcción de una marca:
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Brief" :icono="require('@/assets/curso/img81.svg')")
        .row.justify-content-end
          .col-md-7.mb-4.mb-md-0
            .h4 Brief
            p El brief es un factor que se debe tener en cuenta para un buen planteamiento del proyecto. Este informe que puede realizar de acuerdo con sus propios parámetros es fundamental, ya que allí están consignados y descritos, no solo la información del producto, sino los objetivos y resultados que el cliente espera obtener con el diseño de su marca.
          .col-md-4
            figure
              img(src='@/assets/curso/img86.jpg', alt='Texto que describa la imagen')
        
      .py-4.py-md-5(titulo="Investigación" :icono="require('@/assets/curso/img82.svg')")
        .row.justify-content-end
          .col-md-7.mb-4.mb-md-0
            .h4 Investigación 
            p Antes del brief no se conoce realmente al cliente, como tampoco a la marca que representa; la cual será parte del análisis y trabajo del diseñador durante un periodo de tiempo; es por esto que, la etapa investigativa es esencial. Una vez realizada la investigación permitirá tener un mayor conocimiento del cliente, público objetivo y herramientas requeridas, para la construcción de criterios con los cuales fundamentar la propuesta. Es importante hacer énfasis en el mercado, analizar la competencia por parte de otras marcas del sector, cuáles son las propuestas de valor que ofrecen, los clores que utilizan, las formas que emplean, las tipografías, como dinamizan el espacio, que lenguaje utilizan, cómo son los empaques, que materiales emplean, cuáles son sus estrategias, entre otros aspectos. 
        
          .col-md-4
            figure
              img(src='@/assets/curso/img87.jpg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Propuesta de valor" :icono="require('@/assets/curso/img83.svg')")
        .row.justify-content-end
          .col-md-7.mb-4.mb-md-0
            .h4 Propuesta de valor
            p Ya con una visión más realista y temporal, se realiza la construcción de los elementos principales que van a destacar la marca, que le darán valor, y que potencializarán y resaltarán sus características; en este paso pueden resultar elementos que valorizan la marca misma, además de aquellos que ya se conocen
        
          .col-md-4
            figure
              img(src='@/assets/curso/img88.jpg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Naming" :icono="require('@/assets/curso/img84.svg')")
        .row.justify-content-end.mb-5
          .col-md-7.mb-4.mb-md-0
            .h4 Naming
            p El naming es el proceso que se lleva a cabo para determinar el mejor nombre para la marca. Es tan importante el naming que se convierte en un activo empresarial, ya que el público va a relacionar de primera mano el nombre de la marca, con sus atributos, valores, y beneficios.
          .col-md-4
            figure.mb-5
              img(src='@/assets/curso/img89.jpg', alt='Texto que describa la imagen' style='width:396px')
          .row.mb-3
            .col-lg-6
              .tarjeta-avatar-b.hg.mb-5
                img(src='@/assets/curso/img129.svg' alt='AvatarTop')
                .tarjeta.claro
                  .p-4
                    .h4 Nombre descriptivo 
                    p El naming descriptivo, es aquel que en su marca cita específicamente o describe la actividad comercial principal del producto de la marca. Esta asociación de marca – producto, genera gran recordación en el cliente. 
                      b Por ejemplo, Burger King, pinturas Tito Pabón.
            .col-lg-6
              .tarjeta-avatar-b.hg.mb-5
                img(src='@/assets/curso/img130.svg' alt='AvatarTop')
                .tarjeta.claro
                  .p-4
                    .h4 Nombres acrónimos 
                    p Un acrónimo, es el término formado por la unión de dos o más palabras; 
                      b por ejemplo, docudrama, de documental dramático; MERCOSUR, de Mercado Común del Sur;
                      b-none  es más práctico decir AFE que Asociación de Futbolistas Españoles; o CAR, que Corporaciones Autónomas Regionales (Rivas, 2020). 
          .row.mb-3
            .col-lg-6
              .tarjeta-avatar-b.hg.mb-5
                img(src='@/assets/curso/img131.svg' alt='AvatarTop')
                .tarjeta.claro
                  .p-4
                    .h4 Nombres abstractos  
                    p Refiere principalmente al uso de palabras inventadas; 
                      b por ejemplo, la palabra Google, proviene de la palabra “Googol”
                      b-none , creada por el matemático norteamericano Edward Kasner y cuyo significado es diez elevado a cien. 
            .col-lg-6
              .tarjeta-avatar-b.hg.mb-5
                img(src='@/assets/curso/img132.svg' alt='AvatarTop')
                .tarjeta.claro
                  .p-4
                    .h4 Nombres sugerentes 
                    p Estos se construyen a partir de las sensaciones, emociones o experiencias que la marca genera en el consumidor; movilizan al cliente a la selección de dichos productos basados precisamente en la experiencia que les genera. 
          .row.ps-5
            .col-md-11
              p.ms-5.mb-3 
                b Características de un buen naming: 
                b-none existen diferentes métodos para comprobar si el naming seleccionado es el adecuado o no, considere las siguientes características básicas:
              ul.lista-ul--color.ms-5 
                li 
                  i.fas.fa-check
                  p
                    b Distintivo: 
                    b-none  ¿cómo se destaca el nombre entre la competencia?
                li 
                  i.fas.fa-check
                  p
                    b Sonoridad: 
                    b-none pronuncie el nombre en voz alta, ¿cómo suena? ¿es fácil de decir? ¿es poético?

                li 
                  i.fas.fa-check
                  p
                    b Recuerdo: 
                    b-none  ¿es fácil recordar el nombre? ¿cuántas veces tienes que escucharlo antes de recordarlo?
                li 
                  i.fas.fa-check
                  p
                    b Expresión:  
                    b-none ¿el nombre demuestra de qué se trata su marca? ¿se ajusta a la personalidad de la marca?
 
                li 
                  i.fas.fa-check
                  p
                    b Apariencia:  
                    b-none  ¿cómo se ve la palabra impresa? ¿se ve tan bien cómo suena? (Razak, s.f.).
    
      .py-4.py-md-5(titulo="Diseño de marca" :icono="require('@/assets/curso/img85.svg')")
        .row.justify-content-end
          .col-md-7.mb-4.mb-md-0
            .h4 Diseño de marca
            p Una vez cubiertos los pasos anteriores, es momento de empezar a crear la marca, la estrategia de comunicación, diseñar y ejecutar las piezas propuestas, todo lo anterior, basado en los estudios previos realizados.
          .col-md-4
            figure
              img(src='@/assets/curso/img90.jpg', alt='Texto que describa la imagen')
    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        .col-md-6.mb-4.mb-md-0
          .h4 Modal 1
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      
        .col-md-6
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen          
    .h4.mb-5 Tipos de branding
    .row.mb-5
      .col-lg-4
        figure.mb-4
          img(src='@/assets/curso/img91.svg', alt='Texto que describa la imagen')
        .h4 Branding comercial
        p Su principal función es la de diferenciar un producto frente a otro de la competencia, basado en sus características principales tangibles y sus valores intangibles. 
      .col-lg-4
        figure.mb-4
          img(src='@/assets/curso/img92.svg', alt='Texto que describa la imagen')
        .h4 Branding personal
        p Se refiere a personas que son su propia marca, que venden su imagen, formación, conocimiento o experiencias a un público en específico; pueden ser conferencistas, personas de negocios, o cualquier individuo interesado en gestionar y proyectar su imagen.  
      .col-lg-4
        figure.mb-4
          img(src='@/assets/curso/img93.svg', alt='Texto que describa la imagen')
        .h4 Country branding
        p Este branding es utilizado por ciudades o países, para vender su propia marca, con ello desean consolidarse a nivel turístico, mostrando las diferencias que los hacen únicos frente a otros lugares similares, resaltando su cultura; paisajes, comida, hospitalidad de su gente, mejores precios, entre otros. 
    .row.mb-5 
      .col-lg-4 
        figure.mb-4
          img(src='@/assets/curso/img94.svg', alt='Texto que describa la imagen')
      .col-lg-8 
        .h3 Digital branding
        p.mb-3 Hace referencia a estrategias de marca que se llevan a cabo concretamente a través de medios digitales; el branding digital es necesario para fomentar relaciones más estrechas y profundas entre las marcas y las personas. Dentro de estos escenarios digitales existen puntos de contacto como (Angie, 2020):
        .row.justify-content-start
          .col-4
            ul.lista-ul--color 
                li 
                  i.fas.fa-angle-right
                  | Social media

                li 
                  i.fas.fa-angle-right
                  | Marketing de influencia

                li 
                  i.fas.fa-angle-right
                  | Marketing de contenidos
          .col-4
            ul.lista-ul--color 
                li 
                  i.fas.fa-angle-right
                  | Marketing de correo


                li 
                  i.fas.fa-angle-right
                  | Motores de búsqueda 
    .h5.mb-5 Para ampliar la información, se recomienda consultar el libro de Paul Capriotti (2009), referente a Branding corporativo, fundamentos para la gestión estratégica de la identidad corporativa, disponible también en el material complementario de este programa.
    .row.mb-5 
      .col-lg-6
        a.anexo.mb-4(:href="obtenerLink('/downloads/BrandingCorporativo.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p 
                b Anexo. 
                b-none libro de Paul Capriotti (2009), referente a Branding corporativo, fundamentos para la gestión estratégica de la identidad corporativa.
    .row.mb-5.justify-content-between
      .col-lg-6
        .h4 Manual de identidad corporativa
        p El manual de identidad corporativa es un documento que tiene como objetivo plasmar los lineamentos que tendrá la marca; es decir, debe reunir los elementos visuales y comunicativos que permitan darle identidad a una empresa u organización y que también sirva como producto comunicativo en uso interno. 
          br
          br
          |Pero no es solo la imagen y el texto lo que comunica en una identidad corporativa, también existe una cultura corporativa que se refleja en el comportamiento, ideología y creencias por parte de los miembros que la conforman, así como también la interacción que establecen con sus clientes; es decir, es una representación de la empresa ante todo el público.
      .col-lg-5
        figure 
          img(src='@/assets/curso/img95.jpg' alt='AvatarTop' style='width:500px').m-auto
    p.mb-5 La estructura de un manual de identidad corporativa se compone de los siguientes aspectos: 
    .row.mb-3
      .col-lg-6
        .tarjeta-avatar-b.hg.mb-5
          img(src='@/assets/curso/img96.svg' alt='AvatarTop')
          .tarjeta.claro
            .p-4
              .h4 Introducción a la marca 
              p Se deben comunicar las bases sobre las cuales se va a construir la identidad corporativa, cuales son sus valores, que filosofía empresarial tiene. 
      .col-lg-6
        .tarjeta-avatar-b.hg.mb-5
          img(src='@/assets/curso/img97.svg' alt='AvatarTop')
          .tarjeta.claro
            .p-4
              .h4 Logotipo
              p Debe incluir las especificaciones referentes al diseño, el espacio entre los elementos, los colores y las escalas permitidas, así como el área de seguridad. También es necesario incluir los usos correctos e incorrectos del logo para evitar posibles errores. 
    .row.mb-3
      .col-lg-6
        .tarjeta-avatar-b.hg.mb-5
          img(src='@/assets/curso/img98.svg' alt='AvatarTop')
          .tarjeta.claro
            .p-4
              .h4 Color
              p Cuáles son los tonos permitidos en torno de la marca y cuáles combinaciones son inadmisibles, además de indicar los patrones para materiales impresos, así como el color HEX para aquellos digitales. 
      .col-lg-6
        .tarjeta-avatar-b.hg.mb-5
          img(src='@/assets/curso/img99.svg' alt='AvatarTop')
          .tarjeta.claro
            .p-4
              .h4 Composición
              p Contiene las normas básicas de diseño que reflejen la intención de la marca; ayuda a crear una disposición visual distintiva.
    .row.mb-3
      .col-lg-6
        .tarjeta-avatar-b.hg.mb-5
          img(src='@/assets/curso/img100.svg' alt='AvatarTop')
          .tarjeta.claro
            .p-4
              .h4 Iconos y otros elementos 
              p Explica como utilizar la biblioteca de íconos que la empresa incluye en impresos o medios digitales; por ejemplo, cómo utilizar el ícono de "descargar" en cuanto a tamaños y colores. 
      .col-lg-6
        .tarjeta-avatar-b.hg.mb-5
          img(src='@/assets/curso/img101.svg' alt='AvatarTop')
          .tarjeta.claro
            .p-4
              .h4 Imágenes
              p Incluye el uso y tratamiento de las fotografías e ilustraciones, así como el tipo de enfoque permitido; por ejemplo, puede que la marca solo utilice imágenes duotono (compuestas solo por dos colores) o fotografías que transmitan diversidad.
    .row.mb-3
      .col-lg-6
        .tarjeta-avatar-b.hg.mb-5
          img(src='@/assets/curso/img102.svg' alt='AvatarTop')
          .tarjeta.claro
            .p-4
              .h4 Tipografía
              p Indique cómo utilizar las fuentes de tu marca, incluyendo tamaño, espaciado, uso de fondos oscuros y claros, así como combinaciones entre títulos y párrafos de texto; ejemplo, H1, H2, H3 y párrafo (Samsing, 2019). 
    #t_2_2.titulo-segundo
      .h3 2.2 Productos editoriales
    p.mb-5 Los podemos definir como todos aquellos productos que puedan ser impresos y que tengan como fin llegar a un público determinado; estas obras editoriales corresponden a libros, revistas, folletos, manuales técnicos y didácticos, carteles, y demás productos que requieran impresión y que en su contenido tengan una información concreta para un público especifico.
      br
      br
      |Cada producto editorial tiene una manera única de desarrollar su contenido; los cuales cuentan con algunos elementos y requerimientos que deben considerarse en la elaboración de las piezas editoriales; aún cuando la estructura puede ser similar, el desarrollo interno de cada uno será diferente.
      br
      |Los elementos que van a definir el producto gráfico y que debe tener muy en cuenta son:
    .row.mb-5 
      .col-lg-4
        figure
          img(src='@/assets/curso/img103.jpg' alt='AvatarTop') 
      .col-lg-8 
        ul.lista-ul--color 
          li.container--azul.p-4.mb-4 
            i.fas.fa-angle-right
            | Cuáles serán los criterios de manejo de la información para la construcción editorial.
          li.container--azul.p-4.mb-4 
            i.fas.fa-angle-right
            | Qué argumento va a desarrollarse en las ilustraciones que realcen su contenido.  
          li.container--azul.p-4.mb-4 
            i.fas.fa-angle-right
            | Cuáles son los requisitos de maquetación que harán parte del diseño interior de la paginas escritas y visuales del material editorial; sin olvidar las tintas y el proceso de color.
          li.container--azul.p-4.mb-4 
            i.fas.fa-angle-right
            | Qué requieren los productos impresos en su elaboración, teniendo en cuenta elementos textuales, gráficos, y tipográficos; esenciales para generar impacto visual e interés editorial.
          li.container--azul.p-4.mb-4 
            i.fas.fa-angle-right
            | Cuál será la organización y distribución de los elementos (maquetación y diagramación).
    p.mb-5  Son tantos los componentes de estilo, forma y estructura que intervienen en los productos impresos, que cada editorial ha definido su modelo y estilo propio; no se puede olvidar que la digitalización ha configurado una nueva dinámica en la industria editorial; pues aunque anteriormente se mencionan algunos de los aspectos a tomar en consideración al momento de generar un contenido editorial, desde la editorial digital también se cumplen con aquellas especificidades, aunque no hay material impreso la estructura de elaboración será la misma y en igual grado de importancia. 
      br
      br
      |Una corta reflexión y contextualización del tema, sugiere que la digitalización amplía de manera exponencial las posibilidades gráficas, generando una alta circulación a través de medios masivos de comunicación. En el contenido digital recobra interés lo gráfico, las posibilidades creativas, el nuevo lenguaje del color, las formas, los espacios, siendo elementos que no deben descuidarse.
    .row.mb-5.justify-content-between
      .col-lg-6
        .h4 Editoriales
        p Hacer referencia a editoriales, es establecer que son sociedades empresariales encargadas de publicar y distribuir escritos. Una empresa editorial tiene necesidades particulares y públicos específicos; esta es la base para que cada editorial conserve una línea en su concepto de contenido; esta línea de ejecución que es intelectual, conceptual y creativa, tiene una postura ideológica y desde ahí se desarrollan las propuestas; es decir, las estructuras comunicativas, el lenguaje, la iconografía, tipografía, imágenes, entre otros, son dados para llegar al mercado, clientes, lectores y consumidores del editorial.
      .col-lg-6
        figure 
          img(src='@/assets/curso/img104.jpg' alt='AvatarTop' style='width:500px').m-auto
    .row.mb-5.justify-content-center
      .col-lg-6
        .cajon.color-acento-contenido.claro.p-4.mb-4
          .h5 Ahora bien, la editorial tiene productos editoriales, esto es; periódicos, revistas, libros, manuales didácticos, revistas corporativas y algunos otros productos derivados de mercado. 
    .row.mb-5.justify-content-between
      .col-lg-6
        figure 
          img(src='@/assets/curso/img105.jpg' alt='AvatarTop' style='width:500px').m-auto
      .col-lg-6
        .h4 Periódicos
        p Dentro de los productos derivados de casa editorial están los periódicos; como su nombre lo indica es una publicación periódica, es decir estable y continua; su estructura editorial es noticiosa y narrativa puede desarrollarse como crónica o reportaje. Incluye la opinión desde sus columnistas, periodistas que a nombre propio asumen una posición acerca de un tema en particular del contexto de interés del periódico; de igual manera contiene información policial, económica, deportiva, cultural y de entretenimiento; por lo general, un periódico tiene un amplio espectro de información de esa manera tiene un público amplio en intereses, edades, y posturas ideológicas y políticas. Entendiendo lo anterior, tienen secciones como tiras cómicas, crucigramas u otras propuestas para el entretenimiento. En el mercado editorial se encuentran periódicos semanales o quincenales, que pueden abordar una sola temática, como la economía, que estaría dirigido a un solo segmento de público. Se destaca en el periódico las gráficas y el material fotográfico. 
    .row.mb-5.justify-content-between
      .col-lg-6
        figure 
          img(src='@/assets/curso/img106.jpg' alt='AvatarTop' style='width:500px').m-auto
      .col-lg-6
        .h4 Revistas
        p También es una publicación periódica, podríamos decir que los tiempos de elaboración y por tanto de circulación son más amplios que en el periódico; es decir, seria quincenal o mensual por su formato y contenido. Su mercado principal es la publicidad por lo que tendrá dentro de su contenido espacios pactados y pautados que influenciarán en el diseño interior de cada página en la revista. Como el periódico pueden ser variada o de temáticas específicas, siendo las últimas las más frecuentes. La iconografía, tipografía son altamente relevantes; el aspecto físico de la revista es muy importante, ya que el impacto que debe dar al público debe ser el adecuado según su segmento de contenidos.  Sus textos en la mayoría son artículos.
    .row.mb-5.justify-content-between
      .col-lg-6
        figure 
          img(src='@/assets/curso/img107.jpg' alt='AvatarTop' style='width:500px').m-auto
      .col-lg-6
        .h4 El libro
        p Es una obra escrita, que en su mayoría y de manera tradicional se distribuye de manera impresa; sin embargo, hoy en día los libros tienen gran influencia de la era digital. Desde la impresión, el libro es una pieza escrita que tiene una estructura especifica ya asumida por los lectores; puede en su interior tener ilustraciones como imágenes que permitan visualizar algún contenido específico de su narrativa. Para que en su configuración se considere como un libro debe tener más de 50 páginas por ejemplar, de lo contrario se asume como un folleto.  Su estructura narrativa debe cumplir con los requerimientos del público según su género literario; lo anterior, explica cómo la forma narrativa del texto del libro expresa su dialogo con el lector. Entre las obras literarias se encuentran, el cuento, la novela, fabula, epopeya, suspenso y drama, cada una de ellas tendrá su propio estilo narrativo.  
    #t_2_3.titulo-segundo
      .h3 2.3 Productos gráficos 
    P.mb-5 Constituyen la representación visual de una idea o concepto, hacer referencia a productos gráficos es identificar la necesidad de establecer los requerimientos necesarios para que la pieza de composición editorial se ajuste a las necesidades del cliente, su público y su marca. Para ello un producto gráfico en su proceso de desarrollo debe seguir una continuidad de pasos, para que el producto final cumpla con los requisitos en su composición editorial y composición gráfica.
    .row.mb-5.justify-content-between
      .col-lg-5
        .h4 Infografía
        p La infografía hace parte de las piezas publicitarias que sirve como herramienta comunicativa; la mayor característica de una infografía es que utiliza ilustraciones, imágenes, texto, diagramas y tabulaciones, con el fin de entregar la publico un mensaje claro y contundente, donde el observador realice una lectura e interpretación de los elementos gráficos como refuerzo del mensaje descrito.  
          br
          br
          b Los elementos de comunicación visual que la infografía presenta generan en el lector interés por el recurso utilizado, que de manera útil y ágil establece una comunicación directa, con facilidad de interpretación y comprensión.
          br
          br
          |La infografía es un recurso utilizado desde la docencia académica hasta en el área comercial, y su uso es de amplio interés ya que admite comunicar de manera simple conceptos que pueden llegar a ser complejos, además permite asimilar fácilmente la información al tener la posibilidad de observarla de manera inmediata, completa, e inadvertida. La utilización de texto, imágenes y tipografía es sumamente efectivo y bien apreciado por los medios gráficos 
      .col-lg-6
        figure 
          img(src='@/assets/curso/img108.svg' alt='AvatarTop' style='width:604px').m-auto
    p.mb-5 La infografía se puede utilizar en proyectos como:
    .row.mb-5.justify-content-center
      .col-lg-9
        figure 
          img(src='@/assets/curso/img109.svg' alt='AvatarTop').m-auto
    .h4 Poster, afiche y cartel
    .row.mb-5.justify-content-center
      .col-md-4.col-lg-4.mb-5.mb-lg-0
        .tarjeta-avatar-arreglo
          img(src='@/assets/curso/img110.svg' alt='AvatarTop' style=" width:120px")
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.claro
            .text-center.p-4.mt-5 
              .h4.text-center Poster 
              p Este es un documento que está compuesto principalmente por imágenes, texto y recursos gráficos. Debe ser de gran tamaño y tener una tipografía estéticamente atractiva y de fácil lectura para el transeúnte; los espacios externos son los habituales para esta clase de productos gráficos.
      .col-md-4.col-lg-4.mb-5.mb-lg-0
        .tarjeta-avatar-arreglo
          img(src='@/assets/curso/img111.svg' alt='AvatarTop' style=" width:120px")
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.claro
            .text-center.p-4.mt-5 
              .h4.text-center Afiche
              p Su intención comunicativa es la de convencer e invitar al público para adquirir un producto o servicio, o convencer al lector sobre algo determinado; por lo tanto, su texto informativo debe ser corto y contundente, con un diseño equilibrado entre elementos gráficos y texto, que permitan captar la atención de los usuarios. 
      .col-md-4.col-lg-4.mb-5.mb-lg-0
        .tarjeta-avatar-arreglo
          img(src='@/assets/curso/img112.svg' alt='AvatarTop' style=" width:120px")
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.claro
            .text-center.p-4.mt-5 
              .h4.text-center Cartel 
              p A diferencia de los anteriores documentos gráficos, el cartel tiene como objetivo comunicar ideas, es decir, brindar información a la persona que lo observa; su tamaño no es estrictamente grande, tiene una combinación de imágenes y texto limitado, la información que ofrece debe ser original y básica para lograr una comunicación efectiva con el público. 
    p.mb-5 En los tres casos anteriores, los documentos gráficos deben ser visualmente atractivos y sugestivos desde la utilización de colores y tipografía, aspecto fundamental para que el contenido temático sea llamativo para el receptor. Además, deben tener un balance, el cual se traduce en los elementos necesarios entre texto, imagen e ilustraciones; de esta manera lograr que la comunicación que se establece con el público sea efectiva, y le permita al observador captar y comprender el punto central de la información.
    .row.mb-5.justify-content-between
      .col-lg-6
        figure 
          img(src='@/assets/curso/img113.svg' alt='AvatarTop' style='width:621px').m-auto
      .col-lg-6
        .h4 Material didáctico
        p El material didáctico dentro de los productos gráficos, son elementos que coadyuvan en la formación integral de los estudiantes, facilitando los procesos de enseñanza-aprendizaje; tanto en modalidad presencial como en ambientes virtuales.  Los productos gráficos concebidos con propósitos educativos y diseñados correctamente tienen la capacidad de fortalecer los procesos de aprendizaje ya que estimula los órganos sensoriales de los aprendices, permitiendo la asimilación de contenidos académicos de manera más clara, fácil y directa. 
          br
          br
          |Por supuesto, es necesario realizar un acercamiento a métodos de aprendizaje que permitan comprender el comportamiento de quien aprende y así buscar la manera de potencializar esas competencias a partir del uso de recurso digitales. Respecto al desarrollo gráfico, es necesario profundizar en elementos de ergonomía cognitiva; es decir, comprender cómo un ambiente puede promover ciertos aprendizajes a partir del uso de colores, tipografía, imágenes o fotografías; en este sentido, es importante el trabajo que desarrolla el diseñador, la reflexión frente al lenguaje visual de los contenidos, cuál es el lugar adecuado para la imagen, el color y la tipografía en la búsqueda de apoyar la comprensión de ideas y conceptos (Leyva, s.f.). 
    figure.mb-5 
      img(src='@/assets/curso/img114.jpg' alt='AvatarTop').m-auto
    p.mb-5 Estos materiales didácticos pueden tener varias presentaciones: libros, carteles, videos, cartillas, infografías, entre otros, estos recursos son elaborados a partir de la identificación de la necesidad educativa, y definición del público objetivo y sus características: área de conocimiento, nivel educativo, edad, conocimientos previos, capacidades, habilidades y experiencias; información valiosa que servirá de insumo para generar los conceptos gráficos. 
      br
      br
      |Siempre será importante reconocer el contexto de los educandos; su desarrollo no solo cognitivo, sino también las habilidades tecnológicas que posee, y que son requeridas para el manejo efectivo de un material didáctico multimediático. Con toda esta información lo siguiente es determinar su ejecución, es decir que lenguaje narrativo se utilizará en el desarrollo de los contenidos, como será su presentación, y que nivel de interactividad deberá tener.
      br
      br
      |Todo material pedagógico es una pieza comunicativa gráfica con unas especificaciones y manejo del lenguaje textual y de imágenes estudiadas a fondo para llevar un mensaje claro, oportuno y de buen entendimiento a la comunidad estudiantil. 
    .h4.mb-4 Se resalta algunas ventajas del material didáctico:
    .row.mb-5.justify-content-between
      .col-lg-5
        figure 
          img(src='@/assets/curso/img115.jpg' alt='AvatarTop' style='width:621px').m-auto
      .col-lg-7
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span A
            | Favorece el desarrollo temprano del lenguaje.

          li 
            .lista-ol--cuadro__vineta
              span B
            | Promueve habilidades para comprender y utilizar e interpretar símbolos. 

          li 
            .lista-ol--cuadro__vineta
              span C
            | Ofrece diferentes estructuras de organización de datos.

          li 
            .lista-ol--cuadro__vineta
              span D
            | Permite una mayor capacidad de concentración, evitando el agotamiento mental.

          li 
            .lista-ol--cuadro__vineta
              span E
            | Mejora la comprensión y aprehensión de los contenidos al brindar elementos multimediales.
    #t_2_4.titulo-segundo
      .h3 2.4 Productos publicitarios 
    .row.mb-5 
      .col-lg-6
        .bloque-texto-b.color-acento-contenido.claro-before.p-4.my-auto.d-flex
          .bloque-texto-b__texto
            span.h2.mb-0 Hace referencia a un producto tangible, con un valor simbólico, que tiene como requisito entregar una información persuasiva a un público en particular, con el objetivo de motivar el interés y generar aceptación y gusto por una marca;  
      .col-lg-6.my-auto
        p.my-auto como producto publicitario es generador de comunicación, busca orientar estrategias para  dar a conocer productos y servicios a partir de la identificar de las necesidades del público; el producto publicitario cumple con el objetivo cuando comunica de manera convincente la marca influyendo en el comportamiento de compra de un potencial cliente. 
    .row.mb-5.justify-content-between
      .col-lg-6
        .h4 Material P.O.P.
        p Los productos publicitarios P.O.P. se podría comprender como un solo producto promocional distribuido en muchas piezas; lo particular de esta publicidad es que se puede asumir como un regalo al cliente para que tenga recordación en el marca; es decir, son piezas u objetos que servirán de plataforma para imprimir la publicidad, pueden ser: vasos, esferos, mug, afiches, camisetas, bolsas, llaveros y muchos otros artículos u elementos que permitan la impresión, para ser obsequiados por una empresa como herramienta de marketing. 
          br
          br
          |El campo de la publicidad es amplio, tanto en sus productos como en lugares de representación de la marca, uno de ellos es el punto de venta; en donde se debe destacar y generar aceptación por parte de los asistentes, por esta razón el material P.O.P. se obsequian al público.
      .col-lg-6
        figure 
          img(src='@/assets/curso/img116.jpg' alt='AvatarTop' style='width:621px').m-auto
    p.mb-5 Esta forma de publicidad, como las anteriores, busca también la recordación de la marca; la diferencia de los materiales P.O.P. es que su exhibición como estrategia fundamental del ejercicio publicitario, propone un espacio pensado en el cliente, con la pieza comunicativa adecuada; y con el diseño de elementos funcionales y útiles para quienes se los llevan, lo cual, genera un impacto certero. Esto hará que el cliente se sienta exclusivo e incluido en los bienes y servicios de una marca en particular.
    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5.color-gris 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              .h3.mb-0 Lo que busca la promoción, y que está en el obsequio que se regala al público, es generar el impacto de marca;  
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p La utilización de los diferentes artículos como estrategia, es importante porque no solo está entregando la marca impresa, sino que también está ofreciendo un artículo que beneficia al cliente (camiseta, mug, bolsas, esfero, vasos, etc.), si bien, es un beneficio simple este también ofrece una experiencia importante al consumidor.
    .row.mb-5.justify-content-between
      .col-lg-6
        figure 
          img(src='@/assets/curso/img117.jpg' alt='AvatarTop' style='width:621px').m-auto
      .col-lg-5
        p Respecto a las impresione en los diferentes artículos mencionados, es importante tener en cuenta que se deben cumplir con unos estándares de calidad, que garanticen que la marca tenga una buena representación en los artículos; estos aspectos son: la impresión, tamaño de la impresión, el diseño, mensaje e imagen del producto, los cuales deben ser claros y de muy buena presentación en su composición, de igual manera los textos tienen que tener una tipografía adecuada, que se ajuste al concepto de la marca.
    p.mb-5 Las piezas P.O.P deben comunicar el mensaje de una forma clara y breve, sus diseños no deben generar ninguna distracción visual y deben destacar lo más significativo de la marca; el contraste en los colores, la intensidad de sus líneas, y las estructuras de las piezas gráficas deben ser estables al momento de la impresión, esto se percibe a través del color, y las formas; pues estos artículos su diseño e impresión son una ventana para la marca, es una trasferencia clara de lo que la marca puede ofrecerle al cliente y esto se puede representar en calidad, inmediatez, servicio, distinción, es decir; transmitirle al cliente lo mejor de la marca. Por supuesto no   debemos olvidar los enlaces web dentro del diseño, que remita al sitio web de la empresa o sus redes sociales.
      br
      br
      |Los artículos más utilizados como estrategia publicitaria son:
    .row
      .col-lg-6 
        .d-flex.align-items-center
            img(src='@/assets/curso/img118.svg' alt='AvatarTop' style='width:84px').mb-3.d-inline-block.me-3
            p.d-inline-block.pe-5
              b Folletos, plegables volantes, catálogos como estrategia informativa.
        .d-flex.align-items-center
            img(src='@/assets/curso/img119.svg' alt='AvatarTop' style='width:84px').mb-3.d-inline-block.me-3
            p.d-inline-block.pe-5
              b Vasos para consumo de bebidas.
        .d-flex.align-items-center
            img(src='@/assets/curso/img120.svg' alt='AvatarTop' style='width:84px').mb-3.d-inline-block.me-3
            p.d-inline-block.pe-5
              b Pendones, afiches.
      .col-lg-6 
        .d-flex.align-items-center
            img(src='@/assets/curso/img121.svg' alt='AvatarTop' style='width:84px').mb-3.d-inline-block.me-3
            p.d-inline-block.pe-5
              b Esferos o cuadernos en sus variadas presentaciones. 
        .d-flex.align-items-center
            img(src='@/assets/curso/img122.svg' alt='AvatarTop' style='width:84px').mb-3.d-inline-block.me-3
            p.d-inline-block.pe-5
              b Camiseta, gorras, pañoletas.
    p.mb-5 En fin, todos los artículos que permitan impresión y que puedan ser no solo utilizados sino también exhibidos por los clientes en su día a día, en sus sitios de trabajo u otros contextos, lo cual posibilitará que otras personas también conozcan la marca.
    #t_2_5.titulo-segundo
      .h3 2.5. Productos corporativos
    .row.mb-5.justify-content-between
      .col-lg-5
        p Las piezas gráficas que las empresas utilizan para sus comunicaciones externas, es una publicidad a manera de productos comunicativos y también generan identidad corporativa. Para el desarrollo de estas piezas se debe tener claro cuáles son las necesidades comunicativas y como es la mejor manera de transformar esas necesidades en productos físicos que se ajusten a los requerimientos de la empresa. En esta sociedad donde hay un uso exponencial de marcas, referencia y publicidades, los productos corporativos se han desarrollado creativamente hasta llegar a competir en diseño con la publicidad comercial; esto nos permite pensar en el grado de compromiso, seriedad y creatividad que se debe tener el diseñador para desarrollar productos como estos.
      .col-lg-6
        figure 
          img(src='@/assets/curso/img123.jpg' alt='AvatarTop' style='width:621px').m-auto
    .row.mb-5.justify-content-between
      .col-lg-5
        .h4 Brochure
        p El brochure es un documento gráfico en presentación de folleto plegable, en su gran mayoría en el se hace referencia a los servicios que ofrece la empresa. El folleto es una pieza plegable con muchas caras en su superficie por su misma funcionalidad.
          br
          br
          |Esta es una publicidad en todo sentido, da una información, genera respuestas a necesidades del público, busca despertar el interés hacia algún aspecto de la empresa. Es decir, es un contacto más prudente, pero con la intención de vender productos o servicios. El brochure, en su mayoría se distribuye como material impreso, tiene como objetivo también crear un canal de información interno y externo.
        figure 
          img(src='@/assets/curso/img124.jpg' alt='AvatarTop' style='width:621px').m-auto
      .col-lg-6
        figure 
          img(src='@/assets/curso/img125.jpg' alt='AvatarTop' style='width:621px').m-auto
    p.mb-5 Por ser un producto relacionado directamente con las agencias de publicidad el material gráfico, de preferencia impreso, es un referente de los servicios y productos que la empresa tiene para el público; pero también se debe reconocer que es un dialogo directo de la marca de la empresa con un potencial cliente; por lo tanto, habrá que pensar que es reflejo de la misma, su carta de presentación, siendo necesario considerar los colores, tipografía, ilustraciones y demás aspectos que representan la marca, convirtiéndose en una valiosa herramienta de marketing.
    .row.mb-5.justify-content-between
      .col-lg-5
        figure 
          img(src='@/assets/curso/img126.jpg' alt='AvatarTop' style='width:621px').m-auto
      .col-lg-6
          p Como generador de contenido grafico debe tener en cuenta cuales son las funciones de un brochure y el para qué de su realización; una de estas funciones es informativa; tiene como objetivo dar a conocer que sucede, como se desarrolla algún tema en particular o general, desde ahí habrá que saber que estilo de contenido textual, gráfico y fotográfico se utilizará; otra función es la publicitaria en la cual su dialogo al exterior tiene otros valores estéticos, estilísticos y funcionales. La última función es la representativa; donde se asume el brochure como un elemento integral de la empresa; parte de ella, no solo por el contenido, por lo que dice, por lo que expone; sino también por lo que proyecta; respeto, credibilidad, entendimiento, entre otros elementos que no solo se pueden observar en el folleto, si no también se pueden intuir desde el diseño visual.
            br
            br
            |En el desarrollo del folleto como pieza gráfica, se debe considerar elementos como: 
            b el contenido, el formato, el diseño y la impresión.
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="El contenido").p-3
        p Para definir el contenido debe comenzar por: identificar qué es lo que se desea comunicar, es decir que información va a tener el folleto; posteriormente es necesario jerarquizarlo, qué secuencia tendrá, en orden de importancia y según su necesidad comunicativa, piense que un mismo texto se puede expresarse de manera distinta según la intencionalidad de la organización; finalmente es recomendable realizar un boceto de tamaño real y con los pliegues proyectados para reconocer los espacios y dimensiones donde intervendrán el texto, imágenes y gráficos, con estos sabrá el números de la paginas y cuál puede ser el aspecto de la pieza final.
      .row(titulo="El formato").p-3
        p En el formato, se hace referencia a las dimensiones de la pieza grafica o el folleto; las más comunes son las medidas estándar como: 
          b A1, A2, A3, A4, A5, A6, etc. 
          b-none Si se tiene la posibilidad de utilizar formatos no estandarizados que permitan tener una superficie más amplia y por tanto más contenido, esto puede generar mayor impacto en el público focal.  Sin embargo, sea cual sea el formato, lo ideal es aprovechar al máximo toda la superficie para el contenido. 
      .row(titulo="El diseño").p-3
        p En cuanto al diseño que es la parte por supuesto más llamativa, hay que tener en cuenta algunas pautas para desarrollar una adecuada pieza publicitaria, aunque un folleto en la mayoría de los casos tiene seis caras por sus tres pliegues, o cuatro caras por sus dos pliegues, siempre debe llevar una portada; esto es importante pues será el primer contacto que el cliente tendrá con la pieza, por lo que deberá contener información general sobre lo que contendrá el folleto.
          br
          br
          |Tener presente que debe llevar un título que impacte, que sobresalga, y un logotipo que represente a la empresa o marca.  En la contraportada podrá llevar datos de la empresa, dirección, sitio web, redes sociales; en fin, todo aquello que le permita al cliente contactar con la entidad; así también no olvidar los subtítulos y destacados.  
    .row.mb-5.justify-content-center
      .col-lg-7
        .cajon.color-acento-contenido.claro.p-4.mb-4
          p
            b Todos estos referentes deben tener la intensión de atraer la atención del lector a cada parte específica del folleto, pues finalmente es una herramienta que tiene la empresa para presentarle al cliente sus productos o servicios; que un diseño adecuado, se convertirá en un elemento publicitario de alto impacto, que seguramente el cliente recordará. 
    .row.mb-5.justify-content-between
      .col-lg-5
        .h4 Membrete
        p La membresía es la información que está en la parte superior o inferior sobre el material impreso; esta información puede corresponder a un nombre o a un logotipo que represente a la empresa o marca. La utilidad de este documento, que en la mayoría de los casos corresponden a hojas de papel, es que servirá para escribir a mano o imprimir, pero que, al contar con una identidad visual, le otorga credibilidad al momento de ser entregado a sus clientes. 
        figure 
          img(src='@/assets/curso/img127.jpg' alt='AvatarTop' style='width:621px').m-auto
      .col-lg-6
        figure 
          img(src='@/assets/curso/img128.jpg' alt='AvatarTop' style='width:621px').m-auto




</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    modal1: false,
  }),
}
</script>

<style lang="sass" scoped></style>
