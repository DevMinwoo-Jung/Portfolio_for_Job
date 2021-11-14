import React, { useState } from 'react';
import style from './about.module.css';
import {FaArrowDown} from 'react-icons/fa';
import ProgressBar from 'react-bootstrap/ProgressBar';


const About = () => {

const nowNum = {low: 40, middle: 60, intermediate: 80};

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
          <p className={style.introduce__header}>About me</p>
          <p className={style.introduce__h1}>느리더라도 꾸준하게 발전하는 개발자가 되겠습니다.</p>
          <span className={style.introduce__para}>
            호서대학교 국제업무팀에서 2년간 재직하면서 교환/어학연수 학생들 관리, 
            어학 프로그램 관리 등 꼼꼼하게 관리 하는 것에 보람을 느꼈었지만 
            개인으로서 성장 한다기 보다는 일에만 적응하는 모습을 보며 회의감이 들었습니다.<br/><br/>
            
            그러던 중 개발자라는 직업을 알게 되었고, 계속해서 성장할 수 있다는 점에 이끌려 진로를
            변경하게 되었습니다. 쌍용 교육센터에서 수료 후 솔류션 회사에 입사하였지만, 회사가 원하는 방향과
            제가 지향하는 것이 달라 아쉽게 퇴사 후 다시 준비중에 있습니다. <br/><br/>

            저는 최신기술에 관심 있지만 기본이 되는 것에도 소흘하지 않고자 하고 있습니다.
            이를 위해 단순히 남의 코딩을 배끼는 것이 아니라 Youtube, Blog 뿐만 아니라 Mdn과 같은 사이트를 참고하며
            공부하고 있습니다.  <br/><br/>

            아직은 과도한 성과를 바라기 보다는 기본을 중시하는 신입 개발자가 되고자 합니다.
            다른 분들과 즐겁게 협업하며 차근차근히 성장하고 싶습니다.
            이런 저의 성장가능성을 긍정적으로 보고 저를 뽑아줄 회사를 찾고 있습니다.
          </span>
        </div>
        <div className={style.photo__div}>
          <img className={style.photo} src="imgs/rsz_myback.png" alt="" />
        </div>
        <div className={style.arrow__div}>
          <FaArrowDown className={style.arrow}/>
          <span className={style.arrowPara}>Scroll Down to see more contents!</span>
        </div>
      </div>
      <div className={style.tech__div}>
        <div className={style.showBtn__div}>
            <p className={style.showBtn} onClick={showDivOne}>Main Skills</p>
            <p className={style.showBtn} onClick={showDivTwo}>Main & Experienced Sckills</p>
        </div>
        {
          divOne === true &&
        <div className={style.skills__div}>
          <p className={style.tech__para}>Main Skills</p>
          <div className={style.skills}>
              <p className={style.skill__para}>Front-end</p>
                <div className={style.skillDesc__div}>
                  <div className={style.imgAndIcon__div}>
                    <img className={style.img} src="imgs/icon/javascript.png" alt="" /><p className={style.skillName}>javascript</p>
                  </div>
                  <div className={style.skillGraph__div}>
                    <ProgressBar className={style.progressBar} animated  variant="info" now={nowNum.intermediate} label={`${nowNum.intermediate}%`} />
                  </div>
                </div>
                <div className={style.skillDesc__div}>
                  <div className={style.imgAndIcon__div}>
                    <img className={style.img} src="imgs/icon/react.png" alt="" /><p className={style.skillName}>react</p>
                  </div>
                  <div className={style.skillGraph__div}>
                    <ProgressBar className={style.progressBar} animated  variant="info" now={nowNum.middle} label={`${nowNum.middle}%`} />
                  </div>
                </div>
                <div className={style.skillDesc__div}>
                  <div className={style.imgAndIcon__div}>
                    <img className={style.img} src="imgs/icon/typescript.png" alt="" /><p className={style.skillName}>typescript</p>
                  </div>
                  <div className={style.skillGraph__div}>
                    <ProgressBar className={style.progressBar} animated  variant="info" now={nowNum.middle} label={`${nowNum.middle}%`} />
                  </div>
                </div>
                <div className={style.skillDesc__div}>
                  <div className={style.imgAndIcon__div}>
                    <img className={style.img} src="imgs/icon/html.png" alt="" /><p className={style.skillName}>html</p>
                  </div>
                  <div className={style.skillGraph__div}>
                    <ProgressBar className={style.progressBar} animated  variant="info" now={nowNum.intermediate} label={`${nowNum.intermediate}%`} />
                  </div>
                </div>
                <div className={style.skillDesc__div}>
                  <div className={style.imgAndIcon__div}>
                    <img className={style.img} src="imgs/icon/css.png" alt="" /><p className={style.skillName}>css</p>
                  </div>
                  <div className={style.skillGraph__div}>
                    <ProgressBar className={style.progressBar} animated  variant="info" now={nowNum.intermediate} label={`${nowNum.intermediate}%`} />
                  </div>
                </div>
            </div>
            <div className={style.skills}>
              <p className={style.skill__para}>Etc</p>
              <div className={style.skillDesc__div}>
                <div className={style.imgAndIcon__div}>
                <img className={style.img} src="imgs/icon/styled-components.png" alt="" /><p className={style.skillName}>styled-components</p>
                </div>
                <div className={style.skillGraph__div}>
                  <ProgressBar className={style.progressBar} animated  variant="info" now={nowNum.low} label={`${nowNum.low}%`} />
                </div>
              </div>
              <div className={style.skillDesc__div}>
                <div className={style.imgAndIcon__div}>
                  <img className={style.img} src="imgs/icon/react-router.png" alt="" /><p className={style.skillName}>react-router</p>
                </div>
                <div className={style.skillGraph__div}>
                  <ProgressBar className={style.progressBar} animated  variant="info" now={nowNum.intermediate} label={`${nowNum.intermediate}%`} />
                </div>
              </div>
            </div>
        </div>
        }
        {
          divTwo === true &&
          <div className={style.skills__div}>
            <p className={style.tech__para}>Main & Experienced Skills</p>
            <div className={style.skills}>
              <p className={style.skill__para}>Front-end</p>
                <div className={style.skillDesc__div}>
                  <div className={style.imgAndIcon__div}>
                    <img className={style.img} src="imgs/icon/javascript.png" alt="" /><p className={style.skillName}>javascript</p>
                  </div>
                  <div className={style.skillGraph__div}>
                    <ProgressBar className={style.progressBar} animated  variant="info" now={nowNum.intermediate} label={`${nowNum.intermediate}%`} />
                  </div>
                </div>
                <div className={style.skillDesc__div}>
                  <div className={style.imgAndIcon__div}>
                    <img className={style.img} src="imgs/icon/react.png" alt="" /><p className={style.skillName}>react</p>
                  </div>
                  <div className={style.skillGraph__div}>
                    <ProgressBar className={style.progressBar} animated  variant="info" now={nowNum.middle} label={`${nowNum.middle}%`} />
                  </div>
                </div>
                <div className={style.skillDesc__div}>
                  <div className={style.imgAndIcon__div}>
                    <img className={style.img} src="imgs/icon/typescript.png" alt="" /><p className={style.skillName}>typescript</p>
                  </div>
                  <div className={style.skillGraph__div}>
                    <ProgressBar className={style.progressBar} animated  variant="info" now={nowNum.middle} label={`${nowNum.middle}%`} />
                  </div>
                </div>
                <div className={style.skillDesc__div}>
                  <div className={style.imgAndIcon__div}>
                    <img className={style.img} src="imgs/icon/html.png" alt="" /><p className={style.skillName}>html</p>
                  </div>
                  <div className={style.skillGraph__div}>
                    <ProgressBar className={style.progressBar} animated  variant="info" now={nowNum.intermediate} label={`${nowNum.intermediate}%`} />
                  </div>
                </div>
                <div className={style.skillDesc__div}>
                  <div className={style.imgAndIcon__div}>
                    <img className={style.img} src="imgs/icon/css.png" alt="" /><p className={style.skillName}>css</p>
                  </div>
                  <div className={style.skillGraph__div}>
                    <ProgressBar className={style.progressBar} animated  variant="info" now={nowNum.intermediate} label={`${nowNum.intermediate}%`} />
                  </div>
                </div>
            </div>
            <div className={style.skills}>
              <p className={style.skill__para}>Back-end</p>
              <div className={style.skill__img}>
                <div className={style.skillDesc__div}>
                  <div className={style.imgAndIcon__div}>
                    <img className={style.img} src="imgs/icon/java.png" alt="" /><p className={style.skillName}>java</p>
                  </div>
                  <div className={style.skillGraph__div}>
                    <ProgressBar className={style.progressBar} animated  variant="info" now={nowNum.middle} label={`${nowNum.middle}%`} />
                  </div>
                </div>
                <div className={style.skillDesc__div}>
                  <div className={style.imgAndIcon__div}>
                    <img className={style.img} src="imgs/icon/strtus.png" alt="" /><p className={style.skillName}>strtus</p>
                  </div>
                  <div className={style.skillGraph__div}>
                    <ProgressBar className={style.progressBar} animated  variant="info" now={nowNum.low} label={`${nowNum.low}%`} />
                  </div>
                </div>
                <div className={style.skillDesc__div}>
                  <div className={style.imgAndIcon__div}>
                    <img className={style.img} src="imgs/icon/spring.png" alt="" /><p className={style.skillName}>spring</p>
                  </div>
                  <div className={style.skillGraph__div}>
                    <ProgressBar className={style.progressBar} animated  variant="info" now={nowNum.low} label={`${nowNum.low}%`} />
                  </div>
                </div>
              </div>
            </div>
            <div className={style.skills}>
              <p className={style.skill__para}>Database</p>
              <div className={style.skillDesc__div}>
                <div className={style.imgAndIcon__div}>
                  <img className={style.img} src="imgs/icon/oracle.png" alt="" /><p className={style.skillName}>orcale</p>
                </div>
                <div className={style.skillGraph__div}>
                  <ProgressBar className={style.progressBar} animated  variant="info" now={nowNum.intermediate} label={`${nowNum.intermediate}%`} />
                </div>
              </div>
            </div>
            <div className={style.skills}>
              <p className={style.skill__para}>Etc</p>
              <div className={style.skillDesc__div}>
                  <div className={style.imgAndIcon__div}>
                  <img className={style.img} src="imgs/icon/styled-components.png" alt="" /><p className={style.skillName}>styled-components</p>
                  </div>
                  <div className={style.skillGraph__div}>
                    <ProgressBar className={style.progressBar} animated  variant="info" now={nowNum.low} label={`${nowNum.low}%`} />
                  </div>
                </div>
                <div className={style.skillDesc__div}>
                  <div className={style.imgAndIcon__div}>
                  <img className={style.img} src="imgs/icon/react-router.png" alt="" /><p className={style.skillName}>react-router</p>
                  </div>
                  <div className={style.skillGraph__div}>
                    <ProgressBar className={style.progressBar} animated  variant="info" now={nowNum.intermediate} label={`${nowNum.intermediate}%`} />
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