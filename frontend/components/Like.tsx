import React from 'react'
import { HandThumbUpIcon } from '@heroicons/react/24/outline';

interface LikeProps {
  toggleLike: () => void;
  postBooleanLike: boolean;
}

const Like: React.FC<LikeProps> = ({ toggleLike, postBooleanLike }) => {

  return (
    <>
      <div
        className="flex items-center cursor-pointer p-2 hover:rounded-md"
        onClick={toggleLike}
      >
        <HandThumbUpIcon
          stroke={postBooleanLike ? '#1b74e4' : 'gray'}
          fill={postBooleanLike ? '#1b74e4' : 'white'}
          className='h-6 w-6 mx-2 text-gray-500'
        />
        <p className={`${postBooleanLike == true ? 'text-bluefb' : 'text-gray-500'} font-semibold`}>J&apos;aime</p>
      </div>
    </>
  );
};


export default Like;
