"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";
import { GiConfirmed } from "react-icons/gi";
import { TaskProps } from "./types/taskProps";

export default function CreateTask({
  task,
  completed,
  id,
  toggleComplete,
  removeTask,
}: TaskProps) {
  return (
    <motion.div layout className="flex flex-row my-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 200 }}
        transition={{ duration: 0.3 }}
        layout="position"
        className={`${
          completed ? "bg-background" : "bg-background"
        } w-full flex flex-col overflow-hidden z-10 md:flex-col border-2 shadow-lg border-border max-w-screen rounded-lg p-0 m-0 content-center text-center`}
      >
        <div className="flex flex-col md:flex-row">
          <div className="px-4 dark:text-white w-full text-start content-center break-words  text-black font-semibold text-lg md:text-xl">
            {task}
          </div>
          {completed ? (
            <div className="ml-auto w-full flex flex-row justify-center gap-4 font-semibold rounded-lg p-2">
              <div className="mx-auto flex flex-row md:mx-0 md:ml-auto">
                <Button
                  onClick={() => toggleComplete(id)}
                  className="flex border-red-400 border-2 shadow-md bg-background dark:text-white text-black hover:cursor-pointer hover:bg-red-400 text-sm md:text-base"
                >
                  <FaRegCircleXmark color="red" size={48} />
                  Marcar como incompleta
                </Button>
                <Button
                  onClick={() => removeTask(id)}
                  className="mx-2 flex bg-red-400 hover:cursor-pointer hover:bg-red-500"
                >
                  <FaRegTrashAlt />
                </Button>
              </div>
            </div>
          ) : (
            <div className="ml-auto w-full flex flex-row justify-center gap-4 font-semibold rounded-lg p-2">
              <div className="mx-auto flex flex-row md:mx-0 md:ml-auto">
                <Button
                  onClick={() => toggleComplete(id)}
                  className="flex border-2 shadow-md bg-background text-black dark:text-white border-green-400 hover:cursor-pointer hover:bg-green-500 text-sm md:text-base"
                >
                  <GiConfirmed color="green" size={48} />
                  Marcar como concluída
                </Button>
                <Button
                  onClick={() => removeTask(id)}
                  className="mx-2 flex bg-red-500 hover:cursor-pointer hover:bg-red-600"
                >
                  <FaRegTrashAlt />
                </Button>
              </div>
            </div>
          )}
        </div>
        {completed ? (
          <p className="transition-all h-8 duration-400 ease-in-out z-1 w-full md:mr-auto mt-1 border-1 border-green-400 text-green-400 rounded mb-1 text-center content-center font-semibold text-xs md:text-base">
            tarefa já concluída
          </p>
        ) : (
          <p className="transition-all h-8 duration-400 rounded ease-in-out z-1 w-full md:mr-auto mt-1 border-1 border-red-400 mb-1 text-red-400 text-center content-center font-semibold text-xs md:text-base">
            imcompleta
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}
