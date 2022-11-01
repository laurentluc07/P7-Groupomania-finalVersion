import React, { useEffect } from 'react';
import { getAllPosts } from '../services/api';
import { useAtom } from 'jotai';
import { tokenAtom, postAtom, likeAtom } from '../stores/store';
import { useRouter } from 'next/router';
import Posts from './Post';
import TestComponent from './TestComponent';
import PostForm from './PostForm';


const AllPost: React.FC = () => {

  const [token, setToken] = useAtom(tokenAtom)
  const router = useRouter();
  const [posts, setPosts] = useAtom(postAtom)

  useEffect(() => {
    async function fetchDataPosts() {
      const allPosts = await getAllPosts(token as string);
      setPosts(allPosts)
      // setPosts([...posts, allPosts])
    }
    if (!token) {
      router.push('/login')
    } else {
      fetchDataPosts();
    }
  }, [token, router, setPosts]);

  return (
    <div className="mt-4 w-full h-full">
      <div className='mx-22 space-y-6'>
        {/* <TestComponent /> */}
        <PostForm />
        {/* <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 mx-2'> */}
        {posts.length ? (
          posts.map((post) => <Posts key={post.id} post={post} />)
        ) : (
          <p>No posts yet!</p>
        )}
      </div>
    </div>
  )
}

export default AllPost;
