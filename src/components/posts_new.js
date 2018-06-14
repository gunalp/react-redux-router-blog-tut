import React, {Component} from 'react';
import {Field,reduxForm} from 'redux-form';
import { Link } from 'react-router-dom';

class PostsNew extends Component {

/* ilk böyle yapıldı sonra genel func yapıldı
  renderTitleField(field){
    return(
      <div className="form-group">
        <label>Title</label>
        <input
          className="form-control"
          type="text"
          /* böyle de yazılabilir
          onChange={field.input.onChange}
          onFocus={field.input.onFocus}
          onBlur={field.input.onBlur}

          {...field.input} />
      </div>
    )

  }
  */

/*  tekrardan kurtarmak için genel func yazıldı
  renderTagsField(field){
    return(
      <div className="form-group">
        <label>Title</label>
        <input
          className="form-control"
          type="text"
          {...field.input} />
      </div>
    )
  }
*/

/* ilk böyleyddi sonra genel func aktarıldı. inputlar
  render(){
    return(
      <form>
       <Field
        name="title"
        component={this.renderTitleField}
        />
        <Field
         name="tags"
         component={this.renderTagsField}
         />
      </form>
    )
  }
  */

/* ilk böyleyddi es6 için refactor yapıldı. aşağıda
  renderField(field){
    return(
      <div className="form-group has-danger">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input} />
        { böyle olunca direk hatayı yazıyor .field.meta.error}
        <div className="text-help">
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    )
     // field.meta.error kullanmak için name properties errors içinde aynı olmalı.
  }
  */

  renderField(field){

    const { meta : {touched,error} } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return(
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input} />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  onSubmit(values) {
    //this === component
    console.log(values);
  }

  render(){

    const { handleSubmit } = this.props;

    return(
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
       <Field
        label="Title For Post"
        name="title"
        component={this.renderField}
        />
        <Field
         label="Categories"
         name="categories"
         component={this.renderField}
         />
         <Field
          label="Post Content"
          name="content"
          component={this.renderField}
          />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    )
  }
}

function validate(values){
  //console.log(values) -> {title:'asdf',categories:'asdf',content:'asdf'};
  const errors = {};

  //validate the inputs from 'values'
  if(!values.title || values.title.length < 3){
    errors.title = "Enter a title that is at least 3 char!";
  }
  if(!values.categories){
    errors.categories = "Enter some categories!";
  }
  if(!values.content){
    errors.content = "Enter some content!";
  }

  //if errors is empty, the form is fine to submit
  //if errors has *any* properties, redux form assumes form is invaild
  return errors;
}

export default reduxForm({
  validate,//validate:validate yazılabilir. ama key ile value aynı olduğu için es6 bu.
  form:'PostsNewForm'
})(PostsNew);
//export default PostsNew;
