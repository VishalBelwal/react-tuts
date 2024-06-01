import { useEffect, useState } from "react";
import "./App.css";
import { ToDoProvider } from "./Context";
import TodoItem from "./Components/index2";
import TodoForm from "./Components/index2";

function App() {

  const [todos, setTodos] = useState([])

  //ye todo hame form me se milega
  const addToDo = (todo) => {
    setTodos((prev) => [...prev, {id: Date.now(), ...todo}]);     //to get old array refrence-->interview question , by the concept of deStructuring purani saari values lia and then yha show kardi
  }
  
  //map use karke har ek individual todo ki id  ko access kar sakte hai
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevToDo) => (prevToDo.id === id ? todo : prevToDo)))
  }

  //delete ToDo, yha par filter bhi har ek value ke ssath jayega
  const deleteToDo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))       //jo jo id se match karegi wo return hi nahi hogi 
  }

  //toggleComplete
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevToDo) => prevToDo.id === id ? {...prevToDo, completed: !prevToDo.completed} : prevToDo))
  }

  //localStorage(ye ek hi hota hai joki browser ka hota hai ham use kisi se bhi access kar sakte hai)
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    
    if(todos && todos.length > 0 ){
      setTodos()
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <ToDoProvider value={{todos, addToDo, updateTodo, deleteToDo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm /> 
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ToDoProvider>
  );
}

export default App;
