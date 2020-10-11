import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {fetchPosts} from '../actions/posts'
import {PostList} from './'
import PropTypes from 'prop-types';
import {NavBar} from './'





const home = () => <div>Home</div>
const signup = () => <div>Sign Up</div>
const login = () => <div>Log In</div>

class App extends React.Component {
   
  componentDidMount() {
    // fetch posts action
    this.props.dispatch(fetchPosts());
    
  }





  render() {
    return (
      <Router>
      <div>
        <NavBar />
        {/* <PostList posts = {this.props.posts} /> */}
        <ul>
          <li>
            <Link to = "/">Home</Link>
          </li>
          <li>
            <Link to = "/signup">signup</Link>
          </li> <li>
            <Link to = "/login">login</Link>
          </li>
          </ul>
        <Route exact path ="/" component = {home} />
        <Route path ="/signup" component = {signup} />
        <Route path ="/login" component = {login} />
      </div>
      </Router>
    );
  }
}


function mapToStateProps (state){
  return {
    posts:state.posts
  };
}


App.propType = {
  posts:PropTypes.array.isRequired
}

export default connect(mapToStateProps)(App);
