const initalState = {
    eventList: [],
    eventTotal: 0,
}

const eventReducer = (state = initalState, action) => {
    switch(action.type){
        case 'ADD_EVENTS':
            return {
                ...state,
                eventList: action.payload.events,
            }
        default:
            return state
    }
}

export default eventReducer