import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Link, Route,Switch} from 'react-router-dom';
import {fetchPosts} from '../actions/posts'
import PropTypes from 'prop-types';
import {Home,NavBar,Page404,Login,Register} from './'





// const home = () => <div>Home</div>
// const signup = () => <div>Sign Up</div>
// const login = () => <div>Log In</div>

class App extends React.Component {
   
  componentDidMount() {
    // fetch posts action
    this.props.dispatch(fetchPosts());
    
  }




  render() {
    const { posts } = this.props;
    
    return (
      <Router>
      <div>
         <NavBar />
        <Switch>
        <Route exact path ="/" render = {(props)=>{
          return <Home {...props}  posts= {posts}  />
        }} /> 
        <Route path ="/login" component = {Login} /> 
        <Route path ="/signup" component = {Register} />
        <Route component = {Page404} />

        </Switch>

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
