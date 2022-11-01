/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useRef } from 'react'
import { loginRequest, signupRequest } from "../services/api";
import { tokenAtom } from '../stores/store';
import { useRouter } from "next/router";
import { useAtom } from 'jotai';
import Image from 'next/image';
import Link from 'next/link';


const Signup: React.FC = () => {

  const router = useRouter();
  const [token, setToken] = useAtom(tokenAtom);
  // console.log(token)
  const inputFirstName = useRef<HTMLInputElement>(null);
  const inputLastName = useRef<HTMLInputElement>(null);
  const inputEmail = useRef<HTMLInputElement>(null);
  const inputPassword = useRef<HTMLInputElement>(null);
  const inputOccupation = useRef<HTMLInputElement>(null);

  const submitHandler = async (e: any) => {
    e.preventDefault();

    const dataUser = {
      firstName: inputFirstName.current?.value,
      lastName: inputLastName.current?.value,
      email: inputEmail.current?.value,
      occupation: inputOccupation.current?.value,
      password: inputPassword.current?.value
    }
    try {
      const data = await signupRequest(dataUser);
      console.log(data)
      // setToken(data.TOKEN)
      router.push('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="relative flex items-center min-h-screen p-0 overflow-hidden bg-center bg-cover">
      <div className="w-full mx-6 px-6 z-10">
        <div className="flex flex-wrap -mx-3">
          <div className="flex flex-col w-full max-w-full px-3 mx-auto lg:mx-0 shrink-0 md:flex-0 md:w-7/12 lg:w-5/12 xl:w-4/12">
            <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none lg:py-4 rounded-2xl bg-clip-border">
              <div className="p-6 pb-0 mb-0">
                <h4 className="font-bold">Créer votre compte</h4>
              </div>
              <div className="flex-auto p-6">
                <form role="form" onSubmit={submitHandler}>
                  <div className="mb-4">
                    <input
                      ref={inputFirstName}
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      className="border-transparent focus:border-pastelgreen focus:ring-0 focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none
                      rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal
                      text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      ref={inputLastName}
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      className="border-transparent focus:border-pastelgreen focus:ring-0 focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none
                      rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal
                      text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      ref={inputEmail}
                      name="email"
                      type="text"
                      placeholder="Email"
                      className="border-transparent focus:border-pastelgreen focus:ring-0 focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none
                      rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal
                      text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      ref={inputOccupation}
                      name="occupation"
                      type="text"
                      placeholder="Occupation"
                      className="border-transparent focus:border-pastelgreen focus:ring-0 focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none
                      rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal
                      text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      ref={inputPassword}
                      name="password"
                      type="password"
                      placeholder="Mot de passe"
                      className="border-transparent focus:border-pastelgreen focus:ring-0 focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none
                      rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal
                      text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                    />
                  </div>

                  <div className='flex items-center space-x-3'>
                    <p className='text-sm'>You are a member ?</p>
                    <Link href="/login">
                      <a className="underline text-sm">Login</a>
                    </Link>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="inline-block w-full px-6 py-3 mt-6 mb-0 font-bold text-center text-gray-800 uppercase
                      align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85
                      hover:shadow-soft-xs bg-gray-200 leading-pro text-xs
                      ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
                    >
                      S&apos;inscrire
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 flex-col justify-center hidden w-6/12 h-full max-w-full px-3 pr-0 my-auto text-center flex-0 lg:flex">
            <div className="relative flex flex-col justify-center h-full px-24 m-4 bg-gradient-to-tl bg-gray-200 rounded-xl">
              <div className="relative">
                <img className="relative w-full max-w-125 z-2" src="icon-left-font-monochrome-black.png" alt="groupomania-logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Signup;
