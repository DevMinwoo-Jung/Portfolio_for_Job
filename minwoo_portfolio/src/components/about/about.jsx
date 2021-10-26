import React, { useEffect, useState } from 'react';
import style from './about.module.css';
import {FaArrowDown} from 'react-icons/fa';

const About = () => {

  const [divOne, setDivOne] = useState(true);
  const [divTwo, setDivTwo] = useState(false);
  
  const showDivOne = () => {
    setDivOne(true);
    hideDivTwo();
  }

  const showDivTwo = () => {
    setDivTwo(true);
    hideDivOne();
  }
  
  const hideDivOne = () => {
    setDivOne(false);
  }

  const hideDivTwo = () => {
    setDivTwo(false);
  }

  return (
    <div className={style.about__div}>
      <div className={style.introduce__div}>
        <div className={style.para__div}>
          <p className={style.introduce__para}>Why do we use it?
It is a long established fact that a reader will
be distracted by the readable content of a page when looking at its layout. 
The point of using Lorem Ipsum is that it has a more-or-less normal distribution 
of letters, as opposed to using 'Content here, content here', making it look like
readable English. Many desktop publishing packages and web page editors now use
Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will 
uncover many web sites still in their infancy. Various versions have evolved over 
the years, sometimes by accident, sometimes on purpose (injected humour and the
    like).</p>
        </div>
        <div className={style.photo__div}>

        </div>
      </div>
      <div className={style.tech__div}>
        <div className={style.showBtn__div}>
            <p className={style.showBtn} onClick={showDivOne}>Main Skills</p>
            <p className={style.showBtn} onClick={showDivTwo}>Main & Sub Sckills</p>
        </div>
        {
          divOne === true &&
        <div className={style.skills__div}>
          <p className={style.tech__para}>Main Skills</p>
          <div className={style.skills}>
              <p className={style.skill__para}>Front-end</p>
                <div className={style.skillDesc__div}>
                  <div className={style.imgAndIcon__div}>
                    <img className={style.img} src="/imgs/icon/javascript.png" alt="" /><p className={style.skillName}>javascript</p>
                  </div>
                  <div className={style.skillGraph__div}>
                    <span className={style.graphInnder__div}></span>
                  </div>
                </div>
                <div className={style.skillDesc__div}>
                  <div className={style.imgAndIcon__div}>
                    <img className={style.img} src="/imgs/icon/react.png" alt="" /><p className={style.skillName}>react</p>
                  </div>
                  <div className={style.skillGraph__div}>
                    <span className={style.graphInnder__div}></span>
                  </div>
                </div>
                <div className={style.skillDesc__div}>
                  <div className={style.imgAndIcon__div}>
                    <img className={style.img} src="/imgs/icon/typescript.png" alt="" /><p className={style.skillName}>typescript</p>
                  </div>
                  <div className={style.skillGraph__div}>
                    <span className={style.graphInnder__div}></span>
                  </div>
                </div>
                <div className={style.skillDesc__div}>
                  <div className={style.imgAndIcon__div}>
                    <img className={style.img} src="/imgs/icon/html.png" alt="" /><p className={style.skillName}>html</p>
                  </div>
                  <div className={style.skillGraph__div}>
                    <span className={style.graphInnder__div}></span>
                  </div>
                </div>
                <div className={style.skillDesc__div}>
                  <div className={style.imgAndIcon__div}>
                    <img className={style.img} src="/imgs/icon/css.png" alt="" /><p className={style.skillName}>css</p>
                  </div>
                  <div className={style.skillGraph__div}>
                    <span className={style.graphInnder__div}></span>
                  </div>
                </div>
            </div>
            <div className={style.skills}>
              <p className={style.skill__para}>Etc</p>
              <div className={style.skillDesc__div}>
                <div className={style.imgAndIcon__div}>
                <img className={style.img} src="/imgs/icon/styled-components.png" alt="" /><p className={style.skillName}>styled-components</p>
                </div>
                <div className={style.skillGraph__div}>
                  <span className={style.graphInnder__div}></span>
                </div>
              </div>
              <div className={style.skillDesc__div}>
                <div className={style.imgAndIcon__div}>
                  <img className={style.img} src="/imgs/icon/react-router.png" alt="" /><p className={style.skillName}>react-router</p>
                </div>
                <div className={style.skillGraph__div}>
                  <span className={style.graphInnder__div}></span>
                </div>
              </div>
            </div>
        </div>
        }
        {
          divTwo === true &&
          <div className={style.skills__div}>
            <p className={style.tech__para}>Main & Sub Sckills</p>
            <div className={style.skills}>
              <p className={style.skill__para}>Front-end</p>
                <div className={style.skillDesc__div}>
                  <div className={style.imgAndIcon__div}>
                    <img className={style.img} src="/imgs/icon/javascript.png" alt="" /><p className={style.skillName}>javascript</p>
                  </div>
                  <div className={style.skillGraph__div}>
                    <span className={style.graphInnder__div}></span>
                  </div>
                </div>
                <div className={style.skillDesc__div}>
                  <div className={style.imgAndIcon__div}>
                    <img className={style.img} src="/imgs/icon/react.png" alt="" /><p className={style.skillName}>react</p>
                  </div>
                  <div className={style.skillGraph__div}>
                    <span className={style.graphInnder__div}></span>
                  </div>
                </div>
                <div className={style.skillDesc__div}>
                  <div className={style.imgAndIcon__div}>
                    <img className={style.img} src="/imgs/icon/typescript.png" alt="" /><p className={style.skillName}>typescript</p>
                  </div>
                  <div className={style.skillGraph__div}>
                    <span className={style.graphInnder__div}></span>
                  </div>
                </div>
                <div className={style.skillDesc__div}>
                  <div className={style.imgAndIcon__div}>
                    <img className={style.img} src="/imgs/icon/html.png" alt="" /><p className={style.skillName}>html</p>
                  </div>
                  <div className={style.skillGraph__div}>
                    <span className={style.graphInnder__div}></span>
                  </div>
                </div>
                <div className={style.skillDesc__div}>
                  <div className={style.imgAndIcon__div}>
                    <img className={style.img} src="/imgs/icon/css.png" alt="" /><p className={style.skillName}>css</p>
                  </div>
                  <div className={style.skillGraph__div}>
                    <span className={style.graphInnder__div}></span>
                  </div>
                </div>
            </div>
            <div className={style.skills}>
              <p className={style.skill__para}>Back-end</p>
              <div className={style.skill__img}>
                <div className={style.skillDesc__div}>
                  <div className={style.imgAndIcon__div}>
                    <img className={style.img} src="/imgs/icon/java.png" alt="" /><p className={style.skillName}>java</p>
                  </div>
                  <div className={style.skillGraph__div}>
                    <span className={style.graphInnder__div}></span>
                  </div>
                </div>
                <div className={style.skillDesc__div}>
                  <div className={style.imgAndIcon__div}>
                    <img className={style.img} src="/imgs/icon/strtus.png" alt="" /><p className={style.skillName}>strtus</p>
                  </div>
                  <div className={style.skillGraph__div}>
                    <span className={style.graphInnder__div}></span>
                  </div>
                </div>
                <div className={style.skillDesc__div}>
                  <div className={style.imgAndIcon__div}>
                    <img className={style.img} src="/imgs/icon/spring.png" alt="" /><p className={style.skillName}>spring</p>
                  </div>
                  <div className={style.skillGraph__div}>
                    <span className={style.graphInnder__div}></span>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.skills}>
              <p className={style.skill__para}>Database</p>
              <div className={style.skillDesc__div}>
                <div className={style.imgAndIcon__div}>
                  <img className={style.img} src="/imgs/icon/oracle.png" alt="" /><p className={style.skillName}>orcale</p>
                </div>
                <div className={style.skillGraph__div}>
                  <span className={style.graphInnder__div}></span>
                </div>
              </div>
            </div>
            <div className={style.skills}>
              <p className={style.skill__para}>Etc</p>
              <div className={style.skillDesc__div}>
                  <div className={style.imgAndIcon__div}>
                  <img className={style.img} src="/imgs/icon/styled-components.png" alt="" /><p className={style.skillName}>styled-components</p>
                  </div>
                  <div className={style.skillGraph__div}>
                    <span className={style.graphInnder__div}></span>
                  </div>
                </div>
                <div className={style.skillDesc__div}>
                  <div className={style.imgAndIcon__div}>
                  <img className={style.img} src="/imgs/icon/react-router.png" alt="" /><p className={style.skillName}>react-router</p>
                  </div>
                  <div className={style.skillGraph__div}>
                    <span className={style.graphInnder__div}></span>
                  </div>
                </div>
            </div>
          </div>
        }
      </div>
      <div className={style.life__div}>
        <p className={style.life__header}>Career and Eduaction</p>
        <div className={style.careerEdu__div}>
          <p className={style.innder__header}>Career</p>
          <p className={style.life__para}>2020.06 ~ 2021.01 - 이메인텍</p>
          <p className={style.life__para}>2017.04 ~ 2019.04 - 호서대학교 국제업무팀</p>
          <p className={style.life__para}>2017.01 ~ 2017.01 - DYB 최선어학원 인턴</p>
        </div>
        <div className={style.careerEdu__div}>
          <p className={style.innder__header}>Eduaction</p>
          <p className={style.life__para}>2019.09 ~ 2020.04 - Java & Paython 기반 응용 SW개발자 양성과정</p>
          <p className={style.life__para}>2012.02 ~ 2017.01 - 호서대학교 영어영문학과, 국제지역통상학과 졸업</p>
          <p className={style.life__para}>2009.03 ~ 2012.01 - 경기도 오산, 오산고등학교 졸업</p>
        </div>
      </div>
    </div>
  );
};

export default About;