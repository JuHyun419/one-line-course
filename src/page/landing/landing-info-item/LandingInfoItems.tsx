import React from "react";
import LandingInfoItem from "./LandingInfoItem";

import "./_LandingInfoItem.scss";

const LandingInfoItems = () => {
  return (
    <div className="landing-info-items">
      <LandingInfoItem>
        <p>키워드로 주요 사이트들의 모든 온라인 강의들을 찾으세요!</p>
        <div className="keywords">
          <div>웹 프론트 엔드</div>
          <div>Javascript</div>
          <div>C++</div>
          <div>Go</div>
          <div>...</div>
        </div>
      </LandingInfoItem>

      <LandingInfoItem>
        <p>키워드로 주요 사이트들의 모든 온라인 강의들을 찾으세요!</p>
        <div className="logos">
          {/* <img src="" alt="udemy-logo" /> */}
          {/* <img src="" alt="inflearn-logo" /> */}
          {/* <img src="" alt="youtube-logo" /> */}
          {/* <img src="" alt="goormEdu-logo" /> */}
        </div>
        <p>
          10 개 이상의 주요 온라인 강의 & 비디오 플랫폼이 당신을 기다립니다!
        </p>
      </LandingInfoItem>

      <LandingInfoItem>
        <p>당신만의 키워드를 조합해서 검색하세요!</p>
        {/* <img src="" alt="keyword-example" /> */}
      </LandingInfoItem>

      <LandingInfoItem>
        <p>다른 이용자들과 평가를 공유하세요!</p>
        {/* <img src="" alt="comment-example" /> */}
      </LandingInfoItem>
    </div>
  );
};

export default LandingInfoItems;
