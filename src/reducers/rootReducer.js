const initState = {
    txt: "Your Message From Android will appear here!!!!",
}

const rootReducer = (state = initState, action) => {

    if(action.type === 'CHANGE') {
        return {
            ...state,
            txt: action.newTxt,
        }
    }

    return state;
}

export default rootReducer;