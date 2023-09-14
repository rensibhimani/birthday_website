// import React from 'react'
import "./post.css";
// import "./posts.css";
export default function Post() {
  return (
    <div className="post">
      <div className="firstPart">
      <img className="first" src="https://images.pexels.com/photos/1772873/pexels-photo-1772873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      <h4>Let's Celebrate Together: Rensi's Birthday party</h4>
      <p className="pera">Planning an easy and delightful birthday party doesn't have to be overwhelming. For a stress-free celebration, start by selecting a convenient date and venue. Whether you host it at home or choose a nearby park, keeping it simple is key.</p>
    </div>
   <div className="firstPart">
      <img className="first" src="https://images.pexels.com/photos/7507067/pexels-photo-7507067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      <h4>Let's Celebrate Together: Hardik's Birthday party</h4>
      <p className="pera">Planning a straight forward and enjoyable birthday party for a man doesn't have to be complicated. Here's a brief guide to help you organize a hassle-free celebration:
Begin by selecting a suitable date and venue, taking into account the birthday person's preferences. You can choose to host the party at home, rent a local venue, or even have an outdoor gathering at a park or garden.</p>
    </div>
      
    </div>
  )
}


// import { Link } from "react-router-dom";
// import "./post.css";

// export default function Post({img}) {
//   return (
//     <div className="post">
//       <img
//         className="postImg"
//         src={img}
//         alt=""
//       />
//       <div className="postInfo">
//         <div className="postCats">
//           <span className="postCat">
//             <Link className="link" to="/posts?cat=Music">
//               Music
//             </Link>
//           </span>
//           <span className="postCat">
//             <Link className="link" to="/posts?cat=Music">
//               Life
//             </Link>
//           </span>
//         </div>
//         <span className="postTitle">
//           <Link to="/post/abc" className="link">
//             Lorem ipsum dolor sit amet
//           </Link>
//         </span>
//         <hr />
//         <span className="postDate">1 hour ago</span>
//       </div>
//       <p className="postDesc">
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
//         officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
//         fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
//         atque, exercitationem quibusdam, reiciendis odio laboriosam?
//       </p>
//     </div>
//   );
// }