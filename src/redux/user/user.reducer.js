const initialState = {
    user: null,
}
const userReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'LOGIN_USER_START':{
            console.log(action.payload)
            return {...state, user: action.payload}
        }
        default:
            return state
    }
}
export default userReducer;