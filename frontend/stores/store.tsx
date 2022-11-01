import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

interface UserAccount {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  occupation: string,
  profilePicture: string,
  isAdmin: string
}

// [
//   {
//     id: number,
//     description: string,
//     image: string,
//     like: number,
//     status: boolean,
//     createdAt: string,
//     updatedAt: string,
//     UserId: number,
//     User: {
//       firstName: string,
//       lastName: string,
//       isAdmin: string,
//       profilePicture: string
//     },
//     comments: [
//       {
//         id: number,
//         content: string,
//         status: string,
//         createdAt: string,
//         updatedAt: string,
//         UserId: number,
//         postId: number,
//         User: {
//           firstName: string
//         }
//       }
//     ]
//   }
// ]

export interface Post {
  id: number,
  description: string,
  image: string,
  like: number,
  status: boolean,
  createdAt: string,
  updatedAt: string,
  UserId: number,
  User: {
    firstName: string,
    lastName: string,
    isAdmin: string,
    profilePicture: string
  },
  comments: [
    {
      // id, content, status, createdAt, updatedAt, UserId, postId, User
      id: number,
      content: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      UserId: number,
      postId: number,
      User: {
        firstName: string
      }
    }
  ]
}

interface Like {
  Like: number
}

export const tokenAtom = atomWithStorage<string | null>('jwt-key', null)
// export const tokenAtom = atom<string>('')

export const userAtom = atom<UserAccount | null>(null)

export const postAtom = atom<Post[]>([])

// export const likeAtom = atom<Like | null>(null)

export const likeAtom = atom(0)
