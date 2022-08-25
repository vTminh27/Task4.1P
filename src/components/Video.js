import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Video.css';

function Video() {
  return (
    <div className='hero-container'>
      <video src='/videos/Deakin.mp4' autoPlay loop muted />
      <h1>DEAKIN AWAITS</h1>
      <p>What are you waiting for? Let's study!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default Video