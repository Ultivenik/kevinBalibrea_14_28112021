import {clicked , closed, submitted} from './actions'

const initialState = {
    isClicked : false,
    isSubmitted: false,
    isClosed: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case clicked:
            return({
                ...state,
                isClicked: true,
                isClosed: false
            })
        case closed:
            return({
                ...state,
                isClosed: true,
                isClicked: false
            })
        case submitted:
            return({
                ...state,
                isSubmitted: true
            })
        default:
            return({...state});
    }
}
