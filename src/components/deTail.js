import React,{Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions/index';
import {Link} from 'react-router';

class ShowDEtail extends Component {
  componentWillMount(){
    this.props.fetchPost(this.props.params.id);
  }

  static contextTypes = {
    router: PropTypes.object
  };

  onCLickDElete(){
    this.props.deletePost(this.props.params.id)
    .then(()=>{this.context.router.push('/');});
  }

  render(){
    const {post}=this.props;

    if (!post){
      return <div>LLL</div>;
    }
    return (
      <div>
        <Link to="/">回首頁</Link>
        <button className="btn btn-danger pull-xs-right"
        onClick={this.onCLickDElete.bind(this)}>刪除資料</button>
        <h1>{post.title}</h1>
        <h2>{post.categories}</h2>
        <p>{post.content}</p>
      </div>
    );
  }

}

function mapStateToProps(state){
  return{ post: state.post.post};
}

export default connect(mapStateToProps,{fetchPost, deletePost})(ShowDEtail);
