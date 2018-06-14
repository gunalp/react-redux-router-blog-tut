import React, {Component} from 'react';
import  {Field,reduxForm} from 'redux-form';

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

  renderField(field){
    return(
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input} />
      </div>
    )
  }

  render(){
    return(
      <form>
       <Field
        label="Title"
        name="title"
        component={this.renderField}
        />
        <Field
         label="Tags"
         name="tags"
         component={this.renderField}
         />
      </form>
    )
  }


}

export default reduxForm({
  form:'PostsNewForm'
})(PostsNew);
//export default PostsNew;
