import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './Header.css';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          laboriosam quaerat nemo quisquam ducimus dignissimos, ipsum vitae
          provident voluptas sapiente, rerum sequi optio, reprehenderit ad
          veritatis in nostrum? Ex, pariatur?
        </p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='your email address' />
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='Our application users' />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
        <img src={ai} alt='Artificial Intelligence' />
      </div>
    </div>
  );
};

export default Header;
