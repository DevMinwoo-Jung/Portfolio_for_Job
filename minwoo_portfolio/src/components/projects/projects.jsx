import React from 'react';
import style from './projects.module.css';
import Slider from "react-slick";
import Project from '../project/project';


const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows:false,
  };
  
  const project__Obj = {
    project_one: 
            {
              project__img: `/imgs/fishGame.bmp`, 
              project__title: 'MiniGame',
              project__para: '일정하게 움직이는 물고기를 시간내에 클릭하는 게임입니다.',
              project__contribution: '100%',
              project__making__duration: '10일',
              project__detail: 'Vanila Javascript를 이용한 Mini Game으로 Javasciprt의 class, this가 그리키는 것이 무엇인지 등의 문법 이해와 DOM요소의 조작 방식을 이해하는데 도움이 되었습니다.',
              project__stack: 'Vanila Javascript',
              project__src: 'https://github.com/DevMinwoo-Jung/miniGame',
              project__live: 'https://devminwoo-jung.github.io/miniGame/'
            },
    project_two: 
            {
              project__img: `/imgs/me.bmp`, 
              project__title: 'Financial-ledger',
              project__para: '가계부를 제작하였습니다.',
              project__contribution: '100%',
              project__making__duration: '3주',
              project__detail: 'React hooks를 이용하여 가계부를 제작하여 props, usestate등 리액트 전반을 이해할 수 있는데 도움이 되었으며 cloudinary, firebase API를 이용하여 이미지 업로드, db사용을 하였습니다. 또한 react-router를 이용하였습니다.',
              project__stack: 'Javascript, React, React-router, cloudinary, firebase',
              project__src: 'https://github.com/DevMinwoo-Jung/financial_ledger',
              project__live: 'https://devminwoo-jung.github.io/financial_ledger/'
            },        
    project_three: 
            {
              project__img: `/imgs/upload.png`, 
              project__title: 'Portfolio',
              project__para: '지금 보고 계시는 포트폴리오를 제작하였습니다.',
              project__contribution: '100%',
              project__making__duration: '5일',
              project__detail: 'React, React-router 주로 이용하였고 빠른 개발을 위해 react-slick library를 이용하였습니다.',
              project__stack: 'React, Javascript',
              project__src: 'https://github.com/DevMinwoo-Jung/Portfolio_for_Job',
              project__live: 'https://google.com'
            },
    project_four: 
            {
              project__img: `/imgs/thumbnail4.png`, 
              project__title: 'MiniGame',
              project__para: '일정하게 움직이는 물고기를 시간내에 클릭하는 게임입니다.',
              project__contribution: '100%',
              project__making__duration: '10일',
              project__detail: 'Vanila Javascript를 이용한 Mini Game으로 Javasciprt의 class, this가 그리키는 것이 무엇인지 등의 문법 이해와 DOM요소의 조작 방식을 이해하는데 도움이 되었습니다.',
              project__stack: 'Vanila Javascript',
              project__src: 'https://github.com/DevMinwoo-Jung/JavaScript101/tree/main/WebApIs/myGame',
              project__live: 'https://google.com'
            },
  }

  return (
      <div className={style.content__div}>
        <div className={style.img__div}>
        <Slider {...settings}>
          {
            Object.keys(project__Obj).map(key => project__Obj[key]).map(project => <Project project={project} key={Math.random()}/>)
          }
        </Slider>
        </div>
      </div> 
  );
};



export default Projects;