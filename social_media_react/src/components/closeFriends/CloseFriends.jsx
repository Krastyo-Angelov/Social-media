import "./closeFriends.css";
import {Users} from "../../dummyData";
import Online from "../online/Online";

export default function CloseFriends({user}) {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="leftbarFriend">
        <img className="leftbarFriendImg" src={publicFolder+user.profilePicture} alt="" />
        <span className="leftbarFriendName">{user.username}</span>
    </li>
  )
}
