import React from 'react';
import style from './project.module.css';
import Slider from "react-slick";
import styled from "styled-components";

const Arrow = styled.div`
.slick-prev:before {
  color: black; 
}
.slick-next:before {
  color: black;
}`

const Project = () => {
  const settings = {

    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
  };
  return (
      <div className={style.content__div}>
        <div className={style.img__div}>
      <Arrow>
        <Slider {...settings}>
            <img className={style.img} src={`/imgs/thumbnail1.png`} alt=""/>
            <img className={style.img} src={`/imgs/thumbnail2.png`} alt=""/>
            <img className={style.img} src={`/imgs/thumbnail3.png`} alt=""/>
            <img className={style.img} src={`/imgs/thumbnail4.png`} alt=""/>
        </Slider>
      </Arrow>
        </div>
        <div className={style.detail__div}>
            <img className={style.img} src={`/imgs/thumbnail4.png`} alt=""/>
            <p>대충 잘했다는 뜻</p>
        </div>
      </div>
  );
};



export default Project;