import axios from 'axios'

// const addMembers = (members) => ({
//     type: 'ADD_MEMBERS',
//     payload: {
//         members: members
//     }
// })

export const fetchMembers = () => {
    return (dispatch) => {
        axios.get("https://swapi.co/api/people/")
            .then(response => {
                const members = response.data.results

                dispatch({
                    type: 'ADD_MEMBERS',
                    payload: {
                        members: members.slice(0, 5)
                    }
                })
            })
    }
}

// export default fetchMembers