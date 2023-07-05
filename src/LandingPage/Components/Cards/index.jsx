import React from 'react';
import './style.css';

const Index = () => {
  return (
    <section>
      <h1 className='mt-32 text-center text-4xl font-bold uppercase'>
        How Website design contest works
      </h1>
      <div className='flex flex-wrap'>
        <div className='card-wrapper'>
          <div className='card-container'>
            <button className='card-btn'>
              1
            </button>
            <img className='w-full' src='/xiang_gao.jpg' alt='xiang_gao' />
            <h1 className='card-h1'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita optio animi ipsa necessitatibus sint suscipit in dolores facilis.
            </h1>
            <p className='card-p'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro maxime recusandae aut, a iste iure adipisci incidunt accusantium, molestiae possimus cumque dolorum quam quae! Perferendis tempore porro ab quos aperiam.
            </p>
            <a href="#" className='card-learn-more'>Learn more</a>
          </div>
        </div>
        <div className='card-wrapper'>
          <div className='card-container'>
            <button className='card-btn'>
              2
            </button>
            <img className='w-full' src='/xiang_gao.jpg' alt='xiang_gao' />
            <h1 className='card-h1'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita optio animi ipsa necessitatibus sint suscipit in dolores facilis.
            </h1>
            <p className='card-p'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro maxime recusandae aut, a iste iure adipisci incidunt accusantium, molestiae possimus cumque dolorum quam quae! Perferendis tempore porro ab quos aperiam.
            </p>
            <a href="#" className='card-learn-more'>Learn more</a>
          </div>
        </div>
        <div className='card-wrapper'>
          <div className='card-container'>
            <button className='card-btn'>
              3
            </button>
            <img className='w-full' src='/xiang_gao.jpg' alt='xiang_gao' />
            <h1 className='card-h1'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita optio animi ipsa necessitatibus sint suscipit in dolores facilis.
            </h1>
            <p className='card-p'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro maxime recusandae aut, a iste iure adipisci incidunt accusantium, molestiae possimus cumque dolorum quam quae! Perferendis tempore porro ab quos aperiam.
            </p>
            <a href="#" className='card-learn-more'>Learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
