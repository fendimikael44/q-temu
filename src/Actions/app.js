export const changePageTitle = (newPageTitle) => {
    return {
        type: 'PAGE_TITLE_CHANGE',
        payload: {
            newPageTitle: newPageTitle
        }
    }
}