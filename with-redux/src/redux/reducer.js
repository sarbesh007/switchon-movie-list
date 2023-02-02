import * as Types from './types'

const initialState ={
    loading: true,
    data: []
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case Types.SEARCH_MOVIE:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case Types.SEARCH_ERROR:
            return {
                ...state,
                loading: false,
                data: null
            }
        case Types.CLICK_MOVIE:
            return {
                ...state,
                loading: false,
                data: null
            }
        case Types.SHOW_REVIEW:
            return {
                ...state,
                loading: false,
                data: null
            }
        // case CLICK_MOVIE:
        //     return {
        //         ...state,
        //         loading: false,
        //         data: null
        //     }
        // case CLICK_MOVIE:
        //     return {
        //         ...state,
        //         loading: false,
        //         data: null
        //     }
        default:
            return state;
    }
}