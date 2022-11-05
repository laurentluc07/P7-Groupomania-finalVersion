
import React, { useEffect, useState } from 'react';
import { deletePostRequest, gestionLike, getAllLike, getAllPosts, getLike } from '../services/api';
import { useAtom } from 'jotai';
import { tokenAtom, postAtom } from '../stores/store';
import { useRouter } from 'next/router';
import { HandThumbUpIcon, ChatBubbleLeftEllipsisIcon, ShareIcon, HeartIcon, EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Like from './Like';
import moment from 'moment';
import PostCommentForm from './PostCommentForm';
import PostComment from './PostComment';


const Post: React.FC<{ post: any }> = ({ post }) => {

  const [token, setToken] = useAtom(tokenAtom)
  const router = useRouter();
  const [like, setLike] = useState(post.like)
  const [posts, setPosts] = useAtom(postAtom)
  const [postBooleanLike, setPostBooleanLike] = useState(false)

  useEffect(() => {
    async function fetchDataLike() {
      const data = await getLike(token as string, post.id)
      setPostBooleanLike(data.hasLike)
    }
    fetchDataLike();
  }, [post.id, router, token])

  const toggleLike = async (id: number) => {
    const data = await gestionLike(token as string, id)
    console.log(data)

    setLike(data.nbLike)
    setPostBooleanLike(data.hasLike)
    console.log('You have like post !')
  }

  async function fetchDataPosts() {
    const allPosts = await getAllPosts(token as string);
    setPosts(allPosts)
  }

  const deletePost = async (id: number) => {
    const isConfirm = window.confirm("Êtes-vous sûrs de supprimer le post?")
    if (!isConfirm) {
      return;
    }
    await deletePostRequest(token as string, id)
    await fetchDataPosts();
  }

  const [openComment, setOpenComment] = useState(false)
  const [openModifPosts, setOpenModifPosts] = useState(false)

  return (
    <div className="w-full shadow h-auto bg-white rounded-md">
      <div className="flex items-center space-x-2 p-2.5 px-4">
        <div className="w-10 h-10 rounded-full">
          <Image src={post.User?.profilePicture} width={100} height={100} alt={post.User?.firstName} />
        </div>
        <div className="flex-grow flex flex-col">
          <p className="font-semibold text-sm text-gray-700">{post.User?.firstName}</p>
          <span className="text-xs font-thin text-gray-400">
            {moment(post.createdAt).fromNow()}
          </span>
        </div>
        <div className="w-6 h-6 relative">
          <button onClick={() => setOpenModifPosts(!openModifPosts)} className=" w-full h-full hover:bg-gray-100 rounded-full text-gray-400 focus:outline-none">
            <EllipsisVerticalIcon />
          </button>
          {openModifPosts ? (
            <div className="absolute right-0 border border-gray-100 rounded-md bg-white shadow-lg overflow-hidden z-20">
              <p className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 w-full cursor-pointer">Modifier</p>
              <p onClick={() => deletePost(post.id)} className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 w-full cursor-pointer">Supprimer</p>
            </div>
          ) : null}
        </div>
      </div>
      {post.description ? (
        <div className="mb-1">
          <p className="text-gray-700 max-h-10 truncate px-3 text-sm">
            {post.description}
          </p>
        </div>
      ) : null}
      {post.image ? (
        <div className="w-full h-76 max-h-100 relative">
          <Image
            src={post.image}
            alt={post.id}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ) : null}

      <div className="w-full flex flex-col space-y-2 p-2 px-4">
        <div className="flex items-center justify-between pb-2 border-b border-gray-300 text-gray-500 text-sm">
          <div className="flex items-center space-x-1">
            <button className="focus:outline-none flex items-center justify-center w-6 h-6 rounded-full bg-red-500 text-white">
              <HeartIcon className='h-4 w-4' />
            </button>
            <button className="focus:outline-none flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500 text-white">
              <p className='text-sm'>😲</p>
            </button>
            <button className="focus:outline-none flex items-center justify-center w-6 h-6 rounded-full bg-primary text-bluefb">
              <HandThumbUpIcon className='h-4 w-4' />
            </button>
            <div className="ml-1">
              <p>{like}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button>{post.comments?.length} Comments</button>
            <button>{post.shares} Shares</button>
          </div>
        </div>
        <div className="flex space-x-3 text-gray-500 text-sm font-thin">
          <button className="flex-1 flex items-center h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md">
            <Like postBooleanLike={postBooleanLike} toggleLike={() => toggleLike(post.id)} />
          </button>
          <button onClick={() => setOpenComment(!openComment)} className="flex-1 flex items-center h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md">
            <ChatBubbleLeftEllipsisIcon className='h-6 w-6 mx-2 text-gray-500' />
            <p className="font-semibold">Comment</p>
          </button>
          <button className="flex-1 flex items-center h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md">
            <ShareIcon className='h-6 w-6 mx-2 text-gray-500' />
            <p className="font-semibold">Share</p>
          </button>
        </div>
        {openComment ? (
          post.comments.length ? (
            <>
              <div className="flex w-full space-x-2 pt-4">
                <div className="w-6 h-6 rounded-full">
                  <Image src={post.User?.profilePicture} width={100} height={100} alt={post.User?.firstName} />
                </div>
                <PostCommentForm postId={post.id} />
              </div>
              {post.comments.map((comment: any) => <PostComment key={comment.id} postId={post.id} comment={comment} profilePicture={post.User?.profilePicture} />)}
            </>
          ) : (
            <div className="flex w-full space-x-2 py-4">
              <div className="w-6 h-6 rounded-full">
                <Image src={post.User?.profilePicture} width={100} height={100} alt={post.User?.firstName} />
              </div>
              <PostCommentForm postId={post.id} />
            </div>
          )
        ) : null}
      </div>
    </div>
  )
}

export default Post;
