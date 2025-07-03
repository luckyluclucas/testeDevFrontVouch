"use client";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "@radix-ui/react-separator";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Counter() {
  const [counter, setCounter] = useState<number>(10);
  const [isOn, setIsOn] = useState<boolean>(true);

  useEffect(() => {
    if (!isOn) return;

    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsOn(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isOn]);

  function resetCounter() {
    setIsOn(true);
    setCounter(10);
  }
  return (
    <motion.section
      layout
      className="bg-gradient-to-b overflow-hidden px-2 from-secondary to-background flex flex-col min-h-92 w-full content-center"
    >
      <Separator
        orientation="horizontal"
        className="my-20 h-[1px] w-[90vw] mx-auto dark:bg-white bg-gray-200"
      />
      <motion.div
        layout
        initial={{ rotateX: 160, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
        whileHover={{ scale: 1.02 }}
      >
        <Card className="w-full max-w-[400px] m-auto bg-secondary">
          <CardHeader>
            <CardTitle className="mx-auto font-bold text-2xl">
              Contador
            </CardTitle>
          </CardHeader>
          <CardContent className="bg-secondary py-4">
            <div className="m-auto flex flex-col gap-6">
              {counter == 0 ? (
                <div className="transition-all ease-in-out duration-400 flex h-28 rounded-full w-28 mx-auto content-center justify-center text-white p-2 text-center font-bold bg-red-400 z-10">
                  <h1 className="content-center">TEMPO ESGOTADO</h1>
                </div>
              ) : (
                <div className="transition-all ease-in-out duration-400 flex m-auto align-center content-center rounded-full bg-primary h-16 w-16 text-white">
                  <p className="flex text-xl dark:text-black font-bold m-auto">
                    {counter}
                  </p>
                </div>
              )}
            </div>
            <div className="w-full flex mt-8">
              {" "}
              <Button
                onClick={() => {
                  resetCounter();
                }}
                className="mx-auto hover:cursor-pointer"
              >
                Resetar o Contador
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.section>
  );
}
