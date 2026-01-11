export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    tags: string[];
    github?: string;
    demo?: string;
    featured: boolean;
    metrics?: {
        label: string;
        value: string;
    }[];
}

export const projects: Project[] = [
    {
        id: "taskflow",
        title: "TaskFlow",
        description: "Landing page moderna para SaaS de gestión de tareas con animaciones avanzadas",
        longDescription:
            "Landing page profesional desarrollada con Next.js 14, TypeScript y Tailwind CSS. Incluye animaciones fluidas con Framer Motion, diseño responsive, modo oscuro/claro, y secciones optimizadas para conversión. Totalmente localizada en español para el mercado latinoamericano.",
        image: "/projects/taskflow.jpg",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        github: "https://github.com/fabiansoraluzz/taskflow",
        demo: "https://taskflow-demo.vercel.app",
        featured: true,
        metrics: [
            { label: "Performance", value: "98/100" },
            { label: "Accessibility", value: "100/100" },
            { label: "SEO", value: "100/100" },
        ],
    },
    {
        id: "portfolio",
        title: "Portfolio Interactivo",
        description: "Portfolio profesional con animaciones y modo oscuro",
        longDescription:
            "Portfolio personal desarrollado con las últimas tecnologías web. Incluye animaciones sutiles pero impactantes, sistema de temas claro/oscuro, diseño responsive, y optimización SEO. Construido como demostración de habilidades frontend y diseño UI/UX moderno.",
        image: "/projects/portfolio.jpg",
        tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
        github: "https://github.com/fabiansoraluzz/portfolio",
        demo: "https://fabiansoraluz.vercel.app",
        featured: true,
        metrics: [
            { label: "Performance", value: "95/100" },
            { label: "Accessibility", value: "100/100" },
            { label: "Best Practices", value: "100/100" },
        ],
    },
];