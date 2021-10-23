
const initState = 0
export default function reducerCount(preState = initState, action) {
    switch (action.type) {
        case 'increment':
            return preState + action.data;
        case 'decrement':
            return preState - action.data;
        default:
            return initState
    }
}