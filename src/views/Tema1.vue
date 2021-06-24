<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Producción gráfica
    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5.color-gris
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              .h3.mb-0 La producción gráfica es el proceso mediante el cual se lleva a cabo la creación e implementación de diversas piezas a nivel visual;
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p a través del uso y manejo de herramientas tecnológicas, pasando por numerosas fases que van desde el proceso de investigación y creación, hasta llegar a los medios impresos como libros, revistas, catálogos, carteles, folletos, periódicos y demás. Su funcionalidad como medio de difusión en el ámbito de las artes gráficas, el diseño y la publicidad, es el de dar a conocer de manera eficaz y asertiva una marca, un producto o un servicio, haciendo que se destaque sus principalmente características y bondades, para llevarlo a ser conocido y competitivo en el mercado.
    #t_1_1.titulo-segundo
      .h2 1.1 Software vectorial 
    .container-tarjetas.d-flex.p-1.justify-content-center
      .tarjeta_img.tarjeta_img--cyan.p-4.mx-1.mb-3
        img(src='@/assets/curso/img1.svg', alt='imagen vectorial pluma de diseño' style='width:90px').m-auto.mb-3
        p Un software vectorial es aquel que permite la creación y edición de gráficos por medio de vectores, líneas que se pueden, modificar para crear dibujos, ilustraciones, logotipos, tipografías y demás.
      .tarjeta_img.tarjeta_img--mostaza.mx-1.p-4.mb-3
        img(src='@/assets/curso/img2.svg', alt='dibujo vectorial abeja' style='width:184px').py-5.m-auto
      .tarjeta_img.tarjeta_img--amarilla.mx-1.p-4.mb-3
        img(src='@/assets/curso/img3.svg', alt='dibujo vectorial de lineas' style='width:292px').py-5
      .tarjeta_img.tarjeta_img--gris.mx-1.p-4.mb-3
        img(src='@/assets/curso/img4.svg', alt='dibujo vectorial zorro' style='width:260px').py-5.m-auto
    p.mb-5 Para una mejor comprensión es importante definir qué es una imagen vectorial y qué es una imagen de mapas de bits, sus diferencias, manejos y usos.
    .tarjeta.tarjeta--gris.p-5.mb-5
        .row
          .col-lg-4
            h4 Imagen vectorial
            p.mb Una imagen vectorial es aquella realizada por medio de vectores, objetos definidos a partir de puntos unidos por líneas que forman figuras geométricas, para realizar dibujos, ilustraciones, logotipos, etc.
          .col-lg-8
            SlyderC(:datos="datosSlyder1")
    .tarjeta.tarjeta--gris.p-5.mb-5
      .row
          .col-lg-4
            h4 Imagen mapa de bits
            p.mb La imagen de mapa de bits es una imagen conformada por pequeños puntos de color llamados píxeles, cada uno contiene un color y ciertas características. A mayor cantidad de puntos se obtiene una mayor resolución y a menor cantidad de estos una baja en la calidad de imagen. Estas imágenes son las que generalmente conocemos como fotografías y están representadas por dos números que simbolizan la cantidad de puntos a lo largo y ancho, por ejemplo 1280 x 720.
          .col-lg-8
            SlyderC(:datos="datosSlyder2")
    p.mb-5 A continuación, se presenta un cuadro comparativo para imagen vectorial e imagen mapa de bits. 
    .tabla-a.color-acento-botones.mb-5 
      table
        thead
          tr
            th Imagen vectorial
            th Imagen mapa de bits
        tbody.p-5
          tr
            td 
              figure
                img(src='@/assets/curso/img11.svg', alt='imagen vectorial calavera con fuego')
            td 
              figure
                img(src='@/assets/curso/img12.jpg', alt='fotografía de perro')
          tr
            td Es una imagen realizada por medio de vectores. 
            td Su captura se hace por medios tecnológicos como cámaras fotográficas, video y celulares.
          tr
            td La imagen vectorial no depende de la resolución, su calidad siempre se mantiene. 
            td Dependen de la resolución.
          tr
            td La imagen vectorial se puede agrandar o contraer y no pierde calidad. 
            td La calidad de la imagen fotográfica depende del número de píxeles por la cual este compuesta, por esto perderá calidad si aumentamos o disminuimos su tamaño, en proporciones fuera de su rango.   
          tr
            td Las imágenes vectoriales ocupan muy poco espacio.
            td A mayor resolución, mayor peso.
          tr
            td Son imágenes destinadas a la representación gráfica de elementos.
            td Su ventaja principal, es el realismo con el cual se ve la imagen. 
          tr
            td Mantienen su calidad y aspecto. 
            td Van perdiendo calidad cada vez que se guardan o modifican. 
          tr  
            td Generalmente se utilizan programas como CorelDraw o  programas para dibujar y no para retocar.  
            td Se utiliza Photoshop, ya que buscamos retocar la imagen para un mejor resultado. 
          tr
            td En Illustrator, se pueden realizar piezas como carteles, logotipos, dibujos, ilustraciones, aplicaciones, papelería, bocetos etc. 
            td En Photoshop se retocan imágenes para restaurar, modificar o cambiar la apariencia. De igual manera es posible realizar piezas publicitarias. 
    .h4 Interfaz y área de trabajo
    p.mb-5 
      b Illustrator
      b-none , es un programa informático utilizado en la creación y edición de imágenes vectoriales, constituye una herramienta para el trabajo profesional del diseñador; hace parte de las tecnológicas distribuidas por 
      b Adobe Systems. 
      b-none A continuación, se relacionan los pasos necesarios para utilizar esta aplicación: 
    .row.mb-5
      .col-lg-6
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            p Para empezar a trabajar en Illustrator, abra el programa en su equipo; estando en el programa, vaya a la parte superior izquierda, despliegue el comando 
              b.span--naranja Archivo, 
              b-none y seleccione 
              b.span--cyan Nuevo, 
              b-none para abrir un documento
      .col-lg-6
        figure
          img(src='@/assets/curso/img13.png', alt='interfaz grafica illustrator')
    ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 2
            p Al dar clic en 
              b.span--cyan Nuevo
              b-none , se abre el siguiente recuadro en donde dará las instrucciones para configurar el documento, como el tamaño, la cantidad de mesas de trabajo o espacio que se van a utilizar, el nombre entre otros. 
    .row.mb-5
      .col-lg-6
        figure
          img(src='@/assets/curso/img14.png', alt='interfaz grafica illustrator')
      .col-lg-6
        ul.lista-ul--color
          li.cuadro-amarillo.p-2 
            i.fas.fa-chevron-circle-right.color-icon
            p
              b Nombre: 
              b-none dele un nombre a su documento.
          li.cuadro-amarillo.p-2 
            i.fas.fa-chevron-circle-right.color-icon
            p
              b Perfil: 
              b-none el perfil hace referencia al modo de salida del trabajo, si es para imprimir, para la web, una aplicación, etc. generalmente se selecciona para imprimir.
          li.cuadro-amarillo.p-2 
            i.fas.fa-chevron-circle-right.color-icon
            p
              b Número de mesas de trabajo: 
              b-none refiere a la cantidad de mesas de trabajo que vamos a utilizar (áreas para preparar los diseños).
          li.cuadro-amarillo.p-2 
            i.fas.fa-chevron-circle-right.color-icon
            p
              b Espaciado: 
              b-none espacio entre caracteres. 
          li.cuadro-amarillo.p-2 
            i.fas.fa-chevron-circle-right.color-icon
            p
              b Columnas: 
              b-none número de columnas, esto en caso de ser utilizadas.
          li.cuadro-amarillo.p-2 
            i.fas.fa-chevron-circle-right.color-icon
            p
              b Área de recorte: 
              b-none es el tamaño del formato a utilizar, carta, legal, tabloide, etc.
          li.cuadro-amarillo.p-2 
            i.fas.fa-chevron-circle-right.color-icon
            p
              b Anchura y altura: 
              b-none en caso de querer utilizar un formato de tamaño diferente a los que se presentan en el icono anterior, puede de manera manual introducir las medidas del formato en el cual desea trabajar.
          li.cuadro-amarillo.p-2 
            i.fas.fa-chevron-circle-right.color-icon
            p
              b Unidades:  
              b-none aquí el programa nos da la opción de seleccionar diferentes unidades de medida como milímetros, centímetros, picas, pixeles. Es recomendable desde el inicio seleccionar centímetros, que es la medida en la cual se trabajo en nuestro medio. 
          li.cuadro-amarillo.p-2 
            i.fas.fa-chevron-circle-right.color-icon
            p
              b Orientación: 
              b-none haga clic sobre el tipo de orientación que desea utilizar, vertical u horizontal.
          li.cuadro-amarillo.p-2 
            i.fas.fa-chevron-circle-right.color-icon
            p
              b Sangrado:  
              b-none seleccione el sangrado a utilizar en los 4 costados, si es necesario. Finalmente haga clic en 
              b “OK,” 
              b-none para comenzar a trabajar.
    .h4 Interfaz:  
    ImagenInfografica.color-acento-contenido.mb-5

      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/img15.png', alt='Interfaz illustrator')
      .tarjeta.color-secundario.p-3(x="34.8%" y="3%")
        .h3.mb-2 A- Menú principal:
        p La barra en el extremo superior es la barra de menú, desde aquí podrá acceder a diferentes opciones de menú, como archivo, edición, objeto, texto, entre otros.
      .tarjeta.color-secundario.p-3(x="55.3%" y="4.2%")
        .h3.mb-2 B- Opciones de herramienta:
        p Aquí se abren diferentes opciones para cada herramienta que utilizamos, por el ejemplo propiedades de color, grosor y forma.
      .tarjeta.color-secundario.p-3(x="92.4%" y="30.7%")
        .h3.mb-2 C- Paneles flotantes: 
        p Son paneles en donde podrá visualizar las propiedades de las herramientas que está utilizando.
      .tarjeta.color-secundario.p-3(x="44%" y="8%")
        .h3.mb-2 D- Panel de control:
        p En esta pestaña se visualizan los diferentes controles de las herramientas seleccionadas.
      .tarjeta.color-secundario.p-3(x="6.5%" y="26.6%")
        .h3.mb-2 E- Barra de herramientas: 
        p El panel alargado que observa en la imagen de la derecha es el panel de herramientas, ahí puede ver en forma de íconos todas las herramientas disponibles en Illustrator.
          br
          br
          |Algunas de ellas tienen un pequeño triángulo en su esquina inferior derecha, este es el indicador de que hay un grupo de herramientas ocultas. Si posiciona el cursor sobre alguno de estos iconos y lo mantiene pulsado un instante, se desplegará la lista de herramientas pertenecientes al grupo. 
      .tarjeta.color-secundario.p-3(x="44.8%" y="33%")
        .h3.mb-2 F- Mesas de trabajo: 
        p Es el espacio de trabajo, que en Illustrator llamaremos mesas de trabajo.
    p.mb-5 El siguiente video le permitirá conocer la interfaz de usuario de Illustrator
      //! TODO ---- AGREGAR VIDEO CUANDO ESTE LISTO  
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    .row.mb-5.justify-content-center
      .col-md-4.col-lg-4.mb-5.mb-lg-0
        .tarjeta-avatar-arreglo
          img(src='@/assets/curso/img16.svg' alt='AvatarTop' style=" width:120px")
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-amarillo-claro
            .alineacion.d-flex.text-center.p-4
              div
                .h4.text-center Herramienta selección
                p Permite seleccionar objetos y grupos haciendo clic sobre ellos o arrastrándolos.
              img(src='@/assets/curso/img21.svg' alt='AvatarTop' style=" width:200px").mx-auto
      .col-md-4.col-lg-4.mb-5.mb-lg-0
        .tarjeta-avatar-arreglo
          img(src='@/assets/curso/img17.svg' alt='AvatarTop' style=" width:120px")
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-amarillo-claro
            .alineacion.d-flex.text-center.p-4
              div
                .h4.text-center Herramienta selección directa
                p Permite seleccionar puntos de ancla o segmentos de trazado individuales haciendo clic en ellos, o seleccionar un trazado o grupo entero haciendo clic en cualquier otra parte del elemento. También puede seleccionar uno o varios objetos de un grupo de objetos.
              img(src='@/assets/curso/img22.svg' alt='AvatarTop' style=" width:200px").mx-auto
      .col-md-4.col-lg-4.mb-5.mb-lg-0
        .tarjeta-avatar-arreglo
          img(src='@/assets/curso/img18.svg' alt='AvatarTop' style=" width:120px")
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-amarillo-claro
            .alineacion.d-flex.text-center.p-4
              div
                .h4.text-center Selección de grupos, herramienta
                p Permite seleccionar un objeto dentro de un grupo, un único grupo dentro de varios grupos o un conjunto de grupos dentro de la ilustración. Cada clic adicional añade todos los objetos del siguiente grupo de la jerarquía.
              img(src='@/assets/curso/img23.svg' alt='AvatarTop' style=" width:200px").mx-auto
    .row.mb-5.justify-content-center
      .col-md-4.col-lg-4.mb-5.mb-lg-0
        .tarjeta-avatar-arreglo
          img(src='@/assets/curso/img19.svg' alt='AvatarTop' style=" width:120px")
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-amarillo-claro
            .alineacion.d-flex.text-center.p-4
              div
                .h4.text-center Herramienta lazo
                p Permite seleccionar objetos, puntos de ancla o segmentos de trazado al arrastrarla alrededor de todo el objeto o de parte de este, generalmente se guía por las gamas de color.
              img(src='@/assets/curso/img24.svg' alt='AvatarTop' style=" width:200px").mx-auto
      .col-md-4.col-lg-4.mb-5.mb-lg-0
        .tarjeta-avatar-arreglo
          img(src='@/assets/curso/img20.svg' alt='AvatarTop' style=" width:120px")
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-amarillo-claro
            .alineacion.d-flex.text-center.p-4
              div
                .h4.text-center Varita mágica
                p Permite seleccionar objetos del mismo color, grosor de trazo, color de trazo, opacidad o modo de fusión haciendo clic en el objeto.
              img(src='@/assets/curso/img25.svg' alt='AvatarTop' style=" width:200px").mx-auto
    p.mb-5 En el siguiente video aprenderá a utilizar correctamente las herramientas de selección.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    h3 Herramientas de dibujo 
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Pluma").justify-content-center.p-4
        .col-lg-7
          p.mb-5 Se pueden crear curvas añadiendo un punto de ancla donde la curva cambie de dirección y arrastrando la línea hacia la dirección que forme la curva. Las curvas son fáciles de modificar si se las dibuja utilizando la menor cantidad de puntos de ancla posibles.
          figure.mb-5
            img(src='@/assets/curso/img26.jpg' alt='AvatarTop' style='width:340px')
          p Para salir del trazado con la pluma, presione las teclas CTRL + ALT y haga clic fuera de la figura que esta trazando.

        .col-lg-5
          .d-flex.align-items-center
            img(src='@/assets/curso/img27.svg' alt='AvatarTop' style='width:84px').mb-3.d-inline-block.me-3
            p.d-inline-block.pe-5
              b Pluma:  
              b-none permite dibujar un trazado, haciendo puntos de ancla.
          .d-flex.align-items-center
            img(src='@/assets/curso/img28.svg' alt='AvatarTop' style='width:84px').mb-3.d-inline-block.me-3
            p.d-inline-block.pe-5
              b Añadir punto de ancla: 
              b-none agrega nodos o puntos a un trazado. 
          .d-flex.align-items-center
            img(src='@/assets/curso/img29.svg' alt='AvatarTop' style='width:84px').mb-3.d-inline-block.me-3
            p.d-inline-block.pe-5
              b Eliminar punto de ancla: 
              b-none quita nodos o puntos a un trazado. 
          .d-flex.align-items-center
            img(src='@/assets/curso/img30.svg' alt='AvatarTop' style='width:84px').mb-3.d-inline-block.me-3
            p.d-inline-block.pe-5
              b Punto de ancla: 
              b-none convierte curvas en ángulos, y ángulos en curvas.
      div(titulo="Curvatura").justify-content-center.p-4
        .d-flex.align-items-center
            img(src='@/assets/curso/img31.svg' alt='AvatarTop' style='width:84px').mb-3.d-inline-block.me-3
            p.d-inline-block.pe-5 La herramienta curvatura funciona de manera similar que la pluma, facilita el trazo haciéndolo más intuitivo.
      .row(titulo="Línea").justify-content-center.p-4
        .col-lg-7
          p.mb-5 Permite realizar formas básicas basadas en la línea, como espirales, arcos y cuadrículas.
          figure.mb-5
            img(src='@/assets/curso/img32.jpg' alt='AvatarTop' style='width:340px')
        .col-lg-5
          .d-flex.align-items-center
            img(src='@/assets/curso/img33.svg' alt='AvatarTop' style='width:84px').mb-3.d-inline-block.me-3
            p.d-inline-block.pe-5
              b Herramienta Segmento de línea
          .d-flex.align-items-center
            img(src='@/assets/curso/img34.svg' alt='AvatarTop' style='width:84px').mb-3.d-inline-block.me-3
            p.d-inline-block.pe-5
              b Herramienta Arco
          .d-flex.align-items-center
            img(src='@/assets/curso/img35.svg' alt='AvatarTop' style='width:84px').mb-3.d-inline-block.me-3
            p.d-inline-block.pe-5
              b Herramienta Espiral
          .d-flex.align-items-center
            img(src='@/assets/curso/img36.svg' alt='AvatarTop' style='width:84px').mb-3.d-inline-block.me-3
            p.d-inline-block.pe-5
              b Herramienta Cuadrícula rectangular
          .d-flex.align-items-center
            img(src='@/assets/curso/img37.svg' alt='AvatarTop' style='width:84px').mb-3.d-inline-block.me-3
            p.d-inline-block.pe-5
              b Herramienta Cuadrícula polar
      .row(titulo=" Forma").justify-content-center.p-4
        .col-lg-7
          p.mb-5 Esta herramienta sirve para crear diversas figuras como el círculo, rectángulo, elipse, etc. Con la tecla shift, logramos crear figuras que mantienen la proporción alto y ancho.
          figure.mb-5
            img(src='@/assets/curso/img38.jpg' alt='AvatarTop' style='width:340px')
          .d-flex
            img(src='@/assets/curso/img39.jpg' alt='AvatarTop' style='width:184px').mb-3.d-inline-block.me-3
            p.d-inline-block.pe-5 En el caso de las herramientas polígono y estrella, podemos colocar la cantidad de lados que deseamos tenga una forma; por ejemplo, si se quiere dibujar una estrella de 9 puntas, lo primero que se debe hacer es seleccionar la herramienta estrella, luego ubicarse en la mesa de trabajo, dar clic izquierdo sobre el ratón, seguidamente se abre el siguiente cuadro en donde podemos determinar la cantidad de lados de la figura.
          p.mb-5 Para termina haga clic en el botón OK, automáticamente el programa dibuja la forma.
        .col-lg-4
          .d-flex.align-items-center
            img(src='@/assets/curso/img40.svg' alt='AvatarTop' style='width:84px').mb-3.d-inline-block.me-3
            p.d-inline-block.pe-5
              b Herramienta Rectángulo
          .d-flex.align-items-center
            img(src='@/assets/curso/img41.svg' alt='AvatarTop' style='width:84px').mb-3.d-inline-block.me-3
            p.d-inline-block.pe-5
              b Herramienta Rectángulo redondeado
          .d-flex.align-items-center
            img(src='@/assets/curso/img42.svg' alt='AvatarTop' style='width:84px').mb-3.d-inline-block.me-3
            p.d-inline-block.pe-5
              b Herramienta Elipse
          .d-flex.align-items-center
            img(src='@/assets/curso/img43.svg' alt='AvatarTop' style='width:84px').mb-3.d-inline-block.me-3
            p.d-inline-block.pe-5
              b Herramienta Polígono
          .d-flex.align-items-center
            img(src='@/assets/curso/img44.svg' alt='AvatarTop' style='width:84px').mb-3.d-inline-block.me-3
            p.d-inline-block.pe-5
              b Herramienta Estrella
          .d-flex.align-items-center
            img(src='@/assets/curso/img45.svg' alt='AvatarTop' style='width:84px').mb-3.d-inline-block.me-3
            p.d-inline-block.pe-5
              b Herramienta Destello
      .row(titulo="Pincel").justify-content-center.p-4
        .col-lg-7
          figure.mb-5
            img(src='@/assets/curso/img46.png' alt='AvatarTop' style='width:603px')
        .col-lg-5
          .d-flex
            img(src='@/assets/curso/img47.svg' alt='AvatarTop' style='width:84px').mb-3.me-3.d-inline-flex
            p.d-inline-block.pe-5
              b Illustrator proporciona distintos pinceles: 
              b-none caligráficos, de dispersión, de arte, de motivo, y pinceles de cerdas. Con estos pinceles se pueden conseguir diversos efectos; para acceder, seleccione la herramienta pincel, en la parte superior en opciones de herramienta, despliegue la opción definición del pincel y escoja la opción deseada de las bibliotecas. 
      .row(titulo="Lápiz").justify-content-center.p-4
        .col-lg-7
          figure.mb-5
            img(src='@/assets/curso/img49.jpg' alt='AvatarTop' style='width:400px')
        .col-lg-5
          .d-flex
            img(src='@/assets/curso/img50.svg' alt='AvatarTop' style='width:84px').mb-3.me-3.d-inline-flex
            p.d-inline-block.pe-5
              b  Lápiz:
              b-none Se utiliza como un lápiz normal, el cual dibuja la línea por donde se realiza el trazo. 
          .d-flex
            img(src='@/assets/curso/img51.svg' alt='AvatarTop' style='width:84px').mb-3.me-3.d-inline-flex
            p.d-inline-block.pe-5
              b  Herramienta suavizar:
              b-none suaviza el dibujo realizado con el lápiz, lo vuelve armónico, y quita las imperfecciones del mismo, simplemente se pasa por encima del trazo anteriormente realizado y así se suaviza. 
    p.mb-5 En el siguiente video conocerá las principales herramientas de dibujo para la ilustración.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    .h4 Herramientas de color
    p.mb-5 Illustrator presenta una gran variedad de herramientas y modos de color para utilizar y trabajar no solo el tradicional CMYK (siglas de Cyan, Magenta, Yellow y Key), que se conoce. 
      br
      br
      |Estos son los modos que nos facilita el programa:
    TabsA.color-primario.mb-5
      .tarjeta.color-primario.claro.p-4(titulo="RGB")
        .row
          .col-lg-3
            img(src='@/assets/curso/img52.jpg' alt='AvatarTop' )
          .col-lg-9
            .h3 RGB
            p  Este modelo de color se crea superponiendo las luces de color rojo (1), verde (2) y azul (3). representa una amplia gama de matices de color. Cada uno de estos tres colores tiene rango de 0 a 255 que representa su intensidad.

      .tarjeta.color-primario.claro.p-4(titulo="CMYK")
        .row
          .col-lg-3
            img(src='@/assets/curso/img53.jpg' alt='AvatarTop' )
          .col-lg-9
            .h3 CMYK
            p Este modelo de color se basa en la absorción de la tinta en el papel impreso. Trabaja con cian (1), magenta (2), amarillo (3) y negro (4), y cualquier color se obtiene a través de valores porcentuales de estos colores. Menor porcentaje equivale a colores más claros y mayor porcentaje equivale a colores más oscuros. 

 
      .tarjeta.color-primario.claro.p-4(titulo="HSB")
        .row
          .col-lg-3
            img(src='@/assets/curso/img54.jpg' alt='AvatarTop' )
          .col-lg-9
            .h3 HSB
            p  Este modelo de color es más cercano a la percepción humana de los colores. HSB contiene tres elementos base, tono (1), saturación (2), y brillo (3). Este modelo de color puede encontrarse también como HSV que traduce Tono, Saturación y Valor, y es similar a HSB.

      .tarjeta.color-primario.claro.p-4(titulo="Lab")
        .row
          .col-lg-3
            img(src='@/assets/curso/img55.jpg' alt='AvatarTop' )
          .col-lg-9
            .h3 Lab
            p  Este modelo de color se basa en como se ve el color, en lugar de su valor en los medios digitales. Representa el valor absoluto de color independientemente de las computadoras. El valor de color se mezcla a través de tres ejes. L (1) que significa claridad y tiene valor de 0/negro a 100/blanco, a (2) que representa los ejes del verde al rojo y b (3) que representa los ejes del azul al amarillo (Kalous, 2010).
      .tarjeta.color-primario.claro.p-4(titulo="Escala de grises")
        .row
          .col-lg-3
            img(src='@/assets/curso/img56.jpg' alt='AvatarTop' )
          .col-lg-9
            .h3 Escala de grises
            p Este modelo utiliza la escala de grises con un brillo comprendido del 0 % de blanco, hasta el 100 % de negro. 
    p.mb-5 En la parte superior izquierda en el panel opciones de herramienta, o en la barra de herramientas de la parte inferior, encontramos la herramienta designada por 2 cuadrados: 
    .row.mb-5
      .col-lg-6
        .container--azul.p-3
          .d-flex.align-items-center.justify-content-center
            img.d-inline-block.me-3(src='@/assets/curso/img57.png' alt='AvatarTop' style='width: 124px' )
            p.d-inline-block.my-auto El primero para dar color al 
              b relleno 
              b-none de la figura 
      .col-lg-6
        .container--azul.p-3
          .d-flex.align-items-center.justify-content-center
            img.d-inline-block.me-3(src='@/assets/curso/img58.png' alt='AvatarTop' style='width: 124px' )
            p.d-inline-block.my-auto El segundo para dar color al 
              b trazo 
              b-none de la forma. 
    figure.mb-5
      img(src='@/assets/curso/img59.svg' alt='AvatarTop')
    .row.mb-5 
      .col-lg-5
        figure
          img(src='@/assets/curso/img60.jpg' alt='AvatarTop' style='width:372px').m-auto
      .col-lg-7
        .h4 Al desplegar la pestaña del menú de herramientas, presenta las siguientes posibilidades: 
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            p
              b Mostrar todas las muestras: 
              b-none visualiza todas las muestras de color existentes.

          li 
            .lista-ol--cuadro__vineta
              span 2
            p
              b Mostrar muestras de color: 
              b-none muestra todos los colores, a excepción de las muestras de colores degradados y de motivo.

          li 
            .lista-ol--cuadro__vineta
              span 3
            p
              b Mostrar muestras de degradado: 
              b-none muestra los degradados existentes.
 
          li 
            .lista-ol--cuadro__vineta
              span 4
            p
              b Mostrar grupos de colores: 
              b-none presenta los colores en dos grupos, los grises y los brillantes. 
    figure.mb-5
      img(src='@/assets/curso/img61.svg' alt='AvatarTop' style='width:915px').m-auto
    p.mb-5 En la barra superior del menú principal, dirijase al menú “ventana”, desde el cual puede gestionar varias herramientas: color, degradado, guía de color, muestras.
      br
      br
      |Ejemplo:
      br 
      |Despliegue el menú “ventana” y seleccione la opción de “color”. Se abrirá en la parte superior derecha  la siguiente información. 
    figure.mb-5
      img(src='@/assets/curso/img62.svg' alt='AvatarTop' ).m-auto
    p.mb-5 En el siguiente video aprenderá a manejar muestras de color, crear nuevos colores y gestionar paletas de colores.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    .h4 Herramientas de texto
    p.mb-5 Al utilizar la herramienta “texto” es muy importante tener en cuenta todas las variaciones en la barra de herramientas.
    ImagenInfografica.color-acento-contenido.mb-5

      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/img63.svg', alt='Herramientas de texto')
      .tarjeta.color-secundario.p-3(x="13.9%" y="6.2%")
        .h3.m-auto.d-block Relleno de forma.
      .tarjeta.color-secundario.p-3(x="18.1%" y="11.3%")
        .h3.m-auto.d-block Color contorno.
      .tarjeta.color-secundario.p-3(x="25.8%" y="6.2%")
        .h3.m-auto.d-block Grosor del contorno de línea.
      .tarjeta.color-secundario.p-3(x="34.9%" y="7%")
        .h3.m-auto.d-block Anchura variable tipo pincel.
      .tarjeta.color-secundario.p-3(x="44.9%" y="6.8%")
        .h3.m-auto.d-block Opacidad del color.
      .tarjeta.color-secundario.p-3(x="64%" y="9.6%")
        .h3.m-auto.d-block Carácter de tipografía, desde este podemos cambiar la tipografía usada.
      .tarjeta.color-secundario.p-3(x="73.6%" y="7.2%")
        .h3.m-auto.d-block Estilo, puede ser bold, negrita, itálica, etc.
      .tarjeta.color-secundario.p-3(x="82%" y="7.8%")
        .h3.m-auto.d-block Tamaño de fuente o letra, el cual se mide en puntos.
      .tarjeta.color-secundario.p-3(x="89.9%" y="6.2%") 
        .h3.m-auto.d-block Párrafo, alinear a la derecha, centrar o a la izquierda.
    p.mb-5 Para utilizar la herramienta de texto, diríjase a la barra de herramientas en la parte izquierda denominada así.
      br
      br
      |Al desplegar el menú, nos muestra todas las herramientas disponibles de texto.
    .row.mb-5
      .col-lg-6
        .d-flex.mb-3
            img(src='@/assets/curso/img64.svg' alt='AvatarTop' style='width:84px').mb-3.me-3.d-inline-flex
            p.d-inline-block.pe-5
              b Herramienta texto: 
              b-none permiten escribir en cualquier parte de la mesa de trabajo, solo hay que seleccionar la herramienta, hacer clic en la mesa de trabajo y escribir. 
        .d-flex.mb-3
            img(src='@/assets/curso/img65.svg' alt='AvatarTop' style='width:84px').mb-3.me-3.d-inline-flex
            p.d-inline-block.pe-5
              b Herramienta texto en trazado: 
              b-none el texto toma el orden del trazado dibujado. 
        .d-flex
            img(src='@/assets/curso/img66.svg' alt='AvatarTop' style='width:84px').mb-3.me-3.d-inline-flex
            p.d-inline-block.pe-5
              b Herramienta texto de área vertical: 
              b-none hace que el texto contenido en una figura vertical tome esta dirección. 
      .col-lg-6
        .d-flex.mb-3
            img(src='@/assets/curso/img67.svg' alt='AvatarTop' style='width:84px').mb-3.me-3.d-inline-flex
            p.d-inline-block.pe-5
              b Herramienta texto de área: 
              b-none el texto se limita dentro de un área de trabajo específica. 
        .d-flex.mb-3
            img(src='@/assets/curso/img68.svg' alt='AvatarTop' style='width:84px').mb-3.me-3.d-inline-flex
            p.d-inline-block.pe-5
              b Herramienta texto vertical: 
              b-none  hace que el texto se dirija esta dirección. 
        .d-flex
            img(src='@/assets/curso/img69.svg' alt='AvatarTop' style='width:84px').mb-3.me-3.d-inline-flex
            p.d-inline-block.pe-5
              b Herramienta texto vertical en trazado: 
              b-none  hace que el texto fluya de manera vertical.
    p.mb-5 En opciones de herramienta menú 
      b “Ventana”
      b-none , abrimos la opción de texto, donde puede editar varios aspectos como el tamaño de fuente, interlineado, kerning, tracking, tipo de párrafo, etc. 
    .row.mb-5.justify-content-center
      .col-lg-10
        figure
          img(src='@/assets/curso/img70.svg' alt='AvatarTop')
    p.mb-5 En el siguiente video podrá reconocer las diferentes herramientas de texto y párrafo; modificar y editar texto, y generar efectos.

    //! TODO ---- AGREGAR VIDEO CUANDO ESTE LISTO 
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    .row.mb-3.justify-content-center  
      .col-lg-10
          .bloque-texto-a.color-primario.p-4.p-md-5.mb-5.color-gris
            .row.m-0.align-items-center.justify-content-between
              .col-lg-8.mb-4.mb-lg-0
                .h3.mb-0 Illustrator permite trabajar varios efectos. A partir de formas básicas realizar objetos tridimensionales.  En el panel superior del menú principal, encontramos el comando 
                  spam.span--naranja “efecto”
                  | , donde puede encontrar dichas herramientas. 
              .col-lg-4
                figure
                  img(src='@/assets/curso/img71.jpg' alt='AvatarTop' style='width:196px')
    .h4 Efectos Ilustrator
    .tarjeta.color-acento-contenido.p-3.mb-5
      .row.justify-content-around.align-items-center.px-5
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/img72.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h3.mb-1 Infografia - Efectos ilustrator
              p Ejemplos de efectos de ilustrator  
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Infografia_efectos_Ilustrator.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    .h4 Efectos Photoshop
    p.mb-3 En este menú encontrará una galería de efectos de Photoshop, los cuales se pueden trabajar desde Illustrator.
    figure.mb-5 
      img(src='@/assets/curso/img73.jpg' alt='AvatarTop')
    p.mb-5 En el siguiente video aprenderá a seleccionar una forma bidimensional y convertirla en tridimensional 
    //! TODO ---- AGREGAR VIDEO CUANDO ESTE LISTO 
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    p.mb-5 En el siguiente video aprenderá a seleccionar una forma bidimensional y convertirla en tridimensional 
    //! TODO ---- AGREGAR VIDEO CUANDO ESTE LISTO  
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    .h4 Almacenamiento, importación y exportación
    p.mb-5 Al almacenar elementos en Illustrator es importante tener en cuenta:
    .row.mb-5 
      .col-lg-6
        figure.mb-5 
          img(src='@/assets/curso/img74.svg' alt='AvatarTop' style='width:330px').m-auto
      .col-lg-6
        p 
          b Tipografías e imágenes: 
          b-none en su gran mayoría cuando se trabaja textos en cualquier programa, se utilizan algunas fuentes tipográficas, es necesario llevar consigo las carpetas de dichas fuentes, ya que en muchos de los sitios de impresión es probable que no cuenten con las mismas, esto se hace para que no haya cambios imprevistos en el trabajo.
          br
          br
          |Si no se cuenta con esta posibilidad, en el menú 
          b “texto – crear contornos” 
          b-none , puede convertir la tipografía en trazo.
          
    .row.mb-5 
      .col-lg-6
        figure.mb-5 
          img(src='@/assets/curso/img75.svg' alt='AvatarTop' style='width:500px').m-auto
      .col-lg-6
        p 
          b Enlazar e incrustar: 
          b-none se emplean los términos enlazar e incrustar, para textos como imágenes. Enlazar hace referencia a que la imagen está conectada, pero es independiente del documento; mientras que incrustar la imagen se copia en el documento a resolución completa. 
          br
          br
          |Al guardar o exportar ilustraciones, Illustrator escribe los datos de la ilustración en un archivo. La estructura de los datos depende de la selección del formato de archivo. Hay cinco formatos de archivo básicos, en los que puede guardar ilustraciones (AI, PDF, EPS, FXG y SVG); estos son llamados formatos nativos, ya que permiten guardar todos los datos de Illustrator, incluidas varias mesas de trabajo. En el caso de seleccionar los formatos PDF y SVG, debe seleccionar la opción conservar capacidades de edición de Illustrator, para guardar todos los datos de Illustrator. Los formatos EPS y FXG permiten, además, guardar mesas de trabajo individuales como archivos independientes. En el formato SVG, aunque solo se guarda la mesa de trabajo activa, se exhibe el contenido de todas las mesas de trabajo.
    .container--azul.border-radius.px-5.py-4.mb-5
      p.m-auto
        b También es posible exportar ilustraciones en diferentes formatos de archivo para utilizarlas fuera de Illustrator. Estos formatos son llamados formatos no nativos, ya que Illustrator no podrá recuperar todos los datos si vuelve a abrir el archivo en programa. Por este motivo, es recomendable guardar las ilustraciones en formato “AI” hasta que termine de crearlas y, posteriormente, exportarlas al formato deseado.
    .row.mb-5 
      .col-lg-6
        figure.mb-5 
          img(src='@/assets/curso/img76.svg' alt='AvatarTop' style='width:500px').m-auto
      .col-lg-6
        p 
          b Empaquetar archivos: 
          b-none función disponible en Adobe Illustrator CS6, CC y posteriores. Puede recopilar los archivos utilizados, incluidas las fuentes (a excepción del chino, coreano y japonés) y los gráficos enlazados para distribuirlos de manera más fácil. Al empaquetar un archivo, se crea una carpeta que contiene el documento de Illustrator junto con todas las fuentes necesarias, gráficos enlazados y un informe del paquete. Este informe, se guarda como un archivo de texto, e incluye información sobre los archivos empaquetados (Adobe, 2017).
    p.mb-5 En el siguiente video aprenderá a importar y exportar elementos desde Illustrator y a enlazar e incrustar imágenes. 
     //! TODO ---- AGREGAR VIDEO CUANDO ESTE LISTO  
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    .h5.mb-5 Para ampliar la información sobre el uso de Illustrator, se recomienda consultar la Ayuda de Adobe Illustrator CC, también disponible en el material complementario de este programa. 
    .row
      .col-lg-5
        a.anexo.mb-4.mb-lg-0(:href="obtenerLink('/downloads/illustrator_reference.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p 
              b Enlace web. 
              b-none Uso de Illustrator, consultar la Ayuda de Adobe Illustrator CC.




















  </template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyder1: [
      {
        imagen: require('@/assets/curso/img5.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        imagen: require('@/assets/curso/img6.svg'),
      },
      {
        imagen: require('@/assets/curso/img7.svg'),
      },
    ],
    datosSlyder2: [
      {
        imagen: require('@/assets/curso/img8.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        imagen: require('@/assets/curso/img9.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        imagen: require('@/assets/curso/img10.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
