export const initialstate ={
    user: null,
};
export const action_type ={
    set_user: 'set_user',
};
const reducer = (state, action) =>{
    switch(action.type){
        case action_type.set_user:
            return {
              ...state,
                user: action.user,
            };
        default:
            return state;
    }
}
export default reducer;