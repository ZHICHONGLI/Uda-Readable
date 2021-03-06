import React, { Component } from 'react';
import moment from 'moment-timezone';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import * as PostAction from '../actions/PostAction';
import EditDelete from '../components/EditDelete';
import Modal from 'react-modal';
import { connect } from 'react-redux';

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.PostAction = bindActionCreators(PostAction, props.dispatch);
  }
  delComment() {
    this.PostAction.DeleteCmtHide();
    this.PostAction.delComment();
  }
  editComment() {
    this.PostAction.editComment();
    this.PostAction.editCmtHide();
  }
  render() {
    const {comments} = this.props;
    const {delCmtShow, editCmtShow, inputComment} = this.props.PostReducer;
    return (
      <div className='container'>
        {
          comments.map(comment => (
            !comment.deleted && <div className='row comment-inline' key={comment.id}>
              <div className='row'>
                <span className='col-sm-7'>
                  <span className='post-basic'>{comment.author}</span>
                  <span className='post-basic'>{moment(comment.timestamp).format('MM/DD/YYYY  hh:mm:ss')}</span>
                  <button className="fa fa-thumbs-o-up comment-thumb" aria-hidden="true" onClick={()=>this.props.upComment(comment.id)}></button>
                  <span className='comment-thumb'>{comment.voteScore}</span>
                  <button className="fa fa-thumbs-o-down" aria-hidden="true" onClick={()=>this.props.downComment(comment.id)}></button>
                </span>
                <EditDelete
                  className='col-sm-4'
                  handleEdit={()=>{
                    this.PostAction.editCmtShow(comment.id);
                    this.PostAction.inputComment(comment.body);
                  }}
                  handleDelete={()=>this.PostAction.DeleteCmtShow(comment.id)}
                />
                <Modal
                  isOpen={delCmtShow}
                  onRequestClose={()=>this.PostAction.DeleteCmtHide()}
                  contentLabel="Delete Comment"
                  id={comment.id}
                >
                  <h3>Delete Comment?</h3>
                  <button className='btn col-sm-2 btn-danger' onClick={()=>this.delComment()}>Confirm</button>
                  <button className='btn col-sm-2 col-sm-offset-2 btn-default'
                    onClick={()=>this.PostAction.DeleteCmtHide()}
                  >
                    Cancel
                  </button>
                </Modal>
                <Modal
                  isOpen={editCmtShow}
                  onRequestClose={()=>this.PostAction.EditCmtHide()}
                  contentLabel="Edit Comment"
                >
                  <h2>Edit Comment</h2>
                  <input className='form-control'
                    value={inputComment}
                    onChange={(e)=>this.PostAction.inputComment(e.target.value)}
                  >
                  </input>
                  <button className='btn col-sm-2 btn-primary'
                    onClick={()=>this.editComment(comment.id)}>
                    Edit
                  </button>
                  <button className='btn col-sm-2 col-sm-offset-2 btn-default'
                    onClick={()=>this.PostAction.editCmtHide()}
                  >
                    Cancel
                  </button>
                </Modal>
              </div>
              <div className='row comment-body'>{comment.body}</div>
            </div>
          ))
        }
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    PostReducer: state.PostReducer
  }
}

export default withRouter(connect(mapStateToProps)(CommentList));