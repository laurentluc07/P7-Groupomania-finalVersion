/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useRef } from 'react'
import { tokenAtom } from '../stores/store';
import { useRouter } from "next/router";
import { useAtom } from 'jotai';
import Image from 'next/image';
import { HandThumbUpIcon } from '@heroicons/react/24/outline';
import { useUpdateAtom } from 'jotai/utils';

interface LikeProps {
  toggleLike: () => void;
  postBooleanLike: boolean;
}

const Like: React.FC<LikeProps> = ({ toggleLike, postBooleanLike }) => {

  const [token, setToken] = useAtom(tokenAtom)
  const router = useRouter();


  return (
    <>
      <div
        className="flex items-center cursor-pointer p-2 hover:rounded-md"
        onClick={toggleLike}
      >
        <HandThumbUpIcon
          stroke={postBooleanLike == true ? '#1b74e4' : 'gray'}
          fill={postBooleanLike == true ? '#1b74e4' : 'white'}
          className='h-6 w-6 mx-2 text-gray-500'
        />
        <p className={`${postBooleanLike == true ? 'text-bluefb' : 'text-gray-500'} font-semibold`}>J&apos;aime</p>
      </div>
    </>
  );
};


export default Like;
