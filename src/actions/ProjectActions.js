import {PROJECT_PAGE_GET_INIT_DATA, PROJECT_PAGE_GET_DATA} from "../constant"
import {makeActionCreator} from "../helpers/Common"

export const getInitialData = makeActionCreator(PROJECT_PAGE_GET_INIT_DATA);
export const getData = makeActionCreator(PROJECT_PAGE_GET_DATA, "page", 'filter');