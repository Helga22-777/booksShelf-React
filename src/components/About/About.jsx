import React from 'react';
import './About.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const About = () => {
  return (
    <>
    <Navbar />
    <div className="about-container">
      <h1>About Our Library App</h1>
      <p>Welcome to the library app! This platform allows you to explore a wide range of books, add favorites to your personalized shelf, and access detailed book information.</p>
      <p>Our mission is to bring knowledge closer to you with easy access to free and premium books across genres and categories.</p>
      <h2>Features</h2>
      <ul>
        <li>Browse through a large selection of books</li>
        <li>Add books to your personal shelf</li>
        <li>Access book details, including authors, publication dates, and descriptions</li>
      </ul>
      <p>Thank you for using our app! We hope it becomes a valuable tool in your reading journey.</p>
    </div>
    <Footer />
    </>
    
  );
};

export default About;
