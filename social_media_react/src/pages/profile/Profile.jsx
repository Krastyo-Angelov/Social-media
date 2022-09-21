import Leftbar from "../../components/leftbar/Leftbar";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./profile.css";

export default function Profile() {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>  
      <Topbar/>
      <div className="profile">
        <Leftbar/>
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img className="profileCoverImg" src={`${publicFolder}post/3.jpeg`} alt="" />
                    <img className="profileUserImg" src={`${publicFolder}post/7.jpeg`} alt="" />
                </div>
                <div className="profileInfoI">
                    <h4 className="profileInfoName">Кръстьо Ангелов</h4>
                    <span className="profileInfoDesc">Привет другари и другарки.</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed/>
                <Rightbar profile/> 
            </div>
        </div>
      </div>
    
    </>
  )
}
