import React from 'react';
import {PostList} from './'
class Home extends React.Component {
    render() {
        const {posts} = this.props;
        // console.log(this.props);
        return (
            <div className = "home">
               <PostList posts = {posts} /> 
            </div>
        );
    }
}

export default Home;