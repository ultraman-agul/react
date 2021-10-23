import { ADD_PERSON } from "../constant";

const initState = [{ name: 'agul', age: 12, id: '123123' }]
export default function personReducer(preState = initState, action) {
    switch (action.type) {
        case ADD_PERSON:
            return [action.data, ...preState]
        default:
            return preState
    }
}