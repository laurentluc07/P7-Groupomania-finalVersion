import React from 'react';
import PostForm from '../components/PostForm';
import Navbar from '../components/Navbar';
import AllPost from '../components/AllPosts';

const Post: React.FC = () => {
  return (
    <Navbar>
      {/* <PostForm /> */}
      <AllPost />
    </Navbar>
  )
}

export default Post;
