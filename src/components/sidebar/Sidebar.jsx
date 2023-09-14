// import React from 'react'
import "./sidebar.css";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="side">
        <span className="title">ABOUT ME</span>
        <img
          src="https://images.pexels.com/photos/3036525/pexels-photo-3036525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <p>

Hello! I'm Rensi Patel, a passionate individual with a zest for life and a curious mind. I'm a Working Women, dedicated to Computer Science feild, and I thrive on the challenges and opportunities it brings.

In my spare time, you'll often find me playing outdoor games. Whether it's exploring the outdoors, immersing myself in a good book, or experimenting with new recipes in the kitchen, I'm always eager to learn and grow.

{/* I'm also a firm believer in Social and Environmental Values, and I strive to make a positive impact on the world by praud moment for my self and my family. I'm excited to connect, learn from others, and share my own experiences as we journey through life together. Let's embark on this adventure! */}
        </p>
      </div>
      <div className="side">
        <span className="title">CATEGORIES</span>
        <ul className="list">
          <li className="sideitem">Life</li>
          <li className="sideitem">Music</li>
          <li className="sideitem">Style</li>
          <li className="sideitem">Sport</li>
          <li className="sideitem">Tech</li>
          <li className="sideitem">Cinema</li>
        </ul>
      </div>
      <div className="side">
      <span className="title">FOLLOW US</span>
      <div className="social">
      <i className="sideIcon fa-brands fa-square-facebook"></i>
       <i className="sideIcon fa-brands fa-square-instagram"></i>
       <i className="sideIcon fa-brands fa-square-twitter"></i>
       <i className="sideIcon fa-brands fa-linkedin"></i>
       <i className="sideIcon fa-brands fa-square-pinterest"></i>
       <i className="sideIcon fa-brands fa-square-github"></i>
      </div>
      </div>
    </div>
  );
}
