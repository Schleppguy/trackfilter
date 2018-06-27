import { connect } from 'react-redux';
import { startSession } from '../actions';
import App from '../components/App';

const mapStateToProps = state => {
  const { oauthToken } = state.client;
  return {
    oauthToken
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startSession: () => dispatch(startSession())
  };
};

const Splash = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default Splash;
