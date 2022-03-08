
const initialState = {
   
    pokemon:null
 };
 
 function AuthReducer(state = initialState, action) {
    switch (action.type) {
        
       
          case "SET_POKEMON":
            return {
              ...state,
              pokemon: action.value,
            };
  
      
      default:
        return state;
    }
 }
 
 export default AuthReducer;