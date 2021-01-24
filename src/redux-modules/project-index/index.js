import {
    GET_INIT_DATA_SUCCESS,
    GET_DATA_SUCCESS,
    GET_INIT_DATA_START,
    GET_DATA_START,
    GET_INIT_DATA_FAILED, GET_DATA_FAILED,
} from "./types"

function reducer(state = {
    isLoading: false,
    data: [],
    page: 1,
    totalPage: 1,
}, action) {
    switch (action.type) {
        case GET_INIT_DATA_START:
        case GET_DATA_START:
            return {...state, isLoading: true}
        case GET_INIT_DATA_SUCCESS:
        case GET_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload.data,
                page: action.payload.page,
                totalPage: action.payload.totalPage
            }
        case GET_INIT_DATA_FAILED:
        case GET_DATA_FAILED:
            return {...state, isLoading: false}
        default:
            return {...state}
    }
}

export default reducer;