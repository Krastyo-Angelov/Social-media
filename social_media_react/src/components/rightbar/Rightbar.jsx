import "./rightbar.css";
import {Users} from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({profile}) {
  const HomeRightbar=()=>{

    return(
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" alt="" />
          <span className="birthdayText"><b>Бай Ганьо</b> и <b>3-ма другари</b> имат рожден ден днес!</span>
        </div>
        <img className="rightbarAdvertisement" src="/assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Приятели онлайн</h4>
        <ul className="rightbarFriendList">
          {Users.map((u)=>(
            <Online key={u.id} user={u}/>
          ))}
        </ul>
      </>
    );
  };
  
  const ProfileRightbar=()=>{
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
    return(
      <>
        <h4 className="rightbarTitle">Информация</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Град:</span>
            <span className="rightbarInfoValue">Магдебург</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">От:</span>
            <span className="rightbarInfoValue">Пазарджик</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Връзка:</span>
            <span className="rightbarInfoValue">Сложно е</span>
          </div>
        </div>
        <h4 className="rightbarTitle">Приятели</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={`${publicFolder}person/1.jpeg`} alt="" />
            <span className="rightbarFollowingName">Митка</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={`${publicFolder}person/2.jpeg`} alt="" />
            <span className="rightbarFollowingName">Митьо </span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={`${publicFolder}person/3.jpeg`} alt="" />
            <span className="rightbarFollowingName">Митка</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={`${publicFolder}person/4.jpeg`} alt="" />
            <span className="rightbarFollowingName">Митка</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={`${publicFolder}person/5.jpeg`} alt="" />
            <span className="rightbarFollowingName">Митка</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={`${publicFolder}person/6.jpeg`} alt="" />
            <span className="rightbarFollowingName">Митка</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}
