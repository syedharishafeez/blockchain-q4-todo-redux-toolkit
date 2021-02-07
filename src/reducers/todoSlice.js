import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todoReducer",
    initialState:{
        todoList: [],
    },
    reducers:{
        addTodo: (state, action)=>{
            state.todoList.push(action.payload)
        },
        deleteTodo: (state, action)=>{
            state.todoList = state.todoList.filter(item=>item.key !== action.payload)
        },
        updateTodo: (state, action) => {
            const items = state.todoList;
            items.map(item=>{      
                if(item.key===action.payload.key){
                    item.text= action.payload.text;
                }
            })
            state.todoList = items
        }
    }
})

export const {addTodo, deleteTodo, updateTodo} = todoSlice.actions;
export const todoReducer = todoSlice.reducer;