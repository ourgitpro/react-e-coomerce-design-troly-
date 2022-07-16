import { createContext,useReducer } from "react";

const Store = createContext()

const userInitialState = {
    userInfo: localStorage.getItem('userInfo')
    ?
    JSON.parse(localStorage.getItem('userInfo'))
    :
    null
}

const cartInitialState = {
    cart:{
        cartItem: []
    }
}

function userReducer(state,action){
    switch(action.type){
        case 'USER_LOGIN':
            return({...state,userInfo:action.payload})
        case 'USER_LOGOUT':
            return({...state,userInfo: null
             })
            default:
                return state
    }
}

function cartReducer(state,action){
    switch(action.type){
        case  'CART_ADD_PRODUCT':
            const newItem = action.payload
            const existingItem = state.cart.cartItem.find((item)=>item._id === newItem._id)
            const cartItems = existingItem
                  ?
                  state.cart.cartItem.map((item)=> item._id === existingItem._id?newItem:item)
                  :
                  [...state.cart.cartItem,newItem]
                  return {...state.cart,cartItems}
        default:
            return state
    }
}

function StoreProvider(props){
    let [state,dispatch] = useReducer(userReducer,userInitialState)
    let [cartstate,cartdispatch] = useReducer(cartReducer,cartInitialState)
    const value = {state,dispatch,cartstate,cartdispatch}
    return <Store.Provider value={value}>{props.children}</Store.Provider>
}
export {Store,StoreProvider}