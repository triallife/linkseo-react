import React, { useEffect, useState  } from 'react';
import Menu from "./Menu";
import Portfolio from "./Portfolio";

const Main = () => {

 
  const [device, setDeVice] = useState('');

  //디바이스 체크

  let EiwafDevice = {
    TYPE_DESKTOP: "desktop",
    TYPE_PHONE: "phone",
    TYPE_TABLET: "tablet",
    agent: {
     mobile: (/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/i.test(window.navigator.userAgent)),
     tablet: (/iPad|tablet/i.test(window.navigator.userAgent))
    },
    detect: function () {
     if (this.type) {
      return;
     }
     if (this.agent.mobile) {
      var userAgent = navigator.userAgent.toLowerCase();
      if (userAgent.search("android") > -1) {
       if (userAgent.search("mobile") == -1) {
        this.type = this.TYPE_TABLET;
       }
      }
      if (!this.type) {
       this.type = this.TYPE_PHONE;
      }
     }
     if (this.agent.tablet) {
      this.type = this.TYPE_TABLET;
     }
     if (!this.type) {
      this.type = this.TYPE_DESKTOP;
     }
    }
   };

   useEffect(()=>{
    EiwafDevice.detect();
    setDeVice(EiwafDevice.type);
     console.log(device);
   },[]);

   //먼지 사진 슬라이드
  let img = document.querySelector('.meonji img');
  let imgAmt = 8;
  let currentIdx = 0;

  // const changeImg = (idx,imgsrc)=>{
  //   imgsrc.setAttribute('src',`img/m/m${idx}.JPG`);
  //   currentIdx = idx;
  // }

  // const auto = ()=>{
  //   setInterval(()=>{
  //     let nextIdx = (currentIdx + 1) % imgAmt;
  //     changeImg(nextIdx,img);
  //   }, 3000);
  // }

  // auto(currentIdx);

  //포트폴리오 스크롤 이벤트
  const [scroll, setScroll] = useState(0);
  console.log(scroll);


  return(
    <>
      <div className="container pd">
        <div className="main">
          <div className="background-container"></div>
          <div className="main-board">
            <div className="notice">
              <p className="title sbold cl">home</p>
              <p className="desc">linkseo의 포트폴리오 페이지입니다</p>
              {device === 'desktop' ?
                (
                  <p className="desc notice-desktop">하단 doc bar의 <span className="sbold pc-orange">앱 이름</span>을 클릭하면 해당 정보를 확인, <span className="sbold pc-blue">앱 아이콘</span>을 드래그앤 드롭해서 배치할 수 있습니다</p>
                )
                :
                (
                  <p className="desc notice-tablet-mobile">하단 doc bar의 <span className="sbold pc-orange">앱 아이콘 혹은 이름</span>을 클릭하면 해당 정보를 확인할 수 있습니다</p>
                )
              }
            </div>
            <div className="notice meonji">
              <div className="img-container-meonji">
                <img src="/img/m/m1.JPG" alt="고슴도치 사진"/>
              </div>
            </div>
          </div>
        </div>
        <Portfolio onScroll={(val)=>{setScroll(val)}} />
      </div>

      <Menu device={device} scroll={scroll} />
    </>
  )
}

export default Main;