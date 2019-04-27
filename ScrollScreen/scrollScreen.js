import React, { Component } from 'react';
import './scrollScreen.less';

class scrollScreen extends Component {
  constructor() {
    super();
    this.state = {
      // startX: '',
      startY: '',
      // moveX:'',
      moveY: '',
      // endX: '',
      endY: '',
      allPage: 5, //一共有几页
      pageIndex: 0,
      clientHeight: ''
    };
    this.wrapOutter = React.createRef();
    this.wrapInner = React.createRef();
  }
  componentDidMount() {
    this.wrapOutter.current.addEventListener('touchmove', function (event) {
      event = event ? event : window.event;
      if (event.preventDefault) {
        event.preventDefault()
      } else {
        event.returnValue = false
      }
    }, { passive: false })
 

    this.setState({
      // clientHeight: document.body.clientHeight,
      clientHeight: this.wrapOutter.current.clientHeight
    })
  }
  componentDidUpdate() {
    // this.setState({
    //   clientHeight:document.body.clientHeight
    // })

  }
  handleTouchStart(e) {
    // e.preventDefault();
    if (!e.touches.length) {
      return;
    }

    this.setState({
      startY: e.touches[0].pageY,
      moveY: 0
    })

  }
  handleTouchMove(e) {
    if (!e.touches.length) {
      return;
    }

    let moveY = e.touches[0].pageY - this.state.startY;
    let trans = (-this.state.pageIndex * this.state.clientHeight + moveY);
    
    if (this.state.pageIndex ===0 && trans>0) {

    } else {
      this.wrapInner.current.style.cssText = `
      transition: transform 0 linear;
      -ms-transition:transform 0 linear; 
      -moz-transition:transform 0 linear; 
      -webkit-transition:transform 0 linear; 
      -o-transition:transform 0 linear; 
      
      transform:translateY(${trans}px);
      -ms-transform:translateY(${trans}px); 
      -moz-transform:translateY(${trans}px);
      -webkit-transform:translateY(${trans}px);
      -o-transform:translateY(${trans}px); 
      
      `;
      // this.wrapInner.current.style.transform = 'translateY(' + trans + 'px)'; //根据手指的位置移动页面
      this.setState({
        moveY: moveY
      })
    }

  }
  handleTouchEnd() {
    let pageIndex = this.state.pageIndex,
      allPage = this.state.allPage;
    if (this.state.moveY < -50) pageIndex++;
    if (this.state.moveY > 50) pageIndex--;
    //最后&最前页控制
    if (pageIndex < 0) pageIndex = 0;
    if (pageIndex > allPage - 1) pageIndex = allPage - 1;
    this.setState({
      pageIndex: pageIndex
    })
    //重定位


    // transition:.5s linear
    const trans = (-pageIndex * 100)
    this.wrapInner.current.style.cssText = `
    transition: transform .3s ease;
    -ms-transition:transform .3s ease; 
    -moz-transition:transform .3s ease; 
    -webkit-transition:transform .3s ease; 
    -o-transition:transform 3.s ease; 

    transform:translateY(${trans}vh);
    -ms-transform:translateY(${trans}vh); 
    -moz-transform:translateY(${trans}vh);
    -webkit-transform:translateY(${trans}vh);
    -o-transform:translateY(${trans}vh); 
    `;
    // this.wrapInner.current.style.transform = '; //根据百分比位置移动页面
    // console.log(pageIndex)
  }
  render() {
    return (
      <div className="scrollScreenWrap" ref={this.wrapOutter}>
        <div className="scrollScreenWrap2" ref={this.wrapInner}
          onTouchStart={e => this.handleTouchStart(e)}
          onTouchMove={e => this.handleTouchMove(e)}
          onTouchEnd={e => this.handleTouchEnd(e)}>

          {this.props.children}
        </div>
      </div>
    )
  }
}

export default scrollScreen;