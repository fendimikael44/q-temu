const initalState = {
    userData: [],
    userTotal: 0,
}

const memberReducer = (state = initalState, action) => {
    switch(action.type){
        case 'ADD_MEMBERS':
            return {
                ...state,
                userData: action.payload.members,
            }
        default:
            return state
    }
}

export default memberReducer