import React, { useRef } from 'react'
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { tokenAtom } from '../stores/store';
import { commentPostRequest } from '../services/api';

interface PostCommentFormProps {
  postId: number
}

const PostCommentForm: React.FC<PostCommentFormProps> = ({ postId }) => {
  const router = useRouter();
  const inputComment = useRef<HTMLInputElement>(null);
  const [token, setToken] = useAtom(tokenAtom)

  const submitNewComment = async (e: any) => {
    // e.preventDefault();

    const dataNewComment = {
      content: inputComment.current?.value,
    }

    try {
      if (!token) {
        router.push('/login')
      } else {
        const data = await commentPostRequest(dataNewComment, token, postId);
        console.log(data)

      }
    } catch (error) {
      console.log(error?.message)
    }
  }
  return (

    <form role="form" className="w-full" onSubmit={submitNewComment}>
      <div className=" w-full">
        <input
          type='text'
          ref={inputComment}
          name="comment"
          id="comment"
          className="block p-2 w-full resize-none border-0 border-b border-transparent bg-gray-100 pb-2 focus:border-gray-600 focus:ring-0 sm:text-sm rounded-lg focus:rounded-lg"
          placeholder="Write an answer ..."
        />
      </div>
    </form>
  )
}

export default PostCommentForm;