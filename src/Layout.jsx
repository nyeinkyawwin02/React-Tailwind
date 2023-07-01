import React from 'react';
import './Layout.css';

const App = () => {
  return (
    <>
      {/* Flex and Flex-basis */}
      {/* <div className='flex text-center mb-16'>
        <div className='h-36 bg-blue-400 basis-16'>test</div>
        <div className='h-36 bg-red-400 basis-80'>test</div>
        <div className='h-36 bg-slate-400 basis-96'>test</div>
      </div> */}

      {/* Flex column and Flex row */}
      {/* <div className='flex flex-row'>
        <div className='bg-blue-400 basis-16'>test</div>
        <div className='bg-red-400 basis-16'>test</div>
        <div className='bg-slate-400 basis-36'>test</div>
      </div>
      <div className='flex flex-row-reverse'>
        <div className='bg-blue-400 basis-16'>test</div>
        <div className='bg-red-400 basis-16'>test</div>
        <div className='bg-slate-400 basis-36'>test</div>
      </div>
      <div className='flex flex-col'>
        <div className='bg-blue-400 basis-16'>test</div>
        <div className='bg-red-400 basis-16'>test</div>
        <div className='bg-slate-400 basis-36'>test</div>
      </div>
      <div className='flex flex-col-reverse'>
        <div className='bg-blue-400 basis-16'>test</div>
        <div className='bg-red-400 basis-16'>test</div>
        <div className='bg-slate-400 basis-36'>test</div>
      </div> */}

      {/* Flex wrap */}
      {/* <div className='flex flex-wrap'>
        <div className='bg-blue-400 w-1/2'>test</div>
        <div className='bg-red-400 w-1/2'>test</div>
        <div className='bg-slate-400 w-1/2'>test</div>
      </div>
      <div className='flex flex-nowrap '>
        <div className='bg-blue-400 w-1/2'>test</div>
        <div className='bg-red-400 w-1/2'>test</div>
        <div className='bg-slate-400 w-1/2'>test</div>
      </div> */}

      {/* Flex grow */}
      {/* <div className='flex flex-wrap'>
        <div className='bg-blue-400 grow order-5'>First</div>
        <div className='bg-red-400 grow shrink order-2'>Second</div>
        <div className='bg-slate-400 grow-0 order-3'>Third</div>
        <div className='bg-pink-400 grow order-4'>Fourth</div>
        <div className='bg-orange-400 grow order-first'>Fifth</div>
      </div> */}

      {/* Flex justify */}
      {/* <div className='flex justify-center'>
        <div className='bg-blue-400'>First</div>
        <div className='bg-red-400'>Second</div>
        <div className='bg-slate-400'>Third</div>
        <div className='bg-pink-400'>Fourth</div>
        <div className='bg-orange-400'>Fifth</div>
      </div>
      <div className='flex justify-between'>
        <div className='bg-blue-400'>First</div>
        <div className='bg-red-400'>Second</div>
        <div className='bg-slate-400'>Third</div>
        <div className='bg-pink-400'>Fourth</div>
        <div className='bg-orange-400'>Fifth</div>
      </div>
      <div className='flex flex-wrap justify-evenly'>
        <div className='bg-blue-400 w-2/5'>First</div>
        <div className='bg-red-400 w-2/5'>Second</div>
        <div className='bg-slate-400 w-2/5'>Third</div>
        <div className='bg-pink-400 w-2/5'>Fourth</div>
        <div className='bg-orange-400 w-2/5'>Fifth</div>
      </div> */}

      {/* Flex wrap and height */}
      {/* <div className='flex flex-wrap h-64 '>
        <div className='bg-blue-400 w-2/6 flex items-center'>First</div>
        <div className='bg-red-400 w-2/6 flex items-end'>Second</div>
        <div className='bg-slate-400 w-2/6'>Third</div>
        <div className='bg-pink-400 w-2/6 flex items-end'>Fourth</div>
        <div className='bg-orange-400 w-2/6'>Fifth</div>
      </div>
      <div className='flex flex-wrap h-64'>
        <div className='bg-blue-400 w-2/6 self-center'>First</div>
        <div className='bg-red-400 w-2/6 self-end'>Second</div>
        <div className='bg-slate-400 w-2/6'>Third</div>
        <div className='bg-pink-400 w-2/6 self-end'>Fourth</div>
        <div className='bg-orange-400 w-2/6'>Fifth</div>
      </div>
      <div className='flex flex-wrap h-64 items-end'>
        <div className='bg-blue-400 w-2/6 self-center'>First</div>
        <div className='bg-red-400 w-2/6 self-end'>Second</div>
        <div className='bg-slate-400 w-2/6'>Third</div>
        <div className='bg-pink-400 w-2/6 self-end'>Fourth</div>
        <div className='bg-orange-400 w-2/6'>Fifth</div>
      </div> */}

      {/* Hover, active and focus */}
      {/* <div>
        <h2 className='font-bold text-2xl text-center'>
          Hover, Active and Focus
        </h2>
        <button className='bg-blue-600 w-36 h-12 rounded-md text-lg hover:bg-red-500 transition delay-100 mb-10'>
          Click Here
        </button>
        <br />
        <button className='bg-pink-400 w-36 h-12 px-5 py-2 rounded-md text-sm hover:bg-pink-700 active:bg-green-300 focus:outline-orange-800 focus:outline-1 focus:outline'>
          Click Here
        </button>
      </div> */}

      {/* Directive */}
      <button className='btn-lg'>Click Here</button>
      <button className='btn-pink'>Click Here</button>
    </>
  );
};

export default App;
