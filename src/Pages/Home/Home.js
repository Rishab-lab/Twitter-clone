import React, { useEffect,useState } from "react";
import MenuItems from "../../Components/Sections/Left/MenuItems";
import style from "./Home.module.css";
import { useRecoilValue } from "recoil";
import RightSide from "../../Components/Sections/Right/RightSide";
import MiddleContainer from "../../Components/Sections/Middle/MiddleContainer";
import { isLoginAtom } from "../../Recoil/Atom1/Atom";
import { useNavigate } from "react-router-dom";
import { FaHouseUser } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { VscBellDot } from "react-icons/vsc";
import { CgMoreO } from "react-icons/cg";
import Dialog from "@mui/material/Dialog";
import Tweet from "../../Atom/Tweet/Tweet";

function Home() {
  const isUserLoggedIn = useRecoilValue(isLoginAtom);
  const nevigate = useNavigate();

  useEffect(() => {
    if (!isUserLoggedIn) {
      nevigate("/");
    }
  });

  
  
  const menu = [
    { id: 1, icon: <FaHouseUser  onClick={()=> nevigate("/Home") }/>},
    { id: 2, icon: <VscBellDot /> },
    { id: 3, icon: <BsPerson onClick={()=> nevigate("/Profile/:name") }/> },
    { id: 4, icon: <CgMoreO />},
  ];
  const [isOpen, SetisOpen] = useState(false);
  const handleClickOpen = () => {
    SetisOpen(true);
  };
  const handleClose = () => {
    SetisOpen(false);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    
    <div className={style.Main}>
   
    <div className={style.container}>
        <MenuItems />
    </div>
    <div className={style.middleContainer}>
        <MiddleContainer />
                <div className={style.icons}>
                  {menu.map((menu,index) => {
                        return (
                          <div  key={index}>
                              <h2>{menu.icon}</h2>
                          </div>
                        );
                      })}
                  </div>
                  <img onClick={handleClickOpen} className={style.mobiletweet}
                   src="https://thumbs.dreamstime.com/z/add-tweet-post-button-icon-vector-twitter-social-media-element-219099895.jpg"/>
                    <div>
                    <Dialog
                        open={isOpen}
                        onClose={handleClose}
                        style={{
                          background: "rgba(91, 112, 131, 0.4)",
                          fontSize: "15px",
                          lineHeight: "40px",
                        }}
                      >
                        <Tweet/>
                      </Dialog>
                    </div>
    </div>
    <div className={style.rightContainer}>
        <RightSide />
    </div>
    </div>
  );
}

export default Home;
