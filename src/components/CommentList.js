import React, { Component } from 'react';
import moment from 'moment-timezone';

class CommentList extends Component {
  render() {
    const {comments} = this.props;
    return (
      <div className='container'>
        {
          comments.map(comment => (
            <div className='row comment-inline' key={comment.id}>
              <div>
                <span className='post-basic'>{comment.author}</span>
                <span className='post-basic'>{moment(comment.timestamp).format('MM/DD/YYYY  hh:mm:ss')}</span>
                <button className="fa fa-thumbs-o-up comment-thumb" aria-hidden="true" onClick={()=>this.props.upComment(comment.id)}></button>
                <span className='comment-thumb'>{comment.voteScore}</span>
                <button className="fa fa-thumbs-o-down" aria-hidden="true" onClick={()=>this.props.downComment(comment.id)}></button>
              </div>
              <div className='comment-body'>{comment.body}</div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default CommentList;