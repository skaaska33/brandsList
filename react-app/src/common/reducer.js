import update from "immutability-helper/index";

const initialState = {
    message: {
        text: '',
        header: ''
    },
};


const SET_MESSAGE = 'SET_MESSAGE';


export function setMessage(text, header) {
    return {
        type: SET_MESSAGE,
        text: text,
        header: header
    }
}


export function commonReducer(common = initialState, action) {
    if (action.type === SET_MESSAGE) {
        return update(common, {
            message: {
                text: {$set: action.text},
                header: {$set: action.header}
            }
        });
    } else {
        return common;
    }
}