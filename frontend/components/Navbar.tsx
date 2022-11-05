import React, { Fragment, useEffect } from 'react'
import { Disclosure, Menu, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, ArrowRightOnRectangleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';
import { tokenAtom, userAtom } from '../stores/store';
import { getUserAccount } from '../services/api';
import classNames from 'classnames';
import { NextLink } from '../utils/helpers'

interface Props {
  children: React.ReactNode;
}

const Navbar: React.FC<Props> = ({ children }) => {

  const router = useRouter();

  const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
  ]
  const userNavigation = [
    { name: 'Your Profile', href: '/profile' },
    { name: 'Settings', href: '#' },
    // { name: 'Sign out', href: '#' },
  ]

  const logout = () => {
    console.log("Logout!")
    setToken(null)
  };

  const [token, setToken] = useAtom(tokenAtom)
  const [user, setUser] = useAtom(userAtom)

  useEffect(() => {
    async function fetchUserAccount() {
      const userAccount = await getUserAccount(token as string);
      setUser(userAccount)
    }
    if (!token) {
      router.push('/')
    } else {
      fetchUserAccount();
    }
  }, [token, router, setUser]);

  return (
    <>
      <div className="min-h-full">
        <Popover
          as="header"
          className={({ open }) =>
            classNames(
              open ? 'fixed inset-0 z-40 overflow-y-auto' : '',
              'bg-white shadow-sm lg:static lg:overflow-y-visible z-40'
            )
          }
        >
          {({ open }) => (
            <>
              <div className="">
                {/* <div className="mx-auto max-w-7xl px-4 py-6 lg:py-3 sm:px-6 lg:px-8"> */}

                <div className="relative flex justify-between">
                  <div className="flex items-center justify-between w-full fixed px-8 py-4 z-40 shadow-md bg-white top-0 right-0 left-0">
                    <div className="flex lg:static xl:col-span-2">
                      <div className="flex flex-shrink-0 items-center">
                        <a href="/post">
                          <img
                            className="block h-10 w-28"
                            src="/icon-left-font-monochrome-black.svg"
                            alt="Your Company"
                          />
                        </a>
                      </div>
                    </div>
                    {/* <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                    <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                      <div className="w-full">
                        <label htmlFor="search" className="sr-only">
                          Search
                        </label>
                        <div className="relative">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                          </div>
                          <input
                            id="search"
                            name="search"
                            className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-indigo-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Search"
                            type="search"
                          />
                        </div>
                      </div>
                    </div>
                  </div> */}
                    <div className="flex items-center lg:hidden">
                      {/* Mobile menu button */}
                      <Popover.Button className="-mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                        <span className="sr-only">Open menu</span>
                        {open ? (
                          <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                        )}
                      </Popover.Button>
                    </div>
                    <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                      <a
                        href="#"
                        className="ml-5 flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </a>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-5 flex-shrink-0">
                        <div>
                          <Menu.Button className="flex items-center pr-2 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={user?.profilePicture} alt="" />
                            <span className="text-gray-500 capitalize pl-2">{user?.firstName}</span>
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-38 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-30">
                            {userNavigation.map((item: any, itemIndex: number) => (
                              <Menu.Item key={itemIndex}>
                                {({ active }) => (
                                  <NextLink
                                    href={item.href}
                                    className={classNames(
                                      active
                                        ? 'bg-gray-200'
                                        : 'text-gray-700',
                                      'block px-4 py-2 text-sm',
                                    )}
                                  >
                                    {item.name}
                                  </NextLink>
                                )}
                              </Menu.Item>
                            ))}
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  type="button"
                                  onClick={logout}
                                  className={classNames(
                                    active
                                      ? 'font-semibold'
                                      : 'text-gray-700',
                                    'flex w-full px-4 py-2 text-sm',
                                  )}
                                >
                                  Log out&nbsp;
                                  <ArrowRightOnRectangleIcon
                                    className="h-6 w-6 inline"
                                    aria-hidden="true"
                                  />
                                </button>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                </div>
              </div>

              <Popover.Panel as="nav" className="lg:hidden py-20" aria-label="Global">
                <div className="mx-auto max-w-3xl space-y-1 px-2 pt-2 pb-3 sm:px-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                      className={classNames(
                        item.current ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50',
                        'block rounded-md py-2 px-3 text-base font-medium'
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="border-t border-gray-200 pt-4 pb-3">
                  <div className="mx-auto flex max-w-3xl items-center px-4 sm:px-6">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={user?.profilePicture} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">{user?.firstName}</div>
                      <div className="text-sm font-medium text-gray-500">{user?.email}</div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mx-auto mt-3 max-w-3xl space-y-1 px-2 sm:px-4">
                    {userNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    ))}

                    <button
                      type="button"
                      onClick={logout}
                      className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                    >
                      Log out&nbsp;
                      <ArrowRightOnRectangleIcon
                        className="h-6 w-6 inline"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </Popover.Panel>
            </>
          )}
        </Popover>

        <div className={`${router.pathname != '/post' ? 'py-2' : 'py-10'} z-0`}>
          {children}
          {/* <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Dashboard</h1>
            </div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              Replace with your content
              <div className="px-4 py-8 sm:px-0">
                <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
              </div>
              /End replace
            </div>
          </main> */}
        </div>
      </div>
    </>
  )
}

export default Navbar;
