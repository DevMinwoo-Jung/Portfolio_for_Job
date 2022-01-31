import React, { useEffect, useState } from "react";
import style from "./main.module.css";
import { MdReplay } from "react-icons/md";

const Main = () => {
  const intro = [
    "안녕하세요.",
    "프론트엔드 개발자",
    "정민우입니다.",
    "제 포트폴리오 사이트에",
    "방문해주셔서 감사합니다!",
  ];
  const lenght = intro.length;

  const [copy, setCopy] = useState([...intro]);
  const [showBtn, setShowBtn] = useState(false);
  let [output, setOutput] = useState("");

  const reshow = () => {
    setOutput("");
    setCopy([...intro]);
    setShowBtn(false);
  };

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      setOutput(copy[count]);
      count++;
      if (count === lenght) {
        setShowBtn(true);
        clearInterval(interval);
      }
    }, 2500);
    return () => {
      setShowBtn(false);
      clearInterval(interval);
    };
  }, [copy, lenght]);

  return (
    <div className={style.main}>
      <div className={style.intro__div}>
        <p className={style.intro}>{output}</p>
        {showBtn === true && (
          <div className={style.introRe__btn} onClick={reshow}>
            <span>다시보기</span>
            <MdReplay className='m-auto'/>
          </div>
        )}
      </div>
      <div className={style.top__div}>
        <p className={style.para}>Front-End</p>
        <p className={style.para}> Developer</p>
      </div>
      <div className={style.bottom__div}>
        <p className={style.para}>Jung MinWoo</p>
      </div>
    </div>
  );
};

export default Main;
