"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink, X } from "lucide-react";
import { projects, type Project } from "@/lib/projects-data";

export function ProjectsSection() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [selected, setSelected] = useState<Project | null>(null);

    return (
        <section id="projects" ref={ref} className="py-32 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-7xl">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-24">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="font-mono text-sm text-muted-foreground">001 — 002</span>
                        <div className="h-px bg-border flex-1" />
                    </div>
                    <h2 className="text-6xl md:text-8xl font-bold">Proyectos</h2>
                </motion.div>

                <div className="space-y-32">
                    {projects.map((project, i) => (
                        <motion.article key={project.id} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.2 }}>
                            <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                                    <button onClick={() => setSelected(project)} className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-secondary">
                                        <div className="absolute inset-0 flex items-center justify-center text-8xl font-bold text-foreground/10">
                                            {String(i + 1).padStart(2, "0")}
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <p className="text-sm font-medium">Ver detalles →</p>
                                        </div>
                                    </button>
                                </div>

                                <div className="space-y-6">
                                    <div className="space-y-3">
                                        <span className="font-mono text-sm text-muted-foreground">/{String(i + 1).padStart(2, "0")}</span>
                                        <h3 className="text-4xl md:text-5xl font-bold">{project.title}</h3>
                                    </div>

                                    <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (<span key={tag} className="px-3 py-1 text-sm border border-border rounded-full">{tag}</span>))}
                                    </div>

                                    <div className="flex gap-4 pt-4">
                                        {project.github && (<a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors"><Github className="h-4 w-4" />Código</a>)}
                                        {project.demo && (<a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors"><ExternalLink className="h-4 w-4" />Demo</a>)}
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>

            <AnimatePresence>{selected && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)} className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4"><motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={e => e.stopPropagation()} className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background border border-border rounded-2xl p-8 md:p-12"><button onClick={() => setSelected(null)} className="absolute right-4 top-4 p-2 rounded-full hover:bg-secondary transition-colors"><X className="h-5 w-5" /></button><div className="space-y-8"><div className="space-y-4"><span className="text-sm font-mono text-muted-foreground">PROYECTO</span><h3 className="text-5xl font-bold">{selected.title}</h3><p className="text-lg text-muted-foreground">{selected.longDescription}</p></div>{selected.metrics && (<div className="grid grid-cols-3 gap-8 py-8 border-y border-border">{selected.metrics.map(m => (<div key={m.label}><p className="text-4xl font-bold mb-2">{m.value}</p><p className="text-sm text-muted-foreground">{m.label}</p></div>))}</div>)}<div className="space-y-3"><span className="text-sm font-mono text-muted-foreground">TECNOLOGÍAS</span><div className="flex flex-wrap gap-2">{selected.tags.map(tag => (<span key={tag} className="px-4 py-2 border border-border rounded-full">{tag}</span>))}</div></div><div className="flex gap-4">{selected.github && (<a href={selected.github} target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-border rounded-full font-medium hover:bg-secondary transition-colors inline-flex items-center gap-2"><Github className="h-4 w-4" />Ver código</a>)}{selected.demo && (<a href={selected.demo} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors inline-flex items-center gap-2"><ExternalLink className="h-4 w-4" />Ver demo</a>)}</div></div></motion.div></motion.div>)}</AnimatePresence>
        </section>
    );
}