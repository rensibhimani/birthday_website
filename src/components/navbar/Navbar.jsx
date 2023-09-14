import React from 'react';
import './navbar.css';

export default function navbar() {
  return (
    <>
    <div className='top'>
       <div className="topLeft">
       <i className="topIcon fa-brands fa-square-facebook"></i>
       <i className="topIcon fa-brands fa-square-instagram"></i>
       <i className="topIcon fa-brands fa-square-twitter"></i>
       <i className="topIcon fa-brands fa-linkedin"></i>
       <i className="topIcon fa-brands fa-square-pinterest"></i>
       <i className="topIcon fa-brands fa-square-github"></i>
       </div>
       <div className="topCenter">
        <ul className="listItem">
          <li className="item">HOME</li>
          <li className="item">ABOUT</li>
          <li className="item">CONTACT</li>
          <li className="item">WRITE</li>
          <li className="item">LOGOUT</li>
        </ul>
       </div>
       <div className="topRight">
        {/* <img className="topImg" src="C:\Users\patel\code_workspace\project\Vlog\blog\src\assest\logo.png" alt="" /> */}
        <i className="leftSide fa-solid fa-user"></i>
        <i className="leftSide fas fa-search"></i>
       </div>
      
    </div>
    </>
  )
}



// import { Link } from "react-router-dom";
// import "./navbar.css";

// export default function Navbar() {
//   const user = true;
//   return (
//     <div className="top">
//       <div className="topLeft">
//         <i className="topIcon fab fa-facebook-square"></i>
//         <i className="topIcon fab fa-instagram-square"></i>
//         <i className="topIcon fab fa-pinterest-square"></i>
//         <i className="topIcon fab fa-twitter-square"></i>
//       </div>
//       <div className="topCenter">
//         <ul className="topList">
//           <li className="topListItem">
//             <Link className="link" to="/">
//               HOME
//             </Link>
//           </li>
//           <li className="topListItem">ABOUT</li>
//           <li className="topListItem">CONTACT</li>
//           <li className="topListItem">
//             <Link className="link" to="/write">
//               WRITE
//             </Link>
//           </li>
//           {user && <li className="topListItem">LOGOUT</li>}
//         </ul>
//       </div>
//       <div className="topRight">
//         {user ? (
//           <Link className="link" to="/settings">
//             <img
//               className="topImg"
//               src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//               alt=""
//             />
//           </Link>
//         ) : (
//           <ul className="topList">
//             <li className="topListItem">
//               <Link className="link" to="/login">
//                 LOGIN
//               </Link>
//             </li>
//             <li className="topListItem">
//               <Link className="link" to="/register">
//                 REGISTER
//               </Link>
//             </li>
//           </ul>
//         )}
//         <i className="topSearchIcon fas fa-search"></i>
//       </div>
//     </div>
//   );
// }