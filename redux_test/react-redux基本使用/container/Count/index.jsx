import CountUI from '../../componments/Count'
import { connect } from 'react-redux'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action'
function mapStateToProps(state) {
    return { count: state }
}

function mapDispatchToProps(dispatch) {
    return {
        increment: (num) => dispatch(createIncrementAction(num)),
        decrement: (num) => dispatch(createDecrementAction(num)),
        incrementAsync: (num, time) => dispatch(createIncrementAsyncAction(num, time))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUI)