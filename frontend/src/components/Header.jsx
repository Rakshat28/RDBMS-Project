'use client'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'Hospitals', description: 'Get a better understanding of your traffic', href: '#', icon: SquaresPlusIcon}
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact Rakshat', href: '#', icon: PhoneIcon },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate();

  const handleLogout = () =>{
    localStorage.removeItem("authToken");
    navigate('/signin');
    console.log("logout")

  }

  return (
    <header className="bg-indigo-50 shadow-sm">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-1">
        <div className="flex lg:flex-1 " onClick={()=>navigate('/home')}>
            <div className='flex justify-center'>
                <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }}>
                    <g id="Medical_Folder">
                        <circle cx="256" cy="256" r="207" style={{ fill: '#f0c48a' }} />
                        <path d="M400.046 325.372H111.954V149.075c0-13.099 10.619-23.718 23.718-23.718h71.417l21.853 22.823h147.386c13.099 0 23.718 10.619 23.718 23.718v153.474z" style={{ fill: '#7babf1' }} />
                        <path className="st2" d="M400.046 331.373H111.954a6 6 0 0 1-6-6V149.075c0-16.387 13.331-29.718 29.718-29.718h71.417c1.637 0 3.202.668 4.334 1.851l20.08 20.972h144.825c16.387 0 29.718 13.332 29.718 29.718v153.475a6 6 0 0 1-6 6zm-282.092-12h276.092V171.898c0-9.77-7.948-17.718-17.718-17.718H228.941a5.997 5.997 0 0 1-4.334-1.851l-20.08-20.972h-68.855c-9.77 0-17.718 7.948-17.718 17.718v170.298z" />
                        <path d="M376.328 386.643H135.672c-13.099 0-23.718-10.619-23.718-23.718V210.346c0-13.099 10.619-23.718 23.718-23.718h240.656c13.099 0 23.718 10.619 23.718 23.718v152.579c0 13.099-10.619 23.718-23.718 23.718z" style={{ fill: '#d3e6f8' }} />
                        <path d="M376.328 186.627h-18.185v200.016h18.185c13.099 0 23.718-10.619 23.718-23.719V210.346c0-13.1-10.619-23.719-23.718-23.719z" style={{ fill: '#a4cff2' }} />
                        <path style={{ fill: '#fd919e' }} d="M311.427 267.622h-36.414v-36.414h-38.026v36.414h-36.414v38.027h36.414v36.414h38.026v-36.414h36.414z" />
                        <path className="st2" d="M275.014 348.062h-38.027a6 6 0 0 1-6-6v-30.414h-30.414a6 6 0 0 1-6-6v-38.027a6 6 0 0 1 6-6h30.414v-30.414a6 6 0 0 1 6-6h38.027a6 6 0 0 1 6 6v30.414h30.414a6 6 0 0 1 6 6v38.027a6 6 0 0 1-6 6h-30.414v30.414a6 6 0 0 1-6 6zm-32.028-12h26.027v-30.414a6 6 0 0 1 6-6h30.414v-26.027h-30.414a6 6 0 0 1-6-6v-30.414h-26.027v30.414a6 6 0 0 1-6 6h-30.414v26.027h30.414a6 6 0 0 1 6 6v30.414z" />
                        <g>
                        <path className="st2" d="M376.328 392.643H135.672c-16.387 0-29.718-13.332-29.718-29.718V210.346c0-16.387 13.331-29.718 29.718-29.718h240.656c16.387 0 29.718 13.332 29.718 29.718v152.579c0 16.387-13.331 29.718-29.718 29.718zM135.672 192.627c-9.77 0-17.718 7.948-17.718 17.718v152.579c0 9.77 7.948 17.718 17.718 17.718h240.656c9.77 0 17.718-7.948 17.718-17.718V210.346c0-9.77-7.948-17.718-17.718-17.718H135.672z" />
                        </g>
                    </g>
                </svg>
            </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
              Explore Database
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-violet-100">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-indigo-100"
                  >
                    <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            About 
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Product
          </a>
          <a href="#" onClick={handleLogout} className="text-sm/6 font-semibold text-gray-900 hover:text-red-900 ">
            Logout
          </a>
        </PopoverGroup>
        
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Explore Database
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  About
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Product
                </a>
                
              </div>
              <div className="py-6" onClick={handleLogout}>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-red-200"
                >
                  Log out
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
