import "./post.css";
import { MoreVert } from "@material-ui/icons";
import {Users} from "../../dummyData";
import { useState } from "react";


export default function Post({post}) {
    const [like,setLike] = useState(post.like);
    const [isLiked,setIsLiked] = useState(false);   //false защото не сме харесали все още нищо
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

    const likeHandler =()=>{
        setLike(isLiked ? like-1 : like+1);
        setIsLiked(!isLiked);
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" />
                        <span className="postUsername">{Users.filter((u) => u.id === post?.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">    {/**post?, защото не всички постове ще имат описание */}
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={publicFolder+post.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src={`${publicFolder}like.png`} onClick={likeHandler} alt="" />
                        <img className="likeIcon" src={`${publicFolder}heart.png`} onClick={likeHandler} alt="" />
                        <span className="postLikeCounter">{like} харесвания</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} коментари</span>
                    </div>
                </div>
            </div>
        </div>
    ) 
}
