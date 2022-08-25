import React from 'react';
import './Articles.css';
import ArticlesItem from './ArticlesItem';

function Articles() {
  return (
    <div className='articles'>
      <h1>Featured Articles</h1>
      <div className='articles__container'>
        <div className='articles__wrapper'>
          <ul className='articles__items'>
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
          <ul className='articles__items'>
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