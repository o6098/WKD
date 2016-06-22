import React,{Component,PropTypes} from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import {createPost} from '../actions/index';

class newBook extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createPost(props)
    .then(()=>{
      this.context.router.push('/');
    });
  }
  render(){
    const {fields: {title, categories, content }, handleSubmit}= this.props;
    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title}/>
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>
        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories}/>
          <div className="text-help">
            {categories.touched ? categories.error : ''}
          </div>
        </div>
        <div className="form-group">
          <label>Content</label>
          <input type="text" className="form-control" {...content}/>
          <div className="text-help">
            {content.touched ? content.error : ''}
          </div>
        </div>
        <button type ="submit" className="btn btn-primary">確認送出</button>
        <Link to='/' className="btn btn-danger">取消</Link>
      </form>
    );
  }
}

function validate(values){
  const errors = {};
  if (!values.title) {
    errors.title = '輸入胎頭';
  }
  if(!values.categories){
    errors.categories= '輸入凱特葛利';
  }
  if(!values.content) {
    errors.content = '輸入康特恩特';
  }
  return errors;
}
export default reduxForm({
  form: 'newform',
  fields: ['title','categories','content'],
  validate
},null,{createPost})(newBook);
