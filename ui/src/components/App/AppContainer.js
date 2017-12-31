import App from './App.jsx';
import { connect } from 'react-redux';

const mapStateToProps = (state, data) => {
  return {
    // view: state.viewReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);