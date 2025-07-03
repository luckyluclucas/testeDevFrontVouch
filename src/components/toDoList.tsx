"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import CreateTask from "./task";
import { Task } from "./types/task";
import { useState, useEffect } from "react";

export default function ToDoList() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState("");

  function addTask() {
    if (taskText.trim() === "") return;
    const newTask: Task = {
      id: Date.now(),
      task: taskText.trim(),
      completed: false,
    };
    setTaskList((prev) => [...prev, newTask]);
    setTaskText("");
  }

  function removeTask(id: number) {
    setTaskList((prev) => prev.filter((task) => task.id !== id));
  }

  function toggleCompleteTask(id: number) {
    setTaskList((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  useEffect(() => {
    try {
      const storedListTask = localStorage.getItem("taskList");
      if (storedListTask) {
        setTaskList(JSON.parse(storedListTask));
      }
    } catch (error) {
      console.log("erro ao buscar o localstorate", error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("taskList", JSON.stringify(taskList));
    } catch (error) {
      console.log("error ao salvar taskList no localStorage", error);
    }
  }, [taskList]);

  return (
    <motion.div
      layout
      className="mt-12 px-2 min-h-[620px] border-border rounded-lg border-1 w-full flex bg-gradient-to-b from-background to-secondary"
    >
      <motion.div
        layout
        className="flex w-full flex-col mx-auto max-w-7xl content-center"
      >
        <div className="w-full content-center text-center my-2">
          <h1 className="text-2xl text-shadow-2xs py-1 rounded-lg md:text-4xl font-bold mb-6 md:mb-8 tracking-tight">
            Lista de Tarefas
          </h1>
        </div>
        <div className="flex flex-row mx-auto gap-0">
          <Input
            className="rounded-r-none border-black/50"
            value={taskText}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                addTask();
              }
            }}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Digite sua tarefa"
          ></Input>
          <Button onClick={addTask} className="rounded-l-none w-24 mx-auto">
            adicionar
          </Button>
        </div>
        <AnimatePresence>
          {taskList.map((task) => (
            <CreateTask
              key={task.id}
              id={task.id}
              task={task.task}
              completed={task.completed}
              toggleComplete={toggleCompleteTask}
              removeTask={removeTask}
            ></CreateTask>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
