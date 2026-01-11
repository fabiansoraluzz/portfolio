"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
    {
        category: "Frontend",
        items: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
        category: "Backend",
        items: [".NET", "C#", "Node.js", "Express", "API REST"],
    },
    {
        category: "Database",
        items: ["SQL Server", "PostgreSQL", "MongoDB"],
    },
    {
        category: "Tools",
        items: ["Git", "GitHub", "VS Code", "Postman", "Azure"],
    },
];

export function AboutSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="about" ref={ref} className="py-32 px-4 sm:px-6 lg:px-8 border-t border-border">
            <div className="container mx-auto max-w-6xl">
                <div className="grid lg:grid-cols-12 gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7 space-y-8"
                    >
                        <div>
                            <p className="text-sm font-mono text-muted-foreground tracking-wide mb-4">
                                SOBRE MÍ
                            </p>
                            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8">
                                Construyendo soluciones desde Lima, Perú
                            </h2>
                        </div>

                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                Soy desarrollador Full Stack freelance con experiencia en la creación de aplicaciones
                                web empresariales. Mi trabajo se centra en escribir código limpio, mantenible y escalable.
                            </p>
                            <p>
                                Recientemente trabajé en Luz del Sur liderando la refactorización del sistema MisConexiones,
                                donde migré una arquitectura stateful a stateless, eliminando dependencias de sesión del
                                servidor e implementando integración con pasarelas de pago.
                            </p>
                            <p>
                                Me especializo en modernizar sistemas legacy y construir aplicaciones nuevas con
                                tecnologías modernas. Siempre buscando el balance entre funcionalidad, performance
                                y experiencia de usuario.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-5 space-y-12"
                    >
                        {skills.map((skillGroup, index) => (
                            <div key={skillGroup.category} className="space-y-4">
                                <p className="text-sm font-mono text-muted-foreground tracking-wide">
                                    {skillGroup.category.toUpperCase()}
                                </p>
                                <ul className="space-y-2">
                                    {skillGroup.items.map((skill) => (
                                        <li key={skill} className="text-foreground">
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}