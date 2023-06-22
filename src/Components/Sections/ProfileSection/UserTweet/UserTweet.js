import React, { useEffect, useState } from 'react'
import style2 from "./UserTweet.module.css"
import { Avatar } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SyncIcon from "@mui/icons-material/Sync";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PollIcon from "@mui/icons-material/Poll";
import UploadIcon from "@mui/icons-material/Upload";
import VerifiedIcon from '@mui/icons-material/Verified';
import {Personaltweet} from "../../../../Recoil/Atom1/Atom"
import { useRecoilState } from 'recoil'
import { SouthAmerica } from '@mui/icons-material';

function UserTweet() {
    const [data,setData]= useRecoilState(Personaltweet)
    
    console.log(data);
  return (
    <>
    {data.map((x)=>{
        return(
            <div className={style2.wrapper}>
            <div className={style2.container1}>
                      <div >
                      
                        <Avatar   className={style2.avatar} src={x.tweetPic} />
                       
                      </div>
        
                      <div className={style2.innercontainer}>
                        <span className={style2.text}>
                          <h3>{x.name}<VerifiedIcon style={{color:"blue"}}/></h3>
                        </span>
                        <p>{x.tweetText}</p>
                      </div>
                    </div>
        
                    <div className={style2.img}>
                    {data.tweetPic ? 
              <img 
                style={{
                  width: "30rem",
                  height: "30rem",
                  borderRadius: "15px",
                }}
                alt="picture"
                src={x.tweetPic
                }
              /> 
              : <></> }
                    </div>
                    <div className={style2.icons}>
                          <span className={style2.icons}>
                            {x.tweetCount}
                            <ChatBubbleOutlineIcon />
                          </span>
                          <span className={style2.icons}>
                            {x.retweetCount}
                            <SyncIcon />
                          </span>
                          <span className={style2.icons}>
                            {x.likesCount}
                            <FavoriteBorderIcon />
                          </span>
                          <span className={style2.icons}>
                            {x.viewsCount}
                            <PollIcon />
                          </span>
        
                          <UploadIcon />
                        </div>
          
            </div> 
        )
    })}

    </>
    
  )
}

export default UserTweet


