import axios from 'axios'

export const fetchEvents = (newPageTitle) => {
    return (dispatch) => {
        axios
        .get("https://swapi.co/api/films")
        .then(response => {
            const events = response.data.results

            dispatch({
                type: 'ADD_EVENTS',
                payload: {
                    events: events.slice(0, 3).map(row => ({
                                title: row.title,
                                content: row.opening_crawl,
                                went: row.characters.length
                    }))
                }
            })
        })
    }
}