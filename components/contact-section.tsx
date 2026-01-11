"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Send, CheckCircle, AlertCircle, Loader2, Github, Linkedin } from "lucide-react";

export function ContactSection() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        await new Promise(resolve => setTimeout(resolve, 2000));
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <section id="contact" ref={ref} className="py-32 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-7xl">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
                    <div className="flex items-center gap-4 mb-6">
                        <span className="font-mono text-sm text-muted-foreground">003</span>
                        <div className="h-px bg-border flex-1" />
                    </div>
                    <h2 className="text-6xl md:text-8xl font-bold mb-16">Contacto</h2>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-16">
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-2 space-y-12">
                        <div className="space-y-6">
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                ¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte a hacerlo realidad.
                            </p>
                            <div className="space-y-4">
                                <a href="mailto:fabiansoraluz@gmail.com" className="group flex items-center gap-3 text-lg font-medium hover:text-muted-foreground transition-colors">
                                    <Mail className="h-5 w-5" />
                                    <span>fabiansoraluz@gmail.com</span>
                                </a>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Sígueme</p>
                            <div className="flex gap-4">
                                <a href="https://github.com/fabiansoraluzz" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border hover:border-foreground hover:bg-secondary transition-all">
                                    <Github className="h-5 w-5" />
                                </a>
                                <a href="https://www.linkedin.com/in/fabiansoraluz/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border hover:border-foreground hover:bg-secondary transition-all">
                                    <Linkedin className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="lg:col-span-3">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Nombre</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-foreground focus:outline-none transition-colors" placeholder="Tu nombre" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-foreground focus:outline-none transition-colors" placeholder="tu@email.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Mensaje</label>
                                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-foreground focus:outline-none transition-colors resize-none" placeholder="Cuéntame sobre tu proyecto..." />
                            </div>

                            {status === "success" && (
                                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 p-4 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                                    <CheckCircle className="h-5 w-5" />
                                    <span className="text-sm font-medium">Mensaje enviado correctamente</span>
                                </motion.div>
                            )}

                            {status === "error" && (
                                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 p-4 rounded-lg bg-red-500/10 text-red-600 dark:text-red-400">
                                    <AlertCircle className="h-5 w-5" />
                                    <span className="text-sm font-medium">Error al enviar. Intenta de nuevo</span>
                                </motion.div>
                            )}

                            <button type="submit" disabled={status === "loading"} className="w-full px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2">
                                {status === "loading" ? (<><Loader2 className="h-5 w-5 animate-spin" />Enviando...</>) : (<><Send className="h-5 w-5" />Enviar mensaje</>)}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}