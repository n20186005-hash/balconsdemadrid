import type { TopicEntry } from './topic-types';

export const TOPICS_F: TopicEntry[] = [
  // 25 ───────────────────────────────────────────────── comer/restaurante-parada-de-sil
  {
    slug: 'comer/restaurante-parada-de-sil',
    group: 'comer',
    es: {
      title: 'Restaurante Parada de Sil: comer en el pueblo',
      h1: 'Restaurante Parada de Sil',
      description:
        'Restaurante Parada de Sil (Rúa do Barrio): cocina local en el pueblo, cerca de los Balcones de Madrid. Reserva y qué pedir.',
      intro:
        'El **Restaurante Parada de Sil** es una de las opciones de comida en el propio pueblo de Parada de Sil, a pocos minutos en coche de los Balcones de Madrid.',
      sections: [
        {
          id: 'donde',
          title: 'Dónde está',
          body: 'Según el directorio oficial de Turismo de la Ribeira Sacra, está en la Rúa do Barrio de Parada de Sil. Es una opción con mesa y cocina local, cómoda tras la visita al mirador.',
        },
        {
          id: 'consejos',
          title: 'Consejos',
          body: 'Reserva mesa si vas en fin de semana o en temporada alta. Los precios y los menús confírmalos con el local; lleva agua si vienes fuera de hora.',
        },
      ],
      faq: [
        {
          question: '¿Está abierto todo el año?',
          answer:
            'No damos calendario porque puede cambiar; confirma apertura y horario con el restaurante antes de ir.',
        },
        {
          question: '¿Tiene cocina local?',
          answer:
            'Sí, ofrece cocina local de la zona. Pide recomendación de platos de la Ribeira Sacra y confirma disponibilidad.',
        },
        {
          question: '¿Aceptan reserva?',
          answer:
            'Conviene reservar, sobre todo en fin de semana. Llama al local para confirmar.',
        },
      ],
      related: ['donde-comer', 'comer/reitoral-de-parada', 'parada-de-sil'],
      updated: 'octubre de 2026',
    },
    gl: {
      title: 'Restaurante Parada de Sil: comer no pobo',
      h1: 'Restaurante Parada de Sil',
      description:
        'Restaurante Parada de Sil (Rúa do Barrio): cociña local no pobo, preto dos Balcones de Madrid. Reserva e que pedir.',
      intro:
        'O **Restaurante Parada de Sil** é unha das opcións de comida no propio pobo de Parada de Sil, a poucos minutos en coche dos Balcones de Madrid.',
      sections: [
        {
          id: 'onde',
          title: 'Onde está',
          body: 'Segundo o directorio oficial de Turismo da Ribeira Sacra, está na Rúa do Barrio de Parada de Sil. É unha opción con mesa e cociña local, cómoda tras a visita ao miradoiro.',
        },
        {
          id: 'consellos',
          title: 'Consellos',
          body: 'Reserva mesa se vas en fin de semana ou en tempada alta. Os prezos e os menús confímaos co local; leva auga se viñes fóra de hora.',
        },
      ],
      faq: [
        {
          question: 'Está aberto todo o ano?',
          answer:
            'Non damos calendario porque pode cambiar; confirma apertura e horario co restaurante antes de ir.',
        },
        {
          question: 'Ten cociña local?',
          answer:
            'Si, ofrece cociña local da zona. Pide recomendación de pratos da Ribeira Sacra e confirma dispoñibilidade.',
        },
        {
          question: 'Aceptan reserva?',
          answer:
            'Convir pregar mesa, sobre todo en fin de semana. Chama ao local para confirmar.',
        },
      ],
      related: ['donde-comer', 'comer/reitoral-de-parada', 'parada-de-sil'],
      updated: 'outubro de 2026',
    },
    en: {
      title: 'Restaurante Parada de Sil: eating in the village',
      h1: 'Restaurante Parada de Sil',
      description:
        'Restaurante Parada de Sil (Rúa do Barrio): local cuisine in the village, near Balcones de Madrid. Booking and what to order.',
      intro:
        'The **Restaurante Parada de Sil** is one of the eating options in the village of Parada de Sil itself, a few minutes by car from the Balcones de Madrid.',
      sections: [
        {
          id: 'where',
          title: 'Where it is',
          body: 'Per the official Ribeira Sacra Tourism directory, it is on the Rúa do Barrio in Parada de Sil. It is an option with table service and local cuisine, convenient after the viewpoint visit.',
        },
        {
          id: 'tips',
          title: 'Tips',
          body: 'Book a table if you go at the weekend or in high season. Confirm prices and menus with the place; carry water if you come off-hours.',
        },
      ],
      faq: [
        {
          question: 'Is it open all year?',
          answer:
            'We do not give a calendar because it can change; confirm opening and hours with the restaurant before going.',
        },
        {
          question: 'Does it have local cuisine?',
          answer:
            'Yes, it offers local cuisine of the area. Ask for recommendations of Ribeira Sacra dishes and confirm availability.',
        },
        {
          question: 'Do they take bookings?',
          answer:
            'It is best to book, especially at the weekend. Call the place to confirm.',
        },
      ],
      related: ['donde-comer', 'comer/reitoral-de-parada', 'parada-de-sil'],
      updated: 'October 2026',
    },
  },

  // 26 ───────────────────────────────────────────────── comer/reitoral-de-parada
  {
    slug: 'comer/reitoral-de-parada',
    group: 'comer',
    es: {
      title: 'Reitoral de Parada: comida y alojamiento en Parada de Sil',
      h1: 'Reitoral de Parada',
      description:
        'Reitoral de Parada (Rúa do Barrio): restaurante y alojamiento en Parada de Sil, cerca de los miradores. Reserva y consejos.',
      intro:
        'El **Reitoral de Parada** es otra opción de comida (y alojamiento) en la Rúa do Barrio de Parada de Sil, junto al Restaurante Parada de Sil.',
      sections: [
        {
          id: 'donde',
          title: 'Dónde está',
          body: 'Según el directorio oficial de Turismo de la Ribeira Sacra, está en la Rúa do Barrio de Parada de Sil. Combina comida con una base para dormir y recorrer los miradores.',
        },
        {
          id: 'consejos',
          title: 'Consejos',
          body: 'Reserva mesa y, si duermes allí, también alojamiento, sobre todo en fin de semana. Confirma precios y disponibilidad con el local.',
        },
      ],
      faq: [
        {
          question: '¿Tiene alojamiento?',
          answer:
            'Sí, además de comida suele ofrecer alojamiento; confirma disponibilidad y precios con el local.',
        },
        {
          question: '¿Está cerca de los miradores?',
          answer:
            'Está en el pueblo de Parada de Sil, a unos 1 km (4–5 min en coche) de los Balcones de Madrid.',
        },
        {
          question: '¿Aceptan reserva?',
          answer:
            'Conviene reservar, sobre todo en fin de semana y temporada alta. Llama para confirmar.',
        },
      ],
      related: ['donde-comer', 'comer/restaurante-parada-de-sil', 'donde-dormir'],
      updated: 'octubre de 2026',
    },
    gl: {
      title: 'Reitoral de Parada: comida e aloxamento en Parada de Sil',
      h1: 'Reitoral de Parada',
      description:
        'Reitoral de Parada (Rúa do Barrio): restaurante e aloxamento en Parada de Sil, preto dos miradoiros. Reserva e consellos.',
      intro:
        'O **Reitoral de Parada** é outra opción de comida (e aloxamento) na Rúa do Barrio de Parada de Sil, xunto ao Restaurante Parada de Sil.',
      sections: [
        {
          id: 'onde',
          title: 'Onde está',
          body: 'Segundo o directorio oficial de Turismo da Ribeira Sacra, está na Rúa do Barrio de Parada de Sil. Combina comida cunha base para durmir e percorrer os miradoiros.',
        },
        {
          id: 'consellos',
          title: 'Consellos',
          body: 'Reserva mesa e, se durmes alí, tamén aloxamento, sobre todo en fin de semana. Confirma prezos e dispoñibilidade co local.',
        },
      ],
      faq: [
        {
          question: 'Ten aloxamento?',
          answer:
            'Si, ademais de comida adoita ofrecer aloxamento; confirma dispoñibilidade e prezos co local.',
        },
        {
          question: 'Está preto dos miradoiros?',
          answer:
            'Está no pobo de Parada de Sil, a uns 1 km (4–5 min en coche) dos Balcones de Madrid.',
        },
        {
          question: 'Aceptan reserva?',
          answer:
            'Convir pregar mesa, sobre todo en fin de semana e tempada alta. Chama para confirmar.',
        },
      ],
      related: ['donde-comer', 'comer/restaurante-parada-de-sil', 'donde-dormir'],
      updated: 'outubro de 2026',
    },
    en: {
      title: 'Reitoral de Parada: food and lodging in Parada de Sil',
      h1: 'Reitoral de Parada',
      description:
        'Reitoral de Parada (Rúa do Barrio): restaurant and lodging in Parada de Sil, near the viewpoints. Booking and tips.',
      intro:
        'The **Reitoral de Parada** is another eating (and lodging) option on the Rúa do Barrio in Parada de Sil, next to the Restaurante Parada de Sil.',
      sections: [
        {
          id: 'where',
          title: 'Where it is',
          body: 'Per the official Ribeira Sacra Tourism directory, it is on the Rúa do Barrio in Parada de Sil. It combines food with a base to sleep and tour the viewpoints.',
        },
        {
          id: 'tips',
          title: 'Tips',
          body: 'Book a table and, if you sleep there, also lodging, especially at the weekend. Confirm prices and availability with the place.',
        },
      ],
      faq: [
        {
          question: 'Does it have lodging?',
          answer:
            'Yes, besides food it usually offers lodging; confirm availability and prices with the place.',
        },
        {
          question: 'Is it near the viewpoints?',
          answer:
            'It is in the village of Parada de Sil, about 1 km (4–5 min by car) from the Balcones de Madrid.',
        },
        {
          question: 'Do they take bookings?',
          answer:
            'It is best to book, especially at the weekend and in high season. Call to confirm.',
        },
      ],
      related: ['donde-comer', 'comer/restaurante-parada-de-sil', 'donde-dormir'],
      updated: 'October 2026',
    },
  },

  // 27 ───────────────────────────────────────────────── comer/cristosende
  {
    slug: 'comer/cristosende',
    group: 'comer',
    es: {
      title: 'Cristosende: comer y alojarse junto al Sil',
      h1: 'Cristosende',
      description:
        'Cristosende, aldea junto al río Sil: opciones de comida y alojamiento en la Ribeira Sacra. Cómo llegar y reservar.',
      intro:
        '**Cristosende** es una aldea junto al río Sil, en la Ribeira Sacra, con propuestas de comida y alojamiento cerca del agua.',
      sections: [
        {
          id: 'que-es',
          title: 'Qué es',
          body: 'Es una pequeña aldea ribereña con alojamiento y restauración, buena base para combinar miradores, bodegas y una ruta en catamarán por el Sil.',
        },
        {
          id: 'como-llegar',
          title: 'Cómo llegar',
          body: 'Se llega en coche por la red local de la Ribeira Sacra. El acceso concreto y la oferta confírmalos antes de ir; combínala con Parada de Sil en una ruta de un día.',
        },
      ],
      faq: [
        {
          question: '¿Hay restaurante en Cristosende?',
          answer:
            'Sí, la aldea tiene opciones de restauración y alojamiento; confirma nombres, precios y reserva en la fuente oficial de turismo.',
        },
        {
          question: '¿Está junto al Sil?',
          answer:
            'Sí, está junto al río Sil, en un entorno de viñas en terraza y cañón. Es buena base para navegación y miradores.',
        },
        {
          question: '¿Se puede dormir?',
          answer:
            'Sí, hay alojamiento en la zona; reserva con antelación, sobre todo en temporada alta.',
        },
      ],
      related: ['donde-comer', 'experiencias/catamaran-sil', 'parada-de-sil'],
      updated: 'octubre de 2026',
    },
    gl: {
      title: 'Cristosende: comer e aloxarse xunto ao Sil',
      h1: 'Cristosende',
      description:
        'Cristosende, aldea xunto ao río Sil: opcións de comida e aloxamento na Ribeira Sacra. Como chegar e reservar.',
      intro:
        '**Cristosende** é unha aldea xunto ao río Sil, na Ribeira Sacra, con propostas de comida e aloxamento preto da auga.',
      sections: [
        {
          id: 'que-e',
          title: 'Que é',
          body: 'É unha pequena aldea ribeirá con aloxamento e restauración, boa base para combinar miradoiros, bodegas e unha ruta en catamarán polo Sil.',
        },
        {
          id: 'como-chegar',
          title: 'Como chegar',
          body: 'Lógrase en coche pola rede local da Ribeira Sacra. O acceso concreto e a oferta confímaos antes de ir; combínaa con Parada de Sil nunha ruta dun día.',
        },
      ],
      faq: [
        {
          question: 'Hai restaurante en Cristosende?',
          answer:
            'Si, a aldea ten opcións de restauración e aloxamento; confirma nomes, prezos e reserva na fonte oficial de turismo.',
        },
        {
          question: 'Está xunto ao Sil?',
          answer:
            'Si, está xunto ao río Sil, nun contorno de viñas en terraza e canón. É boa base para navegación e miradoiros.',
        },
        {
          question: 'Pódese durmir?',
          answer:
            'Si, hai aloxamento na zona; reserva con antelación, sobre todo en tempada alta.',
        },
      ],
      related: ['donde-comer', 'experiencias/catamaran-sil', 'parada-de-sil'],
      updated: 'outubro de 2026',
    },
    en: {
      title: 'Cristosende: eat and stay by the Sil',
      h1: 'Cristosende',
      description:
        'Cristosende, a village by the Sil river: food and lodging options in the Ribeira Sacra. How to get there and book.',
      intro:
        '**Cristosende** is a village by the Sil river, in the Ribeira Sacra, with food and lodging options near the water.',
      sections: [
        {
          id: 'what',
          title: 'What it is',
          body: 'It is a small riverside village with lodging and dining, a good base to combine viewpoints, wineries and a catamaran trip on the Sil.',
        },
        {
          id: 'how',
          title: 'How to get there',
          body: 'It is reached by car on the local network of the Ribeira Sacra. Confirm the concrete access and the offer before going; combine it with Parada de Sil in a one-day route.',
        },
      ],
      faq: [
        {
          question: 'Is there a restaurant in Cristosende?',
          answer:
            'Yes, the village has dining and lodging options; confirm names, prices and booking on the official tourism source.',
        },
        {
          question: 'Is it by the Sil?',
          answer:
            'Yes, it is by the Sil river, in a setting of terraced vineyards and canyon. It is a good base for navigation and viewpoints.',
        },
        {
          question: 'Can you sleep there?',
          answer:
            'Yes, there is lodging in the area; book in advance, especially in high season.',
        },
      ],
      related: ['donde-comer', 'experiencias/catamaran-sil', 'parada-de-sil'],
      updated: 'October 2026',
    },
  },

  // 28 ───────────────────────────────────────────────── comer/gastronomia-local
  {
    slug: 'comer/gastronomia-local',
    group: 'comer',
    es: {
      title: 'Gastronomía local de la Ribeira Sacra: qué probar',
      h1: 'Gastronomía local',
      description:
        'Gastronomía de la Ribeira Sacra: productos de la zona, vino y platos típicos cerca de Parada de Sil. Guía para comer.',
      intro:
        'La **gastronomía de la Ribeira Sacra** une el vino de la comarca con productos de huerta, río y monte. Es parte de la experiencia junto a los miradores.',
      sections: [
        {
          id: 'productos',
          title: 'Productos de la zona',
          body: 'En la comarca destacan el vino de la Ribeira Sacra, el pulpo, el lacón, los productos de huerta y los quesos y embutidos locales. Pide recomendación en los restaurantes de Parada de Sil.',
        },
        {
          id: 'donde',
          title: 'Dónde probarla',
          body: 'Los restaurantes del pueblo (Rúa do Barrio) y las aldeas ribereñas como Cristosende son buenos puntos. Lleva agua y confirma disponibilidad y precios con cada local.',
        },
      ],
      faq: [
        {
          question: '¿Qué plato típico probar?',
          answer:
            'Depende de la carta de cada local; pulpo, lacón y productos de la huerta son frecuentes en la zona. Pide recomendación al restaurante.',
        },
        {
          question: '¿El vino es de la zona?',
          answer:
            'Sí, la Ribeira Sacra tiene denominación de origen; pregunta por un vino de la comarca para acompañar.',
        },
        {
          question: '¿Hay opciones sin coche?',
          answer:
            'Para comer sin coche, el pueblo de Parada de Sil es lo más cómodo; el transporte a la demanda de la comarca puede ayudar. Consulta nuestra guía de visita sin coche.',
        },
      ],
      related: ['donde-comer', 'vino/vinos-ribeira-sacra', 'visita/sin-coche'],
      updated: 'octubre de 2026',
    },
    gl: {
      title: 'Gastronomía local da Ribeira Sacra: que probar',
      h1: 'Gastronomía local',
      description:
        'Gastronomía da Ribeira Sacra: produtos da zona, viño e pratos típicos preto de Parada de Sil. Guía para comer.',
      intro:
        'A **gastronomía da Ribeira Sacra** une o viño da comarca cos produtos de horto, río e monte. É parte da experiencia xunto aos miradoiros.',
      sections: [
        {
          id: 'productos',
          title: 'Produtos da zona',
          body: 'Na comarca destacan o viño da Ribeira Sacra, o polbo, o lacón, os produtos de horto e os queixos e embutidos locais. Pide recomendación nos restaurantes de Parada de Sil.',
        },
        {
          id: 'onde',
          title: 'Onde probala',
          body: 'Os restaurantes do pobo (Rúa do Barrio) e as aldeas ribeirás como Cristosende son bos puntos. Leva auga e confirma dispoñibilidade e prezos con cada local.',
        },
      ],
      faq: [
        {
          question: 'Que prato típico probar?',
          answer:
            'Depende da carta de cada local; polbo, lacón e produtos do horto son frecuentes na zona. Pide recomendación ao restaurante.',
        },
        {
          question: 'O viño é da zona?',
          answer:
            'Si, a Ribeira Sacra ten denominación de orixe; pregunta por un viño da comarca para acompañar.',
        },
        {
          question: 'Hai opcións sen coche?',
          answer:
            'Para comer sen coche, o pobo de Parada de Sil é o máis cómodo; o transporte a demanda da comarca pode axudar. Consulta a nosa guía de visita sen coche.',
        },
      ],
      related: ['donde-comer', 'vino/vinos-ribeira-sacra', 'visita/sin-coche'],
      updated: 'outubro de 2026',
    },
    en: {
      title: 'Local food of the Ribeira Sacra: what to try',
      h1: 'Local food',
      description:
        'Food of the Ribeira Sacra: local products, wine and typical dishes near Parada de Sil. A guide to eating.',
      intro:
        'The **food of the Ribeira Sacra** joins the wine of the region with garden, river and mountain products. It is part of the experience next to the viewpoints.',
      sections: [
        {
          id: 'products',
          title: 'Local products',
          body: 'The region highlights the Ribeira Sacra wine, octopus, pork shoulder, garden produce and local cheeses and cured meats. Ask for recommendations in the restaurants of Parada de Sil.',
        },
        {
          id: 'where',
          title: 'Where to try it',
          body: 'The village restaurants (Rúa do Barrio) and riverside villages like Cristosende are good spots. Carry water and confirm availability and prices with each place.',
        },
      ],
      faq: [
        {
          question: 'What typical dish to try?',
          answer:
            'It depends on each place menu; octopus, pork shoulder and garden produce are common in the area. Ask the restaurant for a recommendation.',
        },
        {
          question: 'Is the wine from the area?',
          answer:
            'Yes, the Ribeira Sacra has a designation of origin; ask for a wine from the region to accompany.',
        },
        {
          question: 'Are there car-free options?',
          answer:
            'To eat without a car, the village of Parada de Sil is the most comfortable; the region demand-responsive transport can help. See our visit without a car guide.',
        },
      ],
      related: ['donde-comer', 'vino/vinos-ribeira-sacra', 'visita/sin-coche'],
      updated: 'October 2026',
    },
  },

  // 29 ───────────────────────────────────────────────── comer/desayunos-y-cafe
  {
    slug: 'comer/desayunos-y-cafe',
    group: 'comer',
    es: {
      title: 'Desayunos y café en Parada de Sil',
      h1: 'Desayunos y café',
      description:
        'Dónde desayunar y tomar café en Parada de Sil antes de los miradores: opciones, horario y consejos.',
      intro:
        'Un **desayuno o un café** en Parada de Sil es una buena forma de empezar la mañana antes de ir a los miradores del Sil.',
      sections: [
        {
          id: 'donde',
          title: 'Dónde tomarlo',
          body: 'El pueblo tiene bares y cafeterías de cortesía; los nombres y el horario confírmalos en el propio pueblo o en la fuente oficial de turismo antes de ir.',
        },
        {
          id: 'consejos',
          title: 'Consejos',
          body: 'Si vas a ver el solpor, desayuna pronto y aprovecha el día para los miradores y una ruta. Lleva agua y algo de repuesto si vienes fuera de hora.',
        },
      ],
      faq: [
        {
          question: '¿Hay cafetería en el mirador?',
          answer:
            'No. El mirador no tiene servicios; el café y el desayuno están en Parada de Sil, a unos 1 km.',
        },
        {
          question: '¿A qué hora abren?',
          answer:
            'No damos horarios porque cambian; confírmalos en el pueblo o en la fuente oficial antes de ir.',
        },
        {
          question: '¿Se puede desayunar y luego ir al mirador?',
          answer:
            'Sí, es la combinación habitual: desayuno en el pueblo y luego los miradores (Balcones de Madrid a 200 m a pie del aparcamiento).',
        },
      ],
      related: ['donde-comer', 'mejor-epoca', 'aparcamiento'],
      updated: 'octubre de 2026',
    },
    gl: {
      title: 'Xantares e café en Parada de Sil',
      h1: 'Xantares e café',
      description:
        'Onde almorzar e tomar café en Parada de Sil antes dos miradoiros: opcións, horario e consellos.',
      intro:
        'Un **xantar ou un café** en Parada de Sil é unha boa forma de comezar a mañá antes de ir aos miradoiros do Sil.',
      sections: [
        {
          id: 'onde',
          title: 'Onde tomalo',
          body: 'O pobo ten bares e cafeterías de cortesía; os nomes e o horario confímaos no propio pobo ou na fonte oficial de turismo antes de ir.',
        },
        {
          id: 'consellos',
          title: 'Consellos',
          body: 'Se vas ver o solpor, almorza cedo e aproveita o día para os miradoiros e unha ruta. Leva auga e algo de reposto se viñes fóra de hora.',
        },
      ],
      faq: [
        {
          question: 'Hai cafetería no miradoiro?',
          answer:
            'Non. O miradoiro non ten servizos; o café e o xantar están en Parada de Sil, a uns 1 km.',
        },
        {
          question: 'A que hora abren?',
          answer:
            'Non damos horarios porque cambian; confímaos no pobo ou na fonte oficial antes de ir.',
        },
        {
          question: 'Pódese almorzar e logo ir ao miradoiro?',
          answer:
            'Si, é a combinación habitual: xantar no pobo e logo os miradoiros (Balcones de Madrid a 200 m a pé do aparcamento).',
        },
      ],
      related: ['donde-comer', 'mejor-epoca', 'aparcamiento'],
      updated: 'outubro de 2026',
    },
    en: {
      title: 'Breakfast and coffee in Parada de Sil',
      h1: 'Breakfast and coffee',
      description:
        'Where to have breakfast and coffee in Parada de Sil before the viewpoints: options, hours and tips.',
      intro:
        'A **breakfast or a coffee** in Parada de Sil is a good way to start the morning before going to the Sil viewpoints.',
      sections: [
        {
          id: 'where',
          title: 'Where to have it',
          body: 'The village has bars and cafés; confirm names and hours in the village itself or on the official tourism source before going.',
        },
        {
          id: 'tips',
          title: 'Tips',
          body: 'If you go for the sunset, have breakfast early and use the day for the viewpoints and a route. Carry water and a backup if you come off-hours.',
        },
      ],
      faq: [
        {
          question: 'Is there a café at the viewpoint?',
          answer:
            'No. The viewpoint has no services; coffee and breakfast are in Parada de Sil, about 1 km away.',
        },
        {
          question: 'What time do they open?',
          answer:
            'We do not give hours because they change; confirm them in the village or on the official source before going.',
        },
        {
          question: 'Can you have breakfast then go to the viewpoint?',
          answer:
            'Yes, it is the usual combination: breakfast in the village and then the viewpoints (Balcones de Madrid 200 m on foot from the car park).',
        },
      ],
      related: ['donde-comer', 'mejor-epoca', 'aparcamiento'],
      updated: 'October 2026',
    },
  },

  // 30 ───────────────────────────────────────────────── comer/comida-y-senderismo
  {
    slug: 'comer/comida-y-senderismo',
    group: 'comer',
    es: {
      title: 'Comida y senderismo: cómo organizar el día',
      h1: 'Comida y senderismo',
      description:
        'Cómo organizar comida y senderismo en la Ribeira Sacra: rutas cortas, picnic y dónde comer tras caminar.',
      intro:
        'Combinar **comida y senderismo** es fácil en la Ribeira Sacra: rutas cortas señalizadas y pueblos con restaurantes están al alcance.',
      sections: [
        {
          id: 'rutas',
          title: 'Rutas cortas',
          body: 'La PR-G 98 a Santa Cristina y las pasarelas del Mao son buenas caminatas señalizadas. Lleva agua, calzado y algo de comida de repuesto si vas a estar fuera de hora.',
        },
        {
          id: 'donde-comer',
          title: 'Dónde comer después',
          body: 'Tras caminar, el pueblo de Parada de Sil (Rúa do Barrio) tiene restaurantes; otras aldeas ribereñas como Cristosende suman opciones. Reserva si es fin de semana.',
        },
      ],
      faq: [
        {
          question: '¿Se puede hacer picnic?',
          answer:
            'Sí, lleva tu comida y respeta el entorno (no dejes basura). No hay servicios en los miradores ni en las rutas.',
        },
        {
          question: '¿Qué ruta es mejor con niños?',
          answer:
            'Las pasarelas del Mao son cortas y de poco desnivel; los Balcones de Madrid quedan a 200 m a pie. Vigila a los niños junto al cañón.',
        },
        {
          question: '¿Dónde comprar comida?',
          answer:
            'Los servicios son limitados en el pueblo; para compra mayor, abastece en Monforte de Lemos o Ourense antes de llegar.',
        },
      ],
      related: ['cerca/pasarelas-del-mao', 'senderismo/pr-g-98', 'donde-comer'],
      updated: 'octubre de 2026',
    },
    gl: {
      title: 'Comida e sendeirismo: como organizar o día',
      h1: 'Comida e sendeirismo',
      description:
        'Como organizar comida e sendeirismo na Ribeira Sacra: rutas curtas, picnic e onde comer tras camiñar.',
      intro:
        'Combinar **comida e sendeirismo** é doado na Ribeira Sacra: rutas curtas sinalizadas e pobos con restaurantes están ao alcance.',
      sections: [
        {
          id: 'rutas',
          title: 'Rutas curtas',
          body: 'A PR-G 98 a Santa Cristina e as pasarelas do Mao son bos camiños sinalizados. Leva auga, calzado e algo de comida de reposto se vas estar fóra de hora.',
        },
        {
          id: 'onde-comer',
          title: 'Onde comer despois',
          body: 'Tras camiñar, o pobo de Parada de Sil (Rúa do Barrio) ten restaurantes; outras aldeas ribeirás como Cristosende suman opcións. Reserva se é fin de semana.',
        },
      ],
      faq: [
        {
          question: 'Pódese facer picnic?',
          answer:
            'Si, leva a túa comida e respecta o contorno (non deixes lixo). Non hai servizos nos miradoiros nin nas rutas.',
        },
        {
          question: 'Que ruta é mellor con nenos?',
          answer:
            'As pasarelas do Mao son curtas e de pouco desnivel; os Balcones de Madrid quedan a 200 m a pé. Vixía aos nenos xunto ao canón.',
        },
        {
          question: 'Onde mercar comida?',
          answer:
            'Os servizos son limitados no pobo; para compra maior, avastece en Monforte de Lemos ou Ourense antes de chegar.',
        },
      ],
      related: ['cerca/pasarelas-del-mao', 'senderismo/pr-g-98', 'donde-comer'],
      updated: 'outubro de 2026',
    },
    en: {
      title: 'Food and hiking: how to plan the day',
      h1: 'Food and hiking',
      description:
        'How to plan food and hiking in the Ribeira Sacra: short routes, picnic and where to eat after walking.',
      intro:
        'Combining **food and hiking** is easy in the Ribeira Sacra: short signposted routes and villages with restaurants are within reach.',
      sections: [
        {
          id: 'routes',
          title: 'Short routes',
          body: 'The PR-G 98 to Santa Cristina and the Mao boardwalk are good signposted walks. Carry water, footwear and some backup food if you will be off-hours.',
        },
        {
          id: 'where',
          title: 'Where to eat after',
          body: 'After walking, the village of Parada de Sil (Rúa do Barrio) has restaurants; other riverside villages like Cristosende add options. Book if it is the weekend.',
        },
      ],
      faq: [
        {
          question: 'Can you have a picnic?',
          answer:
            'Yes, bring your food and respect the surroundings (leave no litter). There are no services at the viewpoints or on the routes.',
        },
        {
          question: 'Which route is best with children?',
          answer:
            'The Mao boardwalk is short and low-gradient; the Balcones de Madrid are 200 m on foot. Watch children near the canyon.',
        },
        {
          question: 'Where to buy food?',
          answer:
            'Services are limited in the village; for a bigger shop, stock up in Monforte de Lemos or Ourense before arriving.',
        },
      ],
      related: ['cerca/pasarelas-del-mao', 'senderismo/pr-g-98', 'donde-comer'],
      updated: 'October 2026',
    },
  },
];
