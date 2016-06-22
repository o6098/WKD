import React,{Component} from 'react';
import {connect} from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link }from 'react-router';

class PostsIIIndex extends Component {
  componentWillMount(){
    this.props.fetchPosts();
  }

  render(){
    return(
      <div>
        <div className="text-xs-right">
          <Link to="posts/new" className="btn btn-primary">
            新增資料
          </Link>
        </div>
        REACT is so Difficult!
      </div>
    );
  }
}

export default connect(null, {fetchPosts})(PostsIIIndex);
