import * as types from './types'

const initState = {count:5}

function countReducer(state=initState, {type, payload}){
    console.log('countReducer çalıştı')
    switch(type){
        case types.countUp:
            return {
                ...state,
                count: state.count +5
            }
        case types.countDown:
            return {
                ...state,
                count: state.count -5
            }
        case types.countUpdate:
            return {
                ...state,
                count: payload
            }
        default:
            return state
    }
}

function userReducer(state={},{type,payload}){
    console.log('USER reducer çalıştı')
    switch(type){
        case 'UPDATE':
            return state
        default:
            return state
    }
}


export default {
    counter: countReducer,
    user: userReducer
}