import React, { useState } from 'react';
import style from './project.module.css';
import Slider from "react-slick";
import {BiShowAlt} from 'react-icons/bi';
import {BsGithub} from 'react-icons/bs';


const Project = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows:false,
  };

  const [show, setShow] = useState(false);
  const [hideIntro, setHideIntro] = useState(false);

  const showProjectSpec = () => {
      setShow(true);
      setHideIntro(true);

  }
  const hideProjectSpec = () => {
      setShow(false);
      setHideIntro(false);

  }

  const [showTwo, setShowTwo] = useState(false);
  const [hideIntroTwo, setHideIntroTwo] = useState(false);

  const showProjectSpecTwo = () => {
    setShowTwo(true);
    setHideIntroTwo(true);

  }
  const hideProjectSpecTwo = () => {
    setShowTwo(false);
    setHideIntroTwo(false);

  }

  const [showThree, setShowThree] = useState(false);
  const [hideIntroThree, setHideIntroThree] = useState(false);

  const showProjectSpecThree = () => {
    setShowThree(true);
    setHideIntroThree(true);

  }
  const hideProjectSpecThree = () => {
    setShowThree(false);
    setHideIntroThree(false);

  }

  const [showFour, setShowFour] = useState(false);
  const [hideIntroFour, setHideIntroFour] = useState(false);


  const showProjectSpecFour = () => {
    setShowFour(true);
    setHideIntroFour(true);

  }
  const hideProjectSpecFour = () => {
    setShowFour(false);
    setHideIntroFour(false);

  }




  return (
      <div className={style.content__div}>
        <div className={style.img__div}>
        <Slider {...settings}>
          <div className={style.project} >
            <div className={style.img__contatiner} onMouseEnter={showProjectSpec} onMouseLeave={hideProjectSpec}>
              <div className={`${hideIntro ?  style.project__introhide : style.project__intro }`}>
                <img className={style.img} src={`/imgs/thumbnail4.png`} alt=""/>
                <div className={style.img__para}>
                  <p className={style.spec__head}>MiniGame</p>
                  <p className={style.spec__para}>일정하게 움직이는 물고기를 시간내에 클릭하는 게임입니다.</p>
                </div>
              </div>
              <div className={`${show ? style.projectSpec__divShow: style.projectSpec__div}`}>
                <div className={style.specDesc__div}>
                  <p className={style.spec__head}>#세부사항</p>
                  <p className={style.spec__para}>참여율 100%</p>
                  <p className={style.spec__para}>제작기간 10일</p>
                  <p className={style.spec__head}>#Detail</p>
                  <p className={style.spec__para}>Vanila Javascript를 이용한 Mini Game으로 Javasciprt의 class, this가 그리키는 것이 무엇인지 등의 문법 이해와 DOM요소의 조작 방식을 이해하는데 도움이 되었습니다.</p>
                  <p className={style.spec__head}>#기술 스택</p>
                  <p className={style.spec__para}>Vanila Javascript</p>
                </div>
              </div>
            </div>
            <div className={style.logo__div}>
              <BsGithub className={style.logo}/><p className={style.tooltip__show}> Github</p>     
              <BiShowAlt className={style.logo}/><p className={style.tooltip__show}> Show Live</p>
            </div>
          </div>
          <div className={style.project}>
            <div className={style.img__contatiner} onMouseEnter={showProjectSpecTwo} onMouseLeave={hideProjectSpecTwo}>
              <div className={`${hideIntroTwo ?  style.project__introhide : style.project__intro }`}>
              <img className={style.img} src={`/imgs/thumbnail4.png`} alt=""/>
                <div className={style.img__para}>
                  <p className={style.spec__head}>Financial-ledger</p>
                  <p className={style.spec__para}>가계부를 제작하였습니다.</p>
                </div>
              </div>
              <div className={`${showTwo ? style.projectSpec__divShow: style.projectSpec__div}`}>
                <div className={style.specDesc__div}>
                  <p className={style.spec__head}>#세부사항</p>
                  <p className={style.spec__para}>참여율 100%</p>
                  <p className={style.spec__para}>제작기간 3주</p>
                  <p className={style.spec__head}>#Detail</p>
                  <p className={style.spec__para}>React hooks를 이용하여 가계부를 제작하여 props, usestate등 리액트 전반을 이해할 수 있는데 도움이 되었으며 cloudinary, firebase API를 이용하여 이미지 업로드, db사용을 하였습니다. 또한 react-router를 이용하였습니다.</p>
                  <p className={style.spec__head}>#기술 스택</p>
                  <p className={style.spec__para}>Javascript, React, React-router, cloudinary, firebase</p>
                </div>
              </div>
            </div>
            <div className={style.logo__div}>
              <BsGithub className={style.logo}  /><p className={style.tooltip__show}> Github</p>     
              <BiShowAlt className={style.logo} /><p className={style.tooltip__show}> Show Live</p>
            </div>
          </div>
          <div className={style.project}>
            <div className={style.img__contatiner} onMouseEnter={showProjectSpecThree} onMouseLeave={hideProjectSpecThree}>
              <div className={`${hideIntroThree ?  style.project__introhide : style.project__intro }`}>
                <img className={style.img} src={`/imgs/download.png`} alt=""/>
                <div className={style.img__para}>
                    <p className={style.spec__head}>Portfolio</p>
                    <p className={style.spec__para}>지금 보고 계시는 포트폴리오를 제작하였습니다.</p>
                </div>
              </div>
              <div className={`${showThree ? style.projectSpec__divShow: style.projectSpec__div}`}>
                <div className={style.specDesc__div}>
                    <p className={style.spec__head}>#세부사항</p>
                    <p className={style.spec__para}>참여율 100%</p>
                    <p className={style.spec__para}>제작기간 5일</p>
                    <p className={style.spec__head}>#Detail</p>
                    <p className={style.spec__para}>React, React-router 주로 이용하였고 빠른 개발을 위해 react-slick library를 이용하였습니다.</p>
                    <p className={style.spec__head}>#기술 스택</p>
                    <p className={style.spec__para}>React, Javascript</p>
                </div>
              </div>
            </div>
            <div className={style.logo__div}>
              <BsGithub className={style.logo}  /><p className={style.tooltip__show}> Github</p>     
              <BiShowAlt className={style.logo} /><p className={style.tooltip__show}> Show Live</p>
            </div>
          </div>
          <div className={style.project} onMouseEnter={showProjectSpecFour} onMouseLeave={hideProjectSpecFour}>
            <div className={style.img__contatiner}>
              <div className={`${hideIntroFour ?  style.project__introhide : style.project__intro }`}>
                <img className={style.img} src={`/imgs/reset.png`} alt=""/>
                <div className={style.img__para}>
                      <p className={style.spec__head}>MiniGame</p>
                      <p className={style.spec__para}>일정하게 움직이는 물고기를 시간내에 클릭하는 게임입니다.</p>
                </div>
              </div>
            <div className={`${showFour ? style.projectSpec__divShow: style.projectSpec__div}`}>
              <div className={style.specDesc__div}>
                      <p className={style.spec__head}>#세부사항</p>
                      <p className={style.spec__para}>참여율 100%</p>
                      <p className={style.spec__para}>제작기간 10일</p>
                      <p className={style.spec__head}>#Detail</p>
                      <p className={style.spec__para}>Vanila Javascript를 이용한 Mini Game으로 Javasciprt의 class, this가 그리키는 것이 무엇인지 등의 문법 이해와 DOM요소의 조작 방식을 이해하는데 도움이 되었습니다.</p>
                      <p className={style.spec__head}>#기술 스택</p>
                      <p className={style.spec__para}>Vanila Javascript</p>
              </div>
              </div>
            </div>
            <div className={style.logo__div}>
              <BsGithub className={style.logo}  /><p className={style.tooltip__show}> Github</p>     
              <BiShowAlt className={style.logo} /><p className={style.tooltip__show}> Show Live</p>
            </div>
          </div>
        </Slider>
        </div>
      </div>
  );
};



export default Project;