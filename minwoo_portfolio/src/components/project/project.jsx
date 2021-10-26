import React, { useState } from 'react';
import style from './project.module.css';
import Slider from "react-slick";


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



  return (
      <div className={style.content__div}>
        <div className={style.img__div}>
        <Slider {...settings}>
          <div className={style.project} onMouseEnter={showProjectSpec} onMouseLeave={hideProjectSpec}>
            <div className={style.img__contatiner}>
            <div className={`${hideIntro ?  style.project__introhide : style.project__intro }`}>
              <img className={style.img} src={`/imgs/thumbnail4.png`} alt=""/>
              <div className={style.img__para}>
                <span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </span>
              </div>
            </div>
            <div className={`${show ? style.projectSpec__divShow: style.projectSpec__div}`}>
              <p>안녕???</p>
            </div>
            </div>
            <div className={style.logo__div}>
                <button>ㅇㅁㄴㅇ</button>
            </div>
          </div>
          <div className={style.project}>
            <div className={style.img__contatiner}>
            <img className={style.img} src={`/imgs/thumbnail1.png`} alt=""/>
            <div className={style.img__para}>
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </span>
            </div>
            </div>
            <div className={style.logo__div}>
                <button>ㅇㅁㄴㅇ</button>
            </div>
          </div>
          <div className={style.project}>
            <div className={style.img__contatiner}>
            <img className={style.img} src={`/imgs/thumbnail2.png`} alt=""/>
            <div className={style.img__para}>
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </span>
            </div>
            </div>
            <div className={style.logo__div}>
                <button>ㅇㅁㄴㅇ</button>
            </div>
          </div>
          <div className={style.project}>
            <div className={style.img__contatiner}>
            <img className={style.img} src={`/imgs/thumbnail3.png`} alt=""/>
            <div className={style.img__para}>
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </span>
            </div>
            </div>
            <div className={style.logo__div}>
                <button>ㅇㅁㄴㅇ</button>
            </div>
          </div>
        </Slider>
        </div>
      </div>
  );
};



export default Project;