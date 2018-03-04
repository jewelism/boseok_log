import React from 'react';

import ProgressBar from '../Common/ProgressBar'
import { skills } from '../../constants'
import './AboutPage.css'

function About() {
  return (
    <div className="about-container">
      <div className="about-name">Jung Boseok</div>
      <div className="about-job">Front-End Developer</div>
      <div className="about-row">
        <div className="about-left-wrapper">
          <div className="about-subtitle">Contact</div>
          boseokjung@gmail.com<br />
          010-8685-2005<br />
          <a href="https://github.com/jewelism">https://github.com/jewelism</a>
          서울시 구로구
        </div>
        <div className="about-right-wrapper">
          <div className="about-subtitle">Education</div>
          강서고등학교<br />
          성공회대학교<br />
          소프트웨어공학 전공<br />
          2018년 8월 졸업 예정
        </div>
      </div>
      <div className="about-graph-wrapper">
        <span className="about-subtitle">Skills</span>
        {skills.map((s, index) => {
          return (
            <div className="about-graph-item" key={index}>
              <span className="about-skill-name">{s.name}</span>
              <span className="about-skill-bar">
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