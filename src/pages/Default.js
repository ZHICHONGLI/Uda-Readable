import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as DefaultAction from '../actions/DefaultAction';

class DefaultPage extends Component {
  constructor(props) {
    super(props);
    this.DefaultAction = bindActionCreators(DefaultAction, props.dispatch);
  }
  componentDidMount() {
    this.DefaultAction.fetchAllCats();
    this.DefaultAction.test();
  }
  
  render() {
    return (
      <div>
        default
        <Link to="/category">
          category
        </Link>
        <button onClick={()=>console.log(this.props.DefaultReducer)}>test</button>
      </div>
    );
  }
}

function mapStateRoProps (state) {
  return {
    DefaultReducer: state.DefaultReducer
  }
}

// const mapDispatchToProps = dispatch => ({
//   DefaultAction: bindActionCreators(DefaultAction, dispatch)
// });

export default connect(mapStateRoProps)(DefaultPage);
