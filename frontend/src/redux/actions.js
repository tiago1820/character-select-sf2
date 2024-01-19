import {
    FORM_TYPE
} from "./action-types";


export const changeForm = (form) => {
    return {
        type: FORM_TYPE,
        payload: form
    }
}