import type { CaseStudyType, FAQType, MemberType, ServiceType } from "@/types";

export const services: ServiceType[] = [
  {
    id: 1,
    aos: 'flip-left',
    duration: 800,
    image: 'assets/img/all-images/cf1.png',
    icon: 'assets/img/icons/service-icons1.svg',
    title: 'Evaluamos el sitio sin necesidad de andamios',
    description: 'Usamos imágenes o visitas rápidas para entender tu necesidad y superficie a cubrir, incluso en zonas elevadas o de difícil acceso.'
  },
  {
    id: 2,
    aos: 'flip-up',
    duration: 1000,
    image: 'assets/img/all-images/cf2.png',
    icon: 'assets/img/icons/service-icons2.svg',
    title: 'Volamos y pintamos con precisión',
    description: 'Configuramos los drones para aplicar la pintura de forma pareja, rápida y sin desperdicio. Todo desde el aire, sin interrupciones.'
  },
  {
    id: 3,
    aos: 'flip-right',
    duration: 1200,
    image: 'assets/img/all-images/cf3.png',
    icon: 'assets/img/icons/service-icons3.svg',
    title: 'Verificamos el trabajo terminado',
    description: 'Revisamos que todo esté pintado correctamente y te entregamos resultados listos para usar, sin demoras ni riesgos.'
  }
];


export const caseStudyData: CaseStudyType[] = [
    { image: 'assets/img/all-images/case-img1.png', subtitle: 'Electicity Solutions', title: 'Power Navigating', },
    { image: 'assets/img/all-images/case-img2.png', subtitle: 'Voltage Vision', title: 'Power Navigating', },
    { image: 'assets/img/all-images/case-img3.png', subtitle: 'Wizard Unveiling', title: 'Power Navigating', },
    { image: 'assets/img/all-images/case-img1.png', subtitle: 'Electicity Solutions', title: 'Power Navigating', },
    { image: 'assets/img/all-images/case-img2.png', subtitle: 'Voltage Vision', title: 'Power Navigating', },
    { image: 'assets/img/all-images/case-img3.png', subtitle: 'Wizard Unveiling', title: 'Power Navigating', },
    { image: 'assets/img/all-images/case-img1.png', subtitle: 'Electicity Solutions', title: 'Power Navigating', },
    { image: 'assets/img/all-images/case-img2.png', subtitle: 'Voltage Vision', title: 'Power Navigating', },
    { image: 'assets/img/all-images/case-img3.png', subtitle: 'Wizard Unveiling', title: 'Power Navigating', }
];

export const teamMembers: MemberType[] = [
    {
        image: 'assets/img/all-images/team-img5.png',
        name: 'Kore Anderson',
        role: 'Sales Manager',
        aosDuration: 800,
    },
    {
        image: 'assets/img/all-images/team-img6.png',
        name: 'Zara Matheson',
        role: 'Team Leader',
        aosDuration: 1200,
    },
    {
        image: 'assets/img/all-images/team-img7.png',
        name: 'Kore Anderson',
        role: 'Sales Manager',
        aosDuration: 1400,
    }
];

export const faqs: FAQType[] = [
  {
    question: "¿Es seguro pintar con drones?",
    answer: "Sí. Nuestros equipos están certificados y operados por pilotos profesionales. Además, eliminamos el riesgo de caídas humanas."
  },
  {
    question: "¿Qué tipo de superficies pueden pintar?",
    answer: "Trabajamos sobre muros, techos, depósitos, estructuras metálicas y más. Ideal para exteriores de difícil acceso."
  },
  {
    question: "¿Se puede usar cualquier tipo de pintura?",
    answer: "Trabajamos con pinturas industriales específicas para aplicación con dron. Si tienes un requerimiento especial, lo evaluamos."
  },
  {
    question: "¿Qué tan rápido pueden pintar?",
    answer: "Dependiendo del tamaño y condiciones, podemos cubrir hasta 400 m² por hora."
  },
  {
    question: "¿Cuál es el costo comparado con métodos tradicionales?",
    answer: "Generalmente es más económico, ya que reduces costos en andamios, seguridad y tiempo de obra."
  },
  {
    question: "¿Qué pasa si hay viento o lluvia?",
    answer: "Reprogramamos la operación sin costo adicional si las condiciones climáticas no permiten un trabajo seguro."
  }
];

