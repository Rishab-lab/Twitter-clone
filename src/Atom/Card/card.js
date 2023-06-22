import React, { useState } from 'react'
import style from "./card.module.css"
import { useSetRecoilState } from "recoil";
import { isLoginAtom } from "../../Recoil/Atom1/Atom";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import DialogBox from '../../Components/Dialog/DialogBox';
function Card(props) {
  const setLoginStatus = useSetRecoilState(isLoginAtom);
  const [open, setOpen] = useState(false);
  // const handleOpen = () => {
  //   setOpen(true);
  // };
  const HandleClick = () => {
    setOpen(false);
  };
  function HandaleLogOut() {
    let text = 'Do You Logout ! \nEither Ok or Cancel';
      if(window.confirm (text) == true){
          setLoginStatus(false);
    alert("successfully Logout");
      } else {
        text = " Cancel"
      }
  }
  return (
    <div onClick={props.button} className={style.btn2container}>
    <div>
        {props.picture}
    </div>
    <div className={style.btn2text}>
      {props.text}
      <br />
      {props.text2}
    </div>
    <DialogBox placement="leftTop"
                  onClick={HandleClick}
                  title={
                    <div>
                  This trend is harmful or
                      spammy
                    </div>
                  }
                  content={
                    <p onClick={HandaleLogOut}>
           
                      Logout
                    </p>
                  }
                />
  </div>
);
  
}

export default Card
