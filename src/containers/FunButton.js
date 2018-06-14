import React from 'react';
import { connect } from 'react-redux';
import { addFun } from '../actions';

const FUN_AMOUNT = 1;

const FunButton = props => {
  return <button onClick={props.addFun}>Fun!</button>;
};

const mapStateToProps = state => {
  return { funcount: state.funcounter.funcount };
};

const mapDispatchToProps = dispatch => {
  return { addFun: () => dispatch(addFun(FUN_AMOUNT)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FunButton);
