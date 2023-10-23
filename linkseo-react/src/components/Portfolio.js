import React, { useEffect, useRef, useState } from 'react';
import { doc, getDoc, collection, query, getDocs } from "firebase/firestore";
import db from '../firebase';

const Portfolio = ({onScroll}) => {

  //하나의 문서 가져오기
  const [currentIdx, setCurrentIdx] = useState(1);
  const [docData, setDocData] = useState({});

  const getData = async() => {
    const docRef = doc(db, "portfolio", currentIdx.toString());
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setDocData(docSnap.data());
    } else {
      
    }
  }

  //모든 문서의 id 가져오기
  const [idArr, setIdArr] = useState([]);
  const q = query(collection(db, "portfolio"));
  const getIdArr = async () => {
    const querySnapshot = await getDocs(q);
    let newArr = [];
    querySnapshot.forEach((doc) => {
      newArr.push(doc.id);
    });
    setIdArr(newArr);
  }
  
  
  //next 버튼을 클릭하면 할일
  const next = (e) => {
    if (currentIdx < 5) {
      setCurrentIdx(currentIdx + 1);
    }
  }

  //prev 버튼을 클릭하면 할일
  const prev = (e) => {
    if (currentIdx > 1) {
      setCurrentIdx(currentIdx - 1);
    }
  }

  const btnOff = (btn) => {
    btn.current.style.opacity = 0.2;
  }
  const btnOn = (btn) => {
    btn.current.style.opacity = 1;
  }

  const prevBtn = useRef(null);
  const nextBtn = useRef(null);

  //스크롤 이벤트
  const myElement = useRef(null);

  useEffect(() => {
    // 컴포넌트가 마운트된 후에 offsetTop 값을 확인
    onScroll(myElement.current.offsetTop);
    getData();
    getIdArr();
    if (currentIdx === 1) {
      btnOff(prevBtn);
    } else {
      btnOn(prevBtn);
    }
    if (currentIdx === 5) {
      btnOff(nextBtn);
    } else {
      btnOn(nextBtn);
    }
  }, [currentIdx]);





  return(
    <div className="portfolio" ref={myElement} >
    <div className="notice">
      <p className="title sbold cl">portfolio</p>
      <p className="desc">기획, 디자인, 구현까지 모두 참여한 포트폴리오입니다.</p>
    </div>
    <div className="imac">
        <a href={docData.link} target='_blank'>
          <img src={`img/portfolio-${currentIdx}.png`} alt="display" className="imac-display"/>
        </a>
        <div className="tooltip">
          <a href="/">화면을 클릭해서 홈페이지로 이동하기</a>
        </div>
        <button type="button" className="prev" onClick={prev} ref={prevBtn}>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
        </button>
        <button type="button" className="next" onClick={next} ref={nextBtn}>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
        </button>
    </div>
    <div className="information">
      <ul>
        <li>
          <p className="bold">작업 제목</p>
            <a href={docData.link} className="link" target='_blank'>{docData.title}</a>
        </li>
        <li>
          <p className="bold">작업 단위</p>
          <p>{docData.unit}</p>
        </li>
        <li>
          <p className="bold">작업 기간</p>
          <p>{docData.date}</p>
        </li>
        <li>
          <p className="bold">담당 파트</p>
          <p>{docData.part}</p>
        </li>
        <li>
          <p className="bold">사용 언어</p>
            <div className="d-flex tags">
              { docData.lang &&
                docData.lang.map(item =>
                <span className="tag sbold" key={item}>{item}</span>
              )}
          </div>
        </li>
        <li>
          <p className="bold">사용 기타</p>
            <div className="d-flex tags">
              { docData.etc &&
                docData.etc.map(item =>
                <span className="tag sbold" key={item}>{item}</span>
              )}
          </div>
        </li>
        <li>
          <p className="bold">관련 자료</p>
          <div className="d-flex links">
            <a href={docData.docs} className="link" target='_blank'>기획,디자인,구현 pdf자료 확인하기</a>
            <a href={docData.github} className="link" target='_blank'>깃허브</a>
          </div>
        </li>
        <li className="reivew">
          <p className="bold">요약 리뷰</p>
          <div className="reivew-content">
            <div>
              <p className="bold">기획</p>
              <p>{docData.plan}</p>
            </div>
            <div>
              <p className="bold">디자인</p>
              <p>{docData.design}</p>
            </div>
            <div>
              <p className="bold">구현</p>
              <p>{docData.code}</p>
            </div>
          </div>
        </li>
        
      </ul>
    </div>
  </div>
  )
}

export default Portfolio;