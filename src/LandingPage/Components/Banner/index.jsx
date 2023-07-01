import React from 'react';
import './style.css';

const Index = () => {
  return (
    <section className='bg bg-blue-500'>
      <ul className='container flex p-5 font-bold text-white'>
        <li>Home</li>
        <li className='pl-5'>Website Design</li>
      </ul>
      <h1 className='heading'>
        World's #1 Website Design
      </h1>

      <ul className='lg:flex flex-wrap justify-center'>
        <li className='service-list'>
          <span className='service-icon'>
            <ion-icon name='star'></ion-icon>
          </span>
          24/7 Customer Support
        </li>
        <li className='service-list'>
          <span className='service-icon'>
            <ion-icon name='star'></ion-icon>
          </span>
          Get 70+ Design within 7 Days
        </li>
        <li className='service-list'>
          <span className='service-icon'>
            <ion-icon name='star'></ion-icon>
          </span>
          70k+ Website Designs
        </li>
        <li className='service-list'>
          <span className='service-icon'>
            <ion-icon name='star'></ion-icon>
          </span>
          100k+ Satified Customer
        </li>
      </ul>

      <h1 className='heading'>
        What are you looking for?
      </h1>
      <div className='text-center my-5'>
        <button className='text-white font-bold bg-cyan-400 px-6 py-4 hover:bg-cyan-500 rounded-full duration-100 mr-4'>
          Get Started Now
        </button>
        <button className='text-green-400 font-bold bg-cyan-100 px-6 py-4 hover:bg-green-500 hover:text-cyan-500 rounded-full duration-100'>
          HOW IT WORKS
        </button>
      </div>
      <div className='flex justify-center space-x-5'>
        <span className='icon'>
          <ion-icon name='star'></ion-icon>
        </span>
        <span className='icon'>
          <ion-icon name='star'></ion-icon>
        </span>
        <span className='icon'>
          <ion-icon name='star'></ion-icon>
        </span>
        <span className='icon'>
          <ion-icon name='star'></ion-icon>
        </span>
        <span className='icon'>
          <ion-icon name='star-half'></ion-icon>
        </span>
      </div>
      <div>
        <p className='foot-banner'>
          Check out our &nbsp;
          <a href='#' className='text-yellow-300'>
            review 4.95/5 average from 37861 ratings
          </a>
        </p>
        <p className='foot-banner my-5 pb-6'>
          2969 reviews &nbsp;
          <span className=' text-yellow-300'>
            <ion-icon name='star'></ion-icon>
          </span>{' '}
          &nbsp; toolup
        </p>
      </div>
    </section>
  );
};

export default Index;
