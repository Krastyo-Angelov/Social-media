import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { useEffect, useState } from "react";

export default function Feed() {
  const [posts,setPosts] = useState([]);
  const [text,setText] = useState("");

  useEffect(()=>{
    console.log("the feed is rendered")
  })
  return (
    <div className="feed">
        <input type="text" onChange={e=>setText(e.target.value)}/>
        <div className="feedWrapper">
          <Share />
          {/*Posts.map((p)=>(
            <Post key={p.id} post={p}/>
          )) */}
        </div>
    </div>
  )
}