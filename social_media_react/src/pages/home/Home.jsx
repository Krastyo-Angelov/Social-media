import Leftbar from "../../components/leftbar/Leftbar";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css";

export default function Home() {
  //polzwam fragmentite, zashoto ne iskam da gi wkluchwam w kontejner, a kato wryshtam stojnost, moga da wryshtam chisto samo za edin element.)
    return(
      <>  
      <Topbar/>
      <div className="homeContainer">
        <Leftbar/>
        <Feed/>
        <Rightbar/>
      </div>
      </>
      );
}
