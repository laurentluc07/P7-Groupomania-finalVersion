/* eslint-disable @next/next/no-img-element */
import React, { useRef } from 'react'
import { getAllPosts, newPostRequest } from "../services/api";
import { useRouter } from "next/router";
import Image from 'next/image';
import { useState } from 'react'
import { PaperClipIcon } from '@heroicons/react/20/solid'
import { postAtom, tokenAtom, userAtom } from '../stores/store';
import { useAtom } from 'jotai';


const PostForm: React.FC = () => {

  const router = useRouter();
  const [token, _setToken] = useAtom(tokenAtom);
  const [user, _setUser] = useAtom(userAtom)
  const [posts, setPosts] = useAtom(postAtom)

  const inputDescription = useRef<HTMLInputElement>(null);
  const inputImage = useRef<HTMLInputElement>(null);

  const submitNewPost = async (e: any) => {
    e.preventDefault();

    const dataNewPost = {
      description: inputDescription.current?.value,
      image: inputImage.current?.files[0]
    }
    async function fetchDataPosts() {
      const allPosts = await getAllPosts(token as string);
      setPosts(allPosts)
    }
    try {
      if (!token) {
        router.push('/')
      } else {
        await newPostRequest(dataNewPost, token);
        await fetchDataPosts();
      }
    } catch (error) {
      console.log(error?.message)
    }
  }

  return (
    <div className={`${router.pathname != '/profile' ? 'mx-6 md:mx-16 lg:mx-32' : 'mx-0'} flex items-start space-x-4 p-4  border rounded-md shadow`}>
      <div className="flex-shrink-0">
        <img
          className="inline-block h-10 w-10 rounded-full"
          src="https://random.imagecdn.app/200/200"
          alt=""
        />
      </div>
      <div className="min-w-0 flex-1">
        <form role="form" onSubmit={submitNewPost}>
          <div className="border-b border-gray-200 focus-within:border-gray-600">
            <label htmlFor="comment" className="sr-only">
              What&rsquo;s on your mind, {user?.firstName} ?
            </label>
            <textarea
              ref={inputDescription}
              rows={3}
              name="comment"
              id="comment"
              className="block w-full resize-none border-0 border-b border-transparent p-0 pb-2 focus:border-gray-600 focus:ring-0 sm:text-sm text-gray-500"
              placeholder={`What's on your mind, ${user?.firstName}?`}
            />
          </div>
          <div className="flex justify-between item-center pt-2">
            <div className="flex items-center space-x-5">
              <div className="flex items-center">
                <div className="relative group w-8 h-8 flex justify-center items-center cursor-pointer">
                  <div className="absolute inset-0 w-full h-full rounded-md bg-gray-200 bg-opacity-80 shadow-2xl backdrop-blur-xl group-hover:bg-opacity-70 group-hover:scale-110 transition duration-300"></div>
                  <input
                    id="post_image"
                    type='file'
                    accept=".jpg, .jpeg .png, .svg, .webp"
                    ref={inputImage}
                    className="relative z-10 opacity-0 h-full w-full cursor-pointer"
                  />
                  <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full m-auto flex items-center justify-center">
                    <PaperClipIcon className="h-4 w-4" aria-hidden="true" />
                  </div>
                </div>
                <p className=" text-gray-500 ml-2">Select your photo</p>
              </div>

            </div>
            <button
              type="submit"
              className="inline-flex items-center rounded-md border border-transparent bg-gray-300 px-4 py-2 text-sm font-medium text-gray-600 shadow-sm hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default PostForm;
