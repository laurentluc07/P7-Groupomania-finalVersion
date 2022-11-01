import moment from 'moment'
import React from 'react'
import PostCommentForm from './PostCommentForm'
import Image from 'next/image'

interface PostCommentProps {
  postId: number,
  comment: any,
  profilePicture: string
}

const PostComment: React.FC<PostCommentProps> = ({ postId, comment, profilePicture }) => {
  // console.log(typeof comment)
  console.log(comment)

  return (
    <div className="flex w-full items-start py-2">
      <div className="w-6 h-6 rounded-full">
        <Image src={profilePicture} width={100} height={100} alt={comment.User.firstName} />
      </div>
      <div className='bg-gray-100 rounded-lg p-2 space-y-2 w-full ml-2'>
        <div className="flex items-center space-x-2">
          <h1 className="font-semibold text-sm text-gray-700">{comment.User.firstName}</h1>
          <span className="text-xs font-thin text-gray-400">
            {moment(comment.createdAt).fromNow()}
          </span>
        </div>
        <p className="text-xs text-gray-700">{comment.content}</p>
      </div>
    </div>
  )
}

export default PostComment
