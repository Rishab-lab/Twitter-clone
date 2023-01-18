import React, { useState } from "react";
import style from "./Login.module.css";
import CustomButton from "../../Atom/CustomButton";
import { FaTwitter } from "react-icons/fa";
import Input from "../../Atom/Input";
import { useRecoilState, useRecoilValue } from "recoil";
import { Data } from "../../Recoil/Atom1/Atom";
import { Link } from "react-router-dom";

function Login() {
  const [nextbtn, setNextBtn] = useState(false);
  const [isLogin, setIsLogin] = useRecoilState(Data);
  setIsLogin(true);
  const buttonNext = () => {
    setNextBtn(true);
  };
  const handleLogIn = () => {
  
    console.log(setIsLogin);
   
  };

  return (
    <div className={style.container}>
      <div className={style.main}>
        <div className={style.container1}>
          <FaTwitter className={style.logo} />
          {nextbtn ? (
            <>
              <div className={style.containerpass}>
                <h1>Enter your Password</h1>
                <div>
                  <Input className={style.input2} placeholder="passsword" />
                </div>

                <div className={style.password}>
                  <CustomButton
                    buttonText="Log In"
                    btnNext={handleLogIn}
                    customCss={style.loginbtn}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={style.text}>
                <h1>Sign in to Twitter</h1>
              </div>

              <CustomButton
                buttonText="Sign in with Google"
                customCss={style.btn1}
                icon={<i className="fa fa-brands fa-google"></i>}
              ></CustomButton>
              <br />
              <CustomButton
                buttonText="Sign in with Apple"
                icon={<i className="fa fa-brands fa-apple"></i>}
                customCss={style.btn1}
              ></CustomButton>
              <br />
              <div className={style.or}>
                <span style={{ display: "flex" }}>
                  <hr style={{ width: "8.4rem", height: "0px" }} />
                  &nbsp;&nbsp;or&nbsp;&nbsp;
                  <hr style={{ width: "8.4rem", height: "0px" }} />
                </span>
              </div>
              <br />
              <div>
                <Input
                  className={style.input}
                  placeholder="Phone, email or username"
                />
              </div>
              <br />
              <CustomButton
                buttonText="Next"
                customCss={style.btn1}
                btnNext={buttonNext}
              ></CustomButton>
              <br />
              <CustomButton
                buttonText="Forgot Password?"
                customCss={style.btn1}
                style={{ backgroundColor: "black" }}
              ></CustomButton>
              <br />
            </>
          )}
          <div className={style.para}>
            <p>
              Don't have an account?{" "}
              <Link to="/Register">
                <span>Sign up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;