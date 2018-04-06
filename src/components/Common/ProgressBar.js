import React, { Component } from 'react'

import styled, { keyframes } from 'styled-components';

import ProgressImg from '../../assets/images/progress.gif';

class ProgressBar extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.percentage !== this.props.percentage;
  }

  render() {
    const { percentage } = this.props;
    const Container = styled.div`
    width: 100%;
    height: 20px;
    background-color: #eee;
    padding: 2px;
    margin: .6em 0;
    border: 1px #000 double;
    clear: both;
  `;
    const Pbaranim = styled.div`
    height: 20px;
    width: 100%;
    overflow: hidden;
    /* background: url('http://www.cssdeck.com/uploads/media/items/7/7uo1osj.gif') repeat-x; */
    background: url(${ProgressImg}) repeat-x;
    -moz-opacity: 0.25;
    -khtml-opacity: 0.25;
    opacity: 0.25;
    -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=25);
    filter: progid:DXImageTransform.Microsoft.Alpha(opacity=25);
    filter: alpha(opacity=25);
    z-index:10;
  `;
    const percent = percentage || 1;

    const animationName = keyframes`
    from { }
    to { width: ${percent}% }
  `;
    const second = 4;
    const animation = `${animationName} ${second}s 1 forwards;`;
    const Progress = styled.div`
    background: rgba(114, 212, 255, 0.7); /*-- Color of the bar --*/
    height: 20px;
    width: 0%;
    max-width: 100%;
    float: left;
    -webkit-animation: ${animation}
    -moz-animation: ${animation}
    -ms-animation: ${animation}
    animation: ${animation}
  `;
    return (
      <Container>
        <Progress>
          <Pbaranim />
        </Progress>
      </Container>
    );
  }
}

export default ProgressBar