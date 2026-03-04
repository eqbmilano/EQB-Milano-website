"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./SectionEcosistema.css";

// Helper function to generate a random hex color
const randomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

export const SectionEcosistema: React.FC = () => {
    const [background, setBackground] = useState("#FFFFFF");

    const titleText = "Non è uno studio. È un ecosistema.";
    const subText = "Pensato per professionisti che cercano qualità, continuità e visione, all'interno di uno spazio che supporta lavoro, crescita e relazioni.";

    return (
        <motion.section
            id="ecosistema"
            className="section-ecosistema"
            animate={{ background }}
            transition={{ duration: 0.5 }}
            onClick={() => setBackground(randomColor())}
            style={{ cursor: "pointer" }}
        >
            <motion.div 
                className="section-ecosistema__content"
            >
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
                                delay: (titleText.split(" ").length * 0.15) + (i * 0.1), // Start after title
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
                    onClick={(e) => e.stopPropagation()}
                >
                    Scopri di più &rarr;
                </motion.a>
            </motion.div>
        </motion.section>
    );
};
