import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PostAction from '../actions/PostAction';
import moment from 'moment-timezone';
import CommentList from '../components/CommentList';
import {Link} from 'react-router-dom';

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
      this.PostAction.fetchPostComments(id)
    }
  }

  voteAction(option) {
    const id = this.props.PostReducer.currentPost.id;
    option === 'up' ?
      this.PostAction.voteUp(id) :
      this.PostAction.voteDown(id)
  }
  hideArg = 'hide';
  render() {
    const {currentPost, activeSortType, comments, inputComment} = this.props.PostReducer;
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
            <span className='col-sm-8'>
              <i className='post-basic'>Category: {currentPost.category}</i>
              <i className='post-basic'>Author: {currentPost.author}</i>
              <i className='post-basic'>Time: {moment(currentPost.timestamp).format('MM/DD/YYYY  hh:mm:ss')}</i>
            </span>
            <span className='col-sm-4'>
              <i to='' className="fa fa-pencil vote-pointer" aria-hidden="true">
                Edit
              </i>
              <i to='' className="fa fa-trash vote-pointer" aria-hidden="true">
                Delete
              </i>
            </span>
          </div>
        </section>
        <hr/>
        <section className='post-body'>
          <div className='row post-content'>{currentPost.body}</div>
          <div className='row'>
            <div className='vote col-sm-1'>Votes: {currentPost.voteScore}</div>
            <div className='col-sm-2'>
              <button className="fa fa-thumbs-o-up vote-pointer" aria-hidden="true" onClick={this.voteAction.bind(this, 'up')}></button>
              <button className="fa fa-thumbs-o-down vote-pointer" aria-hidden="true" onClick={this.voteAction.bind(this, 'down')}></button>
            </div>
          </div>
        </section>
        <hr/>
        <section className='post-body'>
          <div className='row'>
            <span>
              <i className='comment-thumb'>{comments.length} {comments.length>0?'comments':'comment'}: </i>
              {comments.length>0 && <span>
                <i className='comment-thumb'>sort by</i>
                <span className='comment-thumb'>
                  <button
                    className={`btn ${activeSortType?'btn-primary':'btn-default'} btn-xs`}
                    onClick={()=>this.PostAction.sortCommentVote()}>Vote
                  </button>
                </span>
                <span>
                  <button
                    className={`btn ${activeSortType?'btn-default':'btn-primary'} btn-xs`}
                    onClick={()=>this.PostAction.sortCommentTime()}>Time
                  </button>
                </span>
              </span>}
            </span>
            
            {
              comments.length ? 
                <CommentList
                  comments={comments}
                  upComment={(id)=>this.PostAction.voteCommentUp(id)}
                  downComment={(id)=>this.PostAction.voteCommentDown(id)}
                /> :
                <div>Leave the first comment</div> 
            }
          </div>
        </section>
        <hr/>
        <section>
          <form>
            <div className='form-group'>
              <label>Comment:</label>
              <p>Author: Default Athor</p>
              <textarea
                className='form-control'
                rows='5'
                onChange={(e)=>this.PostAction.inputComment(e)}
                value={inputComment}
                placeholder='minimum 5 chars'
              >
              </textarea>
            </div>
          </form>
          <button className={`btn btn-default ${inputComment.length>5?'':'disabled'}`}
            onClick={()=>this.PostAction.postComment()}
            disabled={inputComment.length<6}
          >
            Submit
          </button>
        </section>
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