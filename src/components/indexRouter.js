import React,{Component} from 'react';
import {connect} from 'react-redux';
import { fetchPosts,deletePost } from '../actions/index';
import { Link }from 'react-router';

class PostsIIIndex extends Component {
  componentWillMount(){
    this.props.fetchPosts();
  }


  POSTTTS(){
    return this.props.posts.map((post)=>{
      return(
        <li className="list-group-item" key={post.id}>
          <div>
            <Link to={"posts/"+post.id}>
              <span className="pull-xs-right">{post.categories}</span>
              <strike>{post.title}</strike>
            </Link>

          </div>
        </li>
      );
    });
  }
  render(){
    return(
      <div>
        <div className="text-xs-right">
          <Link to="posts/new" className="btn btn-primary">
            新增資料
          </Link>
        </div>
        <h1>REACT is so Difficult!</h1>
        <ul className="list-group">
          {this.POSTTTS()}
        </ul>
      </div>
    );
  }

}
function mapStateToProps(state){
  return{posts:state.post.all};
}

export default connect(mapStateToProps, {fetchPosts})(PostsIIIndex);
