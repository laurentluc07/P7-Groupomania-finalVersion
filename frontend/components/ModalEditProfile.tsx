import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import { editProfileRequest } from '../services/api';

interface ModalEditProfileProps {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
  user: any
  token: string
}

const ModalEditProfile: React.FC<ModalEditProfileProps> = ({ open, setOpen, user, token }) => {

  // const cancelButtonRef = useRef(null);
  const inputFirstName = useRef<HTMLInputElement>(null);
  const inputLastName = useRef<HTMLInputElement>(null);
  const inputEmail = useRef<HTMLInputElement>(null);
  const inputOccupation = useRef<HTMLInputElement>(null);

  const submitEditProfile = async (e: any) => {
    e.preventDefault();
    // e.stopPropagation();
    // console.log(e)
    // editProfileRequest
    const newDataProfilePost = {
      firstName: inputFirstName.current?.value,
      lastName: inputLastName.current?.value,
      email: inputEmail.current?.value,
      occupation: inputOccupation.current?.value,
    }
    try {
      const data = await editProfileRequest(newDataProfilePost, token);
      console.log(data)
      // setToken(data.TOKEN)
      // router.push('/post')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    open ? (
      <div className="relative z-10">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

            <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
              <div className='space-y-2'>
                <h1 className='text-center font-semibold text-gray-600 text-lg'>Edit Profile</h1>


                <form role="form" className='space-y-4' onSubmit={submitEditProfile}>
                  <div>
                    <input
                      type="text"
                      name="name"
                      ref={inputFirstName}
                      className="block w-full rounded-md border-gray-500 pr-10 text-gray-900 placeholder-gray-600 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                      placeholder="First Name"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="name"
                      ref={inputLastName}
                      className="block w-full rounded-md border-gray-500 pr-10 text-gray-900 placeholder-gray-600 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                      placeholder="Last Name"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="name"
                      ref={inputOccupation}
                      className="block w-full rounded-md border-gray-500 pr-10 text-gray-900 placeholder-gray-600 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                      placeholder="Occupation"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      ref={inputEmail}
                      className="block w-full rounded-md border-gray-500 pr-10 text-gray-900 placeholder-gray-600 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                    <button
                      type="submit"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                    >
                      Update
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div >
      </div >
    ) : null
  )
}

export default ModalEditProfile;
