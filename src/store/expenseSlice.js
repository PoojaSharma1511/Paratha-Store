import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
    name: "cart",
    initialState:  [],
    reducers: {
        add(state, action) {
            
            state.push(action.payload)
            
        },
        remove(state,action){
          return  state.filter(item=> item.id !==action.payload)
        },
        plus(state,action){
            console.log(action.payload);
            return state.map((i)=>i.id===action.payload.id?action.payload:i)

        }
     
      
    }
})

export const { add ,remove,plus  } = expenseSlice.actions

export default expenseSlice.reducer