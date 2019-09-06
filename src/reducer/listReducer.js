import uuid from 'uuid/v1'

export const listReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_LIST':
            return [...state, {
                text: action.list.text,
                id: uuid()
            }]
        case 'REMOVE_LIST':
            return state.filter(list => list.id !== action.id)
        case 'CLEAR_ALL':
            return []
        default:
            return state
    }
}