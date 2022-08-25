import React from 'react';
import './Articles.css';
import ArticlesItem from './ArticlesItem';

function Articles() {
  return (
    <div className='cards'>
      <h1>Featured Articles</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <ArticlesItem
              src='images/articles.jpg'
              text='Explore Deakin University where you all belong to'
              label='Tuan Minh Vu'
              path='/'
            />
            <ArticlesItem
              src='images/articles.jpg'
              text='Explore Deakin University where you all belong to'
              label='Tuan Minh Vu'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <ArticlesItem
              src='images/articles.jpg'
              text='Explore Deakin University where you all belong to'
              label='Tuan Minh Vu'
              path='/'
            />
            <ArticlesItem
              src='images/articles.jpg'
              text='Explore Deakin University where you all belong to'
              label='Tuan Minh Vu'
              path='/'
            />
            <ArticlesItem
              src='images/articles.jpg'
              text='Explore Deakin University where you all belong to'
              label='Tuan Minh Vu'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Articles;