import type { Product } from "@/types/product"

export const maquillajeProducts: Product[] = [
  {
  id: 1043,
  name: "Jabón Skincare Skil Protein",
  price: 2800,
  image: "/images/jabon-skil-protein.webp",
  category: "Maquillaje",
  slug: "jabon-skincare-skil-protein",
  description:
    "Jabón facial y corporal Skil Protein de Kiss Beauty para limpieza profunda, hidratación y control de grasa.",
  fullDescription:
    "El Jabón Skil Pro (Skil Protein) de Kiss Beauty forma parte de una línea de skincare inspirada en la belleza coreana (K-Beauty), diseñada para limpiar, hidratar y revitalizar la piel.\n\nSu fórmula combina ingredientes activos como Vitamina C, Ácido Hialurónico, Cúrcuma y Colágeno, brindando una limpieza profunda sin resecar la piel.\n\nAyuda a eliminar impurezas y exceso de grasa, desobstruye los poros y contribuye a unificar el tono de la piel, aportando luminosidad y suavidad. Gracias a sus propiedades antioxidantes y antiinflamatorias, es ideal para pieles grasas, con acné o con tendencia a imperfecciones.\n\nEs un producto versátil, apto para rostro y cuerpo, con versiones hipoalergénicas y veganas.",
  images: ["/images/jabon-skil-protein.webp"],
  features: [
    "Limpieza profunda de poros",
    "Ayuda a controlar grasa y acné",
    "Aporta luminosidad y unifica el tono",
    "Con Vitamina C",
    "Ácido hialurónico hidratante",
    "Cúrcuma con propiedades antiinflamatorias",
    "Colágeno para mayor suavidad",
    "Antioxidante",
    "Apto para rostro y cuerpo",
    "Inspirado en K-Beauty",
  ],
  stock: "high",
},
  {
    id: 1058,
    name: "Nasal Strips",
    price: 1000,
    image: "/images/nasal-strips-breathe-better.webp",
    category: "Maquillaje",
    slug: "nasal-strips",
    description: "Tiras nasales para respirar mejor y hacer ejercicio con mayor comodidad",
    fullDescription:
      "Las Nasal Strips son tiras adhesivas diseñadas para mejorar la respiración al ensanchar las fosas nasales de forma natural y no invasiva. Perfectas para usar durante el ejercicio, el sueño o en cualquier momento que necesites una mejor entrada de aire.\n\nEstas tiras funcionan levantando suavemente los lados de la nariz, abriendo las vías nasales para permitir un flujo de aire más libre. Ideales para deportistas, personas con congestión nasal leve o quienes buscan reducir los ronquidos.\n\nFáciles de usar y cómodas de llevar, las tiras se adhieren firmemente a la piel sin causar irritación y se retiran sin dolor. Cada paquete incluye 30 tiras para uso prolongado.",
    images: ["/images/nasal-strips-breathe-better.webp"],
    features: [
      "Mejora la respiración nasal",
      "Ideal para hacer ejercicio",
      "Reduce congestión nasal",
      "Ayuda a reducir ronquidos",
      "Adhesivo suave y seguro",
      "Fácil de aplicar y retirar",
      "No invasivo",
      "30 unidades por paquete",
      "Uso deportivo y nocturno",
      "Precio por mayor: $1.000",
    ],
    stock: "high",
    quantityVariants: [{ min: 30, max: null, price: 27000 }],
  },
  {
  id: 1060,
  name: "Blush NEW Gelatina Mi Colors",
  price: 2800,
  image: "/images/blush-gelatina-mi-colors.webp",
  category: "Maquillaje",
  slug: "blush-gelatina-mi-colors",
  description:
    "Blush en gelatina Mi Colors con acabado natural y 3 tonos disponibles.",
  fullDescription:
    "El Blush NEW Gelatina de Mi Colors es un rubor con textura gelatinosa que aporta un acabado fresco y natural a la piel.\n\nSu fórmula ligera se difumina fácilmente, logrando un efecto saludable y luminoso sin sensación pesada.\n\nCuenta con 3 tonos diferentes, ideales para adaptarse a distintos tipos y tonos de piel, permitiendo un maquillaje versátil tanto para el día como para la noche.",
  images: ["/images/blush-gelatina-mi-colors.webp"],
  features: [
    "Textura gelatina",
    "Acabado natural y luminoso",
    "Fácil de difuminar",
    "Efecto fresco",
    "Ideal para uso diario",
    "3 tonos disponibles",
    "Marca Mi Colors",
  ],
  stock: "high",
},
{
  id: 1059,
  name: "Toallas Removedoras de Maquillaje",
  price: 2850,
  image: "/images/toallas-removedoras-maquillaje.webp",
  category: "Maquillaje",
  slug: "toallas-removedoras-maquillaje",
  description:
    "Remueven el maquillaje, toallas humedas. Super calidad.",
  fullDescription:
    "Las Toallas Removedoras de Maquillaje están diseñadas para eliminar eficazmente el maquillaje de forma rápida y práctica.\n\nSu fórmula permite remover impurezas y restos de maquillaje sin irritar la piel, dejando una sensación de limpieza y frescura.\n\nIdeales para el uso diario, viajes o retoques rápidos, combinan practicidad y suavidad para todo tipo de piel.",
  images: ["/images/toallas-removedoras-maquillaje.webp"],
  features: [
    "Remueven maquillaje fácilmente",
    "Toallas húmedas",
    "Suaves con la piel",
    "Uso diario",
    "Prácticas para llevar",
    "Aptas para todo tipo de piel",
  ],
  stock: "high",
},
 {
  id: 1104,
  name: "Mascarilla para Puntos Negros",
  price: 350,
  image: "/images/mascarilla-puntos-negros.webp",
  category: "maquillaje",
  slug: "mascarilla-para-puntos-negros",
  description:
    "Mascarilla facial diseñada para remover puntos negros e impurezas, especialmente en la zona de la nariz.\n\nActúa limpiando los poros en profundidad, eliminando exceso de grasa y residuos acumulados, ayudando a dejar la piel más limpia y suave.\n\nIdeal para uso regular dentro de la rutina de cuidado facial.",
  images: [
    "/images/mascarilla-puntos-negros.webp"
  ],
  features: [
    "Ayuda a remover puntos negros",
    "Limpieza profunda de poros",
    "Ideal para la zona de la nariz",
    "Fácil aplicación y remoción",
    "Uso facial"
  ],
  stock: "high",
  quantityVariants: [
    { min: 10, max: null, price: 3500 }
  ]
},
  {
  id: 1105,
  name: "Máscara de Pestañas 2 en 1",
  price: 3200,
  image: "/images/mascara-pestanas-2-en-1.webp",
  category: "maquillaje",
  slug: "mascara-de-pestanas-2-en-1",
  description:
    "Máscara de pestañas 2 en 1 diseñada para brindar volumen y alargamiento en un solo producto.\n\nSu fórmula ayuda a definir y realzar las pestañas, aportando un acabado intenso y uniforme sin grumos. Ideal para lograr una mirada marcada tanto de día como de noche.\n\nFácil de aplicar, permite un resultado profesional con una sola pasada.",
  images: [
    "/images/mascara-pestanas-2-en-1.webp"
  ],
  features: [
    "Efecto 2 en 1: volumen y alargamiento",
    "Definición uniforme",
    "Acabado intenso",
    "Fácil aplicación",
    "Ideal para uso diario",
    "Apta para maquillaje de día y noche"
  ],
  stock: "high"
},
  {
  id: 1106,
  name: "Set de Pedicure",
  price: 1600,
  image: "/images/set-pedicure.webp",
  category: "maquillaje",
  slug: "set-de-pedicure",
  description:
    "Set de pedicure ideal para el cuidado y mantenimiento de los pies en casa.\n\nIncluye herramientas básicas para una limpieza, corte y cuidado prolijo de uñas y cutículas. Práctico y compacto, es una excelente opción tanto para uso personal como profesional.\n\nFácil de transportar y almacenar, permite mantener los pies bien cuidados de forma sencilla.",
  images: [
    "/images/set-pedicure.webp"
  ],
  features: [
    "Set completo para pedicure",
    "Ideal para uso personal o profesional",
    "Herramientas prácticas y funcionales",
    "Formato compacto",
    "Fácil de transportar",
    "Cuidado integral de uñas y pies"
  ],
  stock: "high"
},
  {
  id: 1107,
  name: "Pegamento para Pestañas",
  price: 750,
  image: "/images/pegamento-para-pestanas.webp",
  category: "maquillaje",
  slug: "pegamento-para-pestanas",
  description:
    "Pegamento para pestañas postizas diseñado para una fijación segura y duradera.\n\nSu fórmula de secado rápido permite una aplicación sencilla, brindando una adherencia firme sin dañar las pestañas naturales. Ideal tanto para uso profesional como personal.\n\nAporta comodidad durante todo el día, manteniendo las pestañas en su lugar con un acabado prolijo y natural.",
  images: [
    "/images/pegamento-para-pestanas.webp"
  ],
  features: [
    "Fijación segura y duradera",
    "Secado rápido",
    "Fácil aplicación",
    "No daña las pestañas naturales",
    "Ideal para uso profesional y personal",
    "Acabado prolijo y natural"
  ],
  stock: "high"
},
  {
  id: 1108,
  name: "Pestañas Postizas 3D",
  price: 1500,
  image: "/images/pestanas-postizas-3d.webp",
  category: "maquillaje",
  slug: "pestanas-postizas-3d",
  description:
    "Pestañas postizas 3D diseñadas para aportar mayor volumen, longitud y definición a la mirada.\n\nGracias a su efecto tridimensional, logran un acabado más natural y llamativo, adaptándose fácilmente al ojo. Son ideales tanto para uso diario como para maquillaje profesional o eventos especiales.\n\nLivianas, cómodas y reutilizables con el cuidado adecuado.",
  images: [
    "/images/pestanas-postizas-3d.webp",
    "/images/pestanas-postizas-3d-1.webp",
    "/images/pestanas-postizas-3d-2.webp",
    "/images/pestanas-postizas-3d-3.webp"
  ],
  features: [
    "Efecto 3D",
    "Mayor volumen y longitud",
    "Acabado natural",
    "Livianas y cómodas",
    "Fáciles de aplicar",
    "Reutilizables",
    "Ideales para uso diario y profesional"
  ],
  stock: "high"
},
  {
  id: 1109,
  name: "Corrector 2 en 1 en Barra",
  price: 2500,
  image: "/images/corrector-2-en-1-barra.webp",
  category: "maquillaje",
  slug: "corrector-2-en-1-barra",
  description:
    "Corrector 2 en 1 en formato barra, ideal para cubrir imperfecciones, ojeras y unificar el tono de la piel de forma rápida y práctica.\n\nSu diseño compacto permite una aplicación precisa y cómoda, funcionando tanto como corrector como base en zonas específicas del rostro. Textura cremosa de fácil difuminado, ideal para uso diario.",
  images: [
    "/images/corrector-2-en-1-barra.webp"
  ],
  features: [
    "Corrector 2 en 1",
    "Formato en barra",
    "Cubre ojeras e imperfecciones",
    "Textura cremosa",
    "Fácil aplicación y difuminado",
    "Ideal para uso diario",
    "Práctico y portátil"
  ],
  stock: "high"
},
  {
  id: 1110,
  name: "Primer Fit Me My Colors",
  price: 1300,
  image: "/images/primer-fit-me-my-colors.webp",
  category: "maquillaje",
  slug: "primer-fit-me-my-colors",
  description:
    "Primer facial Fit Me My Colors diseñado para preparar la piel antes del maquillaje, ayudando a unificar la textura y mejorar la duración de la base.\n\nSu fórmula ligera suaviza poros y líneas de expresión, dejando un acabado más uniforme y natural. Ideal para uso diario y para lograr un maquillaje más prolijo y duradero.",
  images: [
    "/images/primer-fit-me-my-colors.webp"
  ],
  features: [
    "Prepara la piel antes del maquillaje",
    "Mejora la duración del maquillaje",
    "Textura ligera",
    "Ayuda a suavizar poros",
    "Acabado natural",
    "Fácil de aplicar",
    "Ideal para uso diario"
  ],
  stock: "high"
},
  {
  id: 1111,
  name: "Tinta de Labios Mc Colors",
  price: 2050,
  image: "/images/tinta-labios-mc-colors.webp",
  category: "maquillaje",
  slug: "tinta-labios-mc-colors",
  description:
    "Tinta de labios Mc Colors con acabado natural y larga duración. Aporta color intenso sin sensación pesada, dejando los labios suaves y con un look fresco.\n\nSu fórmula liviana se adapta al labio logrando un efecto uniforme, ideal para maquillaje diario o para quienes buscan un acabado duradero y cómodo.",
  images: [
    "/images/tinta-labios-mc-colors.webp"
  ],
  features: [
    "Larga duración",
    "Textura liviana",
    "Color uniforme",
    "Acabado natural",
    "No pegajosa",
    "Cómoda para uso diario",
    "Fácil aplicación"
  ],
  stock: "high"
},
  {
  id: 1112,
  name: "Mascarilla Facial de Barro Negro",
  price: 650,
  image: "/images/mascarilla-facial-liquida-puntos-negros.webp",
  category: "maquillaje",
  slug: "mascarilla-facial-liquida-puntos-negros",
  description:
    "Carbón activado (SACA IMPUREZAS Y PUNTOS NEGROS)",
  images: [
    "/images/mascarilla-facial-liquida-puntos-negros.webp"
  ],
  features: [
    "Ayuda a eliminar puntos negros",
    "Limpieza profunda de poros",
    "Textura líquida",
    "Fácil de aplicar",
    "Mejora la apariencia de la piel",
    "Ideal para cuidado facial",
    "Uso doméstico"
  ],
  stock: "high"
},
  {
  id: 1113,
  name: "Mascarilla Facial - Agua de Rosas",
  price: 650,
  image: "/images/mascarilla-facial.webp",
  category: "maquillaje",
  slug: "mascarilla-facial",
  description:
    "Mascarilla facial ideal para el cuidado diario de la piel, ayudando a limpiar, hidratar y refrescar el rostro.\n\nSu fórmula contribuye a mejorar la apariencia de la piel, dejándola más suave y con una sensación de frescura. Apta para todo tipo de piel y de fácil aplicación.",
  images: [
    "/images/mascarilla-facial.webp"
  ],
  features: [
    "Limpieza facial",
    "Hidratación y frescura",
    "Fácil aplicación",
    "Uso doméstico",
    "Apta para todo tipo de piel",
    "Ideal para rutina facial"
  ],
  stock: "high"
},
  {
  id: 1114,
  name: "Mascarilla Facial - Ácido Hialurónico",
  price: 650,
  image: "/images/mascarilla-facial-acido-hialuronico.webp",
  category: "maquillaje",
  slug: "mascarilla-facial-acido-hialuronico",
  description:
    "Mascarilla facial con ácido hialurónico, ideal para hidratar profundamente la piel y mejorar su elasticidad.\n\nAyuda a retener la humedad natural del rostro, dejando la piel más suave, luminosa y revitalizada. Recomendada para pieles secas, normales o deshidratadas. De fácil aplicación y uso práctico para incorporar a la rutina de cuidado facial.",
  images: [
    "/images/mascarilla-facial-acido-hialuronico.webp"
  ],
  features: [
    "Con ácido hialurónico",
    "Hidratación profunda",
    "Mejora la elasticidad de la piel",
    "Efecto revitalizante",
    "Fácil aplicación",
    "Apta para todo tipo de piel",
    "Ideal para rutina facial"
  ],
  stock: "high"
},
  {
  id: 1115,
  name: "Mascarilla Facial - Carbón Activo",
  price: 650,
  image: "/images/mascarilla-facial-carbon-activo.webp",
  category: "maquillaje",
  slug: "mascarilla-facial-carbon-activo",
  description:
    "Mascarilla facial con carbón activo, ideal para la limpieza profunda de la piel y la eliminación de impurezas.\n\nAyuda a absorber el exceso de grasa, limpiar los poros y remover residuos acumulados, dejando la piel más fresca y equilibrada. Recomendada para pieles mixtas a grasas. Fácil de aplicar y perfecta para complementar la rutina de cuidado facial.",
  images: [
    "/images/mascarilla-facial-carbon-activo.webp"
  ],
  features: [
    "Con carbón activo",
    "Limpieza profunda",
    "Absorbe exceso de grasa",
    "Ayuda a limpiar poros",
    "Efecto purificante",
    "Fácil aplicación",
    "Ideal para piel mixta a grasa",
    "Uso en rutina facial"
  ],
  stock: "high"
},
  {
  id: 1116,
  name: "Blush S.F.R Colors",
  price: 2100,
  image: "/images/blush-sfr-colors.webp",
  category: "maquillaje",
  slug: "blush-sfr-colors",
  description:
    "Blush S.F.R Colors ideal para aportar color y frescura al rostro, logrando un acabado natural y uniforme.\n\nSu textura suave y fácil de difuminar permite modular la intensidad del color según el look deseado. Perfecto para uso diario o maquillaje más elaborado. Apto para todo tipo de piel.",
  images: [
    "/images/blush-sfr-colors.webp"
  ],
  features: [
    "Color natural y duradero",
    "Textura suave",
    "Fácil de difuminar",
    "Acabado uniforme",
    "Ideal para uso diario",
    "Apto para todo tipo de piel",
    "Presentación compacta"
  ],
  stock: "high"
},
  {
  id: 1117,
  name: "Labial Chocolate Matte Ink",
  price: 2400,
  image: "/images/labial-chocolate-matte-ink.webp",
  category: "maquillaje",
  slug: "labial-chocolate-matte-ink",
  description:
    "Labial líquido Chocolate Matte Ink de acabado mate intenso y larga duración.\n\nSu fórmula ofrece un color profundo con tonos chocolate, ideal para looks elegantes y modernos. Textura cremosa que se fija rápidamente sin resecar los labios, brindando comodidad durante todo el día.\n\nPerfecto para uso diario o maquillaje nocturno, con alta pigmentación y efecto matte duradero.",
  images: [
    "/images/labial-chocolate-matte-ink.webp"
  ],
  features: [
    "Acabado matte",
    "Alta pigmentación",
    "Larga duración",
    "Tonos chocolate",
    "Textura cremosa",
    "No reseca los labios",
    "Ideal para uso diario o nocturno"
  ],
  stock: "high"
},
  {
  id: 1118,
  name: "Gloss Hidratante de Miel",
  price: 2100,
  image: "/images/gloss-hidratante-miel.webp",
  category: "maquillaje",
  slug: "gloss-hidratante-de-miel",
  description:
    "Gloss hidratante con extracto de miel que aporta brillo natural y cuidado intenso a los labios.\n\nSu fórmula nutritiva ayuda a mantener los labios suaves, hidratados y protegidos contra la resequedad. Ideal para uso diario, puede aplicarse solo o sobre labial para un acabado más luminoso.\n\nTextura ligera, no pegajosa y de rápida absorción.",
  images: [
    "/images/gloss-hidratante-miel.webp"
  ],
  features: [
    "Hidratación intensa",
    "Extracto de miel",
    "Brillo natural",
    "Textura ligera",
    "No pegajoso",
    "Ideal para uso diario",
    "Puede usarse solo o sobre labial"
  ],
  stock: "high"
},
  {
  id: 1119,
  name: "Arqueador de Pestañas",
  price: 2200,
  image: "/images/arqueador-de-pestanas-osito.webp",
  category: "maquillaje",
  slug: "arqueador-de-pestanas",
  description:
    "Arqueador de pestañas de excelente calidad, súper reforzado y con diseño de tapas de osito.\n\nDiseñado para lograr un rizado definido y duradero sin dañar las pestañas. Su estructura resistente brinda mayor presión controlada para un mejor resultado.\n\nLigero, cómodo de usar y apto para el uso diario.",
  images: [
    "/images/arqueador-de-pestanas-osito.webp"
  ],
  features: [
    "Excelente calidad",
    "Súper reforzado",
    "Diseño con tapas de osito",
    "Rizado definido y duradero",
    "Ligero y cómodo",
    "No daña las pestañas",
    "Ideal para uso diario"
  ],
  stock: "high"
},
  {
  id: 1120,
  name: "Serum Súper Hidratante para Rostro",
  price: 3900,
  image: "/images/serum-super-hidratante-rostro.webp",
  category: "maquillaje",
  slug: "serum-super-hidratante-rostro",
  description:
    "Serum facial súper hidratante de excelente calidad, ideal para el cuidado diario del rostro.\n\nSu fórmula ligera ayuda a hidratar en profundidad, mejorando la suavidad y elasticidad de la piel sin dejar sensación pesada o grasosa.\n\nApto para todo tipo de piel. Puede utilizarse de día y de noche como parte de la rutina facial.",
  images: [
    "/images/serum-super-hidratante-rostro.webp"
  ],
  features: [
    "Hidratación profunda",
    "Excelente calidad",
    "Textura ligera",
    "No deja sensación grasosa",
    "Mejora la suavidad de la piel",
    "Apto para todo tipo de piel",
    "Uso diario día y noche"
  ],
  stock: "high"
},
  {
  id: 1121,
  name: "Mascarillas Reafirmantes e Hidratantes",
  price: 1250,
  image: "/images/mascarillas-reafirmantes-hidratantes-1.webp",
  category: "maquillaje",
  slug: "mascarillas-reafirmantes-hidratantes",
  description:
    "Mascarillas faciales reafirmantes e hidratantes ideales para revitalizar la piel del rostro.\n\nAyudan a mejorar la elasticidad, aportar hidratación profunda y dejar la piel suave y luminosa. Perfectas para complementar la rutina de cuidado facial y para uso regular.\n\nAptas para todo tipo de piel.",
  images: [
    "/images/mascarillas-reafirmantes-hidratantes-1.webp",
    "/images/mascarillas-reafirmantes-hidratantes-2.webp",
    "/images/mascarillas-reafirmantes-hidratantes-3.webp",
    "/images/mascarillas-reafirmantes-hidratantes-4.webp"
  ],
  features: [
    "Efecto reafirmante",
    "Hidratación profunda",
    "Mejora la elasticidad",
    "Deja la piel suave y luminosa",
    "Ideal para cuidado facial",
    "Uso regular",
    "Apta para todo tipo de piel"
  ],
  stock: "out"
},
  {
  id: 1122,
  name: "Mascarilla Hidratante y Reafirmante",
  price: 1000,
  image: "/images/mascarilla-hidratante-reafirmante-1.webp",
  category: "maquillaje",
  slug: "mascarilla-hidratante-reafirmante",
  description:
    "Mascarilla facial hidratante y reafirmante ideal para el cuidado diario de la piel.\n\nAyuda a mantener la piel hidratada, firme y revitalizada, mejorando su textura y apariencia. Perfecta para sumar a la rutina facial y aportar frescura al rostro.\n\nApta para todo tipo de piel.",
  images: [
    "/images/mascarilla-hidratante-reafirmante-1.webp",
    "/images/mascarilla-hidratante-reafirmante-2.webp",
    "/images/mascarilla-hidratante-reafirmante-3.webp",
    "/images/mascarilla-hidratante-reafirmante-4.webp"
  ],
  features: [
    "Hidratación profunda",
    "Efecto reafirmante",
    "Revitaliza la piel",
    "Mejora la textura del rostro",
    "Ideal para uso regular",
    "Apta para todo tipo de piel"
  ],
  stock: "out"
},
  {
  id: 1123,
  name: "Mascarilla Reafirmante e Hidratante Serum Limpiador",
  price: 1500,
  image: "/images/mascarilla-serum-limpiador.webp",
  category: "maquillaje",
  slug: "mascarilla-reafirmante-hidratante-serum-limpiador",
  description:
    "Mascarilla facial con función de limpiador y serum, ideal para una limpieza suave y cuidado diario del rostro.\n\nAyuda a reafirmar e hidratar la piel, dejándola suave, fresca y sin sensación pesada. Su fórmula ligera permite usarla cómodamente como parte de la rutina facial.\n\nApta para todo tipo de piel.",
  images: [
    "/images/mascarilla-serum-limpiador.webp"
  ],
  features: [
    "Función limpiador y serum",
    "Efecto reafirmante",
    "Hidratación profunda",
    "Textura ligera",
    "No deja sensación pesada",
    "Deja la piel suave",
    "Apta para todo tipo de piel"
  ],
  stock: "out"
},
  {
  id: 1124,
  name: "Mascarilla Reafirmante e Hidratante 2",
  price: 750,
  image: "/images/mascarilla-reafirmante-hidratante-2.webp",
  category: "maquillaje",
  slug: "mascarilla-reafirmante-hidratante-2",
  description:
    "Mascarilla facial reafirmante e hidratante ideal para el cuidado diario del rostro.\n\nAyuda a mantener la piel suave, hidratada y con una apariencia más firme y saludable. Perfecta para complementar la rutina facial y aportar frescura.\n\nApta para todo tipo de piel.",
  images: [
    "/images/mascarilla-reafirmante-hidratante-2.webp",
    "/images/mascarilla-reafirmante-hidratante-2-2.webp",
    "/images/mascarilla-reafirmante-hidratante-2-3.webp"
  ],
  features: [
    "Efecto reafirmante",
    "Hidratación diaria",
    "Deja la piel suave",
    "Aporta frescura",
    "Ideal para rutina facial",
    "Apta para todo tipo de piel"
  ],
  stock: "out"
},
  {
  id: 1125,
  name: "Peine con Espejo",
  price: 2200,
  image: "/images/peine-con-espejo.webp",
  category: "maquillaje",
  slug: "peine-con-espejo",
  description:
    "Peine práctico con espejo incorporado, ideal para retoques rápidos en cualquier momento.\n\nDiseño compacto y liviano, perfecto para llevar en la cartera o bolso. Permite peinar y acomodar el cabello de forma cómoda y sencilla, manteniendo un aspecto prolijo en todo momento.\n\nApto para uso diario.",
  images: [
    "/images/peine-con-espejo.webp"
  ],
  features: [
    "Peine con espejo incorporado",
    "Diseño compacto",
    "Fácil de transportar",
    "Ideal para retoques",
    "Liviano y práctico",
    "Uso diario"
  ],
  stock: "high"
},
  {
  id: 1126,
  name: "Crema Hidratante Antiage con Protector Solar 60 FPS",
  price: 3000,
  image: "/images/crema-hidratante-antiage-spf60.webp",
  category: "maquillaje",
  slug: "crema-hidratante-antiage-spf60",
  description:
    "Crema hidratante antiage con protector solar FPS 60 de excelente calidad.\n\nBrinda hidratación profunda mientras ayuda a proteger la piel de los rayos UV, contribuyendo a prevenir el envejecimiento prematuro. Su textura liviana se absorbe fácilmente sin dejar sensación pesada.\n\nIdeal para uso diario. Presentación de 70 ml.",
  images: [
    "/images/crema-hidratante-antiage-spf60.webp"
  ],
  features: [
    "Excelente calidad",
    "FPS 60",
    "Protección UV",
    "Hidratación profunda",
    "Efecto antiage",
    "Textura liviana",
    "No deja sensación pesada",
    "Presentación 70 ml"
  ],
  stock: "high"
},
  {
  id: 1127,
  name: "Polvo Compacto Doble con Colágeno",
  price: 4100,
  image: "/images/polvo-compacto-doble-colageno.webp",
  category: "maquillaje",
  slug: "polvo-compacto-doble-colageno",
  description:
    "Polvo compacto doble con colágeno de excelente calidad, ideal para un acabado uniforme y natural.\n\nSu fórmula ayuda a mantener la piel suave y cuidada, aportando un efecto mate y duradero. Incluye espejo y esponja para una aplicación práctica en cualquier momento.\n\nPresentación doble que brinda mayor rendimiento.",
  images: [
    "/images/polvo-compacto-doble-colageno.webp"
  ],
  features: [
    "Excelente calidad",
    "Contiene colágeno",
    "Presentación doble",
    "Acabado uniforme",
    "Efecto mate",
    "Incluye espejo",
    "Incluye esponja",
    "Práctico para llevar"
  ],
  stock: "high"
},
  {
  id: 1128,
  name: "Set de 6 Piezas de Brochas",
  price: 2600,
  image: "/images/set-6-brochas.webp",
  category: "maquillaje",
  slug: "set-6-brochas",
  description:
    "Set de 6 brochas de maquillaje ideal para una aplicación precisa y uniforme.\n\nIncluye brochas esenciales para rostro y ojos, permitiendo lograr distintos tipos de maquillaje con facilidad. Sus cerdas suaves aseguran un acabado prolijo y cómodo.\n\nPerfecto para uso diario o profesional.",
  images: [
    "/images/set-6-brochas.webp"
  ],
  features: [
    "Set de 6 piezas",
    "Cerdas suaves",
    "Aplicación uniforme",
    "Ideal para rostro y ojos",
    "Cómodas y prácticas",
    "Uso diario o profesional"
  ],
  stock: "high"
},
  {
  id: 1129,
  name: "Set de 10 Piezas de Brochas Grandes",
  price: 5600,
  image: "/images/set-10-brochas-grandes.webp",
  category: "maquillaje",
  slug: "set-10-brochas-grandes",
  description:
    "Set de 10 brochas grandes de maquillaje ideal para una aplicación completa y profesional.\n\nIncluye brochas amplias y suaves para rostro, permitiendo una distribución uniforme de polvos, bases y productos líquidos o cremosos. Diseñadas para lograr un acabado prolijo y natural.\n\nAptas para uso diario o profesional.",
  images: [
    "/images/set-10-brochas-grandes.webp"
  ],
  features: [
    "Set de 10 piezas",
    "Brochas grandes",
    "Cerdas suaves",
    "Aplicación uniforme",
    "Ideal para rostro",
    "Uso diario o profesional"
  ],
  stock: "high"
},
  {
  id: 1130,
  name: "Polvo Compacto Doble Kiss Beauty",
  price: 4100,
  image: "/images/polvo-compacto-doble-kiss-beauty.webp",
  category: "maquillaje",
  slug: "polvo-compacto-doble-kiss-beauty",
  description:
    "Polvo compacto doble Kiss Beauty ideal para lograr un acabado uniforme y natural en el rostro.\n\nSu presentación doble permite mayor rendimiento y practicidad. Incluye espejo y esponja para una aplicación cómoda en cualquier momento.\n\nApto para uso diario, ayuda a matificar la piel y mantener el maquillaje por más tiempo.",
  images: [
    "/images/polvo-compacto-doble-kiss-beauty.webp"
  ],
  features: [
    "Presentación doble",
    "Acabado uniforme",
    "Efecto matificante",
    "Incluye espejo",
    "Incluye esponja",
    "Ideal para uso diario",
    "Mayor rendimiento"
  ],
  stock: "high"
},
  {
  id: 1131,
  name: "Tinte Semipermanente para Cejas Karité",
  price: 3100,
  image: "/images/tinte-cejas-karite.webp",
  category: "maquillaje",
  slug: "tinte-semipermanente-cejas-karite",
  description:
    "Tinte semipermanente para cejas Karité ideal para definir y realzar la mirada.\n\nAyuda a dar color uniforme a las cejas con un acabado natural y duradero. Su fórmula semipermanente permite mantener las cejas prolijas por más tiempo, reduciendo la necesidad de retoques diarios.\n\nApto para uso personal o profesional.",
  images: [
    "/images/tinte-cejas-karite.webp"
  ],
  features: [
    "Tinte semipermanente",
    "Color uniforme",
    "Acabado natural",
    "Larga duración",
    "Define y realza las cejas",
    "Ideal para uso diario o profesional"
  ],
  stock: "high"
},
  {
  id: 1132,
  name: "Lápiz para Cejas a Prueba de Agua",
  price: 1100,
  image: "/images/lapiz-cejas-waterproof.webp",
  category: "maquillaje",
  slug: "lapiz-cejas-a-prueba-de-agua",
  description:
    "Lápiz para cejas a prueba de agua ideal para definir y rellenar con precisión.\n\nSu fórmula waterproof permite una mayor duración, manteniendo el color intacto durante todo el día. Textura suave que facilita la aplicación y un acabado natural.\n\nPerfecto para uso diario.",
  images: [
    "/images/lapiz-cejas-waterproof.webp"
  ],
  features: [
    "A prueba de agua",
    "Larga duración",
    "Definición precisa",
    "Acabado natural",
    "Textura suave",
    "Ideal para uso diario"
  ],
  stock: "high"
},
  {
  id: 1133,
  name: "Polvo Compacto de Aloe Vera",
  price: 3400,
  image: "/images/polvo-compacto-aloe-vera-karite.webp",
  category: "maquillaje",
  slug: "polvo-compacto-aloe-vera",
  description:
    "KARITÉ\nCon espejo 🪞 y esponja 🫶🏻",
  images: [
    "/images/polvo-compacto-aloe-vera-karite.webp"
  ],
  stock: "high"
},
  {
  id: 1134,
  name: "Base Velvet Matte Alta Cobertura Karité",
  price: 2800,
  image: "/images/base-velvet-matte-karite.webp",
  category: "maquillaje",
  slug: "base-velvet-matte-alta-cobertura-karite",
  description:
    "Base Velvet Matte de alta cobertura Karité ideal para un acabado uniforme y profesional.\n\nSu fórmula permite cubrir imperfecciones, dejando la piel con un efecto mate suave y duradero. Textura ligera que se adapta fácilmente al rostro sin sensación pesada.\n\nApta para uso diario.",
  images: [
    "/images/base-velvet-matte-karite.webp"
  ],
  features: [
    "Alta cobertura",
    "Acabado velvet matte",
    "Textura ligera",
    "Cubre imperfecciones",
    "Efecto mate duradero",
    "Ideal para uso diario"
  ],
  stock: "high"
},
  {
  id: 1135,
  name: "Base de Altísima Cobertura con Efecto Matte",
  price: 7800,
  image: "/images/base-altisima-cobertura-matte.webp",
  category: "maquillaje",
  slug: "base-altisima-cobertura-efecto-matte",
  description:
    "Base de altísima cobertura con efecto matte ideal para un acabado profesional y duradero.\n\nAyuda a cubrir imperfecciones de manera uniforme, dejando la piel con un aspecto mate suave y natural. Su textura permite una aplicación pareja sin sensación pesada.\n\nApta para uso diario o maquillaje más elaborado.",
  images: [
    "/images/base-altisima-cobertura-matte.webp"
  ],
  features: [
    "Altísima cobertura",
    "Efecto matte",
    "Acabado uniforme",
    "Larga duración",
    "Textura cómoda",
    "Ideal para uso diario o profesional"
  ],
  stock: "high"
},
 {
  id: 1136,
  name: "Máscara de Pestañas Kiss Beauty Lashes",
  price: 2800,
  image: "/images/mascara-pestanas-kiss-beauty-lashes.webp",
  category: "maquillaje",
  slug: "mascara-pestanas-kiss-beauty-lashes",
  description:
    "Máscara de pestañas Kiss Beauty Lashes ideal para lograr pestañas definidas y con mayor volumen.\n\nSu fórmula permite realzar la mirada, aportando intensidad y definición sin apelmazar. Aplicación fácil para un acabado prolijo y duradero.\n\nApta para uso diario.",
  images: [
    "/images/mascara-pestanas-kiss-beauty-lashes.webp"
  ],
  features: [
    "Aporta volumen y definición",
    "Realza la mirada",
    "Aplicación fácil",
    "Acabado prolijo",
    "Ideal para uso diario"
  ],
  stock: "high"
},
  {
  id: 1137,
  name: "Iluminador Jelly Kiss Beauty",
  price: 2600,
  image: "/images/iluminador-jelly-kiss-beauty.webp",
  category: "maquillaje",
  slug: "iluminador-jelly-kiss-beauty",
  description:
    "Iluminador Jelly Kiss Beauty ideal para aportar brillo y luminosidad al rostro.\n\nSu textura tipo jelly se funde fácilmente con la piel, dejando un acabado natural y radiante. Perfecto para resaltar pómulos, arco de la ceja y otros puntos de luz.\n\nApto para uso diario o maquillaje más elaborado.",
  images: [
    "/images/iluminador-jelly-kiss-beauty.webp"
  ],
  features: [
    "Textura jelly",
    "Brillo natural",
    "Fácil de difuminar",
    "Acabado luminoso",
    "Ideal para resaltar el rostro",
    "Uso diario o profesional"
  ],
  stock: "high"
},
  {
  id: 1138,
  name: "Iluminador Billion Beauty",
  price: 2200,
  image: "/images/iluminador-billion-beauty.webp",
  category: "maquillaje",
  slug: "iluminador-billion-beauty",
  description:
    "Iluminador Billion Beauty ideal para aportar luz y realce al rostro.\n\nSu fórmula permite lograr un acabado luminoso y natural, resaltando los puntos clave del maquillaje. Textura suave y fácil de aplicar, perfecta para looks diarios o más intensos.\n\nApto para todo tipo de piel.",
  images: [
    "/images/iluminador-billion-beauty.webp"
  ],
  features: [
    "Acabado luminoso",
    "Textura suave",
    "Fácil aplicación",
    "Resalta el rostro",
    "Ideal para uso diario o profesional",
    "Apto para todo tipo de piel"
  ],
  stock: "high"
},
  {
  id: 1139,
  name: "Protector Solar 90 SPF Kiss Beauty",
  price: 3000,
  image: "/images/protector-solar-90spf-kiss-beauty.webp",
  category: "maquillaje",
  slug: "protector-solar-90spf-kiss-beauty",
  description:
    "Protector solar Kiss Beauty con FPS 90 ideal para brindar alta protección contra los rayos UV.\n\nAyuda a proteger la piel del daño solar, contribuyendo a prevenir el envejecimiento prematuro. Textura ligera de rápida absorción, apta para uso diario.\n\nIdeal para incorporar a la rutina de cuidado facial.",
  images: [
    "/images/protector-solar-90spf-kiss-beauty.webp"
  ],
  features: [
    "FPS 90",
    "Alta protección UV",
    "Textura ligera",
    "Rápida absorción",
    "Ideal para uso diario",
    "Cuidado facial"
  ],
  stock: "high"
},
  {
  id: 1140,
  name: "Lápiz para Cejas Doble Karité",
  price: 750,
  image: "/images/lapiz-cejas-doble-karite.webp",
  category: "maquillaje",
  slug: "lapiz-cejas-doble-karite",
  description:
    "Lápiz para cejas doble Karité ideal para definir y rellenar las cejas de forma precisa y natural.\n\nCuenta con dos puntas que facilitan el diseño y acabado, permitiendo un look prolijo y duradero. Textura suave de fácil aplicación, ideal para uso diario.",
  images: [
    "/images/lapiz-cejas-doble-karite.webp"
  ],
  features: [
    "Lápiz doble punta",
    "Definición precisa",
    "Textura suave",
    "Fácil aplicación",
    "Acabado natural",
    "Ideal para uso diario"
  ],
  stock: "high"
},
  {
  id: 1141,
  name: "Set de Polvo para Cejas",
  price: 2200,
  image: "/images/set-polvo-cejas.webp",
  category: "maquillaje",
  slug: "set-polvo-para-cejas",
  description:
    "Set de polvo para cejas ideal para rellenar, definir y dar forma de manera natural.\n\nPermite modular la intensidad del color logrando un acabado prolijo y duradero. Perfecto para uso diario y todo tipo de cejas.",
  images: [
    "/images/set-polvo-cejas.webp"
  ],
  features: [
    "Set de polvo para cejas",
    "Definición natural",
    "Color modulable",
    "Acabado prolijo",
    "Fácil aplicación",
    "Ideal para uso diario"
  ],
  stock: "high"
},
  {
  id: 1142,
  name: "Delineador Pincel Súper Fino",
  price: 1800,
  image: "/images/delineador-pincel-super-fino.webp",
  category: "maquillaje",
  slug: "delineador-pincel-super-fino",
  description:
    "Delineador líquido con pincel súper fino, ideal para lograr trazos precisos y definidos.\n\nPermite un delineado prolijo, uniforme y de larga duración. Perfecto para looks naturales o delineados más marcados.",
  images: [
    "/images/delineador-pincel-super-fino.webp"
  ],
  features: [
    "Pincel súper fino",
    "Alta precisión",
    "Trazos definidos",
    "Fácil aplicación",
    "Secado rápido",
    "Ideal para todo tipo de delineado"
  ],
  stock: "high"
},
  {
  id: 1143,
  name: "Sombra Líquida para Cejas",
  price: 2200,
  image: "/images/sombra-liquida-para-cejas.webp",
  category: "maquillaje",
  slug: "sombra-liquida-para-cejas",
  description:
    "Sombra líquida para cejas ideal para definir, rellenar y dar forma con un acabado natural y uniforme.\n\nSu textura líquida permite una aplicación precisa y de larga duración, sin correrse.",
  images: [
    "/images/sombra-liquida-para-cejas.webp"
  ],
  features: [
    "Textura líquida",
    "Definición natural",
    "Rellena y da forma",
    "Larga duración",
    "Aplicación precisa",
    "Acabado uniforme"
  ],
  stock: "high"
},
  {
  id: 1144,
  name: "Protector Solar 50spf",
  price: 2600,
  image: "/images/protector-solar-50spf.webp",
  category: "maquillaje",
  slug: "protector-solar-50spf",
  description:
    "Protector solar FPS 50 ideal para el cuidado diario de la piel.\n\nAyuda a proteger contra los rayos UVA y UVB, manteniendo la piel protegida e hidratada durante el día.",
  images: [
    "/images/protector-solar-50spf.webp"
  ],
  features: [
    "FPS 50",
    "Protección UVA y UVB",
    "Uso diario",
    "Textura liviana",
    "Fácil absorción",
    "Apto para todo tipo de piel"
  ],
  stock: "high"
},
  {
  id: 1145,
  name: "Protector Solar 90spf",
  price: 4200,
  image: "/images/protector-solar-90spf.webp",
  category: "maquillaje",
  slug: "protector-solar-90spf",
  description:
    "Protector solar FPS 90 de alta protección, ideal para el cuidado intensivo de la piel.\n\nAyuda a proteger eficazmente contra los rayos UVA y UVB, recomendado para exposiciones prolongadas al sol.",
  images: [
    "/images/protector-solar-90spf.webp"
  ],
  features: [
    "FPS 90",
    "Alta protección solar",
    "Protección UVA y UVB",
    "Uso diario",
    "Textura liviana",
    "Rápida absorción",
    "Apto para todo tipo de piel"
  ],
  stock: "high"
},
  {
  id: 1146,
  name: "Kit Esponja y Borla por 8 piezas",
  price: 5900,
  image: "/images/kit-esponja-borla-8-piezas.webp",
  category: "maquillaje",
  slug: "kit-esponja-borla-8-piezas",
  description:
    "Kit completo de esponjas y borlas para maquillaje.\n\nIdeal para aplicar base, polvo y productos líquidos o en crema, logrando un acabado uniforme y profesional.\n\nIncluye 8 piezas prácticas para uso diario o profesional.",
  images: [
    "/images/kit-esponja-borla-8-piezas.webp"
  ],
  features: [
    "Incluye 8 piezas",
    "Esponjas y borlas de maquillaje",
    "Apto para productos líquidos y en polvo",
    "Acabado uniforme",
    "Uso profesional y personal",
    "Fáciles de limpiar"
  ],
  stock: "high"
},
  {
  id: 1147,
  name: "Kit de Esponja por 24 piezas",
  price: 3800,
  image: "/images/kit-esponjas-24-piezas.webp",
  category: "maquillaje",
  slug: "kit-esponjas-24-piezas",
  description:
    "Kit de esponjas para maquillaje.\n\nIdeal para aplicar base, corrector y productos líquidos o en crema, logrando un acabado parejo y natural.\n\nIncluye 24 piezas, perfecto para uso personal, profesional o reventa.",
  images: [
    "/images/kit-esponjas-24-piezas.webp"
  ],
  features: [
    "Incluye 24 esponjas",
    "Apta para base y corrector",
    "Uso con productos líquidos o en crema",
    "Acabado uniforme",
    "Suaves y reutilizables",
    "Fáciles de limpiar"
  ],
  stock: "high"
},
  {
  id: 1148,
  name: "Esponja por 1",
  price: 750,
  image: "/images/esponja-maquillaje.webp",
  category: "maquillaje",
  slug: "esponja-por-1",
  description:
    "Esponja individual para maquillaje.\n\nIdeal para aplicar base, corrector y productos líquidos o en crema, logrando un acabado uniforme y natural.\n\nSu textura suave permite difuminar sin dejar marcas.",
  images: [
    "/images/esponja-maquillaje.webp"
  ],
  features: [
    "Esponja individual",
    "Apta para base y corrector",
    "Uso con productos líquidos o en crema",
    "Acabado parejo y natural",
    "Textura suave",
    "Reutilizable y fácil de limpiar"
  ],
  stock: "high"
},
  {
  id: 1149,
  name: "Esponja por 2",
  price: 1500,
  image: "/images/esponja-maquillaje-2.webp",
  category: "maquillaje",
  slug: "esponja-por-2",
  description:
    "Pack de 2 esponjas para maquillaje.\n\nIdeales para aplicar base, corrector y productos líquidos o en crema, logrando un acabado uniforme y natural.\n\nSu textura suave permite difuminar sin dejar marcas.",
  images: [
    "/images/esponja-maquillaje-2.webp"
  ],
  features: [
    "Pack por 2 esponjas",
    "Apta para base y corrector",
    "Uso con productos líquidos o en crema",
    "Acabado parejo y natural",
    "Textura suave",
    "Reutilizables y fáciles de limpiar"
  ],
  stock: "high"
},
  {
  id: 1150,
  name: "Contorno y Corrector",
  price: 1500,
  image: "/images/contorno-corrector.webp",
  category: "maquillaje",
  slug: "contorno-y-corrector",
  description:
    "Producto 2 en 1 ideal para contorno y corrección del rostro.\n\nPermite definir, iluminar y disimular imperfecciones de manera sencilla, logrando un acabado prolijo y natural.\n\nTextura cremosa de fácil aplicación y difuminado, apta para uso diario.",
  images: [
    "/images/contorno-corrector.webp"
  ],
  features: [
    "Contorno y corrector en un solo producto",
    "Textura cremosa",
    "Fácil de aplicar y difuminar",
    "Ideal para definir e iluminar el rostro",
    "Acabado natural",
    "Uso diario"
  ],
  stock: "high"
},
  {
  id: 1151,
  name: "Base 24Hs Alta Cobertura Karité",
  price: 4300,
  image: "/images/base-24hs-karite.webp",
  category: "maquillaje",
  slug: "base-24hs-alta-cobertura-karite",
  description:
    "Base líquida de alta cobertura con duración de hasta 24 horas.\n\nUnifica el tono de la piel, cubre imperfecciones y deja un acabado prolijo y uniforme durante todo el día.\n\nFórmula de excelente calidad, ideal para maquillaje diario o profesional, con textura cómoda y de fácil aplicación.",
  images: [
    "/images/base-24hs-karite.webp"
  ],
  features: [
    "Alta cobertura",
    "Duración 24 horas",
    "Acabado uniforme",
    "Textura cómoda y ligera",
    "Fácil aplicación",
    "Ideal para uso diario y profesional"
  ],
  stock: "high"
},
  {
  id: 1152,
  name: "BB Cream con Protector Solar 50 SPF y Vitamina E Kiss Beauty",
  price: 5400,
  image: "/images/bb-cream-spf50-kiss-beauty.webp",
  category: "maquillaje",
  slug: "bb-cream-spf50-vitamina-e-kiss-beauty",
  description:
    "BB Cream con protección solar 50 SPF y vitamina E, ideal para unificar el tono de la piel mientras protege del sol.\n\nAporta hidratación, ayuda a cubrir imperfecciones leves y deja un acabado natural y uniforme.\n\nFórmula ligera de fácil aplicación, perfecta para uso diario.",
  images: [
    "/images/bb-cream-spf50-kiss-beauty.webp"
  ],
  features: [
    "Protección solar 50 SPF",
    "Con vitamina E",
    "Unifica el tono de la piel",
    "Acabado natural",
    "Textura ligera",
    "Ideal para uso diario"
  ],
  stock: "high"
},
  {
  id: 1153,
  name: "Glasting Melting Balm Kiss Beauty",
  price: 1900,
  image: "/images/glasting-melting-balm-kiss-beauty.webp",
  category: "maquillaje",
  slug: "glasting-melting-balm-kiss-beauty",
  description:
    "Glasting Melting Balm Kiss Beauty.\n\nBálsamo labial con efecto glossy que se funde suavemente en los labios, aportando brillo y humectación.\n\nDisponible en 5 tonos.\n\nIdeal para uso diario, deja los labios suaves y con un acabado natural.",
  images: [
    "/images/glasting-melting-balm-kiss-beauty.webp"
  ],
  stock: "high"
},
  {
  id: 1154,
  name: "LIP GLOSS Velvet Kiss Beauty",
  price: 1600,
  image: "/images/lip-gloss-velvet-kiss-beauty.webp",
  category: "maquillaje",
  slug: "lip-gloss-velvet-kiss-beauty",
  description:
    "8 TONOS 💄💄💄\nEFECTO COREANO",
  images: [
    "/images/lip-gloss-velvet-kiss-beauty.webp"
  ],
  stock: "high"
},
  {
  id: 1155,
  name: "LIP BALM Glow Karité",
  price: 2200,
  image: "/images/lip-balm-glow-karite.webp",
  category: "maquillaje",
  slug: "lip-balm-glow-karite",
  description:
    "6 tonos 💄💄💄\nTono 1 sin color (manteca de cacao)",
  images: [
    "/images/lip-balm-glow-karite.webp"
  ],
  stock: "high"
},
  {
  id: 1156,
  name: "LIP GLOSS Glow Karité",
  price: 2200,
  image: "/images/lip-gloss-glow-karite.webp",
  category: "maquillaje",
  slug: "lip-gloss-glow-karite",
  description:
    "8 tonos 💄💄💄",
  images: [
    "/images/lip-gloss-glow-karite.webp"
  ],
  stock: "high"
},
  {
  id: 1157,
  name: "LIP GLOSS Kiss Beauty",
  price: 1900,
  image: "/images/lip-gloss-kiss-beauty.webp",
  category: "maquillaje",
  slug: "lip-gloss-kiss-beauty",
  description:
    "Lip Gloss Kiss Beauty disponible en 8 tonos, ideal para aportar brillo y un acabado fresco a los labios.\n\nSu fórmula ligera deja una sensación cómoda y no pegajosa, perfecta para uso diario o para complementar maquillajes más intensos.\n\nRealza el color natural de los labios con un efecto luminoso y atractivo.",
  images: [
    "/images/lip-gloss-kiss-beauty.webp"
  ],
  features: [
    "8 tonos disponibles",
    "Brillo intenso",
    "Textura ligera",
    "No pegajoso",
    "Acabado luminoso",
    "Ideal para uso diario"
  ],
  stock: "high"
},
  {
  id: 1158,
  name: "Lip Gloss Serum con Ácido Hialurónico",
  price: 2200,
  image: "/images/lip-gloss-serum-acido-hialuronico.webp",
  category: "maquillaje",
  slug: "lip-gloss-serum-acido-hialuronico",
  description:
    "Lip Gloss Serum con Ácido Hialurónico disponible en tres tonos, ideal para hidratar y realzar los labios.\n\nSu fórmula tipo serum ayuda a mantener los labios suaves, nutridos y con un brillo natural. Aporta un acabado luminoso sin sensación pegajosa.\n\nPerfecto para uso diario.",
  images: [
    "/images/lip-gloss-serum-acido-hialuronico.webp"
  ],
  features: [
    "Con ácido hialurónico",
    "Efecto hidratante",
    "Textura tipo serum",
    "Tres tonos disponibles",
    "Brillo natural",
    "Ideal para uso diario"
  ],
  stock: "high"
},
  {
  id: 1171,
  name: "Crema Premium para Skincare Ultra Colágeno",
  price: 4000,
  image: "/images/crema-premium-skincare-ultra-colageno.webp",
  category: "maquillaje",
  slug: "crema-premium-skincare-ultra-colageno",
  description:
    "Crema premium para skincare Natural 100% con Ultra Colágeno, ideal para el cuidado diario de la piel.\n\nFavorece la firmeza y elasticidad, ayudando a mantener niveles saludables de colágeno mientras hidrata profundamente la piel.\n\nOfrece una excelente solución para lograr una piel firme, tersa y con apariencia juvenil.",
  images: [
    "/images/crema-premium-skincare-ultra-colageno.webp"
  ],
  features: [
    "Fórmula natural 100%",
    "Con ultra colágeno",
    "Aporta firmeza y elasticidad",
    "Hidratación profunda",
    "Ayuda a una apariencia juvenil",
    "Ideal para skincare diario"
  ],
  stock: "high"
},
 {
  id: 1173,
  name: "Vinchas de Skincare",
  price: 2400,
  image: "/images/vinchas-de-skincare.webp",
  category: "maquillaje",
  slug: "vinchas-de-skincare",
  description:
    "Vinchas de skincare ideales para rutinas de cuidado facial, limpieza y maquillaje.\n\nDiseñadas para mantener el cabello apartado del rostro de forma cómoda y práctica durante el skincare diario.\n\nDisponibles en varias variantes de diseño, todas al mismo precio.",
  images: [
    "/images/vinchas-de-skincare.webp",
    "/images/vinchas-de-skincare-1.webp",
    "/images/vinchas-de-skincare-2.webp",
    "/images/vinchas-de-skincare-3.webp",
  ],
  features: [
    "Ideales para skincare y maquillaje",
    "Cómodas y prácticas",
    "Material suave y ajustable",
    "VARIANTES DISPONIBLES:",
    "Vincha Labubu",
    "Vincha Osito",
    "Vincha Orejas",
    "Vincha Moño"
  ],
  stock: "high"
}, 
  {
  id: 1174,
  name: "Piedra Gua Sha",
  price: 1900,
  image: "/images/piedra-gua-sha.webp",
  category: "maquillaje",
  slug: "piedra-gua-sha",
  description:
    "Piedra Gua Sha ideal para masajes faciales y corporales, utilizada en rutinas de skincare y bienestar.\n\nAyuda a mejorar la apariencia de ojeras, aliviar signos de envejecimiento y reducir arrugas. Su uso regular contribuye a relajar y calmar la tensión muscular, promoviendo el metabolismo del rostro.\n\nFavorece una mejor absorción de cremas y esencias, potenciando los beneficios de los productos de cuidado de la piel.",
  images: [
    "/images/piedra-gua-sha.webp"
  ],
  features: [
    "Masaje facial y ocular",
    "Ayuda a reducir ojeras y arrugas",
    "Relaja la tensión muscular",
    "Promueve el metabolismo del rostro",
    "Mejora la absorción de cremas y esencias",
    "Apta para masaje facial, ocular y de espalda",
    "Ideal para rutinas de skincare"
  ],
  stock: "high"
},
  {
  id: 1175,
  name: "Fijador de Maquillaje con CBD",
  price: 5200,
  image: "/images/fijador-maquillaje-cbd.webp",
  category: "maquillaje",
  slug: "fijador-de-maquillaje-con-cbd",
  description:
    "Fijador de maquillaje enriquecido con CBD, ideal para prolongar la duración del maquillaje mientras cuida la piel.\n\nEl CBD es un poderoso antioxidante, incluso más potente que la vitamina C y E, que ayuda a reducir la pérdida de colágeno y elastina al proteger la piel contra rayos UV, radicales libres y agresiones ambientales.\n\nPosee propiedades antiinflamatorias que contribuyen a mejorar afecciones como acné, eczema y psoriasis. Además, gracias a sus ácidos grasos insaturados e ingredientes naturales, hidrata, calma la piel, promueve la circulación sanguínea y brinda una sensación de confort y relajación.",
  images: [
    "/images/fijador-maquillaje-cbd.webp"
  ],
  features: [
    "Fijador de maquillaje",
    "Con CBD (cannabidiol)",
    "Potente antioxidante",
    "Ayuda a proteger colágeno y elastina",
    "Propiedades antiinflamatorias",
    "Hidrata y calma la piel",
    "Ideal para pieles con acné, eczema o psoriasis",
    "Protección frente a agresiones ambientales"
  ],
  stock: "high"
},
  {
  id: 1176,
  name: "LIP OIL FRUTAL",
  price: 2000,
  image: "/images/lip-oil-frutal.webp",
  category: "maquillaje",
  slug: "lip-oil-frutal",
  description:
    "rico en ingredientes hidratantes",
  images: [
    "/images/lip-oil-frutal.webp"
  ],
  features: [
    "Lip oil con aroma frutal",
    "Rico en ingredientes hidratantes",
    "Aporta brillo natural",
    "Mantiene los labios suaves y nutridos",
    "Ideal para uso diario"
  ],
  stock: "high"
},
  {
  id: 1177,
  name: "Lip Gloss Glitter Llavero",
  price: 4300,
  image: "/images/lip-gloss-glitter-llavero.webp",
  category: "maquillaje",
  slug: "lip-gloss-glitter-llavero",
  description:
    "Lip gloss glitter con llavero, ideal para llevar siempre con vos.\n\nOfrece hidratación y humectación duraderas gracias a su aceite labial ligero y de rápida absorción, cuidando los labios durante todo el día.\n\nSu acabado de alto brillo realza el contorno de los labios, aportando una apariencia más completa, voluminosa y luminosa.",
  images: [
    "/images/lip-gloss-glitter-llavero.webp"
  ],
  features: [
    "Lip gloss con glitter",
    "Formato llavero portátil",
    "Aceite labial ligero",
    "Hidratación y humectación duraderas",
    "Acabado de alto brillo",
    "Efecto visual de labios más voluminosos",
    "Ideal para uso diario"
  ],
  stock: "high"
},
  {
  id: 1178,
  name: "Máscara de Pestañas Alta Cobertura",
  price: 2900,
  image: "/images/mascara-de-pestanas-alta-cobertura.webp",
  category: "maquillaje",
  slug: "mascara-de-pestanas-alta-cobertura",
  description:
    "Máscara de pestañas de alta cobertura, ideal para lograr una mirada intensa y definida.\n\nSu fórmula permite cubrir y realzar las pestañas desde la raíz hasta las puntas, aportando volumen y definición con un acabado uniforme.\n\nPerfecta para uso diario o maquillajes más marcados.",
  images: [
    "/images/mascara-de-pestanas-alta-cobertura.webp"
  ],
  features: [
    "Alta cobertura",
    "Realza y define las pestañas",
    "Aporta volumen",
    "Aplicación uniforme",
    "Ideal para uso diario"
  ],
  stock: "high"
},
  {
  id: 1179,
  name: "Protector Solar SPF 90 Kiss Beauty",
  price: 3000,
  image: "/images/protector-solar-spf-90-kiss-beauty.webp",
  category: "maquillaje",
  slug: "protector-solar-spf-90-kiss-beauty",
  description:
    "Protector solar en barra Kiss Beauty con factor de protección SPF 90, ideal para el cuidado diario de la piel.\n\nOfrece alta cobertura y protección eficaz contra los rayos solares, ayudando a prevenir el daño causado por la exposición al sol.\n\nSu presentación en barra facilita una aplicación práctica, rápida y uniforme, perfecta para llevar y retocar en cualquier momento.",
    stock: "high",
  images: [
    "/images/protector-solar-spf-90-kiss-beauty.webp"
  ],
  features: [
    "Protector solar SPF 90",
    "Alta cobertura",
    "Formato en barra",
    "Fácil aplicación",
    "Ideal para uso diario",
    "Práctico para llevar"
  ],
  stock: "high"
},
  {
  id: 1180,
  name: "Labial Mágico Karité Lip Stick",
  price: 2300,
  image: "/images/labial-magico-karite-lip-stick.webp",
  category: "maquillaje",
  slug: "labial-magico-karite-lip-stick",
  description:
    "Labial mágico Karité Lip Stick, ideal para quienes buscan color y cuidado en un solo producto.\n\nSu fórmula súper hidratante ayuda a mantener los labios suaves, nutridos y cómodos durante todo el día, aportando un acabado natural y atractivo.\n\nPerfecto para uso diario, combinando belleza y tratamiento labial.",
  images: [
    "/images/labial-magico-karite-lip-stick.webp"
  ],
  features: [
    "Labial mágico",
    "Con karité",
    "Súper hidratante",
    "Cuida y suaviza los labios",
    "Ideal para uso diario"
  ],
  stock: "high"
},
  {
  id: 1181,
  name: "Crema Hidratante Yara Moi",
  price: 6800,
  image: "/images/crema-hidratante-yara-moi.webp",
  category: "maquillaje",
  slug: "crema-hidratante-yara-moi",
  description:
    "Crema hidratante Yara Moi ideal para el cuidado diario de la piel.\n\nFunciona como crema hidratante y loción corporal, ayudando a mantener la piel suave, nutrida e hidratada por más tiempo.\n\nApta para uso diario en todo el cuerpo.",
  images: [
    "/images/crema-hidratante-yara-moi.webp"
  ],
  features: [
    "Crema hidratante",
    "Loción corporal",
    "Hidratación profunda",
    "Textura suave",
    "Ideal para uso diario",
    "Apta para todo el cuerpo"
  ],
  stock: "high"
},
  {
  id: 1182,
  name: "Lápiz Delineador Tonos Chocolate",
  price: 1350,
  image: "/images/lapiz-delineador-tonos-chocolate.webp",
  category: "maquillaje",
  slug: "lapiz-delineador-tonos-chocolate",
  description:
    "Lápiz delineador con tonos chocolate ideal para lograr un maquillaje elegante y natural.\n\nSu textura suave con efecto terciopelo permite una aplicación fácil y precisa, brindando un acabado uniforme y confortable.\n\nDisponible en 6 tonos chocolate con colores intensos y hermosos, perfectos para realzar la mirada en el uso diario o en maquillajes más elaborados.",
  images: [
    "/images/lapiz-delineador-tonos-chocolate.webp"
  ],
  features: [
    "Lápiz delineador",
    "Tonos chocolate",
    "Textura efecto terciopelo",
    "Aplicación suave y precisa",
    "Colores intensos",
    "6 tonos disponibles",
    "Ideal para uso diario o profesional"
  ],
  stock: "high"
},
  {
  id: 1183,
  name: "Jabón Facial Yara Pink",
  price: 2000,
  image: "/images/jabon-facial-yara-pink.webp",
  category: "maquillaje",
  slug: "jabon-facial-yara-pink",
  description:
    "Jabón facial Yara Pink ideal para la limpieza diaria del rostro.\n\nAyuda a eliminar impurezas, exceso de grasa y residuos de maquillaje, dejando la piel limpia, fresca y suave.\n\nApto para incorporar en rutinas de skincare diarias.",
  images: [
    "/images/jabon-facial-yara-pink.webp"
  ],
  features: [
    "Jabón facial",
    "Limpieza diaria del rostro",
    "Ayuda a eliminar impurezas",
    "Deja la piel limpia y fresca",
    "Ideal para rutinas de skincare"
  ],
  stock: "high"
},
  {
  id: 1184,
  name: "CREMA CON ACIDO HYALURONICO IDEAL PARA SKINCARE",
  price: 4000,
  image: "/images/crema-acido-hialuronico-kiss-beauty-skin-clinic.webp",
  category: "maquillaje",
  slug: "crema-acido-hialuronico-kiss-beauty-skin-clinic",
  description:
    "Crema facial premium con ácido hialurónico de Kiss Beauty Skin Clinic, ideal para rutinas de skincare.\n\nSu ingrediente principal es el ácido hialurónico natural, que proporciona hidratación profunda, ayuda a reparar la piel y contribuye a disminuir la apariencia de líneas finas y arrugas.\n\nPresentada en un envase de 75 ml, es perfecta para el cuidado diario de la piel, dejándola suave, nutrida y con aspecto saludable.\n\nDescargo de responsabilidad: La información proporcionada tiene fines educativos y no sustituye el consejo médico profesional. Se recomienda consultar a un dermatólogo antes de incorporar nuevos productos al cuidado de la piel.",
  images: [
    "/images/crema-acido-hialuronico-kiss-beauty-skin-clinic.webp"
  ],
  features: [
    "Crema facial premium",
    "Con ácido hialurónico natural",
    "Hidratación profunda",
    "Ayuda a reparar la piel",
    "Reduce la apariencia de líneas finas y arrugas",
    "Ideal para skincare diario",
    "Presentación de 75 ml"
  ],
  stock: "high"
},
  {
  id: 1185,
  name: "Delineador Ultra Fino Kiss Beauty",
  price: 2700,
  image: "/images/delineador-ultra-fino-kiss-beauty.webp",
  category: "maquillaje",
  slug: "delineador-ultra-fino-kiss-beauty",
  description:
    "Delineador ultra fino Kiss Beauty ideal para lograr trazos precisos y definidos.\n\nSu punta fina permite una aplicación controlada, perfecta para delineados sutiles o looks más marcados, adaptándose tanto al uso diario como profesional.\n\nAporta un acabado prolijo y elegante, realzando la mirada con facilidad.",
  images: [
    "/images/delineador-ultra-fino-kiss-beauty.webp"
  ],
  features: [
    "Punta ultra fina",
    "Alta precisión en el trazo",
    "Fácil aplicación",
    "Ideal para delineados sutiles o intensos",
    "Apto para uso diario o profesional"
  ],
  stock: "high"
},
  {
  id: 1186,
  name: "Labial Cremoso Velvet Matte",
  price: 2300,
  image: "/images/labial-cremoso-velvet-matte.webp",
  category: "maquillaje",
  slug: "labial-cremoso-velvet-matte",
  description:
    "Labial cremoso con acabado velvet matte, ideal para lograr un look elegante y duradero.\n\nSu textura cremosa permite una aplicación suave y uniforme, mientras que su acabado matte aporta un efecto aterciopelado sin resecar los labios.\n\nPerfecto para uso diario o maquillajes más sofisticados.",
  images: [
    "/images/labial-cremoso-velvet-matte.webp"
  ],
  features: [
    "Labial cremoso",
    "Acabado velvet matte",
    "Textura suave y confortable",
    "Aplicación uniforme",
    "Efecto aterciopelado",
    "Ideal para uso diario"
  ],
  stock: "high"
},
  {
  id: 1187,
  name: "Delineador Ultra Fino Ultra Matte",
  price: 2700,
  image: "/images/delineador-ultra-fino-ultra-matte.webp",
  category: "maquillaje",
  slug: "delineador-ultra-fino-ultra-matte",
  description:
    "Delineador ultra fino con acabado ultra matte, ideal para lograr delineados precisos y de larga duración.\n\nSu punta fina permite un trazo controlado y prolijo, perfecto tanto para delineados delicados como para looks más intensos.\n\nAporta un acabado mate uniforme que realza la mirada, ideal para uso diario o profesional.",
  images: [
    "/images/delineador-ultra-fino-ultra-matte.webp"
  ],
  features: [
    "Punta ultra fina",
    "Acabado ultra matte",
    "Alta precisión en el trazo",
    "Aplicación fácil y uniforme",
    "Ideal para delineados sutiles o intensos",
    "Apto para uso diario o profesional"
  ],
  stock: "high"
},
  {
  id: 1189,
  name: "Crema Corporal de Zanahoria con Protector Solar",
  price: 8000,
  image: "/images/crema-corporal-zanahoria-protector-solar.webp",
  category: "maquillaje",
  slug: "crema-corporal-zanahoria-protector-solar",
  description:
    "Loción corporal blanqueadora de zanahoria con protector solar SPF 25+, ideal para el cuidado diario de la piel.\n\nSu fórmula ayuda a hidratar, nutrir y unificar el tono de la piel, mientras brinda protección contra los rayos solares.\n\nPerfecta para uso diario, dejando la piel suave, luminosa y protegida.",
  images: [
    "/images/crema-corporal-zanahoria-protector-solar.webp"
  ],
  features: [
    "Loción corporal de zanahoria",
    "Efecto blanqueador",
    "Con protector solar SPF 25+",
    "Hidrata y nutre la piel",
    "Ayuda a unificar el tono",
    "Ideal para uso diario"
  ],
  stock: "high"
},
  {
  id: 1190,
  name: "Paleta de Sombras x21 Tonos Nude",
  price: 7000,
  image: "/images/paleta-sombras-21-tonos-nude.webp",
  category: "maquillaje",
  slug: "paleta-sombras-21-tonos-nude",
  description:
    "Paleta de sombras con 21 tonos nude, ideal para crear looks versátiles y sofisticados.\n\nIncluye una combinación equilibrada de tonos nude y tonos con brillo, perfectos tanto para maquillajes naturales de día como para looks más intensos y elegantes de noche.\n\nSu variedad de colores permite difuminar, iluminar y dar profundidad a la mirada con facilidad.",
  images: [
    "/images/paleta-sombras-21-tonos-nude.webp"
  ],
  features: [
    "Paleta de sombras x21 tonos",
    "Tonos nude y con brillo",
    "Ideal para looks diarios y de noche",
    "Colores versátiles y combinables",
    "Fácil de difuminar",
    "Apta para uso personal o profesional"
  ],
  stock: "high"
},
  {
  id: 1223,
  name: "Loción Corporal con Vitamina C Bloqueadora",
  price: 5500,
  image: "/images/locion-corporal-vitamina-c-bloqueadora.webp",
  category: "maquillaje",
  slug: "locion-corporal-vitamina-c-bloqueadora",
  description: "",
  images: [
    "/images/locion-corporal-vitamina-c-bloqueadora.webp"
  ],
  stock: "high"
},
  {
  id: 1224,
  name: "Labial Matte en 6 tonos de Karité",
  price: 1900,
  image: "/images/labial-matte-karite-6-tonos.webp",
  category: "maquillaje",
  slug: "labial-matte-karite-6-tonos",
  description: "",
  images: [
    "/images/labial-matte-karite-6-tonos.webp"
  ],
  stock: "high"
},
  {
  id: 1225,
  name: "Lip Serum Labial Kiss Beauty",
  price: 1900,
  image: "/images/lip-serum-labial-kiss-beauty.webp",
  category: "maquillaje",
  slug: "lip-serum-labial-kiss-beauty",
  description: "",
  images: [
    "/images/lip-serum-labial-kiss-beauty.webp"
  ],
  stock: "high"
},
  {
  id: 1232,
  name: "Bálsamo Hidratante de Frutas",
  price: 1200,
  image: "/images/balsamo-hidratante-de-frutas.webp",
  category: "maquillaje",
  slug: "balsamo-hidratante-de-frutas",
  description: "",
  images: [
    "/images/balsamo-hidratante-de-frutas.webp"
  ],
  stock: "high"
},
 {
  id: 1233,
  name: "Polvo Traslúcido",
  price: 3600,
  image: "/images/polvo-traslucido.webp",
  category: "maquillaje",
  slug: "polvo-traslucido",
  description: "",
  images: [
    "/images/polvo-traslucido.webp"
  ],
  stock: "high"
},
  {
  id: 1234,
  name: "Paleta de Sombras 12 tonos",
  price: 3600,
  image: "/images/paleta-de-sombras-12-tonos.webp",
  category: "maquillaje",
  slug: "paleta-de-sombras-12-tonos",
  description: "",
  images: [
    "/images/paleta-de-sombras-12-tonos.webp"
  ],
  stock: "high"
},
  {
  id: 1235,
  name: "Paleta de Iluminadores",
  price: 2400,
  image: "/images/paleta-de-iluminadores.webp",
  category: "maquillaje",
  slug: "paleta-de-iluminadores",
  description: "",
  images: [
    "/images/paleta-de-iluminadores.webp"
  ],
  stock: "high"
},
  {
  id: 1236,
  name: "Palette de 8 tonos",
  price: 2600,
  image: "/images/palette-de-8-tonos.webp",
  category: "maquillaje",
  slug: "palette-de-8-tonos",
  description: "",
  images: [
    "/images/palette-de-8-tonos.webp"
  ],
  stock: "high"
}, 
  {
  id: 1237,
  name: "Lip Balm Animados",
  price: 1550,
  image: "/images/lip-balm-animados.webp",
  category: "maquillaje",
  slug: "lip-balm-animados",
  description: "",
  images: [
    "/images/lip-balm-animados.webp"
  ],
  stock: "high"
},
  {
  id: 1238,
  name: "Paleta de Sombras 16 Tonos",
  price: 5700,
  image: "/images/paleta-de-sombras-16-tonos.webp",
  category: "maquillaje",
  slug: "paleta-de-sombras-16-tonos",
  description: "",
  images: [
    "/images/paleta-de-sombras-16-tonos.webp"
  ],
  stock: "high"
},
  {
  id: 1239,
  name: "SFR Corrector de Acabado Matte",
  price: 1600,
  image: "/images/sfr-corrector-acabado-matte.webp",
  category: "maquillaje",
  slug: "sfr-corrector-acabado-matte",
  description: "",
  images: [
    "/images/sfr-corrector-acabado-matte.webp"
  ],
  stock: "high"
},
  {
  id: 1240,
  name: "Labial Matte",
  price: 2300,
  image: "/images/labial-matte.webp",
  category: "maquillaje",
  slug: "labial-matte",
  description: "",
  images: [
    "/images/labial-matte.webp"
  ],
  stock: "high"
},
  {
  id: 1241,
  name: "Labial más Gloss 2 en 1",
  price: 2200,
  image: "/images/labial-mas-gloss-2-en-1.webp",
  category: "maquillaje",
  slug: "labial-mas-gloss-2-en-1",
  description: "",
  images: [
    "/images/labial-mas-gloss-2-en-1.webp"
  ],
  stock: "high"
},
  {
  id: 1242,
  name: "Lápiz para labios de Karité",
  price: 1350,
  image: "/images/lapiz-para-labios-karite.webp",
  category: "maquillaje",
  slug: "lapiz-para-labios-karite",
  description: "",
  images: [
    "/images/lapiz-para-labios-karite.webp"
  ],
  stock: "high"
},
  {
  id: 1243,
  name: "Labial Matte 24hs",
  price: 2300,
  image: "/images/labial-matte-24hs.webp",
  category: "maquillaje",
  slug: "labial-matte-24hs",
  description: "",
  images: [
    "/images/labial-matte-24hs.webp"
  ],
  stock: "high"
},
 {
  id: 1244,
  name: "Delineador en Fibra de Ojos",
  price: 2700,
  image: "/images/delineador-en-fibra-de-ojos.webp",
  category: "maquillaje",
  slug: "delineador-en-fibra-de-ojos",
  description: "",
  images: [
    "/images/delineador-en-fibra-de-ojos.webp"
  ],
  stock: "high"
}, 
  {
  "id": 1246,
  "name": "Máscara de Pestañas Yara Kiss Beauty",
  "price": 2900,
  "image": "/images/mascara-de-pestanas-yara-kiss-beauty.webp",
  "category": "maquillaje",
  "slug": "mascara-de-pestanas-yara-kiss-beauty",
  "description": "",
  "images": [
    "/images/mascara-de-pestanas-yara-kiss-beauty.webp"
  ],
  "stock": "high"
},
  {
  "id": 1247,
  "name": "Lip Balm Hidratante de Coco con Vitamina E",
  "price": 1900,
  "image": "/images/lip-balm-hidratante-coco-vitamina-e.webp",
  "category": "maquillaje",
  "slug": "lip-balm-hidratante-coco-vitamina-e",
  "description": "Lip balm hidratante con coco y vitamina E. Ayuda a nutrir, suavizar y proteger los labios, ideal para uso diario.",
  "images": [
    "/images/lip-balm-hidratante-coco-vitamina-e.webp"
  ],
  "stock": "high"
},
  {
  "id": 1248,
  "name": "Labial Líquido Matte",
  "price": 1800,
  "image": "/images/labial-liquido-matte.webp",
  "category": "maquillaje",
  "slug": "labial-liquido-matte",
  "description": "Labial líquido de acabado matte, alta pigmentación y larga duración. Ideal para un look definido y profesional.",
  "images": [
    "/images/labial-liquido-matte.webp"
  ],
  "stock": "high"
},
 {
  "id": 1249,
  "name": "Magic Lip Oil con Llavero",
  "price": 2450,
  "image": "/images/magic-lip-oil-con-llavero.webp",
  "category": "maquillaje",
  "slug": "magic-lip-oil-con-llavero",
  "description": "Lip oil mágico con acabado brillante y efecto hidratante. Incluye llavero, ideal para llevar a todos lados y mantener los labios nutridos.",
  "images": [
    "/images/magic-lip-oil-con-llavero.webp"
  ],
  "stock": "high"
}, 
]
