import { Button, Popover } from "antd";
import { useState } from "react";
import style from "./Dialog2.module.css";

const Dialog2 = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  return (
    <div className={style.textColor}>
      <Popover
        placement="bottomLeft"
        content={<a onClick={props.onClick}> {props.content}</a>}
        title={
          <div style={{ color: "#fff", display: "flex", alignItems: "center" }}>
            {props.title}
          </div>
        }
        trigger="click"
        open={open}
        overlayInnerStyle={{
          color: "#fff",
          background: "black",
          // border: "1px solid #fff",
          boxShadow: "0 0 10px #6A6F74",
        }}
        onOpenChange={handleOpenChange}
      >
        <Button className={style.btn}>...</Button>
      </Popover>
    </div>
  );
};
export default Dialog2;
