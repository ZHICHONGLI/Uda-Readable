import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PostAction from '../actions/PostAction';
import * as DefaultAction from '../actions/DefaultAction';
import {Link} from 'react-router-dom';

class NewPostPage extends Component {
  constructor(props) {
    super(props);
    this.PostAction = bindActionCreators(PostAction, props.dispatch);
    this.DefaultAction = bindActionCreators(DefaultAction, props.dispatch);
  }
  componentDidMount (){
    if (this.props.DefaultReducer.categories.length){

    } else {
      this.DefaultAction.fetchAllCats();
    }
  }

  render() {
    const {title, body, category, author} = this.props.PostReducer.newPost;
    const {isEdit} = this.props;
    console.log(this.props.PostReducer.newPost)
    return (
      <div className='container post-contanainer'>
        <div className='row'>
          {!isEdit && <h2>New Post</h2>}
        </div>
        {!isEdit && <div className='row input-group'>
          <div className='input-group-addon'>Category:</div>
          <select
            className='form-control'
            onChange={(e)=>this.PostAction.newPostCat(e.target.value)}
            value={category}
          > 
            <option>Select a category</option>
            {this.props.DefaultReducer.categories.map(o => (
              <option key={o.name} value={o.name}>{o.name}</option>
            ))}
          </select>
        </div>}
        <div className='row'>
          <div className='col-sm-5 input-group'>
            <div className='input-group-addon'>Title</div>
            <input className='form-control'
              placeholder='Input Title'
              onChange={e=>this.PostAction.newPostTitle(e.target.value)}
              value={title}
            />
          </div>
          {!isEdit && <div className='col-sm-5 input-group'>
            <div className='input-group-addon'>Name</div>
            <input className='form-control'
              placeholder='Input Author Name'
              onChange={e=>this.PostAction.newPostOwner(e.target.value)}
              value={author}
            />
          </div>}
        </div>
        <div className='row input-group'>
          <div className='input-group-addon'>Body</div>
          <textarea
            className='form-control'
            rows='8'
            onChange={e=>this.PostAction.newPostBody(e.target.value)}
            value={body}
          />
        </div>
        {isEdit ?
          <div className='row'>
          
          </div>
          :
          <div className='row'>
            <Link to='/'>
              <button
                className='btn btn-light col-sm-1 col-sm-offset-9'
              >
                Cancel
              </button>
            </Link>
            <button className='btn btn-primary col-sm-1 col-sm-offset-1'
              onClick={()=>this.PostAction.postNew(this.props.history)}
            >
              Post it
            </button>
          </div>
        }
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    PostReducer: state.PostReducer,
    DefaultReducer: state.DefaultReducer
  }
}

export default connect(mapStateToProps)(NewPostPage);