import React, { useRef, useState } from 'react';
import './style.css';

const Index = () => {
  const searchContainer = useRef(<HTMLElement />);

  const focusSearch = ($flag) => {
    if ($flag) {
      searchContainer.current.focus();
    } else {
      searchContainer.current.blur();
    }
  };

  return (
    <>
      <header className='px-10 md:px-7 bg-zinc-500 text-white'>
        <nav className='flex font-light text-lg justify-between'>
          <div className='flex justify-start space-x-5 ml-5'>
            <img
              src='logo.png'
              alt='logo'
              className='h-20'
              onClick={() => {
                window.location.reload();
              }}
            />
            <ul className='flex list-none space-x-5 mt-7'>
              <li>
                <a href='#' className='header-nav-item tracking-wide p-1'>
                  Home
                </a>
              </li>
              <li>
                <a href='#' className='header-nav-item tracking-wide p-1'>
                  Movies
                </a>
              </li>
              <li>
                <a href='#' className='header-nav-item tracking-wide p-1'>
                  TV Show
                </a>
              </li>
              <li>
                <a href='#' className='header-nav-item tracking-wide p-1'>
                  Categories
                </a>
              </li>
            </ul>
          </div>
          <div className='flex list-none space-x-5 md:space-x-3 justify-end mt-7 mr-5'>
            <span>
              <form className='flex items-center'>
                <label htmlFor='header-search' className='sr-only'>
                  Search
                </label>
                <div className='relative flex'>
                  <input
                    type='text'
                    id='header-search'
                    className='header-nav-item text-gray-900 bg-transparent block w-24 outline-none transition-all duration-200 focus:w-40 placeholder:text-gray-200 placeholder:pl-1 placeholder:tracking-wide'
                    placeholder='Search...'
                    ref={searchContainer}
                  />
                  <div
                    className='inset-y-0 right-0 flex items-center cursor-pointer'
                    onMouseOverCapture={() => focusSearch(true)}
                    onMouseLeave={() => focusSearch(false)}
                  >
                    <svg
                      aria-hidden='true'
                      className='w-5 h-5 text-gray-800 dark:text-gray-100'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </div>
                </div>
              </form>
            </span>
            <span>
              <a href='#' className='header-nav-item tracking-wide p-1'>
                Language
              </a>
            </span>
            <span className='p-3 -mt-3 mb-2 align-middle border-opacity-100 border-2 rounded-lg border-gray-300 md:tracking-tighter'>
              <a href='#' className='header-nav-item pb-1'>
                Sign In
              </a>{' '}
              /{' '}
              <a href='#' className='header-nav-item pb-1'>
                Sign Out
              </a>
            </span>
          </div>
        </nav>
      </header>
      <section>
        <div className='flex items-center'>
          <div className='w-2/3 py-40 bg-gray-100 pl-16 pr-10'>
            <h1 className='font-semibold tracking-wide text-5xl py-3'>
              Hero Section
            </h1>
            <p className='pb-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint modi
              molestias, tenetur libero debitis animi corporis obcaecati vitae
              neque ab explicabo nulla dolorem alias a id impedit eos aperiam
              itaque.
            </p>
            <div>
              <button className='hero-btn border-opacity-0 bg-yellow-300 hover:bg-transparent hover:border-opacity-100 active:bg-yellow-400'>
                Buy
              </button>
              <button className='hero-btn hover:bg-yellow-400 active:bg-yellow-300'>
                Read More
              </button>
            </div>
          </div>
          <div className='w-1/3'>
            <img src='xiang_gao.jpg' alt='xiang_gao' className='h-full' />
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
