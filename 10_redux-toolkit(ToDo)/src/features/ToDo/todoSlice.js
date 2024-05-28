import {createSlice, nanoid} from '@reduxjs/toolkit';

{/*nanoid unique id generate karta hai*/}

const initialState = {
  todos: [{id: 1, text: "Hello World"}]
}

{/*slice reducer ka hi ek bada function hai*/}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(), 
        text: action.payload
      }
      state.todos.push(todo)
    },

    // {/*State se hame current state milti hai and action se hame data ka acess milta hai*/}

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todoaccess) => {
        todoaccess.id !== action.payload
      })
    },
  }

})

export const {addTodo, removeTodo} = todoSlice.actions
//yha par hamne individual functionality export kari hai ye hame components me kaam aayegi

//ab store ko bhi awareness chahiye inke baare me wrna wo maintain nahi kar payega

export default todoSlice.reducer