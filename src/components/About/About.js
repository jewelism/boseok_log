import React from 'react'

import ProgressBar from '../Common/ProgressBar'
import { SKILLS } from '../../constants'

import './AboutPage.css'
import './AboutPage4m.css'

function About(props) {
  const className = props.className || ''
  return (
    <div className={`about${className}-container`}>
      <div className={`about${className}-name`}>Jung Boseok</div>
      <div className={`about${className}-job`}>Front-End Developer</div>
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
          )
        })}
      </div>
    </div>
  )
}

export default About