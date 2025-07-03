export type TaskProps = {
  id: number;
  task: string;
  completed: boolean;
  toggleComplete: (id: number) => void;
  removeTask: (id: number) => void;
};
