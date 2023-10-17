import React from "react";

const Portfolio = () => {
  return(
    <div className="portfolio">
    <div className="notice">
      <p className="title sbold cl">portfolio</p>
      <p className="desc">기획, 디자인, 구현까지 모두 참여한 포트폴리오입니다.</p>
    </div>
    <div className="imac">
      <div className="imac-vesel">
        <a href="http://keepcoding.dothome.co.kr/keepcoding/main/index.php">
          <img src="img/imac-display-4p.png" alt="display" className="imac-display"/>
        </a>
        <div className="tooltip">
          <a href="/">클릭해서 홈페이지로 이동하기</a>
        </div>
        <button type="button" className="prev">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
        </button>
        <button type="button" className="next">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
        </button>
      </div>
    </div>
    <div className="information">
      <ul>
        <li>
          <p className="bold">작업 제목</p>
          <a href="" className="link">킵코딩 유저 홈페이지</a>
        </li>
        <li>
          <p className="bold">작업 단위</p>
          <p>팀프로젝트</p>
        </li>
        <li>
          <p className="bold">작업 기간</p>
          <p>2023.09.14 ~ 2023.09.25</p>
        </li>
        <li>
          <p className="bold">담당 파트</p>
          <p>메인페이지의 테스트 배너 | 테스트 | 강의 탐색 | 강의 상세보기</p>
        </li>
        <li>
          <p className="bold">사용 언어</p>
          <div className="d-flex tags">
            <span className="tag sbold">HTML</span>
            <span className="tag sbold">CSS</span>
            <span className="tag sbold">Javascript</span>
            <span className="tag sbold">Jquery</span>
            <span className="tag sbold">PHP</span>
            <span className="tag sbold">MySQL</span>
          </div>
        </li>
        <li>
          <p className="bold">사용 기타</p>
          <div className="d-flex tags">
            <span className="tag sbold">kakao.api</span>
            <span className="tag sbold">bootstrap</span>
            <span className="tag sbold">Jquery.ui</span>
            <span className="tag sbold">summernote</span>
            <span className="tag sbold">number.js</span>
          </div>
        </li>
        <li>
          <p className="bold">관련 자료</p>
          <div className="d-flex links">
            <a href="" className="link">기획,디자인,구현 pdf자료 확인하기</a>
            <a href="" className="link">깃허브</a>
          </div>
        </li>
        <li className="reivew">
          <p className="bold">요약 리뷰</p>
          <div className="reivew-content">
            <div>
              <p className="bold">기획</p>
              <p>코딩 전문 인터넷 강의 사이트를 기획, 디자인, 구현했습니다. 적성 검사를 위한 심리 테스트 구현과 kakao apI를 사용한 공유기능 구현, 데이터베이스에서 해당하는 강의의 썸네일과 설명, 강의 url을 통해 비디오를 출력했습니다.</p>
            </div>
            <div>
              <p className="bold">디자인</p>
              <p>코딩 전문 인터넷 강의 사이트를 기획, 디자인, 구현했습니다. 적성 검사를 위한 심리 테스트 구현과 kakao apI를 사용한 공유기능 구현, 데이터베이스에서 해당하는 강의의 썸네일과 설명, 강의 url을 통해 비디오를 출력했습니다.</p>
            </div>
            <div>
              <p className="bold">구현</p>
              <p>코딩 전문 인터넷 강의 사이트를 기획, 디자인, 구현했습니다. 적성 검사를 위한 심리 테스트 구현과 kakao apI를 사용한 공유기능 구현, 데이터베이스에서 해당하는 강의의 썸네일과 설명, 강의 url을 통해 비디오를 출력했습니다.</p>
            </div>
          </div>
        </li>
        
      </ul>
    </div>
  </div>
  )
}

export default Portfolio;