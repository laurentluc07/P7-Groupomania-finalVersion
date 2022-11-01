import React, { useEffect, useState } from 'react';
import { gestionLike, getAllPosts, getImages, getLike, requestApi } from '../services/api';
import { atom, useAtom } from 'jotai';
import { tokenAtom, postAtom, likeAtom } from '../stores/store';
import { useRouter } from 'next/router';
import { HandThumbUpIcon, ChatBubbleLeftEllipsisIcon, ShareIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Like from './Like';
import { atomWithObservable } from 'jotai/utils';



const AllPost: React.FC = () => {

  // const [posts, setPosts] = useState([]);
  // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsImlzQWRtaW4iOiJ1c2VyIiwiaWF0IjoxNjY0ODIxMDAxLCJleHAiOjE2NjQ4MjQ2MDF9.xYSCQ7gx2pgChWorfBBJz_74nVq7_JC8g03E6E0m1QI'

  const [token, setToken] = useAtom(tokenAtom)
  const router = useRouter();
  const [posts, setPosts] = useAtom(postAtom)
  const [like, setLike] = useAtom(likeAtom)

  useEffect(() => {
    async function fetchDataPosts() {
      const allPosts = await getAllPosts(token as string);
      setPosts(allPosts)
    }
    // async function fetchLikePosts() {
    //   const allPosts = await getAllPosts(token as string);
    //   const likePosts = allPosts.map((p: any) => p.like)
    //   // console.log(allPosts)
    //   // console.log(likePosts)
    //   // setLike(likePosts)
    // }
    if (!token) {
      router.push('/login')
    } else {
      fetchDataPosts();
      // fetchLikePosts();
    }
  }, [token, router, setPosts]);

  // const [count] = useAtom(likeAtom)

  const addLike = async (id: number) => {
    // setLike(!like)
    await gestionLike(token as string, id);
    console.log('You have like post !')
  }

  return (
    <div>
      {posts.map((post: any, postIndex: number) => {
        if (post.like) {
          setLike(post.like);
        }
        console.log('like in component Post :', like)

        return (
          <div key={postIndex} className="overflow-hidden rounded-lg border border-gray-300 shadow-sm  space-y-4 my-10 mx-64">
            <div className="p-2">
              <div className="flex items-center">
                <img
                  className="inline-block h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <h1 className='capitalize font-medium px-2'>{post.User.name}</h1>
              </div>
              <div>
                <h1>{post.description}</h1>
              </div>
            </div>
            <div className="w-full flex justify-center items-center">
              <img src={`http://localhost:3007/public/images/${post.image}`} alt="" className='w-3/4' />
            </div>

            <div className='p-2'>
              {/* <div>count: {count}</div> */}
              {/* <div>count: {like}</div> */}
              <div className="flex items-center border-b border-gray-200 pb-4">
                <p>{post.like}</p>
                <HandThumbUpIcon className='h-6 w-6 mx-2' />
              </div>
              <div className="flex justify-between items-center pt-4 pb-2 px-10">
                <Like id={post.id} like={like} setLike={setLike} addLike={addLike(post.id)} />
                {/* <Like id={post.id} Like={post.like} /> */}
                {/* <div className="flex items-center">
                  <HandThumbUpIcon className='h-6 w-6 mx-2' />
                  <p>J&apos;aime</p>
                </div> */}
                <div className="flex items-center cursor-pointer hover:bg-gray-100 p-2 hover:rounded-md">
                  <ChatBubbleLeftEllipsisIcon className='h-6 w-6 mx-2 text-gray-500' />
                  <p className='text-gray-500'>Commenter</p>
                </div>
                <div className="flex items-center cursor-pointer hover:bg-gray-100 p-2 hover:rounded-md">
                  <ShareIcon className='h-6 w-6 mx-2 text-gray-500' />
                  <p className='text-gray-500'>Partager</p>
                </div>
              </div>
            </div>
          </div>

        )
      }
      )}
      {/* <h1>All posts</h1>
      <p>{JSON.stringify(posts)}</p> */}
    </div>
  )
}

export default AllPost;
