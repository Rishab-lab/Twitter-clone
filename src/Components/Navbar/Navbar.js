import React,{useEffect} from "react";
import style from "./Navbar.module.css";
import { Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import TwitterIcon from "@mui/icons-material/Twitter";
import TopicIcon from "@mui/icons-material/Topic";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import EngineeringIcon from '@mui/icons-material/Engineering';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { BsPerson } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { isLoginAtom } from "../../Recoil/Atom1/Atom";
import { forLocalStorageIndex } from "../../Recoil/Atom1/Atom";
import { useRecoilValue } from "recoil";
function Navbar() {
  const getLocalStorageIndex=useRecoilValue(forLocalStorageIndex)
  let Data = JSON.parse(localStorage.getItem("user"));
  // const handleOpen=()=>{
  //   alert("Hello")
    
  // }
  const isUserLoggedIn = useRecoilValue(isLoginAtom);
  const nevigate = useNavigate();

  useEffect(() => {
    if (!isUserLoggedIn) {
      nevigate("/");
    }
  });
  const [state, setState] = React.useState({
   
    left: false
   
  });
  const item = [
   
    {icon:<PermIdentityIcon onClick={()=> nevigate("/Profile/:name") }/>,name:"Profile"},
    { icon: <TwitterIcon />, name: "Twitter Blue" },
    { icon: <TopicIcon />, name: "Topics" },
    { icon: <BookmarkBorderIcon />, name: "Booksmarks" },
    { icon: <ListAltIcon />, name: "Lists" },
    { icon:<EngineeringIcon/>, name:"Twitter Circle"}
  ];
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
     
    >
      {item.map((data, index) => (
        <div style={{ display: "flex",
                 
                 fontWeight:"900",
                 fontSize:"9x-large",
                 padding:'2rem',
                 backgroundColor:"black",
                 color:"white"
                  }}>
                  <div>
                <span style={{fontWeight:"1500",
                 fontSize:"xx-large", borderBlockColor:"black", alignContent:"center"}}> {data.icon}</span> 
                 <span style={{justifyContent:"space-evenly",marginRight:"3rem",}}>{data.name}
                 </span>
                 </div>
        </div>
      ))}
    </Box>
  );

  return (
    <>
      <div className={style.feed__header}>
        <span className={style.home}><h2>Home</h2></span>
        <span className={style.hii}> 
          <div>
                       
                       {["left"].map((anchor) => (
                           <React.Fragment key={anchor}>
                               <img className={style.profilelogo} onClick={toggleDrawer(anchor,true)} src='https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='helo'/>
                              
                               <Drawer
                                   
                                   anchor={anchor}
                                   open={state[anchor]}
                                   onClose={toggleDrawer(anchor, false)}
                               >

                                    <span className={style.profilebg}>
                                       <img className={style.profilelogoone} src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt='helo'/>
                                    </span>
                                    <span style={{fontWeight:"900",backgroundColor:"black"}}>
                                      <h2 style={{marginLeft:"0rem" , fontWeight:"900",backgroundColor:"black",color:"white"}}>{`${Data[getLocalStorageIndex].Name}`}</h2>
                                      <h2 style={{backgroundColor:"black",color:"white"}}>{`${Data[getLocalStorageIndex].Email}`}</h2>
                                    </span>
                                    <div className={style.mobileinner}>
                                        <h3>1k Following</h3>
                                        <h3>30 Followers</h3>
                                      </div>
                                   {list(anchor)} 
                                  <div className={style.sideBottom}>
                                     <h3>Creater studio <KeyboardArrowDownIcon/></h3>
                                      <br/>
                                      <h3>Professional tools <KeyboardArrowDownIcon/></h3> <br/>
                                      <h3>Settings & Support<KeyboardArrowDownIcon/></h3>
                                  </div>
                               </Drawer>
                           
                           </React.Fragment>
                       ))}
                   </div></span>
        
        <div className={style.innercontainer}>
        <h3>For you</h3>
        <h3>Following</h3>
      </div>
      </div>
    </>
  );
}
export default Navbar;
