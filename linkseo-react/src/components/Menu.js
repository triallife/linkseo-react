import React, { useState } from 'react';

const Menu = (props) => {
  console.log(props.scroll);
  //props로 넘어온 속성: device
  const moveTo = () => {   
    window.scrollTo({ top: props.scroll, behavior: 'smooth' });
  }
  //모달 뒷배경 스위치
  const [modalSwitch, setModalSwitch] = useState(false);

  //모달 열기
  const openModal = (e)=>{
    console.log(e.target);
    let data = e.target.parentNode.getAttribute('data-modal');
    let modal = document.querySelector(`${data}`);
    console.log(modal);
    modal.setAttribute('open','open');
    // modal.classList.add('active');
    if(modal.classList.contains('big-modal')){
      modal.style.display = 'flex';
    }
    setModalSwitch(true);
  }

  //태블릿,모바일일때 앱 아이콘을 클릭해도 모달 열기
  const openModalTP = (e)=>{
    if(props.device != 'desktop'){
      console.log(e.currentTarget);
      let data = e.currentTarget.getAttribute('data-modal');
      let modal = document.querySelector(data);
      modal.setAttribute('open','open');
      // modal.classList.add('active');
      setModalSwitch(true);
      view();
    }
  }


  //모달 닫기
  const closeModal = (e)=>{
    let data = e.target.getAttribute('data-modal');
    let modal = document.querySelector(data);
    modal.removeAttribute("open");
    if(modal.classList.contains('big-modal')){
      modal.style.display = 'none';
    }
    setModalSwitch(false);
  }

  //인트로 1 사라짐
  const view = (e)=>{
    let intro = document.querySelector('#intro')
    intro.classList.remove('unview');
  }

  //modalOff 클릭시 모든 모달 닫기
  const closeAll = (e)=>{
    let modal =  document.querySelectorAll('.modal');
    let bigModal = document.querySelectorAll('.big-modal');
    modal.forEach(function(item){
      item.removeAttribute("open");
    })
    bigModal.forEach(function(item){
      item.removeAttribute("open");
      item.style.display = 'none';
    })
    setModalSwitch(false);
  }

  //카테고리별 보기

  let list = document.querySelectorAll('.content-group.list');
  let tags = document.querySelectorAll('.content-group.tags');

  const showCate = (e,whichObject)=>{
    let idx = e.currentTarget.getAttribute('data-idx');
    if(idx > 0){
      whichObject.forEach(li=>{
        li.style.display = 'none';
      })
      whichObject[idx - 1].style.display = 'block';
    }else{
      console.log('모두보기');
      whichObject.forEach(li=>{
        li.style.display = 'block';
      })
    }
  }
  
  //드래그앤드롭

  let app = document.querySelectorAll(".app img");
  app.forEach(function(item){
    item.ondragstart = function() {
      return false;
    };
  })

  let isDragging = false; // 드래그 중인지 여부를 나타내는 플래그

  if(props.device === 'desktop'){ //데스크탑에서만 드래그앤드롭 실행
    app.forEach(function(item){
      item.onmousedown = function(event) {
        let target = item.parentNode;
        console.log(target);
        // (1) absolute 속성과 zIndex 프로퍼티를 수정해 공이 제일 위에서 움직이기 위한 준비를 합니다.
        target.style.position = 'absolute';
        target.style.zIndex = 30;
      
        // 현재 위치한 부모에서 body로 직접 이동하여
        // body를 기준으로 위치를 지정합니다.
        document.querySelector('.main').append(target);
      
        // 공을 pageX, pageY 좌표 중앙에 위치하게 합니다.
        function moveAt(pageX, pageY) {
          target.style.left = pageX - target.offsetWidth / 2 + 'px';
          target.style.top = pageY - target.offsetHeight / 2 + 'px';
        }
      
        // 포인터 아래로 공을 이동시킵니다.
        moveAt(event.pageX, event.pageY);
      
        function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);
        }
      
        // (2) 드래그 중인지 여부를 설정하고, mousemove 이벤트를 등록합니다.
        isDragging = true;
        document.addEventListener('mousemove', onMouseMove);
        // // (2) mousemove로 공을 움직입니다.
        // document.addEventListener('mousemove', onMouseMove);
      
        // (3) 공을 드롭하고, 불필요한 핸들러를 제거합니다.
        target.onmouseup = function() {
          isDragging = false; // 드래그 종료
          document.removeEventListener('mousemove', onMouseMove);
          target.onmouseup = null;
        };
    
        target.onclick = function(event) {
          if (!isDragging) { // 드래그 중이 아닐 때에만 링크 이동
            return true; // 링크 이동을 허용합니다.
          } else {
            event.preventDefault(); // 드래그 중일 때는 링크 이동을 막습니다.
          }
        };
      
      };
    })
  }

  return(
    <>
      <div className="menu">
        <div className="container d-flex">
          <div className="app unview" data-modal="#modal1" id="intro" onClick={openModalTP}>
            <img src="img/mail.png" alt="mail icon"/>
            <p className="app-name openModal" onClick={(e)=>{openModal(e);view(e);}}>intro</p>
          </div>
          <div className="app" data-modal="#modal2">
            <img src="img/memo.png" alt="mail icon"/>
            <p className="app-name openModal" onClick={openModal}>greetings</p>
          </div>
          <div className="app" data-modal="#modal3">
            <img src="img/link.png" alt="mail icon"/>
            <p className="app-name openModal" onClick={openModal}>link</p>
          </div>
          <div className="app" data-modal="#modal4">
            <img src="img/front.png" alt="mail icon"/>
            <p className="app-name openModal" onClick={openModal}>front</p>
          </div>
          <div className="app" data-modal="#modal5">
            <img src="img/design.png" alt="mail icon"/>
            <p className="app-name openModal" onClick={openModal}>design</p>
          </div>
          <div className="app" data-modal="#modal6">
            <img src="img/likes.png" alt="mail icon"/>
            <p className="app-name openModal" onClick={openModal}>likes</p>
          </div>
          <div className="app" data-modal="#modal7">
            <img src="img/folder.png" alt="mail icon"/>
            <p className="app-name  openBigModal" onClick={openModal}>about</p>
          </div>
          <div className="app" data-modal="#modal8">
            <img src="img/folder.png" alt="mail icon"/>
            <p className="app-name  openBigModal" onClick={openModal}>skill</p>
          </div>
          <div className="app" data-modal="#modal9">
            <img src="img/iphone.png" alt="mail icon"/>
            <p className="app-name  openModal" onClick={openModal}>contact</p>
          </div>
          <div className="app">
            <img src="img/imac.png" alt="mail icon"/>
            <p className="app-name" id="portfolio" onClick={moveTo}>portfolio</p>
          </div>
        </div>
      </div>

      <div
        className="modal-off"
        style={{display: modalSwitch ? "block":"none", opacity: modalSwitch ? "1":"0"}}
        onClick={closeAll}
      >
      </div>

      <dialog className="modal" id="modal1">
        <div className="modal-top">
          <button className="closeModal" data-modal="#modal1" onClick={closeModal}></button>
          <h3 className="sbold">intro</h3>
        </div>
        <article className="modal-content">
          <img src="img/Light Bulb.png" alt="Light BulbLight Bulb"/>
          <h4>홈페이지 이용 방법</h4>
          <div className="img-container">
            <img src="img/app.png" alt="app" className="exampleImg"/>
            <img src="img/desktop.png" alt="app" className="exampleImg"/>
          </div>
          { props.device === 'desktop' ? //디바이스 종류에 따라 다른 내용 표시
              (
                <div className="notice-desktop">
                <h5>데스크탑으로 이용중입니다</h5>
                <p>앱 아이콘을 드래그앤 드롭해서 배경화면에 앱을 배치하는 것처럼 화면에 배치할 수 있습니다.</p>
                <p>앱 이름을 클릭하면 모달창에서 해당 내용을 확인할 수 있습니다.</p>
                <h5>앱에서 확인 가능한 내용</h5>
                <p><span className="sbold">greetings:</span> 소개</p>
                <p><span className="sbold">link:</span> 가치관</p>
                <p><span className="sbold">front:</span> 개발관련 표시 색상 안내</p>
                <p><span className="sbold">design:</span> 디자인 관련 표시 색상 안내</p>
                <p><span className="sbold">likes:</span> 취미, 취향 등</p>
                <p><span className="sbold">about:</span> 교육, 학력, 경력, 연락처</p>
                <p><span className="sbold">contact:</span> 연락처</p>
                <p><span className="sbold">portfolio:</span> 포트폴리오</p>
                </div>
              )
            :
              (
                <div className="notice-tablet-mobile">
                  <h5>태블릿, 모바일으로 이용중입니다</h5>
                  <p>앱 아이콘과 이름을 클릭하면 모달창에서 해당 내용을 확인할 수 있습니다.</p>
                  <h5>앱에서 확인 가능한 내용</h5>
                  <p><span className="sbold">greetings:</span> 소개</p>
                  <p><span className="sbold">link:</span> 가치관</p>
                  <p><span className="sbold">front:</span> 개발관련 표시 색상 안내</p>
                  <p><span className="sbold">design:</span> 디자인 관련 표시 색상 안내</p>
                  <p><span className="sbold">likes:</span> 취미, 취향 등</p>
                  <p><span className="sbold">about:</span> 교육, 학력, 경력, 연락처</p>
                  <p><span className="sbold">contact:</span> 연락처</p>
                  <p><span className="sbold">portfolio:</span> 포트폴리오</p>
                </div>
              )
          }
        </article>
      </dialog>
      <dialog className="modal" id="modal2">
        <div className="modal-top">
          <button className="closeModal" data-modal="#modal2" onClick={closeModal}></button>
          <h3 className="sbold">greetings</h3>
        </div>
        <article className="modal-content">
          <img src="img/smile.png" alt="smile imoji"/>
          <h4>소개</h4>
          <p>프론트엔드 개발자로써의 제  장점은 <span className='sbold pc-blue'>소통</span>입니다. 프론트엔드 개발자는 화면 앞단을 통해서는 유저와 소통해야하고, 뒤로는 백엔드 개발자와 소통해야하는 직업이라고 생각합니다. 저는 디자이너라는 경력을 쌓는 과정에서 앞으로는 소비자, 홈페이지 유저와, 뒤로는 제작자, 공장, 동료 직원들과 소통해왔습니다. </p>
          <p>이 경험을 살려 디자이너의 언어를 보다 잘 이해하고, 개발 팀프로젝트를 진행한 경험으로 동료들의 언어를 이해하여 <span className='sbold pc-blue'>중간지대의 역할을 훌륭히 수행해 내는 개발자</span>가 되고자 합니다.</p>
        </article>
	    </dialog>
      <dialog className="modal" id="modal3">
        <div className="modal-top">
          <button className="closeModal" data-modal="#modal3" onClick={closeModal}></button>
          <h3 className="sbold">link</h3>
        </div>
        <article className="modal-content">
          <img src="img/link.png" alt="link"/>
          <h4>연결의 가치를 믿습니다</h4>
          <p>저에게 연결의 의미는 소통 그 이상입니다. 나 자신을 객관화하고, 인정하고, 타인을 인정하고, 존중하고, 서로의 거리낌이 없도록 서로 노력하는 것, 그것이 진정한 연결이라고 생각합니다.</p>
          <p>명확성과 열린 마음은 서로 상반된 가치지만 연결을 위해 꼭 필요한 두가지 개념이라고 생각합니다. 저는 이 두가지를 통해  나와  타인, 나와 세상을 연결짓고자 합니다.</p>
        </article>
      </dialog>
      <dialog className="modal" id="modal4">
        <div className="modal-top">
          <button className="closeModal" data-modal="#modal4" onClick={closeModal}></button>
          <h3 className="sbold">front</h3>
        </div>
        <article className="modal-content">
          <img src="img/front.png" alt="front"/>
          <h4>개발</h4>
          <p>프론트엔드 개발자를 지망합니다.</p>
          <p>홈페이지의 about, skill의 개발 관련 사항은 <span className="pc-blue">#2B80FF</span> 색상으로 표시했습니다.</p>
        </article>
      </dialog>
      <dialog className="modal" id="modal5">
        <div className="modal-top">
          <button className="closeModal" data-modal="#modal5" onClick={closeModal}></button>
          <h3 className="sbold">design</h3>
        </div>
        <article className="modal-content">
          <img src="img/design.png" alt="design"/>
          <h4>디자인</h4>
          <p>저는 디자인 경력을 가지고 있습니다.</p>
          <p>홈페이지의 about, skill의 디자인 관련 사항은 <span className="pc-orange">#FF7A00</span> 색상으로 표시했습니다.</p>
        </article>
      </dialog>
      <dialog className="modal" id="modal6">
        <div className="modal-top">
          <button className="closeModal" data-modal="#modal6" onClick={closeModal}></button>
          <h3 className="sbold">likes</h3>
        </div>
        <article className="modal-content">
          <img src="img/likes.png" alt="design"/>
          <h4>사랑하는 것들</h4>
          <p>쉬는 날에는 그림을 그리거나, 직접 찍은 유투브 동영상을 편집하거나, 귀여운 동물들의 영상을 보거나, 게임을 하거나, 책을 읽습니다.</p>
          <p>카페, 맛집, 소품샵을 탐방하는 것도 좋아합니다. 아름다운 것을 감상하고 찾는 것은 저에게 큰 영감과 에너지를 줍니다.</p>
          <p>소중한 사람들과 보내는 시간과 혼자서 보내는 고요한 시간 모두 사랑합니다.</p>
        </article>
      </dialog>

      <dialog className="big-modal" id="modal7">
        <div className="modal-left">
          <button className="close-big-Modal" data-modal="#modal7" onClick={closeModal}></button>
          <ul>
            <li className="cate1" data-idx="0" onClick={(e)=>{showCate(e,list)}}>
              <img src="img/docs.png" alt="docs icon"/>
              <p>모두보기</p>
            </li>
            <li className="cate1" data-idx="1" onClick={(e)=>{showCate(e,list)}}>
              <img src="img/docs.png" alt="docs icon"/>
              <p>교육</p>
            </li>
            <li className="cate1" data-idx="2" onClick={(e)=>{showCate(e,list)}}>
              <img src="img/docs.png" alt="docs icon"/>
              <p>학력</p>
            </li>
            <li className="cate1" data-idx="3" onClick={(e)=>{showCate(e,list)}}>
              <img src="img/docs.png" alt="docs icon"/>
              <p>경력</p>
            </li>
            <li className="cate1" data-idx="4" onClick={(e)=>{showCate(e,list)}}>
              <img src="img/docs.png" alt="docs icon"/>
              <p>연락</p>
            </li>
          </ul>
        </div>
        <div className="modal-right">
          <div className="modal-right-title d-flex">
            <img src="img/list.png" alt="list icon"/>
            <h3 className="cl">about me</h3>
          </div>
          <div className="modal-right-content">
            <div className="content-group list" data-idx="1">
              <h4>교육</h4>
              <ul>
                <li className="hover-blue">
                  <span className="desc">웹디자인(웹퍼블리셔)&프론트엔드 SW개발자 양성</span>
                  <span className="time">2023.05 ~ 2023.10</span>
                </li>
              </ul>
            </div>
            <div className="content-group list" data-idx="2">
              <h4>학력</h4>
              <ul>
                <li className="hover-orange">
                  <span className="desc">홍익대학교 금속조형디자인과 졸업</span>
                  <span className="time">2015.03 ~ 2020.02</span>
                </li>
                <li className="hover-orange">
                  <span className="desc">고양 예술고등학교 미술과 디자인 졸업</span>
                  <span className="time">2012.03 ~ 2015.02</span>
                </li>
              </ul>
            </div>
            <div className="content-group list" data-idx="3">
              <h4>경력</h4>
              <ul>
                <li className="hover-orange">
                  <span className="desc">로마네 디자이너 근무</span>
                  <span className="time">2022.04 ~ 2023.05</span>
                </li>
                <li className="hover-orange">
                  <span className="desc">아르디움 디자이너 근무</span>
                  <span className="time">2021.07 ~ 2022.02</span>
                </li>
                <li className="hover-orange">
                  <span className="desc">띵크포 사업</span>
                  <span className="time">2020.09 ~ 2021.05</span>
                </li>
              </ul>
            </div>
            <div className="content-group list" data-idx="4">
              <div className="d-flex list">
                <h4>연락</h4>
              </div>
              <ul>
                <li>
                  <span className="desc">imlinkseo@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
	    </dialog>
      <dialog className="big-modal" id="modal8">
        <div className="modal-left">
          <button className="close-big-Modal" data-modal="#modal8" onClick={closeModal}></button>
          <ul>
            <li className="cate2" data-idx="0" onClick={(e)=>{showCate(e,tags)}}>
              <img src="img/docs.png" alt="docs icon"/>
              <p>모두보기</p>
            </li>
            <li className="cate2" data-idx="1" onClick={(e)=>{showCate(e,tags)}}>
              <img src="img/docs.png" alt="docs icon"/>
              <p>개발 언어</p>
            </li>
            <li className="cate2" data-idx="2" onClick={(e)=>{showCate(e,tags)}}>
              <img src="img/docs.png" alt="docs icon"/>
              <p>개발 기타</p>
            </li>
            <li className="cate2" data-idx="3" onClick={(e)=>{showCate(e,tags)}}>
              <img src="img/docs.png" alt="docs icon"/>
              <p>디자인 툴</p>
            </li>
          </ul>
        </div>
        <div className="modal-right">
          <div className="modal-right-title d-flex">
            <img src="img/list.png" alt="list icon"/>
            <h3 className="cl">skill</h3>
          </div>
          <div className="modal-right-content">
            <div className="content-group tags" data-idx="0">
              <h4 className="hover-blue">개발 언어</h4>
              <ul>
                <li>
                  <span className="tag sbold">HTML</span>
                  <span className="tag sbold">CSS</span>
                  <span className="tag sbold">SCSS</span>
                  <span className="tag sbold">SASS</span>
                  <span className="tag sbold">LESS</span>
                  <span className="tag sbold">Javascript</span>
                  <span className="tag sbold">Jquery</span>
                  <span className="tag sbold">PHP</span>
                  <span className="tag sbold">MySQL</span>
                  <span className="tag sbold">React</span>
                  <span className="tag sbold">View</span>
                </li>
              </ul>
            </div>
            <div className="content-group tags" data-idx="1">
              <h4 className="hover-blue">개발 기타</h4>
              <ul>
                <li>
                  <span className="tag sbold">Bootstrap</span>
                  <span className="tag sbold">Firebase</span>
                  <span className="tag sbold">Redux</span>
                  <span className="tag sbold">AWS</span>
                  <span className="tag sbold">VS code</span>
                  <span className="tag sbold">Github</span>
                </li>
              </ul>
            </div>
            <div className="content-group tags" data-idx="2">
              <h4 className="hover-orange">디자인 툴</h4>
              <ul>
                <li>
                  <span className="tag sbold">Illustrator</span>
                  <span className="tag sbold">Figma</span>
                  <span className="tag sbold">Photoshop</span>
                  <span className="tag sbold">Indesign</span>
                  <span className="tag sbold">Premier Pro</span>
                  <span className="tag sbold">Pro create</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </dialog>
      
      <dialog className="modal" id="modal9">
        <div className="modal-content.contact">
            <div className="frame">
              <img src="img/iphone-display.png" alt="iphone-display" className="display"/>
              <div className="messages">
                <div className="contact-message left">
                  <p>이쪽으로 연락 부탁드립니다</p>
                  <a href="mailto:imlinkseo@gmail.com">imlinkseo@gmail.com</a>
                  <p>010-7708-0949</p>
                </div>
                <div className="contact-message right">
                  <p>이메일 주소를 클릭하면 작성을 시작합니다</p>
                  <p className="closeModal" data-modal="#modal9" onClick={closeModal}>닫기</p>
                </div>
              </div>
            </div>
        </div>
      </dialog>

    </>
  )
}

export default Menu;