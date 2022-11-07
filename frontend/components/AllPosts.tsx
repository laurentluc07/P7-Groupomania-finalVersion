import React, { useEffect } from 'react';
import { getAllPosts } from '../services/api';
import { useAtom } from 'jotai';
import { tokenAtom, postAtom } from '../stores/store';
import { useRouter } from 'next/router';
import Posts from './Post';
import PostForm from './PostForm';


const AllPost: React.FC = () => {

  const [token, setToken] = useAtom(tokenAtom)
  const router = useRouter();
  const [posts, setPosts] = useAtom(postAtom)

  useEffect(() => {
    async function fetchDataPosts() {
      const allPosts = await getAllPosts(token as string);
      setPosts(allPosts)
    }
    if (!token) {
      router.push('/')
    } else {
      fetchDataPosts();
    }
  }, [token, router, setPosts]);

  return (
    <div className="mt-4 w-full h-full">
      <div className='mx-2 md:mx-22 space-y-6'>
        <PostForm />
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
