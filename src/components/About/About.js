import React from 'react';

import ProgressBar from '../Common/ProgressBar';

import './AboutPage.css';
import './AboutPage4m.css';

function About(props) {
  const SKILLS = [
    { name: 'HTML', per: 75 },
    { name: 'CSS', per: 60 },
    { name: 'Javascript', per: 90 },
    { name: 'react.js', per: 85 },
    { name: 'RN', per: 87 },
    { name: 'vue.js', per: 80 },
    { name: 'node.js', per: 75 },
    { name: 'Java', per: 80 },
    { name: 'Spring', per: 70 },
  ]

  const className = props.className || '';
  return (
    <div className={`about${className}-container`}>
      <div className={`about${className}-name`}>Jung Boseok</div>
      <div className={`about${className}-job`}>Javascript Engineer</div>
      <div className={`about${className}-row`}>
        <div className={`about${className}-left-wrapper`}>
          <div className={`about${className}-subtitle`}>Contact</div>
          boseokjung@gmail.com<br />
          010-8685-2005<br />
          <a href="https://github.com/jewelism">https://github.com/jewelism</a>
          서울시 구로구
        </div>
        <div className={`about${className}-right-wrapper`}>
          <div className={`about${className}-subtitle`}>Education</div>
          강서고등학교<br />
          성공회대학교<br />
          소프트웨어공학 전공<br />
          2018년 8월 졸업 예정
        </div>
      </div>
      <div className={`about${className}-graph-wrapper`}>
        <span className={`about${className}-subtitle`}>Skills</span>
        {SKILLS.map((s, index) => {
          return (
            <div className={`about${className}-graph-item`} key={index}>
              <span className={`about${className}-skill-name`}>{s.name}</span>
              <span className={`about${className}-skill-bar`}>
                <ProgressBar percentage={s.per} index={index} />
              </span>
            </div>
          );
        })}
      </div>
      <div className={`about${className}-graph-wrapper`}>
        <div className={`about${className}-subtitle`}>Experience</div>
        <div>2017.10.23 ~ 2017.12.22</div>
        <div>스타트업 인턴</div>
        <div>react-native 모바일 개발</div>
        <br />
        <div>2018.05.02 ~</div>
        <div>스마일게이트 인턴</div>
        <div>vue.js 웹프론트 개발</div>
      </div>
      <div className={`about${className}-graph-wrapper`}>
        <div className={`about${className}-subtitle`}>Interest in..</div>
        <div>
          <p>
            Java를 시작으로 spring과 mybatis jpa ORM을 공부<br />
            rest api를 구현해보며 api에 대한 이해도↑<br />
            react.js로 플젝하며 프론트 입문<br />
            백엔드보다 프론트에 관심이 많아짐<br />
          </p>
          <p>
            프론트와 백엔드, 인프라까지 모두 혼자 작업하며<br />
            각 파트에 대한 이해도↑<br />
            aws, gcp, ncp의 인스턴스에 nginx를 올리고,<br />
            가비아 서비스를 이용해서 도메인을 구입하고<br />
            https를 설정하고 nodejs 백엔드를 pm2로 관리<br />
            하고 있는 웹이 현재 보고 계시는 boseok.me 입니다 ^^;<br />
          </p>
          <p>
            개발자라면 모바일앱정도는 개발해봐야지!라는 생각과 때마침 지인이 요청하여 react native로 모바일앱 개발<br />
            <a href="https://play.google.com/store/apps/details?id=com.project_fiora">https://play.google.com/store/apps/details?id=com.project_fiora</a><br />
            이렇게 구현한 프로젝트 기반으로 스타트업에서 인턴경험
          </p>
          <p>
            react, vue 위주의 frontend 공부를 하다가
            너무 빠르게 js 생태계가 변하는 것을 느끼고,
            프로젝트 성격에 맞춰서 프론트 프레임워크를 골라야 하는점,
            한가지 프레임워크를 집중적으로 공부하는것에 대한 한계를 느끼고
            프론트 프레임워크보다는 rxjs와 같은.. 어떤 프레임워크나 라이브러리에
            적용할수있는.. 함수형 라이브러리에 관심이 많음<br />
            PWA에 큰 관심이 있음. 기회가 되면 꼭 구현해 볼 것<br/>
          </p>
          <p>
            시간이 허락한다면 사내에서 혹은 오픈소스로 유용하게
            사용하는 라이브러리를 개발하고싶음<br />
            단순 개발자가 아닌, 엔지니어가 되는게 목표<br />
            꼭 프론트가 아니더라도..<br/>
            js 언어 자체를 좋아하기때문에,<br/>
            스택을 가리지않음.<br/>
            그 예로.. express, react, vue, react-native 경험<br/>
            typescript가 좋다는 경력자의 조언을 듣고 typescript에 대한 관심이 있고 실제로 도입을 생각중..<br/>
            성능 최적화에 당연히 관심이 많음.<br/>
            특히 프론트에서 성능이 중요한 부분이라고 생각됨.<br/>
            사용자마다 성능이 다양한 하드웨어를 사용하기때문에.. 하드웨어에 관계없이 최적화 된 ux를 원함<br/>
            성능이 나쁜 디바이스에서도 서비스 사용에 불편함이 없어야한다고 생각함.<br/>
            최소한의 변수, 클로저의 사용. react같은 경우에 렌더링하는 조건을 설정하는 등..<br/>
            여러가지 방법들을 연구하고 도입함
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;