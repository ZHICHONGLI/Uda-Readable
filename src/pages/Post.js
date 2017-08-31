import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PostAction from '../actions/PostAction';
import moment from 'moment-timezone';

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

  voteAction(option) {
    const id = this.props.PostReducer.currentPost.id;
    option === 'up' ?
      this.PostAction.voteUp(id) :
      this.PostAction.voteDown(id)
  }
  
  render() {
    const {currentPost} = this.props.PostReducer;
    if(currentPost) {
      document.title =`${currentPost.title} Post ${currentPost.category}`;
    }
    return (
      <div className='container post-contanainer'>
        <button onClick={()=>console.log(this.props.PostReducer)}>test</button>
        <section className='post-header'>
          <div className='row'>
            <h3><em>{currentPost.title}</em></h3>
          </div>
          <div className='row'>
            <i className='post-basic'>Category: {currentPost.category}</i>
            <i className='post-basic'>Author: {currentPost.author}</i>
            <i className='post-basic'>Time: {moment(currentPost.timestamp).format('MM/DD/YYYY  hh:mm')}</i>
          </div>
        </section>
        <hr/>
        <section className='post-body'>
          <div className='row post-content'>{currentPost.body}</div>
          <div className='row'>
            <div className='vote col-sm-1'>Votes: {currentPost.voteScore}</div>
            <div className='col-sm-2'>
              <i className="fa fa-thumbs-o-up vote-pointer" aria-hidden="true" onClick={this.voteAction.bind(this, 'up')}></i>
              <i className="fa fa-thumbs-o-down vote-pointer" aria-hidden="true" onClick={this.voteAction.bind(this, 'down')}></i>
            </div>
          </div>
        </section>
        <hr/>
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