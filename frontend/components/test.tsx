<Transition.Root show={open} as={Fragment}>
  {/* <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={() => setOpen(false)}> */}
  <Dialog as="div" className="relative z-10" onClose={() => setOpen(false)}>

    <Transition.Child
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
    </Transition.Child>

    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
            <div>
              <h1>Edit Profile</h1>

              <form role="form" onSubmit={submitNewPost}>
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
                {/* <div className="mb-4">
                      <input
                        ref={inputPassword}
                        name="password"
                        type="password"
                        placeholder="Mot de passe"
                        className="border-transparent focus:border-pastelgreen focus:ring-0 focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none
                      rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal
                      text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                      />
                    </div> */}
                {/* <div className='flex items-center space-x-3'>
                      <p className='text-sm'>Not a member yet ?</p>
                      <Link href="/signup">
                        <a className="underline text-sm">Signup</a>
                      </Link>
                    </div> */}
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

              {/* <form role="form" className='space-y-4' onSubmit={submitNewPost}>
                    <div>
                      <input
                        type="text"
                        name="name"
                        // id="name"
                        ref={inputName}
                        className="block w-full rounded-md border-gray-500 pr-10 text-gray-900 placeholder-gray-600 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                        placeholder="Name"
                      // defaultValue={user?.name}
                      // aria-invalid="true"
                      // aria-describedby="email-error"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        // id="email"
                        ref={inputEmail}
                        className="block w-full rounded-md border-gray-500 pr-10 text-gray-900 placeholder-gray-600 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                        placeholder="you@example.com"
                      // defaultValue={user?.email}
                      // aria-invalid="true"
                      // aria-describedby="email-error"
                      />
                    </div> */}

              {/* <button
                      type="submit"
                      className="inline-flex items-center rounded-md border border-transparent bg-gray-300 px-4 py-2 text-sm font-medium text-gray-600 shadow-sm hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Post
                    </button> */}
              {/* <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                        Payment successful
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aliquam laudantium explicabo
                          pariatur iste dolorem animi vitae error totam. At sapiente aliquam accusamus facere veritatis.
                        </p>
                      </div>
                    </div> */}
              {/* </div> */}
              {/* <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                      <button
                        // type="button"
                        type="submit"
                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                        // onClick={() => setOpen(false)}
                        onClick={(e) => e.preventDefault()}

                      >
                        Update
                      </button> */}
              {/* <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                      >
                        Cancel
                      </button> */}
              {/* </div>
                  </form> */}
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </div>
    </div >
  </Dialog >
</Transition.Root >
