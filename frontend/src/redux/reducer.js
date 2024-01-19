import {
    FORM_TYPE
} from "./action-types";


const initialState = {
    currentForm: "signIn",
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FORM_TYPE:
            return {
                ...state, currentForm: payload
            }


        default:
            return {
                ...state
            };
    }
}

export default rootReducer;