// import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <h1 className="singlePostTitle">
         Rensi's & Hardik's Birthday party
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Sponser : Hardik Dava 
            <b className="singlePostAuthor">
              {/* <Link className="link" to="/posts?username=Safak">
                Safak
              </Link> */}
            </b>
          </span>
          <span>8 day ago</span>
        </div>
        <p className="singlePostDesc">
          Planning an easy and delightful birthday party doesn't have to be
          overwhelming. For a stress-free celebration, start by selecting a
          convenient date and venue. Whether you host it at home or choose a
          nearby park, keeping it simple is key. Next, create a guest list that
          fits your space and resources. You don't need to go overboard with
          invitations; a small, close-knit group can make for a cozy gathering.
          Consider the birthday person's interests when deciding on a theme, but
          remember, it's okay to skip the theme entirely. For food and drinks,
          opt for straightforward options like finger foods, pizza, or a
          barbecue. Bake or buy a birthday cake and have some drinks on hand to
          keep everyone refreshed. Entertainment can be as easy as setting up
          classic party games or a movie corner. Don't forget to capture
          memories with photos and provide a small party favor for guests to
          take home. Keep the party playlist light and enjoyable, and when it's
          time, gather everyone for the cake cutting and singing "Happy
          Birthday." Lastly, send out thank-you notes after the celebration to
          show your appreciation. Remember, simplicity is the key to an
          effortless and enjoyable birthday party for all!
          <br />
          

        </p>
      </div>
    </div>
  );
}
