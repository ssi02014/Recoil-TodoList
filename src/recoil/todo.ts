import { atom } from "recoil";

export interface Todo {
  id: number;
  contents: string;
  isCompleted: boolean;
}

export const inputState = atom<string>({
  key: "inputState",
  default: "",
});

export const todosState = atom<Todo[]>({
  key: "todos",
  default: [
    {
      id: 1,
      contents: "TodoList를",
      isCompleted: false,
    },
    {
      id: 2,
      contents: "만들어보자",
      isCompleted: false,
    },
    {
      id: 3,
      contents: "자유롭게",
      isCompleted: false,
    },
  ],
});
