<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    figure.mb-5
      img(src='@/assets/curso/img0.jpg', alt='Texto que describa la imagen')
    p.mb-5 El manejo de la imagen como medio de comunicación, presenta muchos retos y responsabilidades, especialmente cuando el profesional se enfrenta al complejo trabajo y desarrollo de dar a conocer por medio de sus ideas, una marca o producto, que entrará a competir por ocupar un lugar en la mente de los consumidores respecto al resto de sus competidores. El cliente de este momento es una persona proactiva, con ideas claras, con una percepción única de la imagen, educada a lo largo del tiempo por este bombardeo constante de todos los medios de comunicación. Así se hace necesario que el diseñador, posea herramientas conceptuales, tecnológicas y actitudinales, en el ejercicio de su oficio.
      br
      br
      |Para interpretar una marca, es importante tener en cuenta por ejemplo, que no  solo podemos basar el diseño de  las piezas gráficas en los elementos tangibles que a la vista son claros y perceptibles para la gran mayoría de las personas, sino que detrás de esta, hay un cúmulo de  valores, sentimientos, ideales, esfuerzos que pesan mucho más que lo evidente, así el ejercicio del diseñador, será el de interpretar y mejorar esta información, para dar a conocer al mundo la mejor versión de dicha marca.



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
