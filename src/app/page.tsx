"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import MainSection from "@/components/mainSection";
import Counter from "@/components/counter";
import { Title } from "@/components/title";
import ToDoList from "@/components/toDoList";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main layout className="flex flex-col flex-grow min-h-screen">
      <Header />
      <Title />
      <MainSection />
      <Counter />
      <ToDoList />
      <Footer />
    </motion.main>
  );
}
