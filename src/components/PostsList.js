import React, { Component } from 'react';
import moment from 'moment-timezone';
import { Link } from 'react-router-dom';

class PostsList extends Component {

  render() {
    const {posts} = this.props;
    return (
      <div className='container'>
        <table className="table table-hover post-list-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Votes</th>
              <th>Title</th>
              <th>Author</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {
              posts.map(post => (
                !post.deleted && <tr key={post.id}>
                  <td><Link to={`/category/${post.category}`}>{post.category}</Link></td>
                  <td>{post.voteScore}</td>
                  <td><Link to={`/post/${post.id}`}>{post.title}</Link></td>
                  <td>{post.author}</td>
                  <td>{moment(post.timestamp).format('MM/DD/YYYY  hh:mm')}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default PostsList;