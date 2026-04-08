"use client";
import React from "react";
import { motion } from "framer-motion";
import "./SectionEcosistema.css";

export const SectionEcosistema: React.FC = () => {
    const titleText = "Non è uno studio. È un ecosistema.";
    const subText = "Pensato per professionisti che cercano qualità, continuità e visione, all'interno di uno spazio che supporta lavoro, crescita e relazioni.";

    return (
        <section id="ecosistema" className="section-ecosistema">
            <div className="section-ecosistema__content">
                <h2 className="section-ecosistema__claim">
                    {titleText.split(" ").map((word, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, filter: "blur(4px)" }}
                            whileInView={{ opacity: 1, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: i * 0.15,
                                ease: "easeOut"
                            }}
                            style={{ display: "inline-block", marginRight: "0.25em" }}
                        >
                            {word}
                        </motion.span>
                    ))}
                </h2>
                <p className="section-ecosistema__subtext">
                    {subText.split(" ").map((word, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, filter: "blur(4px)" }}
                            whileInView={{ opacity: 1, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: (titleText.split(" ").length * 0.15) + (i * 0.1),
                                ease: "easeOut"
                            }}
                            style={{ display: "inline-block", marginRight: "0.25em" }}
                        >
                            {word}
                        </motion.span>
                    ))}
                </p>
                <motion.a
                    href="#spazio"
                    className="section-ecosistema__cta"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Scopri di più &rarr;
                </motion.a>
            </div>
        </section>
    );
};
