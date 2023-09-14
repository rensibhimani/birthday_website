import { useLocation } from "react-router";
import Head from "../../components/head/Head";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Head />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}