import {COUNTER_ADD,ADD_TO_CART}from'./mutations_type'

export default{
  [COUNTER_ADD](state,payload){
    payload.count++
  },
  [ADD_TO_CART](state,payload){
    payload.checked = true
    state.cartList.push(payload)
  }
}