import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PostAction from '../actions/PostAction';
import moment from 'moment-timezone';
import CommentList from '../components/CommentList';
import EditDelete from '../components/EditDelete';
import Modal from 'react-modal';
import NewPost from './NewPost';
class PostPage extends Component {
  constructor(props) {
    super(props);
    this.PostAction = bindActionCreators(PostAction, props.dispatch);
  }

  componentWillMount() {
    const {currentPost} = this.props.PostReducer;
    if(currentPost.id) {
      document.title =`${currentPost.title} Post ${currentPost.category}`;
    }else {
      this.props.history.push('/');
    }
  }
  componentDidMount() {
    if(this.props.match.params){
      const {id}= this.props.match.params;
      this.PostAction.fetchPost(id);
      this.PostAction.fetchPostComments(id)
    }
  }

  voteAction(option) {
    const id = this.props.PostReducer.currentPost.id;
    option === 'up' ?
      this.PostAction.voteUp(id) :
      this.PostAction.voteDown(id);
  }
  delPost (id) {
    this.PostAction.DeletePostHide();
    this.props.history.push('/');
    this.PostAction.DeletePost(id)
  }
  editPost () {
    this.PostAction.EditPost();
  }
  render() {
    const {currentPost, activeSortType, comments, inputComment, delPostShow, editPostShow} = this.props.PostReducer;
    const {id} = this.props.match.params;
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
              <EditDelete
                handleEdit={()=>this.PostAction.EditPostShow()}
                handleDelete={()=>this.PostAction.DeletePostShow()}
              />
              <Modal
                isOpen={delPostShow}
                onRequestClose={()=>this.PostAction.DeletePostHide()}
                contentLabel="Delete"
                id={id}
              >
                <h2>Delete Post?</h2>
                <button className='btn col-sm-2 btn-danger' onClick={()=>this.delPost(id)}>Confirm</button>
                <button className='btn col-sm-2 col-sm-offset-2 btn-default'
                  onClick={()=>this.PostAction.DeletePostHide()}
                >
                  Cancel
                </button>
              </Modal>
              <Modal
                isOpen={editPostShow}
                onRequestClose={()=>this.PostAction.EditPostHide()}
                contentLabel="Delete"
              >
                <h2>Edit Post</h2>
                <NewPost
                  isEdit = {true}
                />
                <button className='btn col-sm-2 col-sm-offset-3 btn-primary' onClick={()=>this.editPost()}>update</button>
                <button className='btn col-sm-2 col-sm-offset-2 btn-default'
                  onClick={()=>this.PostAction.EditPostHide()}
                >
                  Cancel
                </button>
              </Modal>
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
                onChange={(e)=>this.PostAction.inputComment(e.target.value)}
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