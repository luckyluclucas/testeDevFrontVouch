"use client";
import { motion } from "framer-motion";

export default function MainSection() {
  return (
    <>
      <motion.main
        initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1 px-2 flex max-h-[620px] flex-col bg-gradient-to-b from-background to-secondary items-center justify-center bg-center bg-contain"
      >
        <motion.section
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.8 }}
          className="bg-secondary dark:bg-secondary/10 p-1 border-border border-1 rounded-lg pl-4 max-w-5xl grid md:grid-cols-2 gap-8 items-center text-center md:text-left"
        >
          <div>
            <h2 className="text-3xl py-8 font-bold mb-4 tracking-tight">
              Descubra o futuro com a gente
            </h2>
            <p className="text-gray-600 dark:text-white text-base">
              Nossa plataforma ajuda você a transformar ideias em realidade com
              agilidade e inovação.
            </p>
          </div>
          <img
            src="sum.jpg"
            alt="Futuro tecnológico"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </motion.section>
      </motion.main>
    </>
  );
}
