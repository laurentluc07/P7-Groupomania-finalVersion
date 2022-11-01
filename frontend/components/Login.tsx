/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useRef } from 'react'
import { loginRequest } from "../services/api";
import { tokenAtom } from '../stores/store';
import { useRouter } from "next/router";
import { useAtom } from 'jotai';
import Image from 'next/image';
import Link from 'next/link';


const Login: React.FC = () => {

  const router = useRouter();
  const [token, setToken] = useAtom(tokenAtom);
  // console.log(token)

  const inputEmail = useRef<HTMLInputElement>(null);
  const inputPassword = useRef<HTMLInputElement>(null);

  const submitHandler = async (e: any) => {
    e.preventDefault();

    const dataUser = {
      email: inputEmail.current?.value,
      password: inputPassword.current?.value
    }
    try {
      const data = await loginRequest(dataUser);
      console.log(data)
      setToken(data.TOKEN)
      router.push('/post')
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
                <h4 className="font-bold">S&apos;identifier</h4>
                <p className="mb-0">Entrez votre email et votre mot de passe pour vous connecter</p>
              </div>
              <div className="flex-auto p-6">
                <form role="form" onSubmit={submitHandler}>
                  <div className="mb-4">
                    <input
                      ref={inputEmail}
                      name="username"
                      type="text"
                      placeholder="Email"
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
                    <p className='text-sm'>Not a member yet ?</p>
                    <Link href="/signup">
                      <a className="underline text-sm">Signup</a>
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
                      S&apos;identifier
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 flex-col justify-center hidden w-6/12 h-full max-w-full px-3 pr-0 my-auto text-center flex-0 lg:flex">
            <div className="relative flex flex-col justify-center h-full px-24 m-4 bg-gradient-to-tl bg-gray-200 rounded-xl">
              {/* <Image src='/LogoDesktop.svg' alt='' className="absolute left-0" width={100} height={100} /> */}
              {/* <img className="absolute left-0 opacity-40" src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/shapes/pattern-lines.svg" alt="lignes de motif" /> */}
              <div className="relative">
                <img className="relative w-full max-w-125 z-2" src="icon-left-font-monochrome-black.png" alt="groupomania-logo" />
                {/* <img className="relative w-full max-w-125 z-2" src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/illustrations/chat.png" alt="chat-img" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Login;
