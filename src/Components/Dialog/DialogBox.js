// import Dialog from "@mui/material/Dialog";
import CustomButton from "../../Atom/Button/CustomButton";
import style from "./Dialog.module.css";
import { Button, Popover } from "antd";
import React from "react";
import { useSetRecoilState } from "recoil";
import { isLoginAtom } from "../../Recoil/Atom1/Atom";
import { useState } from "react";


function DialogBox(props) {
  

  const setLoginStatus = useSetRecoilState(isLoginAtom);
  const [open, setOpen] = useState(false);

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  return (
    <div className={style.textColor}>
      <Popover
    
        content={<a onClick={props.onClick}> {props.content}</a>}
        title={
          <div style={{ color: "#fff", display: "flex", alignItems: "center" }}>
            {props.title}
          </div>
        }
        trigger="click"
        open={props.open}
        overlayInnerStyle={{
          color: "#fff",
          background: "black",
          // border: "1px solid grey",
          boxShadow: "0 0 10px #6A6F74",
        }}
        onOpenChange={handleOpenChange}
      >
        <Button className={style.btn}>...</Button>
      </Popover>
    </div>
  );
}
export default DialogBox;