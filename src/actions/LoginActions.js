import {LOGIN_SUBMIT} from "../constant"
import {makeActionCreator} from "../helpers/Common"

export const loginSubmit = makeActionCreator(LOGIN_SUBMIT, "payload");