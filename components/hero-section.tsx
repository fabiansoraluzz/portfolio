"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function HeroSection() {
    const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
            </div>

            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-7xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-12">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 backdrop-blur-sm">
                                <div className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                                </div>
                                <span className="text-sm font-medium">Disponible</span>
                            </div>

                            <h1 className="text-display font-bold">
                                Luis Fabian
                                <br />
                                <span className="text-muted-foreground">Soraluz Torres</span>
                            </h1>

                            <div className="flex items-center gap-4">
                                <div className="h-px bg-border flex-1 max-w-24" />
                                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                                    Desarrollador Full Stack creando experiencias web modernas y funcionales
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-4xl">
                            <div className="space-y-2">
                                <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Especialización</p>
                                <p className="text-lg font-medium">.NET • React • Next.js</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Experiencia</p>
                                <p className="text-lg font-medium">3+ años • Enterprise</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Ubicación</p>
                                <p className="text-lg font-medium">Lima, Perú • UTC-5</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <button onClick={() => scrollTo("#projects")} className="group px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-all inline-flex items-center gap-2">
                                Ver proyectos
                                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
                            </button>
                            <button onClick={() => scrollTo("#contact")} className="px-8 py-4 border border-border rounded-full font-medium hover:bg-secondary transition-colors">
                                Contactar
                            </button>
                        </div>

                        <div className="flex items-center gap-6 pt-8">
                            <a href="https://github.com/fabiansoraluzz" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border hover:border-foreground hover:bg-secondary transition-all">
                                <Github className="h-5 w-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/fabiansoraluz/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border hover:border-foreground hover:bg-secondary transition-all">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="mailto:fabiansoraluz@gmail.com" className="p-3 rounded-full border border-border hover:border-foreground hover:bg-secondary transition-all">
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}