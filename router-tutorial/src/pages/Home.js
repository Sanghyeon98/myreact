import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>가장 먼저 보여지는 페이지 입니다.</p>

      <ul>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/velopert">상현</Link>
        </li>
        <li>
          <Link to="/profile/gildong">한재</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
