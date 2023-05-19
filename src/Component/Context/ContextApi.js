
import React, {createContext ,useContext ,useReducer} from 'react';

export const stateContext = createContext();

 const ContextApi=({reducer,initialstate,children})=> {

    <stateContext.Provider value={useReducer(reducer,initialstate)}>
    {children}
  </stateContext.Provider>
  
};

export const useStateValue =()=> useContext(stateContext)
export default ContextApi
