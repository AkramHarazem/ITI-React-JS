import { SEARCH_MOVIE } from "./actionType"

const  word = ""
export const wordReducer = (state=word,{type,payload})=>{
   switch (type){
    case SEARCH_MOVIE:
        return payload
    default:
        return state
   }
}