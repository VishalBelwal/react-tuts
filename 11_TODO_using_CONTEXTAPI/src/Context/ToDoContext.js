import { createContext, useContext } from "react";


export const TodoContext = createContext({
  todos:[
    {
      id: 1,
      todo: "ToDo message",
      completed: false,
    }
  ],
  addToDo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteToDo: (id) => {},
  toggleComplete: (id) => {}
})

export const useToDo = () => {
  return useContext(TodoContext)       //context ka matlab hai ham kis cheej ke baare ,me baat kar rahe hai to useContext me hame apne defined context ke baare me batana padta hai
}

export const ToDoProvider = TodoContext.Provider;