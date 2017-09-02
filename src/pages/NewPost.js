import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PostAction from '../actions/PostAction';
import * as DefaultAction from '../actions/DefaultAction';

class NewPostPage extends Component {
  constructor(props) {
    super(props);
    this.PostAction = bindActionCreators(PostAction, props.dispatch);
    this.DefaultAction = bindActionCreators(DefaultAction, props.dispatch);
  }
  componentDidMount(){
    if (this.props.DefaultReducer.categories.length){

    } else {
      this.DefaultAction.fetchAllCats();
    }
  }
  render() {
    return (
      <div className='container post-contanainer'>
        <div className='row'>
          <h2>New Post</h2>
        </div>
        <div className='row input-group'>
          <div className='input-group-addon'>Category:</div>
          <select className='form-control' onChange={(e)=>console.log(e.target.value)}>
            {this.props.DefaultReducer.categories.map(o => (
              <option key={o.name} value={o.name}>{o.name}</option>
            ))}
          </select>
        </div>
        <div className='row'>
          <span className='col-sm-5 input-group'>
            <div className='input-group-addon'>Title</div>
            <input className='form-control'
              placeholder='Input Title'
              onChange={e=>console.log(e.target.value)}
            />
          </span>
          <span className='col-sm-5 input-group'>
            <div className='input-group-addon'>Name</div>
            <input className='form-control'
              placeholder='Input Title'
              onChange={e=>console.log(e.target.value)}
            />
          </span>
        </div>
        <div className='row input-group'>
          <div className='input-group-addon'>Body</div>
          <textarea
            className='form-control'
            rows='8'
          />
        </div>
          
                  
      </div>
    );
  }
}

function mapStateRoProps (state) {
  return {
    PostReducer: state.PostReducer,
    DefaultReducer: state.DefaultReducer
  }
}

export default connect(mapStateRoProps)(NewPostPage);