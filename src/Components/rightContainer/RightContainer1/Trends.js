import React from "react";
import { useState } from "react";
import style from "./Trends.module.css";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import Dialog2 from "../../Dialog2/Dialog2";
import CustomButton from "../../../Atom/Button/CustomButton";

const Trends = () => {
  const [isNotIntrested, setIsNotIntrested] = useState([
    {
      id: 1,
      isNotIntrested: false,
      country: "Trending in India",
      keyword: "#Ms Dhoni",
      totalKeywords: "8000k Tweets",
    },
    {
      id: 2,
      isNotIntrested: false,
      country: "Trending in India",
      keyword: "#Virat kohli",
      totalKeywords: "6000k Tweets",
    },
    {
      id: 3,
      isNotIntrested: false,
      country: "Trending in Sports",
      keyword: "#RohitSharma",
      totalKeywords: "2560k Tweets",
    },
    {
      id: 4,
      isNotIntrested: true,
      country: "Trending in Sports",
      keyword: "#ViratKohli",
      totalKeywords: "2000k Tweets",
    },
    {
      id: 5,
      isNotIntrested: false,
      country: "Trending in Sports",
      keyword: "#sachin",
      totalKeywords: "2000k Tweets",
    },
  ]);
  const [selectedId, setSelectedId] = useState(null);
  const [trending , setTrendings] = useState(isNotIntrested)
  const [isShowingAllTrendings, setIsShowingAllTrendings] = useState(false)
  const updateId = (id) => setSelectedId(id);
  const[data,setData]=useState([...trending])
  const HandleClick = () => {
    const tempArr = [];
    trending.forEach((el) => {
      if (el.id !== selectedId) {
        tempArr.push(el);
      }
    });
    setTrendings(tempArr);
    setData(tempArr)
  };



  function handleRequestSeeAll () {
    setIsShowingAllTrendings(!isShowingAllTrendings)
    if(isShowingAllTrendings) {
       return setTrendings(trending.slice(0,3))
    }else
    setTrendings(data)
}

  return (
    <div className={style.keywords}>
      <div className={style.key}>
        <div className={style.keyword__heading}>
          <h4 className={style.heading4}>What's happening</h4>
        </div>
        {trending.map((keyword) => {
          return (
            <div
            key={keyword.id}
              className={style.container}
              onClick={() => {
                updateId(keyword.id);
              }}
            >
              <div key={keyword.id}>
                <div className={style.country}>{keyword.country}</div>
                <div className={style.keyword__name}>
                  <strong>{keyword.keyword}</strong>
                </div>
                <div className={style.keyword__tweets}>
                  {keyword.totalKeywords}
                </div>
              </div>
              <div className={style.btn}>
              <Dialog2
                  onClick={HandleClick}
                  title={
                    <div>
                      <SentimentVeryDissatisfiedIcon /> This trend is harmful or
                      spammy
                    </div>
                  }
                  content={
                    <p>
                      <SentimentVeryDissatisfiedIcon />
                      Is not Intrested
                    </p>
                  }
                />
              </div>
            </div>
          );
        })}
        <div>
          <CustomButton
            customCss={style.btn2}
            buttonText= {isShowingAllTrendings ? 'Show Less' : 'Show More'} 
            btnNext={handleRequestSeeAll}
          />
        </div>
      </div>
    </div>
  );
};

export default Trends;
