"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import Link from "next/link";

const socialLinks = [
    { name: "GitHub", href: "https://github.com/fabiansoraluzz", icon: Github },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/fabiansoraluz/", icon: Linkedin },
    { name: "Email", href: "mailto:fabiansoraluz@gmail.com", icon: Mail },
];

export function Footer() {
    return (
        <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <div className="text-center md:text-left">
                        <p className="text-sm text-muted-foreground">
                            Hecho con <Heart className="inline h-4 w-4 text-red-500" /> usando{" "}
                            <span className="font-semibold text-foreground">Next.js 14</span>
                        </p>
                        <p className="text-xs text-muted-foreground">
                            © {new Date().getFullYear()} Luis Fabian Soraluz Torres. Todos los derechos reservados
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        {socialLinks.map((link, index) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group rounded-lg p-2 transition-colors hover:bg-secondary"
                                    aria-label={link.name}
                                >
                                    <link.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}