
import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "../store";

type initialStateType = {
  filled : boolean,
  count : number,
  loading : boolean
}


const initialState : initialStateType = {
  filled : false,
  count : 0,
  loading : false
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
      },
      setLoading : (state,actiosn:PayloadAction<boolean>) =>{
        state.loading = actiosn.payload
      }
    },
  });
  
  export const {
    setFilled,
    setCount,
    setLoading
  } = allSlice.actions;
  export default allSlice.reducer;