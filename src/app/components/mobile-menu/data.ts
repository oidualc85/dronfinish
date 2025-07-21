
interface MenuItem {
    title: string;
    link?: string;
    subMenu?: MenuItem[];
    isOpen?: boolean
}
export const menuItems: MenuItem[] = [
    { title: "Inicio", link: "#inicio" },
    { title: "Problema", link: "#problemas-solucion" },
    { title: "¿Cómo funciona?", link: "#como-funciona" },
    { title: "Beneficios", link: "#beneficios" },
    { title: "Faq", link: "#preguntas-frecuentes" },
    { title: "Galería", link: "#galeria" }

]