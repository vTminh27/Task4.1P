import React from 'react';
import { Link } from 'react-router-dom';

function ArticlesItem(props) {
  return (
    <>
      <li className='articles__item'>
        <Link className='articles__item__link' to={props.path}>
          <figure className='articles__item__pic-wrap' data-category={props.label}>
            <img
              className='articles__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='articles__item__info'>
            <h5 className='articles__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default ArticlesItem;