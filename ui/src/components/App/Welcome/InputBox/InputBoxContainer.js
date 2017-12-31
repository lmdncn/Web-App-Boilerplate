import InputBox from './InputBox.jsx';
import {connect} from 'react-redux';
import {setSecondaryTitle} from 'Actions';

const mapStateToProps = (state, data) => {
    return {view: state.viewReducer}
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSecondaryTitle: (data) => {
            dispatch(setSecondaryTitle(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputBox);