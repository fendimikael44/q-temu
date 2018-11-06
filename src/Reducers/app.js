const initalState = {
    pageTitle: 'QTemu',
    copyRightYear: 2018,
}

const appReducer = (state = initalState, action) => {
    switch(action.type){
        case 'PAGE_TITLE_CHANGE': 
            return {
                ...state, 
                pageTitle: action.payload.newPageTitle
            }
        default:
            return state
    }
}

export default appReducer