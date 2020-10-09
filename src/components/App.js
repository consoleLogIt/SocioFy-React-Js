import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/posts'
import {PostList} from './'
class App extends React.Component {
   
  componentDidMount() {
    // fetch posts action
    this.props.dispatch(fetchPosts());
    
  }





  render() {
    return (
      <div>
        <PostList posts = {this.props.posts} />
      </div>
    );
  }
}


function mapToStateProps (state){
  return {
    posts:state.posts
  };
}




export default connect(mapToStateProps)(App);
