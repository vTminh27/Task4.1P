import React from 'react';
import '../../App.css';
import Video from '../Video';
import Articles from '../Articles';
import BlogList from '../BlogList/'
import { blogList } from '../config/data'
import Header from '../Header'
import Footer from '../Footer';


function Home() {
  return (
    <>
      <Video />
      <Articles />
      <Header />
      <BlogList blogs={blogList}/>
      <Footer />
    </>
  );
}

export default Home;