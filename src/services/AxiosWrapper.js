import axios from "axios"
import {AUTH_TOKEN_KEY} from "../constant"

function post(url, data) {
    const config = {
        headers: {
            "Authorization": "Bearer " + localStorage.getItem(AUTH_TOKEN_KEY)
        }
    }
    return axios.post(url, data, config)
}

export { post }