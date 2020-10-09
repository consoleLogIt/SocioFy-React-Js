import React from 'react';
import PropTypes from 'prop-types'

class PostList extends React.Component {
    render() {
    const {posts}  = this.props;

        return (
            <div className='post-list'>
          {posts.map((post)=>(
            <div className='post-wrapper' key = {post._id}>
             <div className = 'post-header'>
               <div className = 'post-avatar'>
                 <img src = "https://www.flaticon.com/svg/static/icons/svg/1754/1754809.svg" alt='user-img'></img>
               </div>
             </div>
    <div >
      <span className="post-author">{post.user.name}</span>
      <span className="post-time">a minute ago...</span>
    </div>
<div className="post-content">
 {post.content}
</div>

<div className="post-actions">
  <div className = "post-like">
    <img src = "https://www.flaticon.com/svg/static/icons/svg/941/941603.svg" alt = "like-icon-img"></img>
    <span>{post.likes.length}</span>
  </div>

  <div className = "post-comments-icon">
    <img src = "https://www.flaticon.com/svg/static/icons/svg/2190/2190552.svg" alt = "comment-icon-img"></img>
    <span>{post.comments.length}</span>
  </div>
</div>


<div className = "post-comment-box">
  <input placeholder = " comment on this post"></input>
</div>

<div className = "post-comments-list">
<div className = "post-comments-item">

  <div className = "post-comment-header">
    <span className = "post-comment-author">KISHAN</span>
    <span className = "post-comment-time">a minute ago...</span>
    <span className = "post-comment-likes">22</span>

  </div>
<div className = "post-comment-content">
  Random comment
</div>



</div>

</div>

    </div>
            
          ))}
        </div>
        );
    }
}



PostList.propType = {
  posts:PropTypes.array.isRequired
}


export default PostList;