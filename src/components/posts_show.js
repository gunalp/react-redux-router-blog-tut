import React, {Component} from 'react';
import  { connect } from 'react-redux';
import  { Link } from 'react-router-dom';
import  { fetchPost,deletePost } from '../actions';

class PostsShow extends Component {

  componentDidMount(){
    /* her seferinde istek atmamak için
    if(!this.this.props.post){
      const {id} = this.props.match.params;
      this.props.fetchPost(id);
    }
    */
    const {id} = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick(){
    const {id} = this.props.match.params;
    //this.props.deletePost(this.props.post.id);//kötü yaklaşım yapma
    this.props.deletePost(id,()=>{
      this.props.history.push('/');
    });
  }

  render() {
    // bununla bütün posts ları alıyoruz
    //posts[this.props.match.params.id]; //the post we want to show

    const { post } = this.props;

    if(!post){
      return <div>Loading ...</div>;
    }

    return(
      <div>
        <Link to="/">Back To Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    )
  }
}

//ownProps ile sadece issenen gelir id ile
function mapStateToProps({posts},ownProps){
  return { post : posts [ownProps.match.params.id]};
  //return {posts} bununla bütün posts ları alıyoruz
}

export default connect(mapStateToProps,{fetchPost,deletePost})(PostsShow);
