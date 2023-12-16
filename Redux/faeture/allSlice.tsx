
import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "../store";

type initialStateType = {
  filled : boolean,
  count : number
}


const initialState : initialStateType = {
  filled : false,
  count : 0
}

const allSlice = createSlice({
    name: "all",
    initialState,
    reducers: {
      setFilled : (state, action:PayloadAction<boolean>) =>{
        state.filled = action.payload
      },
      setCount : (state) =>{
        state.count += 1 
      }
    },
  });
  
  export const {
    setFilled,
    setCount
  } = allSlice.actions;
  export default allSlice.reducer;