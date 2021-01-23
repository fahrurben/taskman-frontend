import {INITIAL, PROJECT_PAGE_GET_INIT_DATA_SUCCESS, PROJECT_PAGE_GET_DATA_SUCCESS, READY} from "../constant"

function projectReducer(state = {
    status: READY,
    isLoading: false,
    data: [],
    page: 1,
    totalPage: 1,
}, action) {
    switch (action.type) {
        case PROJECT_PAGE_GET_INIT_DATA_SUCCESS:
            return {...state, data: action.payload.data, page: action.payload.page, totalPage: action.payload.totalPage}
        case PROJECT_PAGE_GET_DATA_SUCCESS:
            return {...state, data: action.payload.data, page: action.payload.page, totalPage: action.payload.totalPage}
        default:
            return {...state}
    }
}

export default projectReducer;