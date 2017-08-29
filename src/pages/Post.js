import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PostAction from '../actions/PostAction';

class PostPage extends Component {
  constructor(props) {
    super(props);
    this.PostAction = bindActionCreators(PostAction, props.dispatch);
  }

  componentWillMount() {
    document.title = 'Posts';
  }
  componentDidMount() {
    if(this.props.match.params){
      const {id }= this.props.match.params;
      this.PostAction.fetchPost(id);
    }
  }
  
  render() {
    // const {currentPost} = this.props.PostReducer;
    return (
      <div className='container post-contanainer'>
        <button onClick={()=>console.log(this.props.PostReducer)}>test</button>
      </div>
    );
  }
}

function mapStateRoProps (state) {
  return {
    PostReducer: state.PostReducer
  }
}

export default connect(mapStateRoProps)(PostPage);