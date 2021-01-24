import {
    READY, SUBMITTED,
    SUCCESS,
    FAILED
} from "../../constant"

import {
    CREATE_PROJECT_START,
    CREATE_PROJECT_SUCCESS,
    CREATE_PROJECT_FAILED,
    CREATE_PROJECT_RESET
} from "./types"

function reducer(state = {
    status: READY,
    isLoading: false,
    response: {
        status: null,
        message: "",
    }
}, action) {
    switch (action.type) {
        case CREATE_PROJECT_START:
            return {...state, isLoading: true}
        case CREATE_PROJECT_SUCCESS:
            return {
                ...state,
                status: SUBMITTED,
                isLoading: false,
                response: {
                    status: SUCCESS,
                    message: action.payload.message,
                }
            }
        case CREATE_PROJECT_FAILED:
            return {
                ...state,
                isLoading: false,
                response: {
                    status: FAILED,
                    message: action.payload.message,
                }
            }
        case CREATE_PROJECT_RESET:
            return {
                ...state,
                status: READY,
                isLoading: false,
                response: {
                    status: null,
                    message: "",
                }
            }
        default:
            return {...state}
    }
}

export default reducer;