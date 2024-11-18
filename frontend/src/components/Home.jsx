import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Home() {

const navigate = useNavigate();
useEffect(()=>{
  const checkAuth = () => {
    const token = localStorage.getItem('authToken');
    if(!token){
      navigate("/signin");
    }
  };
  checkAuth();
},[navigate])


  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-indigo-600">RDBMS project</p>
              <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Hospital Management
              </h1>
              <p className="mt-6 text-xl/8 text-gray-700">
              This content reflects professionalism, technology integration, and the practical benefits
               of your RDBMS-powered solution for managing the medical ecosystem.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src="https://imgix-prod.sgs.com/-/media/sgscorp/images/temporary/tablet-showing-heart-test-result.cdn.en.1.jpg?fit=crop&auto=format&crop=focalpoint&fp-x=0&fp-y=0&fp-z=1&w=645&h=403"
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
              <p>
              In today’s fast-paced healthcare environment, managing patient data, resources, and operations effectively is more important than ever. MediManage is a robust, secure, and intuitive
               platform designed to streamline your medical ecosystem through advanced Relational Database Management System (RDBMS) technology.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Hosted Online</strong> Created to enhance my own learning 
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Privacy of user</strong> All passwords stored are hashed with a 10 level encryption
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Database backups </strong>SQL data backup
                  </span>
                </li>
              </ul>
              <p className="mt-6">
              Advanced Data Security: Protect sensitive patient information with encryption, role-based access, and regular compliance updates.
User-Friendly Interface: Simplify daily operations with an intuitive dashboard designed for healthcare professionals.
Real-Time Updates: Ensure your database reflects accurate, real-time information across all touchpoints.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
