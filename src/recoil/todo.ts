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
  default: [],
});
